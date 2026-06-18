import React from "react";
import { motion } from "motion/react";
import { Handshake, Target, Calendar, Cpu, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "b2b",
      title: "فروش سازمانی (B2B Sales)",
      desc: "طراحی، مهندسی و ارتقای فرآیندهای فروش سازمانی برای نفوذ در بازارهای بزرگ و عقد قراردادهای راهبردی.",
      bullets: [
        "مذاکرات فروش سطح بالا با مدیران کلیدی",
        "مدیریت حساب‌های مشتریان راهبردی (Key Account)",
        "بهینه‌سازی نرخ تبدیل فرآیند سرنخ‌های ورودی",
        "طراحی قراردادهای تجاری در رده ممتاز",
      ],
      icon: <Handshake className="h-6 w-6 text-indigo-500" />,
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      id: "marketing",
      title: "استراتژی بازاریابی (Marketing Strategy)",
      desc: "طراحی برنامه‌های جامع رشد، کمپین‌های ۳۶۰ درجه دیجیتال و تثبیت پیشتازی سهم بازار برند شما.",
      bullets: [
        "تدوین پرسونای دقیق و بخش‌بندی بازار هدف",
        "تعیین شاخص‌های کلیدی عملکرد مارکتینگ (KPI)",
        "بهینه‌سازی کمپین‌های دیجیتال ارگانیک و پرداختی",
        "موقعیت‌یابی و معماری برند در رده سازمانی",
      ],
      icon: <Target className="h-6 w-6 text-purple-500" />,
      gradient: "from-indigo-500/10 to-purple-500/10",
    },
    {
      id: "events",
      title: "مدیریت رویدادها (Event Management)",
      desc: "برگزاری صفر تا صد همایش‌ها، کارگاه‌ها و نشست‌های تخصصی با بیشترین بازخورد رسانه‌ای و تجاری.",
      bullets: [
        "سازمان‌دهی همایش‌های تخصصی ملی و بین‌المللی",
        "فرم‌ساز و ساختار کمپین‌های بازاریابی جاذبه‌ای",
        "جذب و مذاکره با اسپانسرهای مالی و معنوی",
        "مدیریت غرفه‌های استارتاپی، نمایشگاه‌ها و رویدادهای شبکه‌سازی",
      ],
      icon: <Calendar className="h-6 w-6 text-pink-500" />,
      gradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      id: "blockchain",
      title: "مشاوره بلاکچین (Blockchain Consulting)",
      desc: "تسهیل عبور و به‌کارگیری مدل‌های وب۳، رمزارزها و ساختارهای نامتمرکز در هسته‌های کلاسیک کسب‌وکار.",
      bullets: [
        "تحلیل پتانسیل کسب‌وکارهای زنجیره بلوکی",
        "طراحی استراتژی‌های مارکتینگ وب۳ و جذب لید",
        "مشاوره مدل‌ها و ساختارهای هم‌افزایی اقتصادی توکن",
        "افزایش آگاهی برند و نفوذ در جوامع کاربری غیرمتمرکز",
      ],
      icon: <Cpu className="h-6 w-6 text-cyan-500" />,
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#667eea]/5 to-[#764ba2]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
              خدمات تخصصی
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              خدماتی سفارشی برای پیشرانی و توسعه پایدار
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-l from-indigo-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              ترکیبی استراتژیک از تکنیک‌های علمی مارکتینگ و توانایی اجرای عملیاتی برای خلق ارزش واقعی
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-xl shadow-slate-100/50 dark:shadow-none p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 group"
            >
              {/* Blur accent glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity duration-500" />
              
              <div>
                {/* Icon wrapper with custom gradient backing */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-slate-800 dark:text-slate-200 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white text-right">
                  {item.title}
                </h3>
                
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-right">
                  {item.desc}
                </p>

                {/* Bullets lists in target language */}
                <ul className="mt-6 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2 text-right justify-end items-start text-xs text-slate-500 dark:text-slate-400">
                      <span className="text-sm text-slate-700 dark:text-slate-300">{bullet}</span>
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-500 dark:text-indigo-400">
                        <Check className="h-3 w-3" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom design border */}
              <div className="absolute bottom-0 right-0 h-1.5 w-0 bg-gradient-to-l from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
