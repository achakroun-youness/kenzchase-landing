"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"

interface DestinationBreadcrumbProps {
  cityName?: string
}

export function DestinationBreadcrumb({ cityName }: DestinationBreadcrumbProps) {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="flex items-center gap-1">
                <Home className="w-4 h-4" />
                Accueil
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {cityName ? (
              <>
                <BreadcrumbLink asChild>
                  <Link href="/destinations">Destinations</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{cityName}</BreadcrumbPage>
              </>
            ) : (
              <BreadcrumbPage>Destinations</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

