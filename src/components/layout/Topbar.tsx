import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "./SearchBar";

interface TopbarProps {
  avatarSrc?: string; 
  avatarFallback?: string; 
  onSearch?: (query: string) => void; 
  onHelpClick?: () => void; 
}

export default function Topbar({
  avatarSrc = "https://github.com/shadcn.png",
  avatarFallback = "CN",
  onSearch,
  onHelpClick,
}: TopbarProps) {
  return (
    <nav className="border-b" aria-label="Topbar">
      <div className="flex h-16 items-center px-4">
        <SearchBar onSearch={onSearch} />
        
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            aria-label="Get Help"
            onClick={onHelpClick}
          >
            Help
          </Button>
          <Avatar>
            <AvatarImage src={avatarSrc} alt="User Avatar" />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
