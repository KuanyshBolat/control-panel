"use client"

import { useDeviceControl } from "@/hooks/use-device-control"
import { sections } from "@/lib/devices"
import { StatsBar } from "@/components/stats-bar"
import { DeviceSectionCard } from "@/components/device-section"
import { Settings2 } from "lucide-react"

export function ControlPanel() {
  const {
    deviceStates,
    loadingDevices,
    totalDevices,
    activeDevices,
    inactiveDevices,
    toggleDevice,
  } = useDeviceControl()

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
              <Settings2 className="size-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-foreground">
                Панель управления
              </h1>
              <p className="text-xs text-muted-foreground">
                Управление устройствами инфраструктуры
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="size-2 rounded-full bg-success shadow-[0_0_8px] shadow-success/50 animate-pulse" />
            <span className="text-xs text-muted-foreground">Онлайн</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-6">
          <StatsBar
            total={totalDevices}
            active={activeDevices}
            inactive={inactiveDevices}
          />

          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <DeviceSectionCard
                key={section.id}
                section={section}
                deviceStates={deviceStates}
                loadingDevices={loadingDevices}
                onToggle={toggleDevice}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
