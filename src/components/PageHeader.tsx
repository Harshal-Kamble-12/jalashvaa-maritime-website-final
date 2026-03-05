import { ReactNode } from "react";
import logo from "../assets/logo.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-navy pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 mt-4 text-lg max-w-2xl mx-auto animate-fade-up delay-100">
            {subtitle}
          </p>
        )}
        <div className="w-20 h-1 bg-gold mx-auto mt-6 rounded-full animate-fade-up delay-200" />
      </div>
    </section>
  );
};

export default PageHeader;
