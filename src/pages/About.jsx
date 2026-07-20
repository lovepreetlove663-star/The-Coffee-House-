import React from "react";
import { Coffee, ChefHat, Users, Heart } from "lucide-react";
// import Footer from "../components/Footer";
const features = [
  {
    icon: Coffee,
    title: "Freshly Roasted Beans",
    description:
      "Small-batch roasted every week for rich aroma, exceptional freshness, and bold flavour.",
  },
  {
    icon: ChefHat,
    title: "Skilled Baristas",
    description:
      "Experienced baristas crafting every cup with passion, precision, and care.",
  },
  {
    icon: Users,
    title: "Local Community",
    description:
      "A welcoming place where students, families, professionals, and friends come together.",
  },
  {
    icon: Heart,
    title: "Premium Ingredients",
    description:
      "Made with carefully selected Arabica beans, fresh dairy, and the finest ingredients.",
  },
];

const features2 = [
  {
    icon:"/coffee beans.png" ,
    title:"premiun Coffee Beans",
    description:"Single-origin Arabica, roasted fresh in small batches.",
  },
  {
    icon:"/fresh bakery.png",
    title:"Fresh Bakery",
    description:"Warm breads and pastries baked daily on-site.",
  },
  {
    icon:"/fast delivery.png",
    title:"Fast Service",
    description:"Your order, made right and handed over quickly.",
  },
  {
    icon:"/wi-fi.png",
    title:"Free WiFi",
    description:"Stay connected while you sip and unwind.",
  },
  {
    icon:"/smile.png",
    title:"Comfortable Seating",
    description:"Cozy corners for work, catch-ups or quiet reading.",
  },
  {
    icon:"/friendly-staff.png",
    title:"Friendly Staff",
    description:"A team that remembers your usual order.",
  },
];

const About = () => {
  return (
    <div>
  {/* Hero Section */}
  <section className="bg-[#5B3A2E] px-6 py-20">
    <div
      className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative flex items-center h-full px-8 md:px-16">
        <div className="max-w-2xl">
          <h3 className="text-lg font-semibold text-[#D9A441]">
            About Us
          </h3>

          <h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F8F4EF]"
            style={{ fontFamily: "Cardo, serif" }}
          >
            The Story Behind Every Cup
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-8 text-[#DDD2CA]">
            From a single espresso machine to Hoshiarpur's favourite coffee
            corner.
          </p>
        </div>
      </div>
    </div>
  </section>

      
            <section className="bg-[#6B4637] px-6 py-20">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

    {/* Left Side - Image */}
    <div className="relative mx-auto w-full max-w-[500px]">
      <img
        src="/nathan-dumlao-6VhPY27jdps-unsplash.jpg"
        alt="Coffee Shop"
        className="h-[500px] w-full rounded-xl object-cover"
      />

      <div className="absolute -bottom-6 -right-6 rounded-xl bg-[#111111] p-6 text-white">
        <h3 className="text-2xl font-semibold text-[#F8F4EF]">7+</h3>
        <p className="mt-1 text-[#DDD2CA]">
          Years serving Hoshiarpur
        </p>
      </div>
    </div>

    {/* Right Side - Content */}
    <div>
      <span className="text-lg font-semibold text-[#D9A441]">
        Our Story
      </span>

      <h2
        className="mt-2 text-3xl font-bold text-black md:text-4xl"
        style={{ fontFamily: "Cardo, serif" }}
      >
        More Than Coffee, A Place to Belong
      </h2>

      <p className="mt-5 leading-8 text-[#DDD2CA]">
        The Coffee Shop was born from a simple idea—to create a warm,
        welcoming space where every cup of coffee brings people together.
        Located in the heart of Hoshiarpur, we serve freshly roasted
        coffee, handcrafted beverages, and delicious treats made with
        care. Whether you're catching up with friends, working on your
        next big idea, or simply taking a break, our café is a place
        where everyone feels at home.
      </p>

      {/* Features */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#5B3A2E] p-5 transition duration-300 hover:bg-[#654234]"
            >
              <Icon className="h-8 w-8 flex-shrink-0 text-[#D9A441]" />

              <div>
                <h4 className="text-xl font-semibold text-[#F8F4EF]">
                  {feature.title}
                </h4>

                <p className="mt-2 text-[#DDD2CA]">
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

            
            
          <section className="w-full px-6 py-20 bg-[#7B5545]">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="font-semibold text-lg text-[#D9A441]">
        Why Choose Us
      </h3>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-black"
      style={{ fontFamily: "Cardo, serif" }}>
        Why You'll Love The Coffee House
      </h2>

      <p className="text-lg leading-8 mt-5 text-[#DDD2CA]">
        Great coffee is only the beginning. We combine premium ingredients,
        skilled baristas, cozy interiors, and friendly service to create a
        space where every guest feels welcome, relaxed, and inspired.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      {features2.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-5 p-6 rounded-2xl bg-[#6B4637] hover:bg-[#745245] hover:shadow-2xl transition duration-300"
          >
          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
  <img
    src={feature.icon}
    alt={feature.title}
    className="w-12 h-12 object-contain"
  />
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
      ))}

    </div>

  </div>
</section>
         
          {/* <Footer /> */}
        </div>
      
    
  );
};

export default About;