'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Search, Briefcase, BookmarkIcon, BarChart2, Settings, FileText, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function SideBarNav() {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Search jobs', icon: Search, path: '/search-jobs' },
    { name: 'Recommended jobs', icon: Briefcase, path: '/recommended-jobs' },
    { name: 'Saved jobs', icon: BookmarkIcon, path: '/saved-jobs' },
    { name: 'Profile performance', icon: BarChart2, path: '/profile-performance' },
    { name: 'Communications', icon: Mail, path: '/communications' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Regis Works blog', icon: FileText, path: '/blog' },
    { name: 'Help Center', icon: HelpCircle, path: '/help-center' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex flex-col h-screen w-72 bg-gray-900 text-gray-100">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10 border-2 border-green-500">
              <AvatarImage src="/images/profile-pic.png" alt="John Doe" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">John Doe</h2>
              <Link className="text-xs text-blue-400" href="#">
                Update profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2 space-y-1">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <Button variant="ghost" className={`w-full justify-start ${isActive(item.path) ? 'bg-gray-800' : ''}`}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
      <div className="p-4 text-xs text-gray-500">Regis Works All Rights Reserved ©</div>
    </div>
  )
}
