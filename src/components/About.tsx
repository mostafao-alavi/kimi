import React from "react";
import { motion } from "motion/react";
import { Award, Users, Calendar, ShieldCheck, Cpu, Zap } from "lucide-react";

export default function About() {
  const stats = [
    {
      id: "exp",
      value: "۱۲ سال",
      label: "سابقه تخصصی B2B",
      desc: "فعالیت مستمر در رده ارشد مارکتینگ و فروش",
      icon: <Award className="h-6 w-6 text-indigo-500" />,
    },
    {
      id: "events",
      value: "۵۰+",
      label: "رویداد سازمانی",
      desc: "طراحی، سازماندهی و هدایت همایش‌های بزرگ",
      icon: <Calendar className="h-6 w-6 text-[#764ba2]" />,
    },
    {
      id: "clients",
      value: "۱۰۰+",
      label: "مشتری موفق",
      desc: "خدمت‌رسانی استراتژیک به کسب‌وکارها و استارتاپ‌ها",
      icon: <Users className="h-6 w-6 text-indigo-500" />,
    },
  ];

  const highlights = [
    {
      title: "تخصص در بلاکچین",
      desc: "ارائه مشاوره‌های کاربردی تکنولوژی وب۳، رمزارزها و ساختار‌های غیرمتمرکز برای ورود امن کسب‌وکارها.",
      icon: <Cpu className="h-5 w-5 text-indigo-500" />,
    },
    {
      title: "مدیریت رویدادهای کلان",
      desc: "از ایده تا اجرا؛ هماهنگی تیم‌های اجرایی، جذب اسپانسر، طراحی پنل‌های علمی و پوشش رسانه‌ای گسترده.",
      icon: <Zap className="h-5 w-5 text-indigo-500" />,
    },
    {
      title: "شتاب‌دهی استارتاپ‌ها",
      desc: "تدوین پیچ‌دک حرفه‌ای، بهینه‌سازی کانال‌های جذب سرمایه‌گذار و مهندسی چرخه بازگشت سرمایه.",
      icon: <ShieldCheck className="h-5 w-5 text-indigo-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle details background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-l from-indigo-500/5 to-purple-600/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
              درباره من
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              هم‌افزایی تجربه علمی و راهکارهای نوین بازار
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-l from-indigo-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Content Section: 2 Columns */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 md:gap-16">
          
          {/* Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 text-right"
            >
              جایگاه و ارزش‌های تجاری من
            </motion.h3>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex gap-4 text-right items-start flex-row-reverse"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 group-hover:bg-[#667eea] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text bio and numerical statistics Column */}
          <div className="lg:col-span-7 space-y-8 text-right">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                بیش از یک دهه است که در خط مقدم بازارهای استراتژیک و فرآیندهای پرشتاب بازاریابی سازمانی (B2B) فعالیت می‌کنم. من تمرکز عمیقی بر خلق موقعیت‌های فروش نوین، شتاب‌دهی استارتاپ‌ها و سازماندهی رویدادهای تخصصی دارم.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                اعتقاد من پیوند حوزه‌های کلاسیک کسب‌وکار با بسترهای فناوری نوین مانند زنجیره بلوک (Blockchain) است. با تکیه بر شبکه گسترده ارتباطی در سطح کشور و سابقه اجرای ده‌ها کمپین پیچیده، همواره تلاش کرده‌ام تا نرخ تبدیل مشتری و توسعه سهم بازار را برای کارفرمایان خود تضمین کنم.
              </p>
            </motion.div>

            {/* Numerical Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-900/50 hover:shadow-lg dark:hover:shadow-indigo-500/5 hover:-y-1 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="absolute top-0 right-0 h-1 w-full bg-gradient-to-l from-transparent via-[#667eea] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800">
                    {stat.icon}
                  </div>

                  <span className="text-2xl font-black text-slate-900 dark:text-white font-sans">
                    {stat.value}
                  </span>
                  
                  <span className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </span>

                  <span className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {stat.desc}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
