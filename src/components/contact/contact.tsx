import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className=" w-full px-8 lg:px-0">
        <div className="flex flex-col items-center gap-6 mb-10 lg:mb-0 md:mb-0">
          <h1 className="text-4xl font-semibold lg:text-5xl text-center">
            Contact SuryaVriksha Sales
          </h1>
          <p className=" max-w-4xl text-center">
            Our team at SuryaVriksha is here to assist you in finding the best
            solutions for your business needs, offering competitive pricing,
            timely delivery, and top-grade products for your global operations.
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row justify-evenly sm:items-center ">
          <div className=" space-y-8 text-center self-center">
            <div className="flex items-center  gap-4">
              <MapPin className="text-primary" size={24} />
              <span className="text-gray-800 dark:text-white">
                Nashik, Maharastra, India
              </span>
            </div>
            <div className="flex items-center  gap-4">
              <Phone className="text-primary" size={24} />
              <span className="text-gray-800 dark:text-white">
                +977 9851114767 &nbsp;&nbsp;|&nbsp; +91 9557237365
              </span>
            </div>
            <div className="flex items-center  gap-4">
              <Mail className="text-primary" size={24} />
              <span className="text-gray-800 dark:text-white">
                info@suryavriskha.com
              </span>
            </div>
          </div>
          <Card className=" mt-12 !max-w-lg p-8 shadow-md sm:p-12 md:min-w-md">
            <form
              action=""
              className="**:[&>label]:block  space-y-6 *:space-y-3"
            >
              <div>
                <Label htmlFor="name">Full name*</Label>
                <Input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter you full name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <Input type="tel" id="phone" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <Label htmlFor="msg">Message</Label>
                <Textarea id="msg" rows={3} />
              </div>

              <Button variant="ghost" className="border border-primary w-full">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
