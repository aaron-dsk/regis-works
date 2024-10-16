'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Star, Building2 } from "lucide-react"

interface Job {
  title: string
  company: string
  location: string
  logo: string
  rating?: number
  postedAgo: string
}

interface JobSectionProps {
  title: string
  jobs: Job[]
  totalJobs: number
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="bg-white text-black border border-gray-300">
      <CardContent className="p-4">
        <div className="mb-2">
          <Building2 className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="font-semibold">{job.title}</h3>
        <p className="text-sm text-gray-600">{job.company}</p>
        {job.rating && (
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm">{job.rating}</span>
          </div>
        )}
        <div className="flex items-center mt-1 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{job.location}</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">{job.postedAgo}</p>
      </CardContent>
    </Card>
  )
}

function JobSection({ title, jobs, totalJobs }: JobSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">
          {title} <span className="text-gray-600">({totalJobs})</span>
        </h2>
        <Button variant="link" className="text-blue-600 hover:text-blue-500">
          View all
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        {jobs.length < totalJobs && (
          <Card className="bg-white text-black border border-gray-300 flex items-center justify-center">
            <CardContent>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-500">
                View all {totalJobs} jobs <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export function JobListings() {
  const jobsBasedOnPreferences: Job[] = [
    {
      title: "Staff Software Engineer",
      company: "Visa",
      location: "Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      rating: 4.1,
      postedAgo: "1d ago",
    },
    {
      title: "Software Engineer",
      company: "Global Software Development Co.",
      location: "Hybrid - Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
    {
      title: "Software Engineer",
      company: "Wilatons",
      location: "Pune, Chennai, Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
  ]

  const recommendedJobs: Job[] = [
    {
      title: "Web Developer",
      company: "Wikiprospects",
      location: "Bengaluru, Indiranagar",
      logo: "/placeholder.svg?height=32&width=32",
      rating: 4.7,
      postedAgo: "1d ago",
    },
    {
      title: "Software Engineer",
      company: "AskmeOffers.com unit of Iussac L.",
      location: "Remote",
      logo: "/placeholder.svg?height=32&width=32",
      rating: 5.0,
      postedAgo: "2d ago",
    },
    {
      title: "Software Engineer",
      company: "Global Software Development Co.",
      location: "Hybrid - Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
    {
      title: "Software Engineer",
      company: "Wilatons",
      location: "Pune, Chennai, Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
  ]

  const youMightLike: Job[] = [
    {
      title: "Full Stack Developer ( Fresher )",
      company: "SprintPro Software Solutions Pvt.",
      location: "Durgapur",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
    {
      title: "Software Engineer",
      company: "Global Software Development Co.",
      location: "Hybrid - Bengaluru",
      logo: "/placeholder.svg?height=32&width=32",
      postedAgo: "3d ago",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black p-8 w-full max-w-10xl mx-auto">
      <JobSection title="Jobs based on your preferences" jobs={jobsBasedOnPreferences} totalJobs={10} />
      <JobSection title="Recommended jobs" jobs={recommendedJobs} totalJobs={10} />
      <JobSection title="You might like" jobs={youMightLike} totalJobs={2} />
    </div>
  )
}
