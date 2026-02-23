"use client"

import { Activity, Power, PowerOff, Cpu } from "lucide-react"

interface StatsBarProps {
  total: number
  active: number
  inactive: number
}

export function StatsBar({ total, active, inactive }: StatsBarProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors hover:border-primary/30">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Cpu className="size-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Всего</p>
            <p className="text-2xl font-semibold tracking-tight text-foreground font-mono">{total}</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
      </div>

      <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors hover:border-success/30">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success/10">
            <Power className="size-5 text-success" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Включено</p>
            <p className="text-2xl font-semibold tracking-tight text-success font-mono">{active}</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-success/20 group-hover:bg-success/40 transition-colors" />
      </div>

      <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 transition-colors hover:border-muted-foreground/30">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
            <PowerOff className="size-5 text-muted-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Выключено</p>
            <p className="text-2xl font-semibold tracking-tight text-muted-foreground font-mono">{inactive}</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-muted-foreground/10 group-hover:bg-muted-foreground/20 transition-colors" />
      </div>
    </div>
  )
}
