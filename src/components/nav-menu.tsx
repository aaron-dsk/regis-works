'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Wallet, LayoutGrid, Home, CreditCard, Bell, FileText, ShoppingCart, HeadphonesIcon, Settings } from 'lucide-react'

export function NavMenu() {
  const pathname = usePathname()
  const defaultPath = '/offerings'

  const menuItems = [
    { name: 'OFFERINGS', icon: Home, path: '/offerings' },
    { name: 'WALLET MANAGEMENT', icon: Wallet, path: '/wallet-management' },
    { name: 'MY PORTFOLIO', icon: LayoutGrid, path: '/portfolio' },
    { name: 'MY TRANSACTIONS', icon: CreditCard, path: '/transactions' },
    { name: 'MARKETPLACE', icon: ShoppingCart, path: '/marketplace' },
    { name: 'NEWS / UPDATES', icon: Bell, path: '/news' },
    { name: 'CONTRACTS', icon: FileText, path: '/contracts' },
    { name: 'SUPPORT', icon: HeadphonesIcon, path: '/support' },
    { name: 'SETTINGS', icon: Settings, path: '/settings' },
  ]

  const isActive = (path: string) => {
    if (pathname === '/' && path === defaultPath) return true
    return pathname === path
  }

  return (
    <nav className="w-64 flex-shrink-0 bg-[#0a2540] text-white p-4 h-screen overflow-y-auto">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold text-white">FractionsX</h1>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>
              <button
                className={`flex items-center w-full py-3 px-2 rounded-md transition-colors ${
                  isActive(item.path) ? 'bg-white text-[#0a2540]' : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.name}</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}