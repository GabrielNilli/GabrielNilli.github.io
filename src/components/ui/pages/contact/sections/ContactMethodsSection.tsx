// =================================
//  IMPORTS
// =================================
import { contactMethods } from "../data/contact";
import ContactMethodCard from "./ContactMethodCard";

// =================================
//  COMPONENT
// =================================
export default function ContactMethodsSection() {
  // =================================
  //  RENDER
  // =================================
  return (
    <section className="flex flex-col gap-3">
      {contactMethods.map((method) => (
        <ContactMethodCard key={method.id} method={method} />
      ))}
    </section>
  );
}
