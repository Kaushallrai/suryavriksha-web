import Image from "next/image";

export default function Business() {
  return (
    <section className="py-16 md:py-32 bg-zinc-100 dark:bg-transparent">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Our Global Markets and Expertise
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative bg-linear-to-b aspect-[16/9] rounded-2xl p-px dark:from-zinc-700">
              <div className="relative w-full h-[400px]">
                {/* Image with fade effect */}
                <Image
                  src="/assets/home/warehouse.jpg"
                  className="rounded-[15px] shadow-lg"
                  alt="markets illustration"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              At SuryaVriksha, we serve a diverse clientele across Asia, Europe,
              the Middle East, Africa, and North America.{" "}
              <span className="text-accent-foreground font-bold">
                We ensure timely delivery and competitive pricing
              </span>{" "}
              to support your business with efficiency and expertise.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re looking to import top-grade products or export
              to new markets, we&apos;re here to build long-term partnerships by
              delivering freshness, quality, and reliability.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  At SuryaVriksha, we are committed to delivering the highest
                  quality products with reliability and excellence. Our focus on
                  freshness, sustainability, and timely delivery ensures that we
                  meet the needs of our global clientele across all markets.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">SuryaVriksha</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
