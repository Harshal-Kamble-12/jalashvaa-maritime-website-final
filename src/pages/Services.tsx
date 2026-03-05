import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Ship, Wrench, Users, Fuel, Compass, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ship Management",
    short: "Comprehensive full-service ship management including operational, commercial, and regulatory oversight.",
    details: "Our ship management services cover the complete spectrum of vessel operations. We handle day-to-day management, ensure regulatory compliance with all flag state and classification society requirements, optimize operational costs, and maintain the highest standards of safety and efficiency. Our team of experienced shore-based managers works closely with onboard crews to deliver seamless operations.",
  },
  {
    icon: Wrench,
    title: "Technical Management",
    short: "Expert technical oversight, planned maintenance systems, and dry-docking supervision.",
    details: "An effective and efficient technical management of merchant vessels. With the use of cutting-edge technology applications, we deliver real-time ship management.",
  },
  {
    icon: Users,
    title: "Crew Management",
    short: "Recruitment, training, and management of qualified seafarers for all vessel types.",
    details: "An approved RPSL holder in India, we have a database of all types of crew needs. With our associates across the globe, we provide multinational crew on time – all the time.",
  },
  {
    icon: Fuel,
    title: "Tanker Operations",
    short: "Specialized tanker operation support for oil and chemical tanker fleets.",
    details: "Our tanker operations team brings extensive experience in managing oil tankers and chemical tankers. We ensure compliance with SIRE/CDI vetting requirements, implement robust oil major standards, and provide specialized training for tanker crews. Our operational procedures are designed to minimize risk and maximize efficiency in tanker operations.",
  },
  {
    icon: Compass,
    title: "Project Management",
    short: "Expert supervision and coordination of vessel new builds, retrofits, and technical upgrades.",
    details: "A team of highly experienced marine engineers only adds value to construction engineering of the vessels so that the focused approach is there right from the new build stage.We also extend our knowledge to benefit our clients during retrofits and upgradation. Naval Architects of ours are always engaged in improvising projects and expediting the on-site operations.",
  },
  {
    icon: Briefcase,
    title: "Chartering & Operations Support",
    short: "End-to-end chartering support and commercial operations management.",
    details: "We offer comprehensive chartering support including fixture negotiations, voyage estimations, laytime calculations, and post-fixture operations. Our commercial team ensures optimal vessel employment, monitors market trends, and provides valuable intelligence to maximize returns on your maritime assets.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main>
      <PageHeader title="Charting Maritime Expertise" subtitle="The core philosophy of Jalashvaa Maritime Services is to ensure that we function as an extension of our client’s team — using innovative tools and providing customized, solution-centric services tailored to client requirements
" />

      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className="bg-card rounded-lg shadow-maritime overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <svc.icon className="w-6 h-6 text-primary-foreground group-hover:text-navy transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{svc.short}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex items-center gap-1 text-gold font-heading text-sm font-semibold hover:gap-2 transition-all"
                  >
                    {expanded === i ? "Show Less" : "Learn More"}
                    {expanded === i ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {expanded === i && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <p className="text-muted-foreground text-sm leading-relaxed">{svc.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Services;
