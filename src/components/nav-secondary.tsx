"use client"

import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    count?: number; // Make count optional
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    disable?: boolean;
    noDrop?: boolean; // Explicitly setting count to undefined
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item: any ) => (
            <SidebarMenuItem key={item.title} className="mt-0.5">
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  {item.icon ? <item.icon /> : <div className="h-5 w-5"></div>}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
