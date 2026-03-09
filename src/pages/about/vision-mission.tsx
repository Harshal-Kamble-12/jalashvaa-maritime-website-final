import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";






const VisionMission = () => { 
    return (
        <main>
            <PageHeader title="Our Vision & Mission" subtitle="" />

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

        </main>
    )
}
    export default VisionMission;