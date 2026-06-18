import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Linkedin, Send, Copy, Check, Star, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const personalInfo = {
    email: "paktia96@gmail.com",
    phones: ["09108200114", "09107778894"],
    displayPhones: ["۰۹۱۰۸۲۰۰۱۱۴", "۰۹۱۰۷۷۷۸۸۹۴"],
    linkedin: "https://linkedin.com/in/mostafa-alavi",
    telegram: "https://t.me/mostafa_alavi",
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("لطفا نام و متن پیام را کامل کنید.");
      return;
    }

    setFormState("submitting");

    // Simulate sending time
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#764ba2]/5 rounded-full blur-3xl" />

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
              ارتباط با من
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              برنامه‌ریزی برای اولین گفتگوی تجاری مشترک
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-l from-indigo-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              برای دریافت مشاوره‌های استراتژیک مارکتینگ، بازاریابی B2B، همکاری در همایش‌ها یا تحلیل بلاکچین با من تماس بگیرید.
            </p>
          </motion.div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Panel: Col 5 */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white text-right pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                راه‌های مستقیم تماس
              </h3>

              {/* Email channel card */}
              <div className="flex items-center gap-4 justify-between p-4 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex-row-reverse">
                <div className="flex items-center gap-3 flex-row-reverse text-right">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">ایمیل مستقیم</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer"
                  title="کپی ایمیل"
                >
                  {copiedText === "email" ? (
                    <Check className="h-4 w-4 text-emerald-500 animate-scale-up" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              {/* Phones channel cards */}
              {personalInfo.phones.map((phone, idx) => (
                <div key={phone} className="flex items-center gap-4 justify-between p-4 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex-row-reverse">
                  <div className="flex items-center gap-3 flex-row-reverse text-right">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">شماره تلفن مستقیم {idx + 1}</p>
                      <a href={`tel:${phone}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-purple-600 transition-colors font-sans">
                        {personalInfo.displayPhones[idx]}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(phone, `phone_${idx}`)}
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer"
                    title="کپی شماره"
                  >
                    {copiedText === `phone_${idx}` ? (
                      <Check className="h-4 w-4 text-emerald-500 animate-scale-up" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              ))}

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <p className="text-xs text-slate-400 text-center mb-4">پلتفرم‌های ارتباطی و شبکه‌های اجتماعی</p>
                
                <div className="flex justify-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-1/2 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all font-semibold text-xs cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>لینکدین</span>
                  </a>

                  {/* Telegram */}
                  <a
                    href={personalInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-1/2 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-purple-50 hover:border-purple-200 text-slate-700 hover:text-purple-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all font-semibold text-xs cursor-pointer"
                  >
                    <Send className="h-4 w-4 rotate-180" />
                    <span>تلگرام</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Form Panel: Col 7 */}
          <div className="lg:col-span-7">
            
            <div className="bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/70 rounded-3xl p-6 md:p-8">
              
              <AnimatePresence mode="wait">
                {formState !== "success" ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                      ارسال پیام مستقیم
                    </h3>

                    {/* Input name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                        نام و نام خانوادگی <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="مصطفی علوی"
                      />
                    </div>

                    {/* Inputs Row (Email & Phone) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                          تلفن تماس
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 transition-all text-left font-sans"
                          placeholder="09123456789"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                          آدرس ایمیل
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 transition-all text-left font-sans"
                          placeholder="your-name@gmail.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                        موضوع گفتگو
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 transition-all"
                        placeholder="همکاری در برگزاری رویداد / مشاوره بازاریابی"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2">
                        متن پیام شما <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                        placeholder="سلام، برای همکاری در توسعه یک سیستم فروش سازمانی تمایل به گفتگو داشتم..."
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {formState === "submitting" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <Send className="h-4 w-4 rotate-180" />
                          <span>ارسال پیغام هم اکنون</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 mb-6 border border-emerald-200/50 dark:border-emerald-800/40">
                      <CheckCircle className="h-10 w-10" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      پیام شما با موفقیت دریافت شد
                    </h3>

                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                      با تشکر از پیام فرستادگی شما. آقای مصطفی علوی به زودی متن شما را مطالعه نموده و از طریق ایمیل یا تلفن درج شده تماس حاصل خواهند نمود.
                    </p>

                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-8 rounded-xl border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-all cursor-pointer animate-pulse"
                    >
                      ارسال پیام جدید
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
