"use client"

import * as React from "react"
import {
  BookOpen,
  Contact2,
  GitBranch,
  HomeIcon,
  MessageCircle,
  Plus,
  Puzzle,
  Send,
  Settings,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"

// This is sample data.
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  team: {
    name: "Lorem ipsum",
    content: 'LI',
    plan: "Pro Plan",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: HomeIcon,
      count: undefined, // Explicitly setting count to undefined
    },
    {
      title: "Chats",
      icon: MessageCircle,
      url: "#",
      count: 32, // count is required here
      isActive: true,
    },
    {
      title: "Central",
      url: "#",
      isActive: true,
      count: 32, // count is required here
      items: [
        {
          title: "Unassigned",
          url: "#",
          count: 22,
        },
        {
          title: "Assigned to me",
          url: "#",
          count: 10,
        },
        {
          title: "Unread",
          url: "#",
          count: 32,
        },
        {
          title: "Trash",
          url: "#",
          count: undefined, // Explicitly setting count to undefined
        },
      ],
    },
    {
      title: "Test inbox",
      url: "#",
      icon: BookOpen,
      count: 0, // count is required here
    },
    {
      title: "Add new inbox",
      url: "#",
      icon: Plus,
      disable: true,
      noDrop: true,
      count: undefined, // Explicitly setting count to undefined
    },
    {
      title: "Automation",
      url: "#",
      icon: GitBranch,
      noDrop: true,
      count: undefined, // Explicitly setting count to undefined
    },
    {
      title: "Contacts",
      url: "#",
      icon: Contact2,
      count: undefined, // Explicitly setting count to undefined
    },
    {
      title: "Campaigns",
      url: "#",
      icon: Send,
      count: undefined, // Explicitly setting count to undefined
    },
  ],
  projects: [],
  navSecondary: [
    {
      title: "Integrations",
      url: "#",
      icon: Puzzle,
      count: undefined, // Explicitly setting count to undefined
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      count: undefined, // Explicitly setting count to undefined
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.team} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarFooter>
    </Sidebar>
  )
}

