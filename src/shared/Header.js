import React from "react";
import {
  IoLocationSharp,
  IoPhonePortraitOutline,
  IoTimeOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#0D1F12] text-slate-300 border-b border-white/10 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-base text-[#71B002] shrink-0" />
            <span>Kadim Gaziaron, Goshingga, Shreepur, Gazipur.</span>
          </div>

          <div className="flex items-center gap-2">
            <IoPhonePortraitOutline className="text-base text-[#71B002] shrink-0" />
            <a
              href="tel:+8801731106046"
              className="hover:text-white transition-colors"
            >
              Cell/WhatsApp: +880 1731106046
            </a>
          </div>

          <div className="flex items-center gap-2 md:justify-end text-slate-400">
            <IoTimeOutline className="text-base text-[#71B002] shrink-0" />
            <span>9:00 - 6:00 (GMT+6)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
