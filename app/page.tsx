import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { ContactSidebar } from "@/components/ContactSidebar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollManager } from "@/components/ScrollManager";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-blue-500/30">
      <ScrollManager />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Contact />
      <ContactSidebar />
      <Footer />
    </main>
  );
}
