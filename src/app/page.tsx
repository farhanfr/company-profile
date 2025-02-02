import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/resources/data";
export default function Home() {
  return (
    <Container>
      <div className="mt-24"></div>
      <Hero />
      <SectionTitle
        preTitle="Our Services"
        title=" What Services We Offer ?"
      >
        We develop IT solutions that are tailored to the scale and complexity of your business needs
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Our Vision & Mission"
        title="What Is Our Vision and Mission ?"
      >
        We have several visions and missions embedded in our company
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        {/* Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers. */}
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        {/* Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests. */}
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
