"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Define types for our data structure
interface CategoryImage {
  src: string;
  alt: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  images: CategoryImage[];
}

const categories: Category[] = [
  {
    id: "fruits",
    title: "Fresh Fruits",
    description:
      "Experience the finest selection of fresh, handpicked fruits, sourced from the best farms to ensure exceptional taste and quality. Whether you're looking for a juicy snack, a refreshing smoothie ingredient, or a vibrant addition to your meals, our fruits are packed with natural sweetness, essential vitamins, and rich flavors to elevate your daily nutrition.",
    images: [
      { src: "/assets/fv/fruits/apple.jpeg", alt: "Apple" },
      { src: "/assets/fv/fruits/banana.jpeg", alt: "Banana" },
      { src: "/assets/fv/fruits/bberry.jpeg", alt: "blueberry" },
      { src: "/assets/fv/fruits/sb.jpeg", alt: "Strawberry" },
      { src: "/assets/fv/fruits/mango.jpeg", alt: "Mango" },
      { src: "/assets/fv/fruits/10.jpeg", alt: "10" },
      { src: "/assets/fv/fruits/orange.jpeg", alt: "Orange" },
      { src: "/assets/fv/fruits/pomo.jpeg", alt: "Pomo" },
      { src: "/assets/fv/fruits/papaya.jpeg", alt: "Papaya" },
      { src: "/assets/fv/fruits/kiwi.jpeg", alt: "Kiwi" },
    ],
  },
  {
    id: "vegetables",
    title: "Fresh Vegetables",
    description:
      "Discover a diverse range of farm-fresh vegetables, harvested at peak ripeness to preserve their crisp texture, vibrant color, and full-bodied flavor. Whether you're preparing a hearty home-cooked meal, a nutritious salad, or a flavorful stir-fry, our vegetables provide the perfect foundation for a wholesome and delicious dining experience.",
    images: [
      { src: "/assets/fv/vegetables/brocolli.jpeg", alt: "brocolli" },
      { src: "/assets/fv/vegetables/carrot.jpeg", alt: "carrot" },
      { src: "/assets/fv/vegetables/cucumber.jpeg", alt: "cucumber" },
      { src: "/assets/fv/vegetables/tomato.jpeg", alt: "tomato" },
      { src: "/assets/fv/vegetables/pea.jpeg", alt: "pea" },
      { src: "/assets/fv/vegetables/potato.jpeg", alt: "potato" },
      { src: "/assets/fv/vegetables/pumpkin.jpeg", alt: "pumpkin" },
      { src: "/assets/fv/vegetables/radish.jpeg", alt: "radish" },
      { src: "/assets/fv/vegetables/1.jpeg", alt: "1" },
      { src: "/assets/fv/vegetables/2.jpeg", alt: "2" },
      { src: "/assets/fv/vegetables/3.jpeg", alt: "3" },
      { src: "/assets/fv/vegetables/4.jpeg", alt: "4" },
      { src: "/assets/fv/vegetables/5.jpeg", alt: "5" },
      { src: "/assets/fv/vegetables/6.jpeg", alt: "6" },
      { src: "/assets/fv/vegetables/7.jpeg", alt: "7" },
    ],
  },
  // {
  //   id: "grocery",
  //   title: "Grocery Items",
  //   description:
  //     "Stock up on all your pantry essentials with our carefully curated selection of high-quality grocery items. From premium grains and pulses to rich spices, cooking oils, and daily necessities, we bring you everything you need to create delicious and nutritious meals. Our grocery selection ensures convenience, freshness, and superior quality for your kitchen.",
  //   images: [
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Rice" },
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Pasta" },
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Flour" },
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Spices" },
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Oil" },
  //     { src: "/placeholder.svg?height=400&width=600", alt: "Canned Goods" },
  //   ],
  // },
];

// Component for a single category carousel section
function CategoryCarousel({ category }: { category: Category }) {
  return (
    <section id={category.id} className="py-12 md:py-20   dark:bg-transparent">
      <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-8 mb-10">
        <h2 className="text-balance text-3xl font-medium lg:text-4xl">
          {category.title}
        </h2>
        <p className="text-muted-foreground max-w-4xl mx-auto px-4">
          {category.description}
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {category.images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <Card className="overflow-hidden p-0">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover fill transition-all hover:scale-105 duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default function Categories() {
  return (
    <div className="space-y-8 md:space-y-0 py-12">
      {categories.map((category) => (
        <CategoryCarousel key={category.id} category={category} />
      ))}
    </div>
  );
}
