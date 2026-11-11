import ServicePage from "../components/ServicePage";
import { SERVICE_SLUGS } from "../lib/site";

export default function Service({ slug }: { slug: string }) {
  return <ServicePage locale="en" slug={slug} />;
}

export function getStaticPaths() {
  return { paths: SERVICE_SLUGS.map((service) => ({ params: { service } })), fallback: false };
}

export function getStaticProps({ params }: { params: { service: string } }) {
  return { props: { slug: params.service } };
}
