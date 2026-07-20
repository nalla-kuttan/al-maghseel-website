import React, { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../layout/Header";
import { getCopy, Locale } from "../../lib/i18n";

export default function MobileCallBar({ locale }: { locale: Locale }) {
  const [isVisible, setIsVisible] = useState(false);
  const t = getCopy(locale);
  useEffect(() => { const handleScroll = () => setIsVisible(window.scrollY > 520); handleScroll(); window.addEventListener("scroll", handleScroll, { passive: true }); return () => window.removeEventListener("scroll", handleScroll); }, []);
  return <><div aria-hidden="true" className={`h-[calc(4.75rem+env(safe-area-inset-bottom))] md:hidden ${isVisible ? "block" : "hidden"}`} /><div className={`fixed bottom-0 left-0 right-0 z-50 overflow-hidden rounded-t-lg bg-white shadow-[0_-8px_16px_rgba(0,0,0,0.14)] transition duration-200 md:hidden ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"}`}><div className="grid grid-cols-2 text-xs font-black text-white"><a href={`tel:${COMPANY.phone}`} className="inline-flex min-h-16 flex-col items-center justify-center gap-1 bg-brand-900 px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-100 focus-visible:ring-inset active:scale-[0.99]"><Phone className="h-5 w-5" />{t.mobile.call}</a><a href={`https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(t.contact.message)}`} className="inline-flex min-h-16 flex-col items-center justify-center gap-1 bg-emerald-700 px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-inset active:scale-[0.99]"><MessageCircle className="h-5 w-5" />{t.mobile.whatsapp}</a></div></div></>;
}
