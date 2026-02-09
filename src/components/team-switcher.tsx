"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  team,
}: {
  team: {
    name: string
    content: String
    plan: string
  }
}) {
  useSidebar()
  const [activeTeam] = React.useState(team)

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="h-16 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-full">
              <span className="text-xs leading-4 font-aspekta">{activeTeam.content}</span>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{activeTeam.name}</span>
              <span className="truncate text-xs text-muted-foreground">{activeTeam.plan}</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
