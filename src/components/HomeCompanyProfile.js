import React from "react";
import image1 from "../img/home (1).jpg";
import image2 from "../img/home (2).jpg";
import slider1 from "../img/slider (1).jpg";

const HomeCompanyProfile = () => {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Who We Are
        </span>
        <h2
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
        >
          Company <span className="text-[#71B002]">Profile</span>
        </h2>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        data-aos="fade-up"
      >
        {/* Left Story & Featured Image */}
        <div className="lg:col-span-6 space-y-6">
          <div className="overflow-hidden rounded-3xl shadow-lg border border-slate-200/60">
            <img
              src={slider1}
              alt="Home Grow agricultural field"
              loading="lazy"
              className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-[75ch]">
              Home Grow is an initiative in agriculture sector with a new vision
              was incorporated in the year of 2022 to enter in international
              seed market by exporting and contract seed production as well as
              increase food production of country and upgrade the farmer’s
              income. Global warming as well as climate change is now becoming
              the burning issue for agriculture.
            </p>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-[75ch]">
              Keeping this in mind, Home Grow is giving special emphasize on
              stress tolerant product development. Our objective is not only to
              produce, process and supply of quality seed for farmer’s
              satisfaction, but also develop and disseminate the appropriate
              technologies for successful crop production, which is one of the
              corner stones of our mission.
            </p>
          </div>
        </div>

        {/* Right Stacked Bento Gallery */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-6">
          <div
            className="overflow-hidden rounded-3xl shadow-lg border border-slate-200/60"
            data-aos="fade-up"
          >
            <img
              src={image2}
              alt="Crop research and cultivation"
              loading="lazy"
              className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div
            className="overflow-hidden rounded-3xl shadow-lg border border-slate-200/60"
            data-aos="fade-up"
          >
            <img
              src={image1}
              alt="Sustainable seed farming"
              loading="lazy"
              className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCompanyProfile;
