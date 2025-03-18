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

export default function CategoryCarousel({
  title,
  description,
  images,
  id,
}: {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  id: string;
}) {
  return (
    <section id={id} className="py-12 md:py-20 bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-8 mb-10">
        <h2 className="text-balance text-3xl font-medium lg:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto px-4">
          {description}
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
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-all hover:scale-105 duration-300"
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
