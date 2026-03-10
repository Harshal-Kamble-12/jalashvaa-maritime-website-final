import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Ship, Wrench, Users, Fuel, Compass, Briefcase, ChevronDown,ShieldCheck, ChevronUp } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Ship Management",
    short: "Comprehensive full-service ship management including operational, commercial, and regulatory oversight.",
    details: "Our ship management services cover the complete spectrum of vessel operations. We handle day-to-day management, ensure regulatory compliance with all flag state and classification society requirements, optimize operational costs, and maintain the highest standards of safety and efficiency. Our team of experienced shore-based managers works closely with onboard crews to deliver seamless operations.",
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
  {
    icon: ShieldCheck,
    title: "IT Services",
    short: "IT solutions for vessels to monitor ships, manage emission controls, Compliance & Voyage Management.",
    details: "We offer solution for the shipsOur maritime IT services are centered around our proprietary, end-to-end ERP system, specifically engineered for the complexities of modern fleet operations. We provide a unified digital ecosystem that integrates real-time vessel monitoring with advanced voyage management and automated emission controls. By implementing our custom software, we bridge the gap between ship and shore, ensuring seamless data flow and total regulatory compliance. Our solution empowers operators to optimize fuel efficiency, streamline administrative workflows, and maintain a competitive, data-driven edge in a rapidly evolving global maritime landscape.",
  },
];


const partners = [
  {
    name: "Farohar Enterprizes",
    link: "https://faroharltd.com/", 
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


{/* <SectionWrapper className="py-16 bg-muted">
  <div className="container mx-auto px-4 text-center">
    
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
      Our Partners
    </h2>

    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-gold hover:text-navy transition-colors underline"
        >
          {partner.name}
        </a>
      ))}
    </div>

  </div>
</SectionWrapper> */}


        <SectionWrapper className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Our Partners
              </h2>
              <p className="text-muted-foreground mt-3">
                Trusted strategic partners to deliver reliable & sustained maritime solutions.
              </p>
            </div>

            {/* Long Partner Cards */}
            <div className="flex flex-col gap-6">

              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-card border border-border rounded-xl px-8 py-6 flex items-center justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >

                  <span className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                    {partner.name}
                  </span>

                  <span className="text-gold text-xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>

                </a>
              ))}

            </div>
          </div>
        </SectionWrapper>
    </main>
  );
};

export default Services;
