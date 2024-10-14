'use client'

import { Globe, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FC, HTMLAttributes } from 'react';

export const Header: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <header className={`flex shadow-sm justify-end items-center space-x-2 p-4 ${className}`} {...props}>
      <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 h-8">
        0xb370701731DF7DA1AC6BC0B83EA485FF0CB63479
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Español</DropdownMenuItem>
          <DropdownMenuItem>Français</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <User className="h-4 w-4" />
        <span className="sr-only">User settings</span>
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <LogOut className="h-4 w-4" />
        <span className="sr-only">Logout</span>
      </Button>
    </header>
  );
};