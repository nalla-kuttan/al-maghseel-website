import Link from "next/link";
import UtilityPage from "../components/UtilityPage";
export default function NotFound() {
  return <UtilityPage title="Page not found" description="This page is unavailable. Return to Al Maghseel for air conditioning supply, installation and service." path="/404/" noindex><p>The page may have moved, or the address may be incorrect.</p><Link href="/" className="inline-block rounded bg-brand-900 px-6 py-3 font-bold text-white">Return to home</Link><p lang="ar" dir="rtl">الصفحة غير موجودة. <Link href="/ar/" className="underline">العودة إلى الصفحة الرئيسية</Link></p></UtilityPage>;
}
