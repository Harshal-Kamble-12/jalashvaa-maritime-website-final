import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award, Compass, Ship, Wrench, Globe } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import aboutImage from "@/assets/about-maritime.jpg";

const services = [
  { icon: Ship, title: "Ship Management", desc: "Comprehensive ship management solutions ensuring optimal vessel performance and regulatory compliance." },
  { icon: Wrench, title: "Technical Management", desc: "Expert technical oversight, maintenance planning, and dry-docking supervision for all vessel types." },
  { icon: Users, title: "Crew Management", desc: "Recruitment, training, and management of qualified maritime professionals worldwide." },
  { icon: Globe, title: "Marine Consultancy", desc: "Strategic maritime advisory services covering operations, compliance, and market intelligence." },
];

const whyUs = [
  { icon: Award, title: "Professional Excellence", desc: "Decades of maritime expertise with a track record of operational excellence." },
  { icon: Shield, title: "Safety Focused", desc: "Uncompromising commitment to safety standards and environmental compliance." },
  { icon: Compass, title: "Experienced Team", desc: "Seasoned maritime professionals with deep industry knowledge and global experience." },
];

const Index = () => {
  return (
    <main>
      <HeroSection />

      {/* About Short Intro */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gold font-heading font-semibold tracking-[0.2em] uppercase text-sm">About Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                A Legacy of Maritime <span className="text-gradient-gold">Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Jalashvaa Maritime Private Limited, is a Indian maritime company dedicated to delivering world-class ship management and marine services. With decades of combined experience, we provide comprehensive solutions to the global maritime industry.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-heading font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Aerial view of cargo vessels at sea representing Jalashvaa Maritime operations"
                className="rounded-lg shadow-maritime w-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-lg flex items-center justify-center shadow-gold">
                <div className="text-center text-navy">
                  <span className="block font-heading text-2xl font-bold">15+</span>
                  <span className="text-xs font-semibold">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Overview */}
      <SectionWrapper className="py-20 bg-ocean-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold font-heading font-semibold tracking-[0.2em] uppercase text-sm">What We Do</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Our Core Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`bg-card rounded-lg p-6 shadow-maritime hover:-translate-y-1 transition-transform duration-300 group delay-${(i + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <svc.icon className="w-7 h-7 text-primary-foreground group-hover:text-navy transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{svc.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-md hover:bg-navy-light transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold font-heading font-semibold tracking-[0.2em] uppercase text-sm">Why Choose Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Trusted Maritime Partner
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Get in touch today to learn how Jalashvaa Maritime can support your maritime operations with reliable, professional services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-heading font-semibold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors shadow-gold"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
