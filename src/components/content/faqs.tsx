export default function FAQs() {
  return (
    <section className="scroll-py-16 py-12 md:scroll-py-26 md:py-26 bg-zinc-100 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left ">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p>
              Learn more about how we operate and answer your most common
              queries.
            </p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">What is the procurement process?</h3>
              <p className="text-muted-foreground mt-4">
                Our procurement process begins with understanding the
                farmer&apos;s practices and harvest schedule. We offer on-field
                purchases, paying farmers on the spot once the produce is
                verified.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                How does the transportation process work?
              </h3>
              <p className="text-muted-foreground mt-4">
                After procurement, fresh produce is transported to our Local
                Collection Centres (LCC) while maintaining a cold chain. The
                produce is stored and organized at the LCC before being
                dispatched to the central warehouse.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                What measures are taken for food safety?
              </h3>
              <p className="text-muted-foreground my-4">
                We ensure food safety by educating farmers on safe agricultural
                practices and proper handling. All produce is stored under
                optimal conditions to maintain freshness.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Can I track my order?</h3>
              <p className="text-muted-foreground mt-4">
                Yes! All our produce is labeled with QR codes for traceability.
                You can scan the code to track the progress of your order.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">Do you offer retail delivery?</h3>
              <p className="text-muted-foreground mt-4">
                We provide retail delivery through our outlets in the Kathmandu
                Valley. Our logistics ensure timely delivery based on demand.
              </p>
            </div>
            <div className="py-6">
              <h3 className="font-medium">
                What is the return policy for the produce?
              </h3>
              <p className="text-muted-foreground mt-4">
                If there is an issue with the quality of your produce, we offer
                returns within 48 hours of delivery. Please contact our customer
                support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
