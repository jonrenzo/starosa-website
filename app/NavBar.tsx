"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"


export function NavBar() {
  return (
    <NavigationMenu viewport={false} className="font-poppins h-20">
      <Link href="/"><img src="./images/logo.JPG" alt="Sta Rosa Logo" className="w-15"/></Link>
      <NavigationMenuList>
       {/* Home */}
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
      </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Introduction</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Population</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Geography</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Photos</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Bussiness Permit</div>
                    <div className="text-muted-foreground">
                      Get your Business Permit for legal operation of your business within the barangay.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Barangay Certificate</div>
                    <div className="text-muted-foreground">
                      Get your Barangay Certificate for proof of residency or other official purposes.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Barangay Clearance</div>
                    <div className="text-muted-foreground">
                      Get your Barangay Clearance for employment, travel, or other legal purposes.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Bookings</div>
                    <div className="text-muted-foreground">
                      Reserve our venue for your events or book the basketball court for your preferred schedule.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Committee</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button className="p-6">Get in Touch</Button>
    </NavigationMenu>
  )
}
