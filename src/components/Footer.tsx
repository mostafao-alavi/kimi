import React from "react";
import { Mail, Phone, Briefcase, ChevronLeft } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 5: Description & Branding */}
          <div className="md:col-span-5 text-right space-y-4">
            <div className="flex items-center gap-2 justify-end cursor-pointer" onClick={() => handleScrollTo("hero")}>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  مصطفی علوی
                </span>
                <span className="mr-2 text-xs text-indigo-400 font-medium">
                  | متخصص فروش B2B
                </span>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                <Briefcase className="h-4.5 w-4.5 text-white" />
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mr-auto">
              توسعه‌دهنده راه‌حل‌های بازاریابی نوین، مهندسی فروش، برگزاری مقتدرانه سمینارها و همایش‌ها، و ارائه مشاوره‌های عمیق در زمینه هم‌افزایی اقتصادی با تکنولوژی مدرن بلاکچین. ۱۲ سال پیشتازی استراتژیک در رده ممتاز کشوری.
            </p>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="md:col-span-3 text-right space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-slate-200 uppercase">
              تفکیک بخش‌ها
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: "hero", label: "خانه / شروع کاربردی" },
                { id: "about", label: "درباره من و مدارج" },
                { id: "services", label: "محدوده خدمات تخصصی" },
                { id: "contact", label: "پل‌های ارتباطی مستقیم" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className="flex items-center gap-1 justify-end w-full text-slate-400 hover:text-white transition-colors cursor-pointer group"
                  >
                    <span>{item.label}</span>
                    <ChevronLeft className="h-3 w-3 text-slate-500 group-hover:translate-x-[-2px] transition-transform" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Fast Connect Details */}
          <div className="md:col-span-4 text-right space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-slate-200 uppercase">
              اطلاعات رسمی تماس
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-end">
                <a href="mailto:paktia96@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  paktia96@gmail.com
                </a>
                <Mail className="h-4 w-4 text-indigo-400" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <a href="tel:09108200114" className="text-slate-400 hover:text-white transition-colors font-sans">
                  ۰۹۱۰۸۲۰۰۱۱۴
                </a>
                <Phone className="h-4 w-4 text-[#764ba2]" />
              </li>
              <li className="flex items-center gap-2 justify-end">
                <a href="tel:09107778894" className="text-slate-400 hover:text-white transition-colors font-sans">
                  ۰۹۱۰۷۷۷۸۸۹۴
                </a>
                <Phone className="h-4 w-4 text-[#764ba2]" />
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row-reverse justify-between items-center gap-4 text-xs text-slate-500">
          <p className="text-center font-sans">
            &copy; {currentYear} مصطفی علوی. تمامی حقوق این وب‌سایت محفوظ است.
          </p>
          <p className="text-slate-600">
            توسعه‌یافته در بستر وب‌سایت حرفه‌ای تک‌صفحه‌ای با گرید مدرن
          </p>
        </div>

      </div>
    </footer>
  );
}
