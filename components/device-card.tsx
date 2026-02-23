"use client"

import { Switch } from "@/components/ui/switch"
import { AlertTriangle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Device } from "@/lib/devices"

interface DeviceCardProps {
  device: Device
  isOn: boolean
  isLoading: boolean
  onToggle: (device: Device, checked: boolean) => void
}

export function DeviceCard({ device, isOn, isLoading, onToggle }: DeviceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-between gap-4 rounded-lg border p-4 transition-all duration-200",
        device.disabled
          ? "border-destructive/20 bg-destructive/5 opacity-70"
          : isOn
            ? "border-success/30 bg-success/5"
            : "border-border bg-card hover:border-border/80 hover:bg-accent/50"
      )}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={cn(
            "size-2.5 shrink-0 rounded-full transition-all duration-300",
            device.disabled
              ? "bg-destructive/50"
              : isOn
                ? "bg-success shadow-[0_0_8px] shadow-success/50"
                : "bg-muted-foreground/30"
          )}
        />
        <div className="min-w-0">
          <p className={cn(
            "text-sm font-medium truncate transition-colors",
            isOn ? "text-foreground" : "text-foreground/80"
          )}>
            {device.name}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            {device.warning ? (
              <span className="inline-flex items-center gap-1 text-xs text-destructive">
                <AlertTriangle className="size-3" />
                {device.warning}
              </span>
            ) : (
              <span className={cn(
                "text-xs transition-colors",
                isOn ? "text-success" : "text-muted-foreground"
              )}>
                {isOn ? "Включено" : "Выключено"}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {isLoading && (
          <Loader2 className="size-3.5 animate-spin text-muted-foreground" />
        )}
        <Switch
          checked={isOn}
          onCheckedChange={(checked) => onToggle(device, checked)}
          disabled={device.disabled || isLoading}
          className={cn(
            "data-[state=checked]:bg-success",
            device.disabled && "cursor-not-allowed"
          )}
        />
      </div>
    </div>
  )
}
