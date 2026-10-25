import React from "react";
import productionImg from "../img/production.jpg";

const HomePP = () => {
  return (
    <section className="bg-[#0D1F12] text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/20 border border-[#8ED116]/30 text-[#8ED116] text-xs font-bold uppercase tracking-wider mb-3">
            Quality Assurance
          </span>
          <h2
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
          >
            Our Production &amp;{" "}
            <span className="text-[#8ED116]">Processing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6" data-aos="fade-up">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={productionImg}
                alt="Seed production and processing"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6" data-aos="fade-up">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#8ED116] mb-3">
                Production
              </h3>
              <p className="text-slate-300 leading-relaxed text-base max-w-[70ch]">
                Home Grow has more than 80 experienced contract seed growers and
                3 confined farm for seed production. A dedicated production team
                of agriculturist is producing all kind of seed specially hybrid
                seed. More than 150 acre of land is engaged for seed production.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#8ED116] mb-3">
                Processing
              </h3>
              <p className="text-slate-300 leading-relaxed text-base max-w-[70ch]">
                Processing department is responsible to ensure very high quality
                of seed suitable for export market. We have facilities of
                mechanical drying, cleaning, grading, treating, coating etc. We
                also have dehumidified cold room for seed preservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePP;
