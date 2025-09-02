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
    <header className="fixed z-20 w-full">
      <nav
        data-state={menuState && "active"}
        className="w-full bg-blur border-b"
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
            className="relative z-20 -m-2.5 p-2.5 lg:hidden"
          >
            <span className="relative block size-6">
              <X
                className={`absolute inset-0 transition-all duration-500 ${
                  menuState ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
              <Menu
                className={`absolute inset-0 transition-all duration-500 ${
                  menuState ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="absolute top-16 left-0 w-full bg-background shadow-xl lg:hidden ">
            <ul className="flex flex-col items-center space-y-6 py-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition duration-150 hover:text-accent-foreground"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center space-y-3 pb-6">
              <Button asChild size="sm">
                <Link href="/#contact" onClick={handleLinkClick}>
                  Contact
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
