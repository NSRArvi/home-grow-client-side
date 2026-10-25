import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { HiArrowLeft, HiSparkles } from "react-icons/hi2";
import PageMeta from "../shared/PageMeta";

export default function FoodProducts() {
  const images = [
    {
      image:
        "https://i.ibb.co/d7TKMbh/Whats-App-Image-2024-06-12-at-10-22-27-1d8d1387.jpg",
    },
    {
      image:
        "https://i.ibb.co/YDDZDp4/Whats-App-Image-2024-06-12-at-10-23-09-6055ff1b.jpg",
    },
    {
      image:
        "https://i.ibb.co/P5Y7D29/Whats-App-Image-2024-06-12-at-10-23-08-6bc463e2.jpg",
    },
    {
      image:
        "https://i.ibb.co/YRsV88X/Whats-App-Image-2024-06-12-at-10-23-11-f9ca55a3.jpg",
    },
    {
      image:
        "https://i.ibb.co/hcXZZgw/Whats-App-Image-2024-06-12-at-10-23-10-44c98a97.jpg",
    },
    {
      image:
        "https://i.ibb.co/gM2KJ2Y/Whats-App-Image-2024-06-12-at-10-23-09-06af76e6.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <PageMeta
        title="Food Products | Award-Winning Value-Added Fruit Innovations - Home Grow"
        description="Read how Agriculturist Parvin Sultana and Home Grow won recognition at the National Fruit Fair 2024 for diversified, value-added fruit and food products."
      />
      <div className="mb-8">
        <Link
          to="/product"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#71B002] mb-4 transition-colors"
        >
          <HiArrowLeft />
          <span>Back to Products</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3 w-fit">
          <HiSparkles className="text-sm" />
          <span>National Fruit Fair 2024 Recognition</span>
        </div>

        <h1
          className="font-extrabold text-[#71B002] leading-snug"
          style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)" }}
        >
          ফলের বহুবিধ ব্যবহারকে নান্দনিক ভাবে ফুটিয়ে তুলে পুরস্কৃত হলেন কৃষিবিদ
          পারভীন সুলতানা
        </h1>
      </div>

      {/* Featured Story Card */}
      <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-12">
        <div className="bg-slate-900/5 p-4 sm:p-6 flex justify-center">
          <img
            className="max-h-[60vh] w-auto object-contain rounded-2xl shadow-md"
            src="https://agrilife24.com/2024/images/2024/Farming/psu8j.png"
            alt="food_product"
            fetchpriority="high"
          />
        </div>

        <div className="p-6 sm:p-10 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed max-w-[78ch] mx-auto">
          <p>
            ফলের বহুবিধ ব্যবহারকে ফুটিয়ে তুলে পুরস্কৃত হলেন কৃষিবিদ পারভীন
            সুলতানা। কেবল ব্যবহারই নয় ফলকে নান্দনিক ভাবে উপস্থাপন করে ব্যাপক
            প্রশংসিত হন তিনি। ফলের বহুমুখী পণ্য নিয়ে সমাপ্ত ফল মেলা হাজির হয়ে
            সবাইকে তাক লাগিয়ে দিয়েছেন কৃষিবিদ পারভীন সুলতানা। কৃষি মন্ত্রণালয়
            কর্তৃক আয়োজিত জাতীয় ফল মেলা ২০২৪-এ সেরা স্টল বিবেচনায় বেসরকারি
            প্রতিষ্ঠান' ক্যাটাগরিতে দ্বিতীয় স্থান অর্জন করে তাঁর প্রতিষ্ঠান{" "}
            <span className="text-[#71B002] font-bold">"Home Grow"</span>.
          </p>
          <p>
            মেলার সমাপনী দিন শনিবার (৮ জুন) -এ বাংলাদেশ কৃষি গবেষণা কাউন্সিল
            মিলনায়তনে আয়োজিত সমাপনী অনুষ্ঠানে কৃষি মন্ত্রণালয় সম্পর্কিত স্থায়ী
            কমিটির সভাপতি ও বাংলাদেশ আওয়ামী লীগের প্রেসিডিয়াম সদস্য ড. মোঃ
            আব্দুর রাজ্জাক এমপি-এর হাত থেকে তিনি পুরস্কার ও সম্মাননা গ্রহন করেন।
            এসময় কৃষি সচিব ওয়াহিদা আক্তার, বাংলাদেশ কৃষি গবেষণা কাউন্সিল
            (BARC)-এর নির্বাহী চেয়ারম্যান ড. শেখ মোহাম্মদ বখতিয়ার, ডিএই
            মহাপরিচালক কৃষিবিদ বাদল চন্দ্র বিশ্বাস সহ অরো অনেকে উপস্থিত ছিলেন।
          </p>
          <p>
            কৃষিবিদ পারভীন সুলতানা বলেন, আমাদের দেশে প্রচুর পুষ্টিগুণ সম্পন্ন ফল
            উৎপাদিত হয় যার রয়েছে ব্যাপক অর্থনৈতিক উপযোগিতা। তবে পণ্যের
            বহুমুখীকরণ না থাকার কারণে উৎপাদন মৌসুমে প্রচুর পরিমাণ ফল নষ্ট হয়ে
            যায়। এ থেকে আমাদের বের হয়ে আসতে হবে।
          </p>
          <p>
            বিভিন্ন জায়গায় ঘোরাঘুরির অভিজ্ঞতা থেকে তিনি দেখেছেন আশেপাশের দেশে
            ফলের বিভিন্ন ধরনের ডাইভারসিফাইড পণ্য কৃষিকে সমৃদ্ধ করে তুলেছে। এসব
            দেখে তার মাথায় আইডিয়া ঘুরপাত খেতে থাকে। গড়ে তোলেন{" "}
            <span className="text-[#71B002] font-bold">"Home Grow"</span>. নামের
            একটি প্রতিষ্ঠান। তিনি দেশেও এ ধরনের পণ্য উৎপাদনের সংকল্প করেন। লিচুর
            পুডিং, আনারসের পাই, কাঁঠালের বার্গার সহ নানাবিধ বহুমুখী ভ্যালু এডেড
            পণ্য প্রদর্শন করে এবারের ফল মেলায় ব্যাপক সাড়া পেয়েছেন তিনি। পাশাপশি
            একজন নারী কৃষি উদ্যোক্তা হিসেবে তাকে উৎসাহিত করেছেন সরকারি বেসরকারি
            পর্যায়ের অনেকেই।
          </p>
          <p>
            মৌসুমে আমাদের দেশে প্রচুর ফল উৎপাদন হলেও সংরক্ষণের অভাবে নষ্ট হয়ে
            যায় যা আমাদের কৃষি অর্থনীতির জন্য অত্যন্ত ক্ষতিকর বলে মনে করেন
            পারভীন সুলতানা। তিনি বলেন আমাদের এত বৈচিত্র্যময় ফল থাকা সত্ত্বেও
            কোন ড্রাই ফ্রুট তৈরী করা এখন কোনো উদ্যোগ চোখে পড়ে না।
          </p>
          <p>
            কৃষিকে আরো উচ্চতায় নিয়ে যাওয়ার জন্যই তার এই ক্ষুদ্র প্রচেষ্টা।
            তিনি আশা করেন সরকারি সংস্থাগুলো তার এই উদ্যোগকে সফলতা অর্জন করতে
            সহযোগিতা করবেন। পাশাপাশি একজন নারী উদ্যোক্তা হিসেবে তিনি সংশ্লিস্ট
            সকলের সহযোগিতা এবং দোয়া কামনা করেছেন।
          </p>
        </div>
      </article>

      {/* Food Showcase Gallery */}
      <PhotoProvider>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <PhotoView key={i} src={img.image}>
              <div className="group overflow-hidden rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 bg-white cursor-pointer aspect-[4/3]">
                <img
                  src={img.image}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="food_product"
                />
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
}
