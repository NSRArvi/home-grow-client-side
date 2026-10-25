import React from "react";
import ourPPImg from "../img/production.jpg";
import ourRD from "../img/r&d.jpg";
import exportImg from "../img/export.jpg";
import ourDeptImg from "../img/department.jpg";
import { HiCheckCircle } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const Process = () => {
  const departments = [
    "R&D",
    "Stock seed",
    "Production",
    "Processing and quality control",
    "PDS, Demonstration and Promotion",
    "Sales and Marketing",
    "International correspondence",
    "Account, Finance and Commercial",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
      <PageMeta
        title="Our Process | Production, Processing, R&D & Export - Home Grow"
        description="Explore Home Grow's seed production across 150+ acres, mechanical seed processing, 20,000+ germplasm R&D gene bank, and international export operations."
      />
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Our R&amp;D Activities &amp; Operations
        </span>
        <h1
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 1.5rem + 2.5vw, 3.25rem)" }}
        >
          Our <span className="text-[#71B002]">Process</span>
        </h1>
      </div>

      {/* 1. Production & Processing Block */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={ourPPImg}
            alt="Our Production & Processing"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our Production &amp;{" "}
            <span className="text-[#71b002]">Processing</span>
          </h2>
          <div className="p-5 rounded-2xl bg-white border">
            <h3 className="text-2xl font-bold text-[#71b002] mb-2">
              Production
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Home Grow has more than 80 experienced contract seed growers and 3
              confined farm for seed production. A dedicated production team of
              agriculturist is producing all kind of seed specially hybrid seed.
              More than 150 acre of land is engaged for seed production.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border">
            <h3 className="text-2xl font-bold text-[#71b002] mb-2">
              Processing
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Processing department is responsible to ensure very high quality
              of seed suitable for export market. We have facilities of
              mechanical drying, cleaning, grading, treating, coating etc. We
              also have dehumidified cold room for seed preservation.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Our R&D Activities Block */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our R&amp;D <span className="text-[#71b002]">Activities</span>
          </h2>

          <div className="p-5 rounded-2xl bg-white border">
            <h3 className="text-2xl font-bold text-[#71b002] mb-2">
              Our R&amp;D
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Farmers/foreign customers demand Research job New variety PDS,
              Demonstration, adaptive trials Germplasm collection and
              preservation Maintenance breeding and breeder seed production.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border">
            <h3 className="text-2xl font-bold text-[#71b002] mb-2">We have</h3>
            <p className="text-slate-600 leading-relaxed">
              3 research farm in Thakurgao, Bogra and Panchagar 6 Breeders 10
              breeder assistant Around 20000 germplasm and a gene bank.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={ourRD}
            alt="Our R&D Activities"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 3. Our Export And Foreign Activities Block */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={exportImg}
            alt="Our Export And Foreign Activities"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our Export And{" "}
            <span className="text-[#71B002]">Foreign Activities</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[70ch]">
            One of the major objectives of Home Grow is to export, develop new
            breeds for other countries and contract of seed production for many
            companies. We have several own varieties of different crops which
            are very popular in Pakistan, Malaysia, China, S. Korea etc. We
            produce seed of different hybrid vegetables as contract basis for
            different countries like Hongkong, Pakistan, Malaysia, S. Korea,
            China etc.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Hong Kong", "Pakistan", "Malaysia", "S. Korea", "China"].map(
              (country) => (
                <span
                  key={country}
                  className="px-3.5 py-1.5 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold tracking-wide"
                >
                  {country}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* 4. Our Departments Block */}
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our <span className="text-[#71B002]">Departments</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 overflow-hidden rounded-2xl shadow-md">
            <img
              src={ourDeptImg}
              alt="Our Departments"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {departments.map((dept) => (
                <li
                  key={dept}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white border text-slate-800 font-semibold text-sm sm:text-base"
                >
                  <HiCheckCircle className="text-xl text-[#71B002] shrink-0 mt-0.5" />
                  <span>{dept}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
