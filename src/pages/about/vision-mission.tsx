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
                            To revolutionize the ship management industry through innovation, sustainability, and a relentless commitment to excellence, ensuring safe, efficient, and environmentally responsible operations across the world’s seas.
                        </p>
                        </div>
                        <div className="bg-card rounded-lg p-8 shadow-maritime">
                        <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5">
                            <Eye className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            To deliver unparalleled ship management services by prioritizing safety, innovation, and environmental stewardship. We are dedicated to fostering sustainable maritime practices, optimizing operational efficiency, and ensuring the highest standards of compliance and customer satisfaction across the global seas
                        </p>
                        </div>
                    </div>
                    </div>
                </SectionWrapper>                

        </main>
    )
}
    export default VisionMission;