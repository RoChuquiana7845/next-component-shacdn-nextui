import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface SidebarItem {
  label: string;
  onClick?: () => void;
  href?: string;
  active?: boolean;
}

interface SidebarProps {
  menuItems?: SidebarItem[];
}

export default function SidebarComponent({
  menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
    { label: "Calendar", href: "/calendar" },
  ],
}: SidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`w-full justify-start ${
                            item.active ? "bg-gray-200 text-gray-900" : ""
                          }`}
                        >
                          <Button
                            variant="ghost"
                            className={`w-full justify-start ${
                              item.active ? "text-bold" : ""
                            }`}
                          >
                            {item.label}
                          </Button>
                        </a>
                      ) : (
                        <Button
                          onClick={item.onClick}
                          variant="ghost"
                          className={`w-full justify-start ${
                            item.active ? "text-bold bg-gray-200" : ""
                          }`}
                        >
                          {item.label}
                        </Button>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
