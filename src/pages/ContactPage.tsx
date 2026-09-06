// =================================
//  IMPORTS
// =================================
import ContactHeaderSection from "../components/ui/pages/contact/sections/ContactHeaderSection";
import ContactMethodsSection from "../components/ui/pages/contact/sections/ContactMethodsSection";
import ContactFormSection from "../components/ui/pages/contact/sections/ContactFormSection";
import StatusPanel from "../components/ui/pages/contact/sections/StatusPanel";
import ContactCTASection from "../components/ui/pages/contact/sections/ContactCTASection";
import {
  availabilityStatus,
  currentStatus,
} from "../components/ui/pages/contact/data/contact";

// =================================
//  COMPONENT
// =================================
export default function ContactPage() {
  // =================================
  //  RENDER
  // =================================
  return (
    <div className="flex flex-col gap-8">
      <ContactHeaderSection />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <ContactMethodsSection />

          <StatusPanel
            title="Status"
            heading={availabilityStatus.heading}
            items={availabilityStatus.items}
            itemsLayout="inline"
            location={availabilityStatus.location}
            responseTime={availabilityStatus.responseTime}
          />

          <StatusPanel
            title="Current status"
            heading={currentStatus.heading}
            items={currentStatus.items}
            itemsLayout="list"
          />
        </div>

        <ContactFormSection />
      </div>

      <ContactCTASection />
    </div>
  );
}
