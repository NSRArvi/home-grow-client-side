import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Slider1 from "../img/slider (5).jpg";
import Slider2 from "../img/slider (6).jpg";
import Slider3 from "../img/slider (7).jpg";
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUpRight,
} from "react-icons/hi2";

const HomeSlider = () => {
  const slidersData = [
    {
      title: "Home Grow",
      subtitle: "Cultivating Organic Seeds & Sustainable Rooftop Farming",
      desc: "Welcome to Home Grow, where we cultivate organic seeds and promote rooftop gardening. Our vision is to empower individuals with sustainable agriculture solutions for a greener future.",
      image: Slider1,
    },
    {
      title: "Breeding",
      subtitle: "Global Contract Seed Production & International Export",
      desc: "Expanding our reach globally, we export premium organic seeds to Hong Kong, Pakistan, Malaysia, South Korea, and China. Join us in spreading greenery worldwide.",
      image: Slider2,
    },
    {
      title: "Export",
      subtitle: "Climate-Resilient Research, Breeding & Crop Innovation",
      desc: "At Home Grow, we specialize in breeding high-yielding seed varieties resilient to climate change. Our commitment to innovation drives us to create superior seeds for sustainable farming practices.",
      image: Slider3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slidersData.length);
  }, [slidersData.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + slidersData.length) % slidersData.length
    );
  }, [slidersData.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative w-full h-[540px] sm:h-[620px] lg:h-[82vh] max-h-[860px] overflow-hidden bg-[#0D1F12]"
      aria-label="Featured Highlights"
    >
      {slidersData.map((s, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={s.title}
            id={`slide${i}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image positioned absolutely behind text */}
            <img
              alt={s.title}
              src={s.image}
              {...(i === 0
                ? { fetchpriority: "high" }
                : { fetchpriority: "low", loading: "lazy" })}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Multi-layered modern dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F12]/95 via-[#0D1F12]/75 to-black/45 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F12]/90 via-black/25 to-black/35 z-10" />

            {/* Foreground Text Overlay */}
            <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-14">
              <div className="max-w-3xl space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <h1
                    className="text-white font-extrabold tracking-tight leading-[1.1]"
                    style={{
                      fontSize: "clamp(2.25rem, 1.5rem + 3.5vw, 4.5rem)",
                    }}
                  >
                    <span className="text-[#8ED116]">{s.title}</span>
                    <span className="text-white font-bold text-xl sm:text-2xl lg:text-3xl block mt-2">
                      {s.subtitle}
                    </span>
                  </h1>
                </div>

                <p className="text-slate-100 text-base sm:text-lg lg:text-xl leading-relaxed max-w-[65ch] font-normal">
                  {s.desc}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    to="/product"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#71B002] hover:bg-[#8ED116] hover:text-[#0D1F12] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#71B002]/30"
                  >
                    <span>Explore Our Products</span>
                    <HiArrowUpRight className="text-lg" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300"
                  >
                    <span>About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controls & Slide Indicators */}
      <div className="absolute z-30 bottom-14 sm:bottom-16 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Progress Dots */}
        <div className="flex items-center gap-2.5">
          {slidersData.map((s, idx) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${s.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-10 bg-[#8ED116]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#71B002] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-200"
          >
            <HiArrowLeft className="text-xl" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-[#71B002] text-white border border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-200"
          >
            <HiArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
