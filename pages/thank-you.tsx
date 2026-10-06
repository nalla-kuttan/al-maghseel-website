import { useEffect, useState } from "react";
import UtilityPage from "../components/UtilityPage";
import { COMPANY } from "../components/layout/Header";
export default function ThankYou() {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { try { setMessage(sessionStorage.getItem("service-request") || ""); sessionStorage.removeItem("service-request"); } catch {} }, []);
  const copy = async () => { try { await navigator.clipboard.writeText(message); setCopied(true); setError(false); } catch { setError(true); } };
  return <UtilityPage title="Thank you — your next step" description="Review your service enquiry and contact Al Maghseel to confirm availability." path="/thank-you/" noindex>
    <p>Your enquiry has not been sent yet. Copy your details, open WhatsApp and send them to the team. A visit is only booked after the team confirms it.</p>
    <p lang="ar" dir="rtl">لم يُرسل طلبك بعد. انسخ التفاصيل وافتح واتساب وأرسلها للفريق. لا يتم تأكيد الزيارة إلا بعد موافقة الفريق.</p>
    {message && <><label htmlFor="request-review" className="block font-bold">Your request / طلبك</label><textarea id="request-review" readOnly value={message} rows={8} className="w-full rounded border border-brand-200 bg-white p-4" /><button type="button" onClick={copy} className="rounded border border-brand-900 px-5 py-3 font-bold text-brand-900 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 active:scale-[0.98]">{copied ? "Copied / تم النسخ" : "Copy request / نسخ الطلب"}</button><p role="status">{error ? "Please select and copy the message above manually. يرجى نسخ الرسالة أعلاه يدوياً." : copied ? "Paste your request into WhatsApp and send it. الصق طلبك في واتساب وأرسله." : ""}</p></>}
    <div className="flex flex-wrap gap-3"><a href={COMPANY.whatsappUrl} className="rounded bg-emerald-700 px-5 py-3 font-bold text-white transition-colors hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">Open WhatsApp / فتح واتساب</a><a href={`tel:${COMPANY.phone}`} className="rounded border border-brand-900 px-5 py-3 font-bold text-brand-900 transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2">Call {COMPANY.displayPhone}</a></div>
  </UtilityPage>;
}
