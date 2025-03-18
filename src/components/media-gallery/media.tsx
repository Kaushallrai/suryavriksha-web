import Image from "next/image";

export default function Media() {
  return (
    <section className="py-16 md:py-32 bg-zinc-100 dark:bg-transparent">
      <div className="mx-auto max-w-8xl space-y-6 px-10 md:space-y-6 ">
        <h2 className="relative z-10 max-w-8xl text-4xl font-medium lg:text-3xl text-center">
          Media Gallery: Inside SuryaVriksha
        </h2>
        <p className="text-center mb-10">
          A Glimpse into Our Work, Products, and Achievements
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative bg-linear-to-b aspect-[16/9] rounded-2xl p-px  dark:from-zinc-700">
              <div className="relative w-full h-[400px]">
                {/* Image with fade effect */}
                <video
                  className="rounded-[15px] shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="700"
                  height="0"
                >
                  <source src="/assets/media/farm.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="relative space-y-4 self-center">
            <p className="text-muted-foreground text-lg">
              Focus on the Process
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  From seed to harvest, witness the hard work and passion that
                  go into creating quality produce at SuryaVriksha. A glimpse
                  into our farming journey.
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
