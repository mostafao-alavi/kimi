import React from "react";
import { motion } from "motion/react";
import { Phone, ArrowLeft, Send, Sparkles } from "lucide-react";
import profileImage from "../assets/images/mostafa_profile_1781819290249.jpg";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicesClick = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#667eea]/20 rounded-full blur-3xl dark:bg-[#667eea]/10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#764ba2]/20 rounded-full blur-3xl dark:bg-[#764ba2]/10" />

      {/* Decorative Grid Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Text Content Block */}
          <div className="flex flex-col text-right lg:col-span-7 select-none">
            
            {/* Professional Tagline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/50 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-950/40 dark:text-indigo-300 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500 animate-pulse" />
                <span>۱۲ سال سابقه درخشان در رشد برندها</span>
              </div>
            </motion.div>

            {/* Main Visual Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              من <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] to-[#764ba2]">مصطفی علوی</span> هستم
            </motion.h1>

            {/* Sub-headline / Job Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-2xl font-bold text-slate-700 md:text-3xl dark:text-slate-300"
            >
              متخصص فروش و بازاریابی B2B
            </motion.h2>

            {/* Elevator Pitch Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base leading-relaxed text-slate-600 max-w-xl dark:text-slate-400"
            >
              توسعه‌دهنده برندهای بزرگ و استارت‌آپ‌های پیشرو در حوزه‌های سنتی و نوین مانند بلاکچین و وب۳. با تمرکز بر بازاریابی دیجیتال، مهندسی فرآیند فروش سازمانی و ایجاد شبکه‌های همکاری استراتژیک در رده ممتاز.
            </motion.p>

            {/* Interactive Call-To-Action (Buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-start gap-4"
            >
              <button
                onClick={handleContactClick}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span>مشاوره و تماس با من</span>
              </button>

              <button
                onClick={handleServicesClick}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <span>مشاهده زمینه‌های همکاری</span>
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </button>
            </motion.div>

            {/* Fast Contact Channels Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap justify-end gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 pt-6"
            >
              <div className="flex items-center gap-1">
                <span className="font-semibold text-slate-700 dark:text-slate-300">تهران، ایران</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-slate-400">موقعیت:</span>
              </div>
              <div className="flex items-center gap-1">
                <a href="mailto:paktia96@gmail.com" className="hover:text-[#667eea] transition-colors">
                  paktia96@gmail.com
                </a>
                <span className="text-slate-400">ایمیل:</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-sans">۰۹۱۰۸۲۰۰۱۱۴</span>
                <span className="text-slate-400">تلفن:</span>
              </div>
            </motion.div>

          </div>

          {/* Profile Picture Showcase Block */}
          <div className="flex items-center justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              
              {/* Spinning Decorative Border Rings */}
              <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-indigo-300 animate-[spin_50s_linear_infinite] dark:border-indigo-800/40" />
              <div className="absolute h-[340px] w-[340px] rounded-full border border-indigo-100 dark:border-indigo-900/10" />
              
              {/* Backing Gradient Shape */}
              <div className="absolute h-[290px] w-[290px] rounded-[40px] bg-gradient-to-tr from-[#667eea] to-[#764ba2] opacity-10 blur-xl dark:opacity-20" />

              {/* Main Avatar Wrapper */}
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-[40px] border-4 border-white bg-slate-200 shadow-2xl shadow-indigo-500/10 dark:border-slate-900 dark:bg-slate-800 md:h-[300px] md:w-[300px]">
                <img
                  src={profileImage}
                  alt="مصطفی علوی - متخصص فروش B2B"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Experience Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-4 bottom-8 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/5 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 flex items-center gap-3 rtl:flex-row-reverse"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-lg font-sans">
                  ۱۲
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">سابقه فعالیت</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">۱۲ سال مدیریت ارشد</p>
                </div>
              </motion.div>

              {/* Float Active Projects Badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
                className="absolute -left-4 top-8 rounded-2xl bg-white p-3.5 shadow-xl shadow-slate-900/5 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 flex items-center gap-3"
              >
                <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                <div className="text-right">
                  <p className="text-xs text-slate-400">وضعیت فعلی</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">آماده همکاری جدید</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
