"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
}: {
  items: {
    count?: number;
    title: string;
    url: string;
    icon?: LucideIcon;  // Use LucideIcon type here
    isActive?: boolean;
    disable?: boolean;
    noDrop?: boolean;
    items?: {
      count: any
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      {!!items && <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} disabled={item.disable}>
                  {item.icon ? <item.icon /> : <div className="h-5 w-5"></div>}
                  <span>{item.title}</span>
                  {/* {item.count !== undefined && <Badge className="ml-auto text-dark">{item.count}</Badge>} */}
                  {item.count !== undefined && 
                    <div className="ml-auto flex items-center">
                      <Badge className="ml-auto text-dark h-[22px] w-[26px] text-center">{item.count}</Badge>
                      <ChevronRight className={cn("ml-1 w-4.5 h-4.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90")} />
                    </div>
                  }
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {!!item.items && <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url} className="flex justify-between items-center h-[42px]">
                          <span>{subItem.title}</span>
                          {!!subItem.count && <Badge className="bg-[#d3d3d3] text-dark h-[22px] w-[26px] text-center">{subItem.count}</Badge>}
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>}
    </SidebarGroup>
  )
}
