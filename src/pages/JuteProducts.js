import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import usaImg from "../../src/img/usa.jpg";
import { HiArrowLeft } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const JuteProducts = () => {
  const [jutesProduct, setJutesProduct] = useState([]);
  useEffect(() => {
    fetch("juteProducts.json")
      .then((res) => res.json())
      .then((data) => setJutesProduct(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <PageMeta
        title="Eco-Friendly Jute Products | Bags, Shoes & Lamps - Home Grow"
        description="Explore Home Grow's sustainable jute bags, shoes, and lamps showcased internationally at the Consulate Office of Bangladesh in Los Angeles."
      />
      <Link
        to="/product"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#71B002] mb-6 transition-colors"
      >
        <HiArrowLeft />
        <span>Back to Products</span>
      </Link>

      {/* Featured International Display Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 mb-14 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={usaImg}
            fetchpriority="high"
            className="w-full h-auto object-cover"
            alt="our_rp"
          />
        </div>
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider">
            Global Showcase
          </span>
          <p className="text-slate-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-semibold">
            Displaying home grow products at the Consulate Office of Bangladesh
            in Los Angeles, where the Consul General, Commercial Counselor, and
            representatives were present.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
        >
          <span className="text-[#71B002]">{jutesProduct?.length} Jutes</span>{" "}
          Products
        </h2>
      </div>

      <PhotoProvider>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jutesProduct?.map((jp, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
              data-aos="fade-up"
            >
              <PhotoView src={jp.img}>
                <div className="h-60 w-full overflow-hidden bg-slate-100 cursor-pointer">
                  <img
                    src={jp.img}
                    alt={jp.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </PhotoView>
              <div className="p-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#71B002]">{jp.name}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Eco Jute
                </span>
              </div>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default JuteProducts;
