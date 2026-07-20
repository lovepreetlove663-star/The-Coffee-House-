import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlefn = () => {
    navigate("/menu");
  };
  const handlecontact = () => {
    navigate("/contact");
  };

  return (
    <section>
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "url('/WhatsApp Image 2026-07-14 at 9.25.16 AM.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full min-h-[calc(100vh-80px)] flex flex-row items-center justify-between px-20 pt-24 relative box-border">
          <div className="max-w-xl flex flex-col items-start text-left z-10">
            <p className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-3">
              Hoshiarpur, Punjab
            </p>

            <h1 className="text-white text-6xl font-serif font-bold leading-tight mb-4">
              Fresh Coffee. <br />
              <span className="text-amber-100/90">Cozy Moments.</span>
            </h1>

            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              The finest handcrafted coffee in Hoshiarpur – roasted with care,
              poured with love.
            </p>

            <div className="flex items-center gap-4">
              <button
                className="bg-amber-600 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-500 transition-all"
                onClick={handlefn}
              >
                View Menu
              </button>
              <button
                className="bg-transparent text-white border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                onClick={handlecontact}
              >
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
