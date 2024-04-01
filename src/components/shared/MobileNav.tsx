"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationLinks } from "@/constant";
import Link from "next/link";
import { AlignCenter, AlignJustify, AlignRight } from "lucide-react";

export default function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <AlignJustify className="w-6 h-6 hover:bg-gray-100 rounded p-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32 absolute -right-3">
        {navigationLinks.map((link) => (
          <DropdownMenuItem
            asChild
            key={link.name}
            className="flex justify-start gap-2 h-9"
          >
            <Link href={link.href}>
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
