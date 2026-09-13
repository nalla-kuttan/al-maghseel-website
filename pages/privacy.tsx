import UtilityPage from "../components/UtilityPage";
import { COMPANY } from "../components/layout/Header";
export default function Privacy() {
  return <UtilityPage title="Privacy policy" description="How Al Maghseel handles service enquiries, website analytics and your privacy choices." path="/privacy/">
    <p>This policy describes this website and service enquiries to {COMPANY.name}, at {COMPANY.address}.</p>
    <h2 className="text-xl font-bold">Information you choose to share</h2><p>The request form uses your name, location, service selection and optional issue description to prepare a message in your browser. It does not submit a booking to a server. The prepared message is held in session storage so you can review and copy it on the next page; it is cleared there or when the tab closes. If you contact us through WhatsApp, email or phone, we receive the details you share to respond to your enquiry and arrange service.</p>
    <h2 className="text-xl font-bold">Analytics and browser storage</h2><p>With your permission, this site loads Vercel Web Analytics to understand page visits and improve the website. Analytics is disabled until you accept. We store your preference in local storage; you can change it using “Privacy choices” on any page. The hosting provider may process technical request information to deliver and secure the site.</p>
    <h2 className="text-xl font-bold">External services</h2><p>WhatsApp, social media and your email provider handle information under their own privacy policies when you use their services. Avoid including sensitive personal information in an initial enquiry.</p>
    <h2 className="text-xl font-bold">Questions and requests</h2><p>For questions about information shared with us, or to request access, correction or deletion, email <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Information needed to handle an enquiry, perform agreed services or meet applicable obligations may need to be retained.</p>
  </UtilityPage>;
}
