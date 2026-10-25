import React from "react";
import missionImg from "../img/mission.jpg";
import opportunitiesImg from "../img/opportunities.jpg";
import ceoImg from "../img/ceoImg.jpeg";
import Lottie from "lottie-react";
import managementAnim from "../anim/management_anim.json";
import { HiCheckBadge, HiGlobeAsiaAustralia } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const AboutUs = () => {
  const style = {
    height: 300,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
      <PageMeta
        title="About Us | Our Mission, Opportunities & Leadership - Home Grow"
        description="Learn about Home Grow's mission in climate-resilient seed breeding, agricultural opportunities in Bangladesh, and President & Agriculturist Parvin Sultana."
      />
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Company Profile
        </span>
        <h1
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 1.5rem + 2.5vw, 3.25rem)" }}
        >
          About <span className="text-[#71B002]">Us</span>
        </h1>
      </div>

      {/* 1. Our Mission Section */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 overflow-hidden rounded-2xl shadow-md">
          <img
            src={missionImg}
            alt="Our Mission"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 space-y-5">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our <span className="text-[#71B002]">Mission</span>
          </h2>
          <div className="inline-flex items-center gap-2 text-[#71B002] font-bold text-sm uppercase tracking-wider">
            <HiCheckBadge className="text-xl" />
            <span>Sustainable Agriculture &amp; Seed Innovation</span>
          </div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[70ch]">
            Breeding for high yielding varieties to adapt with climatic change.
            Increase food production by producing and supplying quality seed for
            domestic and international market. Use of modern technology for
            agricultural research. Increase average nutritional uptake for poor
            people. Reduce import cost for seed in Bangladesh and earning
            foreign currency by exporting seed.
          </p>
        </div>
      </div>

      {/* 2. Our Opportunities Section */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 lg:order-2 overflow-hidden rounded-2xl shadow-md">
          <img
            src={opportunitiesImg}
            alt="Our Opportunities"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:order-1 space-y-5">
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            Our <span className="text-[#71B002]">Opportunites</span>
          </h2>
          <div className="inline-flex items-center gap-2 text-[#71B002] font-bold text-sm uppercase tracking-wider">
            <HiGlobeAsiaAustralia className="text-xl" />
            <span>Domestic &amp; Global Seed Potential</span>
          </div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-[70ch]">
            Food will be the major issue in future for whole world. Quality seed
            is the main component of food production. Adverse weather, quality
            and area of cultivable land decreasing drastically, moreover labour,
            irrigation, crop protective components crisis etc also becoming big
            problem. In such situation, Bangladesh has a good opportunity to
            concentrate on quality seed production for domestic and export
            market.
          </p>
        </div>
      </div>

      {/* 3. Management Profile Section */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 flex flex-col sm:flex-row items-center gap-8">
          <div className="shrink-0">
            <img
              src={ceoImg}
              alt="Parvin Sultana, President of Home Grow"
              loading="lazy"
              className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-3xl shadow-xl border-4 border-[#71B002]/20"
            />
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <h2
              className="font-extrabold text-slate-900 tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
            >
              Management <span className="text-[#71B002]">Profile</span>
            </h2>
            <span className="inline-block px-3 py-1 rounded-full bg-[#0D1F12] text-[#8ED116] text-xs font-bold uppercase tracking-wider">
              President &amp; Agriculturist
            </span>
            <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
              Home Grow is a proprietorship organisation, owned by{" "}
              <span className="font-extrabold text-[#71B002]">
                Parvin Sultana
              </span>{" "}
              , an agriculturist. She is the President of Home Grow. She is
              working with her organisation to ensure healthy food, fruits,
              vegetables.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <Lottie animationData={managementAnim} style={style} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
