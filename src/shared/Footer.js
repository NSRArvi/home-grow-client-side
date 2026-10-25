import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-hg.png";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#0D1F12] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & About Us */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={Logo}
                alt="Home Grow"
                loading="lazy"
                className="h-11 w-auto object-contain"
              />
            </Link>
            <h2 className="text-lg font-bold text-[#8ED116] tracking-wide">
              About Us
            </h2>
            <p className="text-sm text-slate-300/90 leading-relaxed">
              Home Grow is an initiative in agriculture sector with a new vision
              was incorporated in the year of 2019 to enter in international
              seed market by exporting and contract seed production as well as
              increase food production of country and upgrade the farmer’s
              income.
            </p>
          </div>

          {/* Column 2: Production */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#8ED116] tracking-wide">
              Production
            </h2>
            <p className="text-sm text-slate-300/90 leading-relaxed">
              Home Grow has more than 100 experienced contract seed growers and
              5 confined farm for seed production. More than 200 acre of land is
              engaged for seed production.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                to="/process"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#71B002] hover:text-white transition-colors"
              >
                Production &amp; Processing
              </Link>
              <Link
                to="/about"
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#71B002] hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Column 3: Export */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#8ED116] tracking-wide">
              Export
            </h2>
            <p className="text-sm text-slate-300/90 leading-relaxed">
              We produce seed production of different op and hybrid vegetables
              as contract basis for different countries like Hongkong, Pakistan,
              Malaysia, S. Korea, China etc.
            </p>
            <div className="pt-2 flex flex-wrap gap-1.5">
              {["Hong Kong", "Pakistan", "Malaysia", "S. Korea", "China"].map(
                (country) => (
                  <span
                    key={country}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                  >
                    {country}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#8ED116] tracking-wide">
              Contact Us
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <IoMailOutline className="text-lg text-[#71B002] shrink-0 mt-0.5" />
                <a
                  href="mailto:info@homegrowbd.com"
                  className="hover:text-white transition-colors break-all"
                >
                  Email: info@homegrowbd.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoCallOutline className="text-lg text-[#71B002] shrink-0 mt-0.5" />
                <a
                  href="tel:01731106046"
                  className="hover:text-white transition-colors"
                >
                  Phone: 01731106046
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="text-lg text-[#71B002] shrink-0 mt-0.5" />
                <span>Location: Gaziaron, Goshingga, Shreepur, Gazipur.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>
            Copyright reserved by{" "}
            <span className="text-[#8ED116] font-semibold">Home Grow 2022</span>
          </p>
          <p>
            Design and Developed by{" "}
            <span className="text-[#8ED116] font-semibold">NSR DevZone</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
