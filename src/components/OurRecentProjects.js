import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const OurRecentProjects = () => {
  const { data: projectsImages } = useQuery({
    queryKey: ["projectsImages"],
    queryFn: () => fetch("ourRecentProjects.json").then((res) => res.json()),
  });

  return (
    <section className="py-20 sm:py-24 bg-[#0D1F12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/20 border border-[#8ED116]/30 text-[#8ED116] text-xs font-bold uppercase tracking-wider mb-3">
            Field Highlights
          </span>
          <h2
            className="font-extrabold text-white tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 1.25rem + 2vw, 2.75rem)" }}
          >
            Our <span className="text-[#8ED116]">Recent Projects</span>
          </h2>
        </div>

        <PhotoProvider>
          <div className="grid gap-6 sm:grid-cols-2">
            {projectsImages?.map((pi, idx) => (
              <PhotoView key={pi.img || idx} src={pi.img}>
                <div
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl cursor-pointer aspect-[16/10]"
                  data-aos="fade-up"
                >
                  <img
                    src={pi.img}
                    alt={`Recent Project ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-sm font-semibold text-white bg-[#71B002]/90 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                      View Full Image
                    </span>
                  </div>
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default OurRecentProjects;
