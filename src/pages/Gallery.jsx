import React from "react";

const galleryImages = [
  {
    src: "/gallery/img.1.jpg",
    className: "row-span-2 h-155",
  },
  {
    src: "/gallery/img.2.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/Nutella Tiramisu.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.4.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.8.jpg",
    className: "row-span-2 h-155",
  },
  {
    src: "/gallery/img.6.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.7.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.5.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.9.jpg",
    className: "h-75",
  },
  {
    src: "/gallery/img.3.jpg",
    className: "h-75",
  },
];

const Gallery = () => {
  return (
    <>
      <section className="py-20 bg-[#5B3A2E]">
        <div className="text-center gap-2">
          <h3 className="text-[#D9A441] font-semibold text-lg">Gallery</h3>
          <h1
            className="text-3xl md:text-5xl font-semibold mt-3 "
            style={{ fontFamily: "Cardo, serif" }}
          >
            A Glimpse Into The Coffee House
          </h1>
          <p className="text-lg md:text-xl text-white mt-4">
            Explore our cozy atmosphere, freshly brewed coffee, mouthwatering
            desserts, and the people who make every cup unforgettable.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#5B3A2E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
