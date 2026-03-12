// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import heroImage from "@/assets/hero-maritime.jpg";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Maritime tanker vessel sailing across the ocean at sunset"
//           className="w-full h-full object-cover"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-navy-light/90 via-navy/70 to-navy-dark/50" />
//         {/* Lightened Overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-black-light/30 to-navy-dark/20 " /> */}


//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center pt-20">
//         <div className="max-w-3xl mx-auto space-y-6">
//           <p className="text-gold font-heading font-semibold tracking-[0.25em] uppercase text-sm animate-fade-up">
//             Welcome to
//           </p>
//           <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up delay-100">
//             Jalashvaa Maritime
//             <span className="block text-gold">Private Limited</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto animate-fade-up delay-200">
//             Navigating Excellence, Delivering Reliability.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up delay-300">
//             <Link
//               to="/services"
//               className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold px-8 py-3.5 rounded-md hover:bg-gold-light transition-colors shadow-gold"
//             >
//               Our Services
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//             <Link
//               to="/contact"
//               className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-md hover:border-gold hover:text-gold transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-2">
//           <div className="w-1.5 h-3 bg-gold rounded-full" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-maritime.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Kept exactly as requested */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Maritime tanker vessel sailing across the ocean"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-light/30 to-navy-dark/20 " />
      </div>

      {/* Content - Optimized for Visibility */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* 1. Welcome Tag: Increased weight and added shadow */}
          {/* <p className="text-gold font-heading font-bold tracking-[0.3em] uppercase text-sm animate-fade-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Welcome to
          </p> */}

          <p className="text-white font-heading font-bold tracking-[0.3em] uppercase text-sm animate-fade-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Welcome to
          </p>

          {/* 2. Main Title: Switched to font-black (900 weight) and heavy drop shadow */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight animate-fade-up delay-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
            Jalashvaa Maritime
            <span className="block text-[#FBBF24]">Private Limited</span>
          </h1>

          {/* 3. Subtext: Removed opacity (was /80) and added shadow for readability over white waves */}
          <p className="text-lg sm:text-2xl text-white font-semibold max-w-2xl mx-auto animate-fade-up delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Navigating Excellence, Delivering Reliability.
          </p>

          {/* 4. Buttons: Added a slight backdrop-blur to the secondary button for better definition */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-up delay-300">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#FBBF24] text-navy-dark font-heading font-bold px-10 py-4 rounded-md hover:bg-gold-light transition-all shadow-lg hover:scale-105"
            >
              Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 bg-black/10 backdrop-blur-sm text-white font-heading font-bold px-10 py-4 rounded-md hover:border-[#FBBF24] hover:text-[#FBBF24] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-[#FBBF24] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;