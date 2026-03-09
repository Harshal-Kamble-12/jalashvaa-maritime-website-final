import { Link } from "react-router-dom";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
              <img 
              src={logo} 
              alt="Jalashvaa Maritime Logo" 
              className="w-full h-full object-contain"/>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold leading-tight">Jalashvaa Maritime</h3>
                <span className="text-[10px] text-gold tracking-[0.2em] uppercase">Private Limited</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Navigating Excellence , Delivering Reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about/company-overview", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/fleet", label: "Our Fleet" },
                { to: "/companypolicies", label: "Company Policies"},
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>




          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Ship Management",
                "Technical Management",
                "Crew Management",
                "Tanker Operations",
                "Project Mnagement",
                "Chartering & Opertions Support",
              ].map((svc) => (
                <li key={svc}>
                  <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>508-509,A-wing,Mahavir Icon, Plot 89/90, Sector 15, CBD Belapur, Navi Mumbai - 400 614</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 22-688-39378</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>admin@jalashvaa.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/50">
            © 2026 Jalashvaa Maritime Private Limited. All Rights Reserved.
          </p>
          {/* <p className="text-xs text-primary-foreground/40">
           Designed By - HARSHAL KAMBLE 
          </p> */}

          <p className="text-xs text-primary-foreground/40">
            Designed By -{" "}
            <a
              href="https://www.linkedin.com/in/harshal-kamble-hk12072002?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-gold transition-colors"
            >
              HARSHAL KAMBLE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
