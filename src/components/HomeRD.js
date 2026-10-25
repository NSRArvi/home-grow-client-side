import React from "react";
import rdImg from "../img/r&d.jpg";
import { HiCheckCircle } from "react-icons/hi2";

const HomeRD = () => {
  const rdPoints = [
    "Farmers/foreign customers demand",
    "Research job",
    "New variety",
    "PDS, Demonstration, adaptive trials",
    "Germplasm collection and preservation",
    "Maintenance breeding and breeder seed production.",
  ];

  const weHavePoints = [
    "3 research farms in Thakurgao, Bogra and Panchagar",
    "6 Breeders",
    "10 breeder assistant",
    "Around 20000 germplasm and a gene bank",
  ];

  return (
    <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Innovation &amp; Genetics
        </span>
        <h2
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
        >
          Our <span className="text-[#71B002]">R&amp;D</span> Activities
        </h2>
      </div>

      <div
        className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        data-aos="fade-up"
      >
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-[#71B002] mb-4">Our R&amp;D</h3>
            <ul className="space-y-2.5">
              {rdPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
                >
                  <HiCheckCircle className="text-xl text-[#71B002] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-[#71B002] mb-4">We have</h3>
            <ul className="space-y-2.5">
              {weHavePoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700 text-sm sm:text-base"
                >
                  <HiCheckCircle className="text-xl text-[#71B002] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6" data-aos="fade-up">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/60">
            <img
              src={rdImg}
              alt="Our R&D Activities"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRD;
