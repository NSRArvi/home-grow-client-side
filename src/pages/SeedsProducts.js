import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider } from "react-photo-view";
import SeedsProductCard from "../components/SeedsProductCard";
import { HiArrowLeft } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

const SeedsProducts = () => {
  const [seedsProduct, setSeedsProduct] = useState([]);
  useEffect(() => {
    fetch("seedsProducts.json")
      .then((res) => res.json())
      .then((data) => setSeedsProduct(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <PageMeta
        title="Hybrid & OP Vegetable Seeds Catalog - Home Grow"
        description="Discover Home Grow's high-yielding, climate-resilient hybrid vegetable seed varieties including bitter gourd, chili, bottle gourd, cherry tomato, papaya, broccoli, and zucchini."
      />
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
        <div>
          <Link
            to="/product"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#71B002] mb-3 transition-colors"
          >
            <HiArrowLeft />
            <span>Back to Products</span>
          </Link>
          <h1
            className="font-extrabold text-slate-900 tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 1.25rem + 2vw, 2.5rem)" }}
          >
            <span className="text-[#71B002]">{seedsProduct?.length} Seeds</span>{" "}
            Products
          </h1>
        </div>
      </div>

      <PhotoProvider>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {seedsProduct?.map((sp, i) => (
            <SeedsProductCard sp={sp} key={sp.name || i} />
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default SeedsProducts;
