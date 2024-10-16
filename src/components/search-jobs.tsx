'use client'

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchJobs() {
  const recentSearches = [
    "Ux And UI designer, bihpur",
    "Software Engineer Python D...",
    "Software Engineer ,bengalu...",
    "Software Engineer Python D...",
  ]

  const topCompanies = [
    { name: "Adobe", logo: "/placeholder.svg?height=40&width=40", rating: 3.9, reviews: "1.7k", category: "Indian MNC" },
    { name: "Corbus", logo: "/placeholder.svg?height=40&width=40", rating: 3.6, reviews: "123", category: "Foreign MNC" },
    { name: "Quest", logo: "/placeholder.svg?height=40&width=40", rating: 3.7, reviews: "1.9k", category: "Foreign MNC" },
    { name: "Oppo", logo: "/placeholder.svg?height=40&width=40", rating: 4, reviews: "4.1k", category: "Foreign MNC" },
    { name: "Hettich", logo: "/placeholder.svg?height=40&width=40", rating: 3.8, reviews: "354", category: "Foreign MNC" },
    { name: "CGI", logo: "/placeholder.svg?height=40&width=40", rating: 4.1, reviews: "4k", category: "Foreign MNC" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          {/*Removed code as per update 1*/}
          <h1 className="text-3xl font-bold">Search jobs and internships</h1> {/*Adjusted margin-top as per update 3*/}
        </header>
        <div className="space-y-4">
          <Input placeholder="Skills, designations, companies" className="w-full" />
          <Input placeholder="Location" className="w-full" />
          <Button className="w-full">Search jobs</Button>
        </div>
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Your most recent searches</h2>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <Button key={index} variant="outline" className="flex items-center">
                <Search className="mr-2 h-4 w-4" />
                {search}
              </Button>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Top companies</h2>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              View all
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {topCompanies.map((company, index) => (
              <div key={index} className="rounded-lg border p-4 shadow">
                <Image src={company.logo} alt={company.name} width={40} height={40} className="mb-2" />
                <h3 className="font-semibold">{company.name}</h3>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{company.rating}</span>
                  <span className="ml-1 text-gray-500">({company.reviews} reviews)</span>
                </div>
                <div className="mt-2 rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-800">{company.category}</div>
                <Button variant="link" className="mt-2 w-full p-0 text-blue-600 hover:text-blue-800">
                  View jobs
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}