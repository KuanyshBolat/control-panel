"use client"

import { useState, useCallback } from "react"
import type { Device } from "@/lib/devices"
import { API_BASE, sections } from "@/lib/devices"

export function useDeviceControl() {
  const [deviceStates, setDeviceStates] = useState<Record<string, boolean>>({})
  const [loadingDevices, setLoadingDevices] = useState<Record<string, boolean>>({})

  const totalDevices = sections.reduce(
    (acc, section) => acc + section.devices.filter((d) => !d.disabled).length,
    0
  )

  const activeDevices = Object.values(deviceStates).filter(Boolean).length
  const inactiveDevices = totalDevices - activeDevices

  const toggleDevice = useCallback(async (device: Device, checked: boolean) => {
    if (device.disabled) return

    setLoadingDevices((prev) => ({ ...prev, [device.id]: true }))

    const value = device.type === "well" ? (checked ? 100 : 0) : (checked ? 1 : 0)
    const url = `${API_BASE}/set/${device.address1}/${device.address2}/${value}`

    try {
      await fetch(url, { method: "GET", mode: "no-cors" })
      setDeviceStates((prev) => ({ ...prev, [device.id]: checked }))
    } catch (error) {
      console.error("Ошибка:", error)
      alert("Ошибка подключения к устройству")
    } finally {
      setLoadingDevices((prev) => ({ ...prev, [device.id]: false }))
    }
  }, [])

  return {
    deviceStates,
    loadingDevices,
    totalDevices,
    activeDevices,
    inactiveDevices,
    toggleDevice,
  }
}
