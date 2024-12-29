import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void; 
};

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500"
        aria-hidden="true"
      />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-8"
        onChange={handleSearchChange}
        aria-label="Search input"
      />
    </div>
  );
}
