import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  appName?: string; 
  navigationLinks?: { label: string; href: string }[]; 
  onSignIn?: () => void; 
}

export default function Header({
  appName = "Your App Name",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  onSignIn,
}: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">{appName}</h1>

          <nav aria-label="Main Navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink href={link.href}>
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div>
          <Button onClick={onSignIn}>Sign In</Button>
        </div>
      </div>
    </header>
  );
}
