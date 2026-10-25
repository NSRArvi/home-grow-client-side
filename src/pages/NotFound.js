import React from "react";
import { Link } from "react-router-dom";
import notFound from "../anim/notfound.json";
import Lottie from "lottie-react";
import { HiArrowLeft } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const NotFound = () => {
  const style = {
    height: 360,
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF7] px-4 py-12 text-center">
      <PageMeta
        title="404 Page Not Found - Home Grow"
        description="The page you are looking for could not be found. Return to Home Grow to explore our seeds, Moringa, food, and jute products."
      />
      <div className="max-w-xl w-full bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
        <Lottie animationData={notFound} style={style} />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          Page Not <span className="text-[#71B002]">Found</span>
        </h1>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#71B002] hover:bg-[#528200] text-white font-semibold text-sm transition-colors"
          >
            <HiArrowLeft />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
