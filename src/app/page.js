

import ActionSection from "./Component/homepage/ActionSection";
import ContactForm from "./Component/homepage/ContactForm";
import FeatureSection from "./Component/homepage/FeatureSection";
import BannerSection from "./Component/homepage/HomeBanner";
import TestimonialSection from "./Component/homepage/TestimonialSection";
import Image from "next/image";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Home() {
  return (
    <div>
      {/* banner section  */}

      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  );
}