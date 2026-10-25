import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img from "../../img/Picture.png";
import img2 from "../../img/Picture2.png";
import moringa1 from "../../img/moringa (1).webp";
import moringa2 from "../../img/moringa (1).jpg";
import moringa3 from "../../img/moringa (2).jpg";
import moringa4 from "../../img/moringa (3).jpg";
import { HiArrowLeft } from "react-icons/hi2";
import PageMeta from "../../shared/PageMeta";

export default function Moringa() {
  const products = [
    {
      name: "Moringa Hot Drink",
      details:
        "Method of Hot Drink preparation: Boil a little over one cup of water in the kettle. Put two spoons of Moringa   Leaf into boiling water. There is a measuring spoon in the   pot. Then boil the Leaf for a further 2.5 to 3 minutes and  take it off the stove for straining. You can add honey  ins Hot Drink of sugar to enhance the taste.",
      ingrediant: "Moringa Leaf",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Moringa Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa2,
    },
    {
      name: "Sojina Fat Burner Hot Drink",
      details:
        "Method of Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `Fat   Burner Hot Drink’ into boiling water. There is a  measuring spoon in the pot. Then boil the `Hot Drink’ for a further 2.5 to 3 minutes and take it off the stove for straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Moringa leaf and other natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      precaution:
        "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa3,
    },
    {
      name: "Sojina DiaLeaf Hot Drink",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `Sojina  DiaLeaf Hot Drink’ into boiling water. There is a  measuring spoon in the pot. Then boil the `Hot Drink’ for  a further 2.5 to 3 minutes and take it off the stove for straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa4,
    },
    {
      name: "Sojina  ImmuneBloom  Hot drink  Moringa Care   for Immune  Boosting",
      details:
        "Method of `Hot Drink’ preparation: Boil a little over one cup of water in the kettle. Put two spoons of `ImmuneBloom Hot drink’ into boiling water. There is a   measuring spoon in the pot. Then boil the `Hot Drink’ for a further 2.5 to 3 minutes and take it off the stove for  straining. You can add honey ins`Hot Drink’d of sugar to  enhance the taste.",
      ingrediant: "Natural herbal ingredients",
      special:
        "If the Moringa product is boiled for more than 5 minutes, there is a risk of it losing its properties and quality.",
      rule: "Drinking one cup of `Hot Drink’ in the morning and one cup at night before sleep ensures maximum benefits.",
      img: moringa2,
    },
    {
      name: "Sojina   Powder   (Moringa leaf powder)",
      details:
        "Moringa leaf powder can be used to make soups,  smoothies, as well as adding moringa leaf powder to any food of choice while cooking. Again it is possible to drink only by mixing it with water.",
      ingrediant: "Moringa Leaf",
    },
    {
      name: "Sojina  Golden Glow Hot drink",
      details: "One or two tablets should be taken twice a day",
      ingrediant: "(Turmeric, Moringa & other herbs Golden Botanic Blend)",
    },
    {
      name: "Sajina Uptan",
      details:
        "Uptan can be used to treat any skin type, whether oily,  normal or combination. First mix uptan with water to  make a thick paste, then gently massage the uptan on  the skin for a while and wait for it to dry. After that, you should massage gently while cleaning with water.",
      ingrediant:
        "Moringa Seed Cake, Turmeric, and other natural herbal ingredients",
    },
    {
      name: "Sojina  Magic Oil (Moringa Seed  Oil)",
      details:
        "For best results, use this oil before sleeping at night or  before applying sunscreen in the morning. Moringa oil  can be used directly for dry lips and other rough, dry skin  conditions such as dermatitis, eczema, acne and psoriasis conditions",
      ingrediant: "Moringa Seed",
    },
  ];

  const nutrients = [
    {
      Nutrients: "Moisture",
      DriedLeaves: "7.50% ",
      LeavesPowder: "7.50%",
    },
    {
      Nutrients: "Calories",
      DriedLeaves: "329K cal ",
      LeavesPowder: "205K cal",
    },
    {
      Nutrients: "Fiber",
      DriedLeaves: "12.5g",
      LeavesPowder: "19.2g",
    },
    {
      Nutrients: "Protein",
      DriedLeaves: "29.4g",
      LeavesPowder: "27.1g",
    },
    {
      Nutrients: "Fat",
      DriedLeaves: "5.2g",
      LeavesPowder: "2.3g",
    },
    {
      Nutrients: "Starch",
      DriedLeaves: "41.2g",
      LeavesPowder: "38.2g",
    },
    {
      Nutrients: "Calcium",
      DriedLeaves: "2185mg",
      LeavesPowder: "2003mg",
    },
    {
      Nutrients: "Iron",
      DriedLeaves: "25.6mg",
      LeavesPowder: "28.2mg",
    },
    {
      Nutrients: "Potassium",
      DriedLeaves: "1236mg",
      LeavesPowder: "1324mg",
    },
    {
      Nutrients: "Magnesium",
      DriedLeaves: "448mg",
      LeavesPowder: "368mg",
    },
    {
      Nutrients: "Phosphorus",
      DriedLeaves: "252mg",
      LeavesPowder: "204mg",
    },
    {
      Nutrients: "Vitamin A",
      DriedLeaves: "18.9mg ",
      LeavesPowder: "18.9mg",
    },
    {
      Nutrients: "Vitamin B1",
      DriedLeaves: "2.02mg ",
      LeavesPowder: "2.64mg",
    },
    {
      Nutrients: "Vitamin B2",
      DriedLeaves: "21.3mg ",
      LeavesPowder: "20.5mg",
    },
    {
      Nutrients: "Vitamin B3 Niacin",
      DriedLeaves: "7.6mg",
      LeavesPowder: "8.2mg",
    },
    {
      Nutrients: "Vitamin C",
      DriedLeaves: "15.8mg",
      LeavesPowder: "17.3mg",
    },
    {
      Nutrients: "Vitamin E",
      DriedLeaves: "10.8mg",
      LeavesPowder: "113mg",
    },
    {
      Nutrients: "Zinc",
      DriedLeaves: "3.29mg",
      LeavesPowder: "3.57mg",
    },
    {
      Nutrients: "Copper",
      DriedLeaves: "0.49mg",
      LeavesPowder: "0.57mg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <PageMeta
        title="Moringa Products | Hot Drinks, Leaf Powder & Seed Oil - Home Grow"
        description="Discover Home Grow's BCSIR-tested Moringa product line including Moringa Hot Drink, Sojina Leaf Powder, Uptan, and Magic Seed Oil with full nutritional analysis."
      />
      <Link
        to="/vagetablesProduct"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#71B002] mb-6 transition-colors"
      >
        <HiArrowLeft />
        <span>Back to Vagetables Products</span>
      </Link>

      {/* Banner Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/70 mb-14 bg-white">
        <img
          src={moringa1}
          alt="Moringa Banner"
          fetchpriority="high"
          className="w-full max-h-[460px] object-cover"
        />
      </div>

      {/* Products List */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="font-extrabold text-slate-900 uppercase tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)" }}
          >
            <span className="text-[#71B002]">{products?.length} Moringa</span>{" "}
            Products
          </h2>
        </div>

        <div className="grid gap-6">
          {products?.map((p, i) => (
            <div
              key={i}
              className="relative grid gap-6 md:grid-cols-12 bg-white shadow-sm hover:shadow-lg border border-slate-100 rounded-3xl p-6 sm:p-8 transition-all duration-300"
            >
              {/* Number Badge */}
              <span className="absolute right-6 top-6 text-lg font-extrabold w-11 h-11 flex items-center justify-center bg-[#71B002] text-white rounded-2xl shadow-sm">
                {i + 1}
              </span>

              <div className="md:col-span-5 flex flex-col gap-4 pr-12 md:pr-4">
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="rounded-2xl h-40 w-40 object-cover border border-slate-100 shadow-sm"
                  />
                )}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Name:
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    {p?.name}
                  </h3>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ingrediant:
                  </span>
                  <p className="text-slate-700 font-medium mt-0.5">
                    {p?.ingrediant}
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#71B002]">
                    Details:
                  </span>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
                    {p?.details}
                  </p>
                </div>
                {p?.special && (
                  <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Speciality:
                    </span>
                    <p className="text-amber-900 text-sm mt-0.5">
                      {p?.special}
                    </p>
                  </div>
                )}
                {p?.rule && (
                  <div className="bg-[#71B002]/5 border border-[#71B002]/20 rounded-2xl p-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#528200]">
                      Rule:
                    </span>
                    <p className="text-slate-700 text-sm mt-0.5">{p?.rule}</p>
                  </div>
                )}
                {p?.precaution && (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Precaution:
                    </span>
                    <p className="text-slate-700 text-sm mt-0.5">
                      {p?.precaution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Narrative Sections */}
      <div className="heavy-section-deferred bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6 mb-16">
        <h2
          className="font-extrabold text-[#71B002]"
          style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.2vw, 2rem)" }}
        >
          Discover the Essence of Wellness with Home Grow
        </h2>

        <div className="space-y-4">
          <h5 className="font-bold bg-[#0D1F12] text-[#8ED116] px-4 py-2.5 rounded-xl text-base sm:text-lg">
            Unveiling Nature's Bounty: Moringa Powder and Moringa-Based Products
          </h5>
          <p className="text-slate-600 leading-relaxed max-w-[78ch]">
            At Home Grow , our commitment to quality and well-being is evident
            in every step of our journey – from cultivation to packaging.
            Immerse yourself in the world of premium Moringa products, crafted
            with care for your health and happiness.
          </p>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold bg-[#0D1F12] text-[#8ED116] px-4 py-2.5 rounded-xl text-base sm:text-lg">
            Meticulous Moringa Leaf Quality
          </h5>
          <div className="grid sm:grid-cols-2 gap-4">
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Origin and Source:
              </span>{" "}
              Our Moringa leaves hail from carefully selected geographic regions
              known for their optimal climate conditions. Local farmers
              collaborate to cultivate every leaf with respect for the
              environment.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Sustainable Cultivation Practices:
              </span>{" "}
              Embracing sustainable and organic farming, we prioritize soil
              health and avoid pesticides. Our approach yields leaves of
              unparalleled quality while nurturing our ecosystem.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Leaf Selection with Precision:
              </span>{" "}
              Each leaf undergoes rigorous selection, ensuring only the
              freshest, vibrant, and unblemished ones are chosen. This preserves
              the essence of Moringa's nutritional value.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Harvesting at its Peak:
              </span>{" "}
              Our leaves are meticulously hand-picked to ensure peak freshness
              and nutritional richness. This hands-on approach maintains the
              essence of Moringa's benefits.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Meticulous Cleaning and Washing:
              </span>{" "}
              Before processing, our leaves are cleaned and washed meticulously
              to remove impurities. This ensures the final product is pure and
              free from unwanted elements.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Optimized Drying Technique:
              </span>{" "}
              We use methods specially designed to preserve nutritional content,
              from sun-drying to proprietary techniques. Our Moringa leaves
              retain their potency and benefits.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold bg-[#0D1F12] text-[#8ED116] px-4 py-2.5 rounded-xl text-base sm:text-lg">
            Elevating Moringa Leaf Powder Quality:
          </h5>
          <div className="grid sm:grid-cols-2 gap-4">
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Processing Perfection:
              </span>{" "}
              The transformation from leaves to powder is a journey of
              precision. Leaves are dried to perfection, resulting in finely
              textured Moringa leaf powder.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Nutritional Richness:
              </span>{" "}
              Our Moringa leaf powder boasts an exceptional nutritional profile,
              abundant in essential vitamins, minerals, antioxidants, and
              bioactive compounds. Embrace the power of nature's nourishment.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Nature's Signature:
              </span>{" "}
              Color, Aroma, and Flavor: Experience the vibrancy of our Moringa
              leaf powder – from its lively green hue to its fresh aroma and
              mild flavor. It's a testament to nature's authenticity.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-600 text-sm sm:text-base">
              <span className="font-bold text-slate-900">
                Nature's Signature:
              </span>{" "}
              Color, Aroma, and Flavor: Experience the vibrancy of our Moringa
              leaf powder – from its lively green hue to its fresh aroma and
              mild flavor. It's a testament to nature's authenticity.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold bg-[#0D1F12] text-[#8ED116] px-4 py-2.5 rounded-xl text-base sm:text-lg">
            Quality beyond Compromise:
          </h5>
          <p className="text-slate-600 leading-relaxed max-w-[78ch]">
            <span className="font-bold text-slate-900">
              Assured Quality and Testing:
            </span>{" "}
            Throughout production, our Moringa leaf powder undergoes rigorous
            quality testing.
          </p>
          <p className="text-slate-600 leading-relaxed max-w-[78ch]">
            <span className="font-bold text-slate-900">
              Certifications and Compliance:
            </span>{" "}
            Our Moringa leaf powder is tested and certified by BCSIR
            Laboratories, Dhaka. The process of Good Agricultural Practice (GAP)
            certification for the entire journey is underway.
            <br />
            Elevate your well-being with Home Grow – where quality, purity, and
            nature's essence converge.
          </p>
        </div>
      </div>

      {/* Nutritional Table & Lab Documents */}
      <div className="heavy-section-deferred grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <h2
            id="moringa-nutrition-caption"
            className="text-xl sm:text-2xl font-bold text-slate-900 mb-6"
          >
            Nutritional Value in every{" "}
            <span className="text-[#71B002]">100 grams</span> of Moringa Leaf
            and Leaf Powder:
          </h2>

          <div
            tabIndex="0"
            role="region"
            aria-labelledby="moringa-nutrition-caption"
            className="responsive-table-wrapper rounded-2xl border border-slate-200"
          >
            <table className="text-left text-sm sm:text-base">
              <thead className="bg-[#0D1F12] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-bold">#</th>
                  <th className="py-3.5 px-4 font-bold">Nutrients</th>
                  <th className="py-3.5 px-4 font-bold">Dried Leaves</th>
                  <th className="py-3.5 px-4 font-bold">Leaves Powder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {nutrients.map((n, i) => (
                  <tr
                    key={n.Nutrients}
                    className="even:bg-slate-50/70 hover:bg-[#71B002]/5 transition-colors"
                  >
                    <th className="py-3 px-4 font-bold text-slate-700 bg-white">
                      {i + 1}
                    </th>
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {n.Nutrients}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {n.DriedLeaves}
                    </td>
                    <td className="py-3 px-4 font-medium text-[#528200]">
                      {n.LeavesPowder}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-500 text-center italic">
            Source: Moringa oleifera: A review on nutritive importance and its
            medicinal application: sciencedirect.com
          </p>
        </div>

        {/* Documents Section */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase mb-6">
            Our documents:
          </h2>
          <PhotoProvider>
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x">
              <PhotoView src={img}>
                <img
                  src={img}
                  alt="Certification Document 1"
                  loading="lazy"
                  className="max-h-96 w-auto rounded-2xl border border-slate-200 shadow-sm cursor-pointer snap-center shrink-0"
                />
              </PhotoView>
              <PhotoView src={img2}>
                <img
                  src={img2}
                  alt="Certification Document 2"
                  loading="lazy"
                  className="max-h-96 w-auto rounded-2xl border border-slate-200 shadow-sm cursor-pointer snap-center shrink-0"
                />
              </PhotoView>
            </div>
          </PhotoProvider>
          <p className="mt-3 text-center text-sm font-semibold text-slate-500">
            Scroll left or Right (Click to zoom)
          </p>
        </div>
      </div>
    </section>
  );
}
