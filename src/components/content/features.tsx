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

export default function Features() {
  return (
    <section className="bg-zinc-100 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Optimizing the Agricultural Supply Chain: From Farm to Delivery
          </h2>
          <p className="mt-4">
            We provide farmers with comprehensive support throughout the entire
            process, from offering expert guidance and handling procurement to
            managing efficient logistics and ensuring the timely delivery of
            fresh, high-quality produce to the market.
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
                We collect farm data for smooth coordination and market access.
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
              <PackageCheck className="size-8 text-primary mb-4" aria-hidden />
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
  );
}
