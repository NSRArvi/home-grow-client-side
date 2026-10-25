import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import anim from "../anim/healthy-or-junk-food.json";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import PageMeta from "../shared/PageMeta";

const Contact = () => {
  const formRef = useRef(null);
  const style = {
    height: 360,
  };

  useEffect(() => {
    const formEl = formRef.current;
    if (!formEl) return;

    const syncAria = (el) => {
      if (!el || !el.matches) return;
      try {
        el.setAttribute(
          "aria-invalid",
          el.matches(":user-invalid") ? "true" : "false"
        );
      } catch {
        // Fallback for older browsers without :user-invalid
      }
    };

    const onBlur = (e) => {
      if (e.target && e.target.checkValidity) {
        syncAria(e.target);
      }
    };

    const onInput = (e) => {
      if (e.target && e.target.hasAttribute("aria-invalid")) {
        syncAria(e.target);
      }
    };

    formEl.addEventListener("blur", onBlur, true);
    formEl.addEventListener("input", onInput);
    return () => {
      formEl.removeEventListener("blur", onBlur, true);
      formEl.removeEventListener("input", onInput);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <PageMeta
        title="Contact Us | Get in Touch with Home Grow"
        description="Contact Home Grow in Shreepur, Gazipur for contract seed production, international seed export inquiries, Moringa wellness products, or partnership opportunities."
      />
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#71B002]/10 text-[#528200] text-xs font-bold uppercase tracking-wider mb-3">
          Get In Touch
        </span>
        <h1
          className="font-extrabold text-slate-900 tracking-tight"
          style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}
        >
          <span className="text-[#71B002]">Contact</span> With Us
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-6">
          <form
            ref={formRef}
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="modern-field">
              <label
                htmlFor="contact-name"
                className="block text-sm font-bold text-slate-700 mb-1"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter name"
                aria-errormessage="name-error"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#71B002] focus:outline-none transition-colors text-slate-800"
              />
              <div
                id="name-error"
                className="error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
              >
                <span aria-hidden="true">❌</span> Please enter your name.
              </div>
            </div>

            <div className="modern-field">
              <label
                htmlFor="contact-email"
                className="block text-sm font-bold text-slate-700 mb-0.5"
              >
                Email Address
              </label>
              <span
                id="email-hint"
                className="block text-xs text-slate-500 mb-1.5"
              >
                Format: you@example.com
              </span>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter email"
                aria-describedby="email-hint"
                aria-errormessage="email-error"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#71B002] focus:outline-none transition-colors text-slate-800"
              />
              <div
                id="email-error"
                className="error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
              >
                <span aria-hidden="true">❌</span> Please enter a valid email
                address.
              </div>
            </div>

            <div className="modern-field">
              <label
                htmlFor="contact-message"
                className="block text-sm font-bold text-slate-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Enter Message"
                aria-errormessage="message-error"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#71B002] focus:outline-none transition-colors text-slate-800"
              ></textarea>
              <div
                id="message-error"
                className="error-msg items-center gap-1.5 text-xs font-semibold text-red-600 mt-1.5"
              >
                <span aria-hidden="true">❌</span> Please enter your message.
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#71B002] hover:bg-[#528200] text-white font-bold text-sm sm:text-base shadow-md shadow-[#71B002]/20 transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Direct Contact Details Strip */}
          <div className="pt-6 border-t border-slate-100 grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <IoMailOutline className="text-xl text-[#71B002] shrink-0 mt-0.5" />
              <span>info@homegrowbd.com</span>
            </div>
            <div className="flex items-start gap-3">
              <IoCallOutline className="text-xl text-[#71B002] shrink-0 mt-0.5" />
              <span>+880 1731106046</span>
            </div>
            <div className="flex items-start gap-3">
              <IoLocationOutline className="text-xl text-[#71B002] shrink-0 mt-0.5" />
              <span>Kadim Gaziaron, Goshingga, Shreepur, Gazipur.</span>
            </div>
            <div className="flex items-start gap-3">
              <IoTimeOutline className="text-xl text-[#71B002] shrink-0 mt-0.5" />
              <span>9:00 - 6:00 (GMT+6)</span>
            </div>
          </div>
        </div>

        {/* Animation Column */}
        <div className="lg:col-span-5 flex justify-center">
          <Lottie animationData={anim} style={style} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
