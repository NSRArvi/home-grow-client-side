import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const Product = () => {
  const categories = [
    {
      title: "Seeds",
      to: "/seedsProduct",
      img: "https://img.freepik.com/free-photo/mix-beans_1339-258.jpg?w=1060&t=st=1667387378~exp=1667387978~hmac=7d5649b1d12be70cb8240f468a00d3aaa225b064ddb18c2282463cae84a28c2d",
    },
    {
      title: "Food",
      to: "/foodsProduct",
      img: "https://img.freepik.com/free-photo/front-view-pancakes-yummy-delicious-choco-with-sliced-red-strawberries-bananas-inside-white-plate-grey-background_140725-13111.jpg?t=st=1718384255~exp=1718387855~hmac=7c4d4b9e6c25c745e010af38926ef50b42b7f403876aef4e6c60e1da4ded0c77&w=996",
    },
    {
      title: "Vagetables",
      to: "/vagetablesProduct",
      img: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Jute",
      to: "/jutesProduct",
      img: "https://img.freepik.com/free-vector/realistic-hands-bag-green-grass-composition_1284-71180.jpg?w=1380&t=st=1667396880~exp=1667397480~hmac=72e9a341979d2a20d2926946ae8ae2ec2b6c9d23b028df32b394933b1fea6d6d",
    },
    {
      title: "Poultry",
      to: "/comigSoon",
      img: "https://img.freepik.com/free-photo/top-view-person-holding-brown-chicks-cloth_181624-34688.jpg?w=996&t=st=1667396971~exp=1667397571~hmac=48c97a36771f1715688f6e4fbc5d6bafcb73b55ad1b67a8830ff5e2563f7ee18",
    },
    {
      title: "Duck",
      to: "/comigSoon",
      img: "https://images.pexels.com/photos/13121930/pexels-photo-13121930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <PageMeta
        title="Our Products | Seeds, Food, Vegetables & Jute - Home Grow"
        description="Explore Home Grow's diverse agricultural product catalog including high-yielding hybrid seeds, value-added fruit & food items, Moringa wellness products, and eco-friendly jute."
      />
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Product Lines
        </span>
        <h1
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}
        >
          Our <span className="text-[#71B002]">Products</span>
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <Link
            key={cat.title}
            to={cat.to}
            className="group relative h-72 sm:h-80 overflow-hidden rounded-3xl shadow-md hover:shadow-2xl border border-slate-200/70 transition-all duration-300"
          >
            <img
              src={cat.img}
              alt={cat.title}
              {...(idx === 0 ? { fetchpriority: "high" } : { loading: "lazy" })}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F12]/90 via-[#0D1F12]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between">
              <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                {cat.title}
              </h3>
              <span className="w-11 h-11 rounded-full bg-white/15 group-hover:bg-[#71B002] text-white backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-300">
                <HiArrowUpRight className="text-xl" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Product;
