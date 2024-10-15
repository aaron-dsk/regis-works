'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Briefcase, BookmarkIcon, BarChart2, Eye, MessageCircle, Settings, CreditCard, FileText, HelpCircle, Mail, Info } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function SideBarNav() {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Search jobs', icon: Search, path: '/search-jobs' },
    { name: 'Recommended jobs', icon: Briefcase, path: '/recommended-jobs' },
    { name: 'Saved jobs', icon: BookmarkIcon, path: '/saved-jobs' },
    { name: 'Profile performance', icon: BarChart2, path: '/profile-performance' },
    { name: 'Display preferences', icon: Eye, path: '/display-preferences' },
    { name: 'Chat for help', icon: MessageCircle, path: '/chat' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Jobseeker services', icon: CreditCard, path: '/jobseeker-services' },
    { name: 'JobNest blog', icon: FileText, path: '/blog' },
    { name: 'How JobNest works', icon: HelpCircle, path: '/how-it-works' },
    { name: 'Write to us', icon: Mail, path: '/contact' },
    { name: 'About us', icon: Info, path: '/about' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex flex-col h-screen w-72 bg-gray-900 text-gray-100">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10 border-2 border-green-500">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Furkan Sarkar" />
              <AvatarFallback>FS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold">Furkan Sarkar</h2>
              <Link className="text-xs text-blue-400" href="#">
                Update profile
              </Link>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-600" />
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
      <div className="p-4 text-xs text-gray-500">Version 20.78</div>
    </div>
  )
}
