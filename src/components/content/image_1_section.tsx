"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";

export default function Image_1_Section() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const sections = [
    {
      id: 1,
      title: "Fresh Fruits",
      imageUrl: "/assets/products/content/freshfruits.jpg",

      items: [
        "Apples",
        "Bananas",
        "Oranges",
        "Strawberries",
        "Grapes",
        "Watermelon",
        "Pineapple",
        "Mango",
      ],
    },
    {
      id: 2,
      title: "Fresh Vegetables",
      imageUrl: "/assets/products/content/freshvegetables.jpeg",
      items: [
        "Carrots",
        "Broccoli",
        "Spinach",
        "Tomatoes",
        "Cucumbers",
        "Bell Peppers",
        "Onions",
        "Potatoes",
      ],
    },
    {
      id: 3,
      title: "Grocery Items",
      imageUrl: "/assets/products/content/freshgroceries.jpg",
      items: [
        "Rice",
        "Pasta",
        "Flour",
        "Sugar",
        "Coffee",
        "Tea",
        "Cereal",
        "Cooking Oil",
      ],
    },
  ];

  const handleExploreClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the mouse leave event
    setFlippedCard(id);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCard(null);
  };

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
            className="relative h-[600px] w-full perspective-1000 group"
            onMouseEnter={() => !flippedCard && setActiveSection(section.id)}
            onMouseLeave={() => !flippedCard && setActiveSection(null)}
          >
            <div
              className={`relative h-full w-full transition-all duration-500 transform-style-3d ${
                flippedCard === section.id ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of card - Keep the image */}
              <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rounded-xl shadow-lg">
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={section.imageUrl || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className={`object-cover object-center transition-transform duration-200 ease-in-out ${
                      activeSection === section.id && !flippedCard
                        ? "scale-110"
                        : "scale-100"
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
                  <Button
                    variant="outline"
                    className="transition-transform border cursor-pointer duration-100 bg-primary/20 hover:bg-secondary text-white"
                    onClick={(e) => handleExploreClick(section.id, e)}
                  >
                    Explore
                  </Button>
                </div>
              </div>

              {/* Back of card - Modern List with same image background */}
              <div className="absolute inset-0 w-full h-full backface-hidden overflow-hidden rotate-y-180 rounded-xl shadow-lg">
                {/* Same image as background */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={section.imageUrl || "/placeholder.svg"}
                    alt={section.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Stronger overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/75"></div>
                </div>

                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/20">
                    <h2 className="text-xl font-semibold text-white">
                      {section.title}
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-white hover:bg-primary"
                      onClick={handleCloseClick}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex-grow overflow-y-auto pr-1 custom-scrollbar">
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center p-3 rounded-lg transition-all duration-200 animate-pop-in hover:bg-white/10"
                          style={{
                            animationDelay: `${index * 50}ms`,
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-white">{item}</span>
                          <ArrowRight className="ml-auto h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
