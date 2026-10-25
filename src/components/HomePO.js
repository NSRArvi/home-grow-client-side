import React from "react";
import { Link } from "react-router-dom";
import opportutines from "../img/opportunities.jpg";
import management from "../img/department.jpg";
import po from "../img/po.jpg";
import { HiArrowRight } from "react-icons/hi2";

const HomePO = () => {
  return (
    <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Leadership &amp; Vision
        </span>
        <h2
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
        >
          Profile &amp; <span className="text-[#71B002]">Opportunites</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          {/* Management Profile Card */}
          <div
            data-aos="fade-up"
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src={management}
                  alt="Management Profile"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#71B002] mb-2.5">
                  Management Profile
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Parvin Sultana is a dynamic and enthusiastic agriculturist
                  having over 20 ...
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 sm:px-7 sm:pb-7">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#71B002] hover:bg-[#528200] text-white text-sm font-semibold transition-colors"
              >
                <span>Learn More</span>
                <HiArrowRight />
              </Link>
            </div>
          </div>

          {/* Opportunities Card */}
          <div
            data-aos="fade-up"
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="h-56 overflow-hidden">
                <img
                  src={opportutines}
                  alt="Opportunities"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-bold text-[#71B002] mb-2.5">
                  Opportunities
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Food will be the major issue in future for whole world.
                  Quality seed is the ...
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 sm:px-7 sm:pb-7">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#71B002] hover:bg-[#528200] text-white text-sm font-semibold transition-colors"
              >
                <span>Learn More</span>
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Visual Column */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="h-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/60">
            <img
              src={po}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              alt="Home Grow agricultural excellence"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePO;
