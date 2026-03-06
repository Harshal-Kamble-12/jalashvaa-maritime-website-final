import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import aboutImage from "@/assets/about-maritime.jpg";
import voyageTimeline from "@/assets/voyage-timeline.png";

const values = [
  { icon: Shield, title: "Safety", desc: "Unwavering commitment to the highest safety standards in all operations." },
  { icon: Award, title: "Excellence", desc: "Striving for operational excellence in every aspect of our service delivery." },
  { icon: Heart, title: "Integrity", desc: "Conducting business with transparency, honesty, and ethical practices." },
  { icon: Users, title: "Teamwork", desc: "Fostering collaboration and mutual respect across all levels of our organization." },
];

const leaders = [
  { name: "Captain Shravan Kumar", role: "MD, CEO", initials: "CSK" },
  { name: "Mr. Romie Umriger", role: "Director - Technical Operations", initials: "RM" },
  { name: "Mr. Kunal Saxena", role: "Head - Technical", initials: "KS" },
];

const About = () => {
  return (
    <main>
      <PageHeader title="About Us" subtitle="Learn about our journey, mission, and the values that drive us." />

      {/* Company Overview */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold text-foreground">Company Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jalashvaa Maritime Private Limited is a premier maritime company headquatered in India offering end-to-end maritime solutions. Jalashvaa Maritime Pvt Ltd brings decades of experience in managing diverse vessel types ranging from tankers, bulk carriers, specilised offshore vessels worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our personalized attention ensures safety of life, environment, assets along with delievring quality and efficiency in operations. We leverage modern technology and industry best practices to deliver exceptional value to our clients.
              </p>
            </div>
            <img
              src={aboutImage}
              alt="Maritime vessels at sea representing Jalashvaa Maritime fleet operations"
              className="rounded-lg shadow-maritime w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="py-20 bg-ocean-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-maritime">
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class maritime services through operational excellence, innovation, and an unwavering commitment to safety. We aim to be the preferred partner for ship owners seeking reliable, cost-effective management solutions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-maritime">
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a global leader in maritime services, setting industry benchmarks for quality, safety, and sustainability. We envision a future where our expertise and innovation shape the maritime industry for the better.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>


        {/* The Voyage So Far */}
        <SectionWrapper className="py-16 bg-background">
          <div className="container mx-auto px-4">

            {/* Heading */}
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                The Voyage So Far
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                A journey of growth, resilience, and strategic expansion in the maritime industry.
              </p>
            </div>

            {/* Timeline Image */}
            <div className="max-w-6xl mx-auto">
              <img
                src={voyageTimeline}
                alt="Jalashvaa Maritime growth timeline"
                className="w-full h-auto rounded-lg shadow-maritime object-contain"
              />
            </div>

          </div>
        </SectionWrapper>



      {/* Values */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Values</h2>
          </div>
          {/*<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" or grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto>*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="text-center space-y-3 p-6 rounded-lg hover:bg-ocean-light transition-colors">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-ocean-light">
          <div className="container mx-auto px-4">
            
            {/* Section Heading */}
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Our Leadership
              </h2>
              <p className="text-muted-foreground mt-3">
                Seasoned professionals driving our maritime vision
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leaders.map((l) => (
                <div
                  key={l.name}
                  className="bg-card rounded-lg p-8 shadow-maritime text-center transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Initials Circle */}
                  <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                    <span className="font-heading text-xl font-bold text-gold">
                      {l.initials}
                    </span>
                  </div>

                  {/* Name */}
                  <h4 className="font-heading font-semibold text-lg text-foreground">
                    {l.name}
                  </h4>

                  {/* Role */}
                  <p className="text-muted-foreground text-sm mt-2">
                    {l.role}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </SectionWrapper>


      {/* Company History */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-8">Our History</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Our journey began as <strong className="text-foreground">Peninsular Maritime Pvt Ltd</strong>, a company founded with the vision of providing reliable maritime services to the Indian and international shipping community.
            </p>
            <p>
              Over the years, we built a strong reputation for professionalism, safety, and operational efficiency. As our capabilities and client base expanded, we undertook a strategic rebranding to better reflect our evolved identity and broader vision.
            </p>
            <p>
              In this new chapter, we operate as <strong className="text-foreground">Jalashvaa Maritime Private Limited</strong> — a name inspired by the Sanskrit word for "water power," symbolizing our deep connection to the sea and our commitment to harnessing maritime excellence.
            </p>
            <p>
              Today, Jalashvaa Maritime continues the proud legacy of Peninsular Maritime while charting a bold course for the future with expanded services, enhanced capabilities, and a renewed commitment to our clients and crew.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default About;
