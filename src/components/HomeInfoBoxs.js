import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  HiOutlineBeaker,
  HiOutlineCog8Tooth,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const HomeInfoBoxs = () => {
  const cards = [
    {
      title: "Our R&D Activities",
      desc: "We work for farmers satisfaction with stress tolerance products farmers/foreign customers demand research job",
      link: "/process",
      icon: HiOutlineBeaker,
      aos: "fade-up",
    },
    {
      title: "Production & Processing",
      desc: "Production Home Grow has more than 100 experienced contract seed growers and 5 confined farm.",
      link: "/process",
      icon: HiOutlineCog8Tooth,
      aos: "fade-down",
    },
    {
      title: "Our Departments",
      desc: "R&D Stock seed Production Processing and quality control PDS, Demonstration and Promotion Sales and Marketing",
      link: "/process",
      icon: HiOutlineBuildingOffice2,
      aos: "fade-up",
    },
  ];

  return (
    <section className="relative z-20 mt-10 sm:mt-14 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.title}
              className="group relative bg-white hover:bg-[#0D1F12] rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-100 hover:border-[#71B002]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#71B002]/10 group-hover:bg-[#71B002] text-[#71B002] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
                  <IconComponent className="text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">
                  {card.title}
                </h2>
                <p className="mt-3 text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm sm:text-base transition-colors">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#71B002] group-hover:text-[#8ED116]">
                  Explore More
                </span>
                <Link
                  to={card.link}
                  aria-label={`Learn more about ${card.title}`}
                  className="w-10 h-10 rounded-full border border-slate-200 group-hover:border-[#8ED116] group-hover:bg-[#71B002] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <AiOutlineArrowRight className="text-xl group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeInfoBoxs;
