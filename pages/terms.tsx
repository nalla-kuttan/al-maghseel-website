import UtilityPage from "../components/UtilityPage";
import { COMPANY } from "../components/layout/Header";
export default function Terms() {
  return <UtilityPage title="Terms & conditions" description="Information about service enquiries, quotations and visit arrangements with Al Maghseel." path="/terms/">
    <p>This website provides information about air conditioning supply, installation, repair and maintenance offered by {COMPANY.name}.</p>
    <h2 className="text-xl font-bold">Enquiries and appointments</h2><p>Preparing a request or opening WhatsApp does not confirm a booking. The team must confirm service coverage, availability and a visit window directly with you before dispatch.</p>
    <h2 className="text-xl font-bold">Quotations and work</h2><p>The appropriate service depends on the property, equipment and inspection findings. Confirm the scope, price, parts, timing, payment and any warranty terms with the team before agreeing to work. This website does not take payment or establish a fixed quotation.</p>
    <h2 className="text-xl font-bold">Website information</h2><p>Service descriptions are general information. They do not replace an inspection or instructions supplied with your equipment. Contact the team to confirm details relevant to your request.</p>
    <h2 className="text-xl font-bold">External links</h2><p>Links to WhatsApp and social platforms open third-party services with their own terms and privacy policies.</p>
    <h2 className="text-xl font-bold">Contact</h2><p>{COMPANY.address}</p><p>For questions about a quotation or service arrangement, contact <a className="underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or <a className="underline" href={`tel:${COMPANY.phone}`}>{COMPANY.displayPhone}</a>. Nothing on this page excludes rights available under applicable law.</p>
  </UtilityPage>;
}
