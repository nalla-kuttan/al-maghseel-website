import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function RouteLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => setLoading(true); const end = () => setLoading(false);
    router.events.on("routeChangeStart", start); router.events.on("routeChangeComplete", end); router.events.on("routeChangeError", end);
    return () => { router.events.off("routeChangeStart", start); router.events.off("routeChangeComplete", end); router.events.off("routeChangeError", end); };
  }, [router.events]);
  return loading ? <div role="status" className="fixed inset-x-0 top-0 z-[80] bg-brand-900 px-4 py-2 text-center text-sm font-bold text-white">{router.pathname.startsWith("/ar") ? "جارٍ التحميل…" : "Loading…"}</div> : null;
}
