import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
const carouselImages = [
  {
    src: "/home.1.jpg",
    alt: "Coffee 1",
  },
  {
    src: "/home.2.jpg",
    alt: "Coffee 2",
  },
  {
    src: "/home.3.jpg",
    alt: "Coffee 3",
  },
];

const Home = () => {
  const navigate = useNavigate();

 
  return (
    <>
    {/* hero */}
      <section>
  <div
    className="relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/WhatsApp Image 2026-07-14 at 9.25.16 AM.jpeg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent"></div>

    {/* Content */}
    <div className="relative z-10 flex items-center h-full px-6 sm:px-10 lg:px-20 py-24">
      <div className="max-w-xl lg:text-left p-8">
        <p className="mb-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#D9A441]">
          Hoshiarpur, Punjab
        </p>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#F8F4EF]"
          style={{ fontFamily: "Cardo, serif" }}
        >
          Fresh Coffee,
          <br />
          Cozy Moments.
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-7 text-[#DDD2CA]">
          The finest handcrafted coffee in Hoshiarpur – roasted with care,
          poured with love.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-6 py-3 rounded-full bg-[#D9A441] text-black font-semibold">
            View Menu
          </button>

          <button className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
            Visit Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* signature coffee */}
<section className="bg-[#7B5545] py-24">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <p className="text-[#DDD2CA] uppercase tracking-[5px] text-sm font-semibold">
        Our Specialties
      </p>

      <h2
        className="mt-4 text-4xl md:text-5xl text-[#F8F4EF]"
        style={{ fontFamily: "Cardo, serif" }}
      >
        Signature Coffee Collection
      </h2>

      <p className="mt-6 text-lg leading-8 text-[#DDD2CA] max-w-2xl mx-auto">
        From rich espressos to creamy lattes and refreshing cold brews,
        every drink is handcrafted with freshly roasted beans, premium
        ingredients, and a passion for exceptional coffee.
      </p>

      <div className="flex justify-center mt-8">
        <div className="w-20 h-[2px] bg-[#D9A441]"></div>
      </div>
    </div>

    {/* Carousel */}
    <div className="overflow-hidden rounded-[30px] border-2 border-[#D9A441]/30 shadow-2xl">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        autoPlay={true}
        interval={3500}
        stopOnHover={true}
        swipeable={true}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[550px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
</section>

{/* quote */}
<section className="bg-[#6B4637] py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="rounded-[32px] bg-[#5B3A2E] border border-[#D9A441]/20 shadow-2xl px-10 py-16 md:px-20 text-center">

      <div className="flex justify-center mb-8">
        <div className="w-20 h-[2px] bg-[#D9A441] rounded-full"></div>
      </div>

      <p className="text-[#D9A441] uppercase tracking-[6px] text-sm font-semibold">
        Our Philosophy
      </p>

      <h2
        className="mt-6 text-3xl md:text-5xl leading-relaxed text-[#F8F4EF]"
        style={{ fontFamily: "Cardo, serif" }}
      >
        “Coffee is more than a drink—it's a quiet moment,
        a warm conversation, and the beginning of unforgettable
        memories.”
      </h2>

      <p className="mt-10 text-[#DDD2CA] uppercase tracking-[5px] text-sm">
        — The Coffee House
      </p>

      <div className="flex justify-center mt-8">
        <div className="w-20 h-[2px] bg-[#D9A441] rounded-full"></div>
      </div>

    </div>
  </div>
</section>

      <section className="bg-[#5B3A2E] py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Small Heading */}
    <p className="text-[#D9A441] uppercase tracking-[6px] text-sm font-semibold">
      Our Story in Motion
    </p>

    {/* Main Heading */}
    <h2
      className="mt-4 text-4xl md:text-5xl lg:text-6xl text-[#F8F4EF]"
      style={{ fontFamily: "Cardo, serif" }}
    >
      Experience the Art of Coffee
    </h2>

    {/* Description */}
    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-[#DDD2CA]">
      Behind every perfect cup lies carefully selected coffee beans,
      skilled craftsmanship, and a passion for creating unforgettable
      moments. Discover the journey from bean to brew.
    </p>

    {/* Divider */}
    <div className="flex justify-center mt-8 mb-12">
      <div className="w-20 h-[2px] bg-[#D9A441] rounded-full"></div>
    </div>

  {/* Video */}
<div className="overflow-hidden rounded-[32px] border border-[#D9A441]/20 shadow-2xl">
  <video
    className="w-full h-[650px] object-cover"
    controls
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src="/coffee making video (online-video-cutter.com).mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

    {/* Bottom Quote */}
    <p
      className="mt-12 text-2xl text-[#F8F4EF]"
      style={{ fontFamily: "Cardo, serif" }}
    >
      "Every cup begins with passion and ends with a smile."
    </p>

    <p className="mt-3 text-[#D9A441] uppercase tracking-[4px] text-sm">
      — The Coffee Shop
    </p>

  </div>
</section>
    </>
  );
};

export default Home;