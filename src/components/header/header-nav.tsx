"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const categoriesCollection: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Fresh Fruits",
    href: "/#categories",
    description:
      "A wide selection of fresh, seasonal fruits picked at their peak for flavor and quality.",
  },
  {
    title: "Fresh Vegetables",
    href: "/#categories",
    description:
      "Locally grown, freshly harvested vegetables, ensuring maximum freshness and taste.",
  },
  {
    title: "Grocery Items",
    href: "/#categories",
    description:
      "Essential pantry staples, including grains, oils, and spices, sourced with care.",
  },
  {
    title: "Exotic Fruits",
    href: "#collection",
    description:
      "Rare and unique fruits from around the world, carefully selected for their distinct flavors.",
  },
  {
    title: "Local Favourites",
    href: "#collection",
    description:
      "Popular and beloved produce that’s grown locally, offering fresh flavors with every bite.",
  },
];

export function HeaderNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div
                    className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative"
                    style={{
                      backgroundImage: "url(/assets/freshgroceries.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-30 rounded-md" />{" "}
                    {/* This is the overlay */}
                    <div className="relative z-10">
                      <div className="mb-2 mt-4 text-lg font-medium text-white">
                        Explore
                      </div>{" "}
                      {/* Adjusted text color to white */}
                      <p className="text-sm leading-tight text-white">
                        Discover the finest seasonal harvests, premium produce,
                        and organic selections, all chosen for their quality,
                        freshness, and sustainability.
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
              </li>

              <ListItem href="/#explore" title="Seasonal-harvest">
                Fresh, locally sourced produce picked at peak season for quality
                and flavor.
              </ListItem>
              <ListItem href="/#explore" title="Premium-produce">
                Handpicked premium quality produce, ensuring freshness and
                excellence.
              </ListItem>
              <ListItem href="/#explore" title="Organic-selection">
                A selection of certified organic produce grown sustainably and
                naturally.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {categoriesCollection.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="sm:block hidden">
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="sm:block hidden">
          <Link href="/media-gallery" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Media Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="sm:block hidden">
          <Link href="/team" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Our Team
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
