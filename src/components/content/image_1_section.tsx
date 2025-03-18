"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define types for our section data
interface Section {
  id: string;
  title: string;
  imageUrl: string;
}

export default function Image_1_Section() {
  // Update state type to string | null since we're using string IDs
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Type the sections array as Section[]
  const sections: Section[] = [
    {
      id: "fruits",
      title: "Fresh Fruits",
      imageUrl: "/assets/products/content/freshfruits.jpg",
    },
    {
      id: "vegetables",
      title: "Fresh Vegetables",
      imageUrl: "/assets/products/content/freshvegetables.jpeg",
    },
    {
      id: "grocery",
      title: "Grocery Items",
      imageUrl: "/assets/products/content/freshgroceries.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col gap-6 items-center mb-10">
        <h1 className="text-3xl font-bold">Discover Fresh Produce</h1>
        <span id="categories">
          Explore our selection of quality fruits, vegetables, and more.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative h-[600px] w-full overflow-hidden rounded-xl shadow-lg group"
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
          >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={section.imageUrl || "/placeholder.svg"}
                alt={section.title}
                fill
                className={`object-cover object-center transition-transform duration-500 ease-in-out ${
                  activeSection === section.id ? "scale-110" : "scale-100"
                }`}
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <Link href={`/category#${section.id}`}>
                <Button
                  variant="outline"
                  className="transition-transform border cursor-pointer duration-100 bg-primary/20 hover:bg-secondary text-white"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
