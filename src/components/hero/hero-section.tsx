import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { InfiniteSlider } from "../../../components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "../../../components/motion-primitives/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden relative">
        {/* Background Image covering both sections */}
        <div className="absolute inset-0 z-0 h-full">
          <Image
            src="/assets/home/herosectionsv.jpeg?height=1080&width=1920"
            alt="Fresh produce background"
            fill
            priority
            className="object-cover"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <section className="relative z-10">
          <div className="pb-24 pt-12 md:pb-28 lg:pb-24 lg:pt-34">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-3xl font-medium text-white md:text-5xl lg:mt-16 xl:text-5xl">
                  Global Trade in Fresh Produce & Premium Groceries
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-white/90">
                  SuryaVriksha connects markets worldwide with top-quality
                  fruits, vegetables, and grocery items—sustainably sourced and
                  delivered fresh.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    className="px-5 text-base  "
                  >
                    <Link href="#intro">
                      <span className="text-nowrap">Explore more</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="relative z-10 pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-white/20 md:pr-6">
                <p className="text-end text-md text-white">
                  Our Trusted Partners
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src="/assets/partners/1.png"
                      alt="Shivansh Group"
                      height={20}
                      width={100} // Ensures proper rendering
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src="/assets/partners/2.png"
                      alt="Agrione Nepal"
                      height={20}
                      width={100}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto invert"
                      src="/assets/partners/4.png"
                      alt="Neel Saraswati"
                      height={20}
                      width={100}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src="/assets/partners/5.png"
                      alt="Sattyam International Services"
                      height={20}
                      width={100}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src="/assets/partners/6.png"
                      alt="Carrefour"
                      height={20}
                      width={100}
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-20 w-auto"
                      src="/assets/partners/7.png"
                      alt="Nepal Seed Agro"
                      height={20}
                      width={100}
                    />
                  </div>
                </InfiniteSlider>

                {/* Gradient Effects */}
                <div className="from-background/10 absolute inset-y-0 left-0 w-20 bg-gradient-to-r"></div>
                <div className="from-background/10 absolute inset-y-0 right-0 w-20 bg-gradient-to-l"></div>

                {/* Progressive Blur Effect */}
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
