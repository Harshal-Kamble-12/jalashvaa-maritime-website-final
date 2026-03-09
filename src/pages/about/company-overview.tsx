import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import aboutImage from "@/assets/about-maritime.jpg";



const values = [
  { icon: Shield, title: "Safety", desc: "Unwavering commitment to the highest safety standards in all operations." },
  { icon: Award, title: "Excellence", desc: "Striving for operational excellence in every aspect of our service delivery." },
  { icon: Heart, title: "Integrity", desc: "Conducting business with transparency, honesty, and ethical practices." },
  { icon: Users, title: "Teamwork", desc: "Fostering collaboration and mutual respect across all levels of our organization." },
];

const CompanyOverview = () => { 
    return (
        <main>
            <PageHeader title="Company Overview" subtitle="Learn about our company and the values that drive us." />

                {/* Company Overview */}
                    <SectionWrapper className="py-20 bg-background">
                        <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                            {/* <h2 className="font-heading text-3xl font-bold text-foreground">Company Overview</h2> */}
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

                {/* Our Values */}
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

        </main>
    )
}
    export default CompanyOverview;