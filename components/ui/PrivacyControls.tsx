import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
const key = "almaghseel-analytics-consent";
export default function PrivacyControls() {
  const [consent, setConsent] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const ar = useRouter().pathname.startsWith("/ar");
  useEffect(() => {
    const read = () => { try { const saved = localStorage.getItem(key); setConsent(saved); setOpen(saved !== "accepted" && saved !== "declined"); } catch { setOpen(true); } };
    read(); window.addEventListener("storage", read); return () => window.removeEventListener("storage", read);
  }, []);
  const choose = (value: string) => { try { localStorage.setItem(key, value); } catch {} setConsent(value); setOpen(false); };
  return <>
    {consent === "accepted" && <Analytics beforeSend={(event) => { try { return localStorage.getItem(key) === "accepted" ? { ...event, url: event.url.split("?")[0] } : null; } catch { return null; } }} />}
    <div className="bg-white px-4 py-4 text-center pb-24 md:pb-4"><button onClick={() => setOpen(true)} className="text-sm text-brand-900 underline">{ar ? "خيارات الخصوصية" : "Privacy choices"}</button></div>
    {open && <aside aria-label={ar ? "خيارات ملفات الارتباط" : "Cookie and analytics choices"} dir={ar ? "rtl" : "ltr"} className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-3 right-3 z-[60] max-h-[60vh] overflow-auto rounded-lg border border-brand-200 bg-white p-4 shadow-xl md:bottom-5 md:left-auto md:right-5 md:max-w-md">
      <h2 className="font-bold">{ar ? "خصوصيتك" : "Your privacy"}</h2><p className="mt-2 text-sm leading-6">{ar ? "نحفظ اختيارك في هذا المتصفح. هل تسمح بتحليلات الزيارات الاختيارية لتحسين الموقع؟" : "We store your preference in this browser. May we enable optional visit analytics to improve the site?"} <Link href="/privacy/" className="underline">{ar ? "سياسة الخصوصية (بالإنجليزية)" : "Privacy policy"}</Link></p>
      <div className="mt-4 flex flex-wrap gap-3"><button onClick={() => choose("declined")} className="min-h-11 rounded border border-brand-900 px-4 py-2 text-sm font-bold text-brand-900">{ar ? "رفض التحليلات" : "Decline analytics"}</button><button onClick={() => choose("accepted")} className="min-h-11 rounded bg-brand-900 px-4 py-2 text-sm font-bold text-white">{ar ? "السماح بالتحليلات" : "Accept analytics"}</button></div>
    </aside>}
  </>;
}
