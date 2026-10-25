import React from "react";
import { Link } from "react-router-dom";
import comingSoonAnim from "../anim/coming-soon.json";
import Lottie from "lottie-react";
import { HiArrowLeft } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const ComingSoon = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF7] px-4 py-12 text-center">
      <PageMeta
        title="Coming Soon | New Agricultural Products - Home Grow"
        description="We are cultivating this section with upcoming poultry, duck, and agricultural products from Home Grow."
      />
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
        <Lottie
          animationData={comingSoonAnim}
          className="max-h-72 mx-auto"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4">
          Coming <span className="text-[#71B002]">Soon</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          We are cultivating this section with new products and updates.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#71B002] hover:bg-[#528200] text-white font-semibold text-sm transition-colors"
          >
            <HiArrowLeft />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
