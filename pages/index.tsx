import Head from "next/head";
import AlMaghseelSite from "../components/AlMaghseelSite";

export default function Home() {
  return (
    <>
      <Head>
        <title>Al Maghseel Central Air Conditioner Est.</title>
        <meta
          name="description"
          content="Reliable air conditioning installation, repair, and maintenance services across the UAE. Serving since 2006."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-al-maghseel.PNG" />
      </Head>
      <AlMaghseelSite />
    </>
  );
}