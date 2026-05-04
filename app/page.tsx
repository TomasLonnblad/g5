"use client"
import Component from '@/components/sparkles-fullpage-demo'
import Component2 from '@/components/images-badge-demo'
import { LiquidMetalButton } from "@/components/liquid-metal-button"
import { ViewModeToggle } from "@/components/view-mode-toggle"
import React, { useRef, useEffect, useState, useCallback } from "react"

export default function AgenticPage() {
  const [viewMode, setViewMode] = useState<"text" | "icon">("text")


  return (

    <main className="flex min-h-svh items-center justify-center">
          <Component />
      <Component2 />
      <div  className="flex min-h-svh  absolute left-10 top-40">
        <LiquidMetalButton viewMode={viewMode} /></div>
      <div className="  absolute left-50 top-40 "><ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
    </div>
    </main>
  )
}
