import {
  Leaf,
  Globe,
  ShieldCheck,
  Package,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  Tractor,
  SproutIcon as Seedling,
  Truck,
  Warehouse,
  Shield,
  Users,
  PackageCheck,
  Box,
} from "lucide-react";

export default function About() {
  // Product offerings
  const offerings = [
    {
      category: "Fresh Vegetables",
      items: "Tomatoes, potatoes, onions, carrots, peppers, and more",
    },
    {
      category: "Seasonal and Exotic Fruits",
      items: "Mangoes, apples, bananas, citrus fruits, and berries",
    },
    {
      category: "Grocery Items",
      items:
        "Pulses, rice, spices, dry fruits, oils, and packaged food essentials",
    },
  ];

  // Competitive advantages
  const advantages = [
    "Quality Assurance – Strict quality control measures to ensure freshness and hygiene",
    "Global Network – Strong logistics and distribution channels for efficient trade",
    "Sustainability Focus – Partnering with eco-friendly and ethical suppliers",
    "Customer-Centric Approach – Tailored solutions to meet the needs of our clients",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="intro"
        className="py-12 md:py-24 bg-zinc-100 dark:bg-transparent"
      >
        <div className="mx-auto max-w-6xl space-y-10 px-6 md:space-y-16">
          <div className="mx-auto max-w-4xl space-y-8 text-center md:space-y-16 mb-16">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              SuryaVriksha – Growing Global Connections Through Quality Produce
            </h2>
            <p className="text-lg">
              At SuryaVriksha, we are committed to bridging international
              markets with premium farm-fresh vegetables, seasonal fruits, and
              essential grocery items. With a strong focus on quality,
              sustainability, and seamless logistics, we ensure that every
              product meets the highest industry standards while supporting
              responsible sourcing and eco-friendly practices.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative max-w-[900px]">
              <Image
                className="rounded-lg object-cover"
                src="/assets/home/herosectionsv.jpeg"
                alt="SuryaVriksha team"
                width={900}
                height={500}
                loading="lazy"
              />
            </div>
          </div>

          {/* Core Features */}
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="size-6 text-primary" />
                <h3 className="text-sm font-medium">Fresh & Organic</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Sourced from trusted farmers to ensure premium quality and
                freshness.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="size-6 text-primary" />
                <h3 className="text-sm font-medium">Global Reach</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Seamlessly connecting markets with efficient distribution
                worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-6 text-primary" />
                <h3 className="text-sm font-medium">Quality Assurance</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Committed to the highest industry standards with rigorous
                quality checks.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="size-6 text-primary" />
                <h3 className="text-sm font-medium">Sustainable Packaging</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Eco-friendly packaging that preserves freshness while reducing
                waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">Who We Are</h2>
              <p className="mb-6 text-muted-foreground">
                Established our business since 2020, SuryaVriksha has grown into
                a leading player in international trade, ensuring seamless
                distribution of farm-fresh produce and essential grocery
                products across various regions.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our company is driven by a vision to provide high-quality,
                organic, and responsibly sourced food items while maintaining
                the highest industry standards.
              </p>
              <p className="text-muted-foreground">
                We serve a diverse clientele across Asia, Europe, the Middle
                East, Africa, and North America, ensuring timely delivery and
                competitive pricing.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/assets/teams/team.jpeg"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-zinc-100 dark:bg-transparent">
        <div className="container mx-auto px-6 max-w-6xl space-y-10">
          <h2 className="text-3xl font-medium mb-6 text-center">
            Our Competitive Edge
          </h2>
          <p className="text-muted-foreground text-md text-center mb-12">
            What sets SuryaVriksha apart in the global produce market
          </p>

          <div className="mt-16">
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm"
                >
                  <CheckCircle className="size-5 text-primary mt-1 flex-shrink-0" />
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="bg-white dark:bg-zinc-900 py-10 md:py-20 ">
        <div className="@container mx-auto max-w-5xl px-6">
          <div className="text-center flex flex-col gap-6">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
              Optimizing the Agricultural Supply Chain: From Farm to Delivery
            </h2>
            <p className="mt-4">
              We provide farmers with comprehensive support throughout the
              entire process, from offering expert guidance and handling
              procurement to managing efficient logistics and ensuring the
              timely delivery of fresh, high-quality produce to the market.
            </p>
          </div>
          <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center sm:max-w-2xl sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:max-w-none">
            {/* Farmer Listing */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Users className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Farmer Listing</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We collect farm data for smooth coordination and market
                  access.
                </p>
              </CardContent>
            </Card>

            {/* Regular Support */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Shield className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Regular Support</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Continuous support to help farmers avoid risks and improve
                  yields.
                </p>
              </CardContent>
            </Card>

            {/* Procurement from Farm */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Tractor className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">On-Farm Procurement</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We buy produce directly from farms, offering fair prices and
                  instant payment.
                </p>
              </CardContent>
            </Card>

            {/* Transport to Collection Center */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Truck className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Cold Chain Transport</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Produce is transported with care, preserving its freshness
                  during transit.
                </p>
              </CardContent>
            </Card>

            {/* Warehouse & Fulfillment */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Warehouse className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Warehousing</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Fresh produce is stored in optimal conditions before
                  dispatching.
                </p>
              </CardContent>
            </Card>

            {/* Grading */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Seedling className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Grading</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Produce is graded for quality to ensure consistency.
                </p>
              </CardContent>
            </Card>

            {/* Packaging & Labeling */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <Box className="size-8 text-primary mb-4" aria-hidden />
                <h3 className="font-medium">Packaging & Labeling</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Produce is packaged and labeled for traceability and quality.
                </p>
              </CardContent>
            </Card>

            {/* Delivery to Clients */}
            <Card className="group shadow-zinc-950/5 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
              <CardHeader className="pb-3 flex flex-col items-center">
                <PackageCheck
                  className="size-8 text-primary mb-4"
                  aria-hidden
                />
                <h3 className="font-medium">Delivery to Clients</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  We ensure timely deliveries to over 800 active vendors and
                  retail outlets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-zinc-100 dark:bg-transparent">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Leaf className="size-6 text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Our Mission</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                At SuryaVriksha, our mission is to deliver the freshest,
                highest-quality fruits, vegetables, and grocery products to
                global markets while upholding the highest standards of food
                safety, sustainability, and customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Sourcing farm-fresh produce from trusted and ethical growers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Ensuring efficient logistics for timely and seamless global
                    distribution
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Promoting sustainable farming practices and reducing food
                    waste
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Building long-term partnerships based on trust and
                    transparency
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="size-6 text-primary" />
                </div>
                <h2 className="text-2xl font-medium">Our Vision</h2>
              </div>
              <p className="mb-6 text-muted-foreground">
                Our vision is to become a leading global exporter of fresh
                produce and grocery items, recognized for our commitment to
                quality, innovation, and sustainability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Expand our reach to new international markets
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Innovate in packaging and logistics to maintain product
                    freshness
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Strengthen our relationships with farmers, suppliers, and
                    customers
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="size-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Lead the industry in eco-friendly and sustainable food trade
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-6">
              At SuryaVriksha, we believe in delivering nature&apos;s best to
              your doorstep, ensuring freshness, health, and satisfaction with
              every shipment.
            </p>
            <Button size="lg" className="mt-4 p-4">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
