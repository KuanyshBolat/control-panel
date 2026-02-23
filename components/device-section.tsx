"use client"

import { Train, Factory, Droplets, Hospital, Flame, Trophy } from "lucide-react"
import { DeviceCard } from "@/components/device-card"
import type { Device, DeviceSection } from "@/lib/devices"

const iconMap: Record<string, React.ElementType> = {
  train: Train,
  factory: Factory,
  droplets: Droplets,
  hospital: Hospital,
  flame: Flame,
  trophy: Trophy,
}

interface DeviceSectionCardProps {
  section: DeviceSection
  deviceStates: Record<string, boolean>
  loadingDevices: Record<string, boolean>
  onToggle: (device: Device, checked: boolean) => void
}

export function DeviceSectionCard({
  section,
  deviceStates,
  loadingDevices,
  onToggle,
}: DeviceSectionCardProps) {
  const Icon = iconMap[section.icon] || Train
  const activeCount = section.devices.filter(
    (d) => !d.disabled && deviceStates[d.id]
  ).length
  const totalCount = section.devices.filter((d) => !d.disabled).length

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="size-4.5 text-primary" />
          </div>
          <h2 className="text-base font-semibold text-foreground">{section.title}</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs text-muted-foreground">
            {activeCount}/{totalCount}
          </span>
          <div
            className={`size-2 rounded-full transition-colors ${
              activeCount > 0 ? "bg-success shadow-[0_0_6px] shadow-success/50" : "bg-muted-foreground/30"
            }`}
          />
        </div>
      </div>
      <div className="p-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {section.devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            isOn={!!deviceStates[device.id]}
            isLoading={!!loadingDevices[device.id]}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  )
}
