"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import { ModeToggle } from "../ui/mode-toggle";
import { HeaderNav } from "./header-nav";

const menuItems = [
  { name: "Our Team", href: "/team" },
  { name: "About us", href: "/about" },
  { name: "Media Gallery", href: "/media" },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleLinkClick = () => {
    setMenuState(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-safe-area-inset-top">
      <nav
        data-state={menuState && "active"}
        className="w-full bg-blur border-b backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1 transition-all duration-300">
          {/* Logo */}
          <Link
            href="/"
            aria-label="home"
            className="flex items-center space-x-2"
          >
            <Image
              src="/assets/logo/newlogo2.png"
              alt="Logo"
              width={220}
              height={0}
              priority
              quality={100}
              suppressHydrationWarning
            />
          </Link>

          {/* Desktop Navigation */}
          <HeaderNav />

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="px-6">
              <Link href="/#contact">Contact</Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState ? "Close Menu" : "Open Menu"}
            className="relative z-20 -m-2.5 p-2.5 lg:hidden transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="fixed inset-0 top-16 z-40 w-full h-screen bg-background/95 backdrop-blur-sm lg:hidden pt-safe-area-inset-top">
            <div className="flex flex-col h-full">
              <ul className="flex flex-col items-center space-y-6 py-8 px-6">
                {menuItems.map((item, index) => (
                  <li key={index} className="w-full">
                    <Link
                      href={item.href}
                      className="block w-full text-center text-lg text-muted-foreground transition duration-200 hover:text-accent-foreground py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center space-y-4 pb-8 mt-auto">
                <Button asChild size="lg" className="w-48">
                  <Link href="/#contact" onClick={handleLinkClick}>
                    Contact
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
