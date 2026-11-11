import ArabicShell from "../../components/ArabicShell";
import ServicePage from "../../components/ServicePage";
import { getFontPreloads } from "../../lib/arabicFont";
import { SERVICE_SLUGS } from "../../lib/site";

export default function ArabicService({ slug, fontPreloads }: { slug: string; fontPreloads: string[] }) {
  return <ArabicShell fontPreloads={fontPreloads}><ServicePage locale="ar" slug={slug} /></ArabicShell>;
}

export function getStaticPaths() {
  return { paths: SERVICE_SLUGS.map((service) => ({ params: { service } })), fallback: false };
}

export function getStaticProps({ params }: { params: { service: string } }) {
  return { props: { slug: params.service, fontPreloads: getFontPreloads("/ar/[service]") } };
}
