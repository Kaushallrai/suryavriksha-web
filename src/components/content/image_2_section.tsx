"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";

export default function Image_2_Section() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: "Seasonal Harvest",
      imageUrl: "/assets/products/content/seasonalharvest.jpg",
      items: [
        "Winter Squash",
        "Pumpkins",
        "Apples",
        "Pears",
        "Brussels Sprouts",
        "Sweet Potatoes",
        "Cranberries",
        "Persimmons",
      ],
    },
    {
      id: 2,
      title: "Premium Produce",
      imageUrl: "/assets/products/content/premium.jpg",
      items: [
        "Heirloom Tomatoes",
        "Artisanal Lettuce",
        "Specialty Mushrooms",
        "Microgreens",
        "Rare Herbs",
        "Edible Flowers",
        "Gourmet Garlic",
        "Truffle Potatoes",
      ],
    },
    {
      id: 3,
      title: "Organic Selection",
      imageUrl: "/assets/products/content/organic.jpg",
      items: [
        "Organic Kale",
        "Pesticide-free Berries",
        "Organic Carrots",
        "Chemical-free Apples",
        "Organic Spinach",
        "Natural Herbs",
        "Organic Potatoes",
        "Organic Citrus",
      ],
    },
    {
      id: 4,
      title: "Exotic Fruits",
      imageUrl: "/assets/products/content/exotic.jpg",
      items: [
        "Dragon Fruit",
        "Passion Fruit",
        "Lychee",
        "Rambutan",
        "Jackfruit",
        "Star Fruit",
        "Mangosteen",
        "Durian",
      ],
    },
    {
      id: 5,
      title: "Local Favourites",
      imageUrl: "/assets/products/content/local.jpg",
      items: [
        "Farm Fresh Eggs",
        "Artisan Cheese",
        "Local Honey",
        "Fresh Baked Bread",
        "Regional Jams",
        "Seasonal Preserves",
        "Local Maple Syrup",
        "Handcrafted Pickles",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div
        id="explore"
        className="flex flex-col gap-6 items-center mb-10 max-w-4xl mx-auto text-center "
      >
        <h1 className="text-3xl font-bold">
          Explore Our Premium Produce: Seasonal Harvest, Exotic Fruits, Local
          Favourites & More
        </h1>
        <span>
          From seasonal harvests and premium produce to organic choices and
          exotic fruits, we offer a variety of fresh, local favorites to suit
          every taste and occasion.
        </span>
      </div>

      {/* Top row with 1 image expanding on small screens */}
      <div
        id="collection"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {sections.slice(0, 3).map((section) => (
          <div
            key={section.id}
            className={`relative h-[400px] w-full group ${
              section.id === 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="relative h-full w-full transition-all duration-500">
              {/* Front of card - Keep the image */}
              <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg">
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={section.imageUrl || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className={`object-cover object-center transition-transform duration-200 ease-in-out ${
                      activeSection === section.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h2 className="text-xl font-semibold mb-4">
                    {section.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row with 2 images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {sections.slice(3).map((section) => (
          <div
            key={section.id}
            className="relative h-[400px] w-full group"
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="relative h-full w-full transition-all duration-500">
              {/* Front of card - Keep the image */}
              <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg">
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={section.imageUrl || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className={`object-cover object-center transition-transform duration-200 ease-in-out ${
                      activeSection === section.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <h2 className="text-xl font-semibold mb-4">
                    {section.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
