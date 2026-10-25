import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

export default function VagetablesProd() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <PageMeta
        title="Vegetable & Moringa Superfood Products - Home Grow"
        description="Browse Home Grow's organic vegetable and Moringa superfood wellness product lines cultivated with sustainable farming practices."
      />
      <div className="mb-10 pb-6 border-b border-slate-200">
        <Link
          to="/product"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#71B002] mb-3 transition-colors"
        >
          <HiArrowLeft />
          <span>Back to Products</span>
        </Link>
        <h2
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
        >
          <span className="text-[#71B002]">Vagetables</span> Products
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/moringa" className="group block">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-md hover:shadow-2xl border border-slate-200/70 transition-all duration-300">
            <img
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ7kV3DCZjkF6OiHaCAbK8-UipNQ77VLHAjVp10QU8pIeUZASelMOCv6RaYwh0rKwJc4rPm1-NH62ESRSI"
              alt="Moringa Products"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F12]/90 via-[#0D1F12]/40 to-transparent flex items-end justify-between p-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#71B002]/30 border border-[#8ED116]/40 text-[#8ED116] text-xs font-bold uppercase tracking-wider mb-2">
                  Superfood Wellness
                </span>
                <p className="text-white font-bold text-2xl">
                  Moringa Products
                </p>
              </div>
              <span className="w-11 h-11 rounded-full bg-[#71B002] text-white flex items-center justify-center shadow-lg">
                <HiArrowUpRight className="text-xl" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
