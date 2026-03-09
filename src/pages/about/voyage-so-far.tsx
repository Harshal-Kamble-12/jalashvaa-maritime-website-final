import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";
import aboutImage from "@/assets/about-maritime.jpg";
import voyageTimeline from "@/assets/voyage-timeline.png";


const VoyageSoFar = () => { 
    return (
        <main>
            <PageHeader title="The Voyage So Far" subtitle="A journey of growth, resilience, and strategic expansion in maritime industry. " />
             {/* The Voyage So Far */}
        <SectionWrapper className="py-16 bg-background">
          <div className="container mx-auto px-4">

            {/* Heading */}
            {/* <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                The Voyage So Far
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                A journey of growth, resilience, and strategic expansion in the maritime industry.
              </p>
            </div> */}

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
        </main>

        
    )
}
export default VoyageSoFar;