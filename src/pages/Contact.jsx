import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Address",
    description: "Near Bus Stand, Hoshiarpur, Punjab, India",
  },
  {
    icon: Clock,
    title: "Opening Time",
    description: "Mon – Sun: 8:00 AM – 10:00 PM",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91 98765 43210",
  },
];

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[#5B3A2E] px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-[#D9A441]">Contact</h3>

          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-black"
            style={{ fontFamily: "Cardo, serif" }}
          >
            Every Great Conversation Starts with a Cup of Coffee
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#DDD2CA]">
            We're here to make every visit memorable. Reach out for
            reservations, events, collaborations, or simply to share your love
            for coffee.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#6B4637] px-6 py-20">
        <div className="max-w-6xl mx-auto"></div>
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-[#D9A441]">Get in Touch</h3>

          <h2
            className="mt-4 text-4xl md:text-5xl font-semibold text-black"
            style={{ fontFamily: "Cardo, serif" }}
          >
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#DDD2CA]">
            Have questions, feedback, or a special request? Fill out the form
            below, and our team at The Coffee House will get back to you as soon
            as possible.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block mb-3 font-semibold text-[#F8F4EF]">
              Name
            </label>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-2xl border border-[#7A5A50] bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-3 font-semibold text-[#F8F4EF]">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[#7A5A50] bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
              />
            </div>

            <div>
              <label className="block mb-3 font-semibold text-[#F8F4EF]">
                Phone
              </label>

              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full rounded-2xl border border-[#7A5A50] bg-transparent px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#C89B6E]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-3 font-semibold text-white">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Tell us what's on your mind..."
              className="w-full resize-none rounded-2xl bg-[#5B3A2E] border border-white/10 px-6 py-5 text-[#F8F4EF] placeholder:text-gray-400 outline-none focus:border-[#D9A441] transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#D9A441] py-5 text-xl font-semibold text-[#3B241B] hover:bg-[#C8942F] hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map & Contact Details */}
      <section className="w-full bg-[#7B5545] px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Google Map */}
          <div className="h-[420px] overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Rayat+Bahra+University&output=embed"
              className="w-full h-full rounded-3xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#D9A441]">Visit Us</h3>

            <h2
              className="mt-4 text-4xl md:text-5xl font-semibold text-black"
              style={{ fontFamily: "Cardo, serif" }}
            >
              Find Your Favourite Corner
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#DDD2CA]">
              We'd love to welcome you. Here are our contact details.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-6 rounded-3xl bg-[#5B3A2E] shadow-lg hover:bg-[#654234] hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#3B241B] flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#D9A441]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#F8F4EF]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 leading-7 text-[#DDD2CA]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
