import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageGallery from "react-image-gallery";
import { PhotoProvider, PhotoView } from "react-photo-view";
import PageMeta from "../shared/PageMeta";

const PhotoGallery = () => {
  const images = [
    {
      original:
        "https://i.ibb.co/nk8jcb6/Whats-App-Image-2024-06-12-at-10-22-30-46ec7611.jpg",
      thumbnail:
        "https://i.ibb.co/nk8jcb6/Whats-App-Image-2024-06-12-at-10-22-30-46ec7611.jpg",
    },
    {
      original:
        "https://i.ibb.co/pRM7PcV/Whats-App-Image-2024-06-12-at-10-22-29-f9769f3a.jpg",
      thumbnail:
        "https://i.ibb.co/pRM7PcV/Whats-App-Image-2024-06-12-at-10-22-29-f9769f3a.jpg",
    },
    {
      original:
        "https://i.ibb.co/y0LBw7J/Whats-App-Image-2024-06-12-at-10-22-29-3c8d7779.jpg",
      thumbnail:
        "https://i.ibb.co/y0LBw7J/Whats-App-Image-2024-06-12-at-10-22-29-3c8d7779.jpg",
    },
    {
      original:
        "https://i.ibb.co/HK5qHsG/Whats-App-Image-2024-06-12-at-10-22-29-263e4e54.jpg",
      thumbnail:
        "https://i.ibb.co/HK5qHsG/Whats-App-Image-2024-06-12-at-10-22-29-263e4e54.jpg",
    },
    {
      original:
        "https://i.ibb.co/1LcyXb9/Whats-App-Image-2024-06-12-at-10-22-28-027f093c.jpg",
      thumbnail:
        "https://i.ibb.co/1LcyXb9/Whats-App-Image-2024-06-12-at-10-22-28-027f093c.jpg",
    },
    {
      original:
        "https://i.ibb.co/4mC8KKj/Whats-App-Image-2024-06-12-at-10-22-28-cfc03acf.jpg",
      thumbnail:
        "https://i.ibb.co/4mC8KKj/Whats-App-Image-2024-06-12-at-10-22-28-cfc03acf.jpg",
    },
    {
      original:
        "https://i.ibb.co/d7TKMbh/Whats-App-Image-2024-06-12-at-10-22-27-1d8d1387.jpg",
      thumbnail:
        "https://i.ibb.co/d7TKMbh/Whats-App-Image-2024-06-12-at-10-22-27-1d8d1387.jpg",
    },
    {
      original:
        "https://i.ibb.co/znRgk6D/Whats-App-Image-2024-06-12-at-10-22-27-56ce417c.jpg",
      thumbnail:
        "https://i.ibb.co/znRgk6D/Whats-App-Image-2024-06-12-at-10-22-27-56ce417c.jpg",
    },
    {
      original:
        "https://i.ibb.co/3c5MhpL/Whats-App-Image-2024-06-12-at-10-22-27-f04c5e02.jpg",
      thumbnail:
        "https://i.ibb.co/3c5MhpL/Whats-App-Image-2024-06-12-at-10-22-27-f04c5e02.jpg",
    },
    {
      original: "https://i.ibb.co/1bKcsL1/achivements-6.jpg",
      thumbnail: "https://i.ibb.co/1bKcsL1/achivements-6.jpg",
    },
    {
      original: "https://i.ibb.co/GcY11xX/achivements-5.jpg",
      thumbnail: "https://i.ibb.co/GcY11xX/achivements-5.jpg",
    },
    {
      original: "https://i.ibb.co/bF7hmp6/achivements-3.jpg",
      thumbnail: "https://i.ibb.co/bF7hmp6/achivements-3.jpg",
    },
    {
      original: "https://i.ibb.co/r7nCFcM/achivements-2.jpg",
      thumbnail: "https://i.ibb.co/r7nCFcM/achivements-2.jpg",
    },
    {
      original: "https://i.ibb.co/f8ZMmQG/achivements-1.jpg",
      thumbnail: "https://i.ibb.co/f8ZMmQG/achivements-1.jpg",
    },
  ];

  const { data: galleryImages } = useQuery({
    queryKey: ["imageGallery"],
    queryFn: () => fetch("imageGallery.json").then((res) => res.json()),
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">
      <PageMeta
        title="Gallery | Recent Achievements & Farm Highlights - Home Grow"
        description="Browse photos of Home Grow's recent agricultural awards, exhibitions, research farms, and seed cultivation activities across Bangladesh."
      />
      {/* Recent Achievements Section */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
            Milestones &amp; Recognition
          </span>
          <h1
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}
          >
            Our Recent <span className="text-[#71B002]">Achivements</span>
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 overflow-hidden">
          <ImageGallery items={images} />
        </div>
      </div>

      {/* Our Farm Gallery Section */}
      <div className="heavy-section-deferred">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
            Across Our Fields
          </span>
          <h2
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
          >
            Our <span className="text-[#71B002]">Farm</span> Gallery
          </h2>
        </div>

        <PhotoProvider>
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages?.map((gi, i) => (
              <PhotoView key={gi.img || i} src={gi.img}>
                <div className="group relative aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-xl border border-slate-200/60 cursor-pointer">
                  <img
                    src={gi.img}
                    alt={`Farm Gallery ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default PhotoGallery;
