import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { Newspaper } from "lucide-react";

const News = () => {
  return (
    <main>
      <PageHeader
        title="News"
        subtitle="Latest updates, announcements, and maritime insights from our company."
      />

      <SectionWrapper className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-6">
              <Newspaper className="w-10 h-10 text-navy" />
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              News Section Coming Soon
            </h2>

            {/* <p className="text-muted-foreground text-lg leading-relaxed">
              We are currently preparing updates, insights, and company
              announcements for this section. Stay tuned for the latest news
              from our maritime operations and industry developments.
            </p> */}

          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default News;