import React from "react";
import { PhotoView } from "react-photo-view";

const SeedsProductCard = ({ sp }) => {
  const { img, name, details } = sp;
  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col"
      data-aos="fade-up"
    >
      <PhotoView src={img}>
        <div className="relative h-56 w-full overflow-hidden bg-slate-100 cursor-pointer">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-[#0D1F12]/80 backdrop-blur-md text-[#8ED116] text-xs font-bold tracking-wide">
              Hybrid Seed
            </span>
          </div>
        </div>
      </PhotoView>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#71B002] mb-2.5">{name}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {details}
        </p>
      </div>
    </article>
  );
};

export default SeedsProductCard;
