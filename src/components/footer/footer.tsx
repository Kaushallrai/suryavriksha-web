import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

const links = [
  {
    group: "Explore",
    items: [
      {
        title: "Seasonal-harvest",
        href: "/#explore",
      },
      {
        title: "Premium-produce",
        href: "/#explore",
      },
      {
        title: "Organic-selection",
        href: "/#explore",
      },
    ],
  },
  {
    group: "Categories",
    items: [
      {
        title: "Fresh Fruits",
        href: "/category",
      },
      {
        title: "Fresh Vegetables",
        href: "/category",
      },
      {
        title: "Grocery Items",
        href: "/category",
      },
    ],
  },
  {
    group: "Collections",
    items: [
      {
        title: "Exotic Fruits",
        href: "#collection",
      },
      {
        title: "Local Favourites",
        href: "/#collection",
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        title: "About us",
        href: "/about",
      },
      {
        title: "Media Gallery",
        href: "/media",
      },
      {
        title: "Our Team",
        href: "/team",
      },

      {
        title: "Contact",
        href: "/#contact",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mb-8 border-b md:mb-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
          <Link
            href="/"
            aria-label="home"
            className="flex items-center space-x-2"
          >
            <Image
              src="/assets/logo/logo1.png"
              alt="Logo"
              width={55}
              height={55}
              priority
            />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <form className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1">
            <div className="space-y-4">
              <Label htmlFor="mail" className="block font-medium">
                Subscribe to Our Newsletter
              </Label>
              <div className="flex gap-2">
                <Input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="Your email address"
                  className="h-8 text-sm"
                />
                <Button size="sm" disabled>
                  Subscribe
                </Button>
              </div>
              <span className="text-muted-foreground block text-sm">
                Stay updated with the latest news, seasonal produce, and
                exclusive offers from Suryavriksha.
              </span>
            </div>
          </form>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <small className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © 2020 Suryavriksha. All rights reserved.
          </small>
          <form action="">
            <div className="relative">
              <ChevronsUpDown
                className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75"
                size="0.75rem"
              />
              <select
                className={cn(
                  "border-input disabled: file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                )}
                name="language"
                disabled
              >
                <option value="1">English</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
