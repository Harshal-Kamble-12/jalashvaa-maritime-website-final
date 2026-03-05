// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Anchor } from "lucide-react";
// import logo from "../assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/fleet", label: "Fleet" },
//   { to: "/companypolicies", label: "Company Policies" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-navy shadow-maritime py-2"
//           : "bg-navy/90 backdrop-blur-sm py-4"
//       }`}
//     >
//       <nav className="container mx-auto px-4 flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
//           <div className="flex items-center gap-3">
//           <img
//          src={logo}
//          alt="Jalashvaa Maritime Logo"
//          className="w-10 h-10 object-contain"
//           />

//         <div className="flex flex-col">
//          <span className="font-heading text-lg font-bold text-primary-foreground leading-tight">
//            Jalashvaa Maritime
//           </span>
//         <span className="text-[10px] text-gold tracking-[0.2em] uppercase font-medium hidden sm:block">
//           Private Limited
//         </span>
//         </div>
//         </div> 
//         </Link>

//         {/* Desktop Nav */}
//         <ul className="hidden lg:flex items-center gap-1">
//           {navLinks.map((link) => (
//             <li key={link.to}>
//               <Link
//                 to={link.to}
//                 className={`px-4 py-2 rounded-md font-heading text-sm font-medium transition-colors ${
//                   location.pathname === link.to
//                     ? "text-gold"
//                     : "text-primary-foreground/80 hover:text-gold"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-primary-foreground p-2"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-navy-dark border-t border-primary-foreground/10 animate-fade-in">
//           <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   className={`block px-4 py-3 rounded-md font-heading text-sm font-medium transition-colors ${
//                     location.pathname === link.to
//                       ? "text-gold bg-primary-foreground/5"
//                       : "text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/5"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/fleet", label: "Fleet" },
//   { to: "/companypolicies", label: "Company Policies" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white shadow-md py-3"
//           : "bg-white/95 backdrop-blur-md py-5"
//       }`}
//     >
//       <nav className="container mx-auto px-6 flex items-center justify-between">
        
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="Jalashvaa Maritime Logo"
//             className="h-14 w-14 object-contain"
//           />

//           <div className="flex flex-col leading-tight">
//             <span className="text-xl font-bold text-gray-900">
//               Jalashvaa Maritime
//             </span>
//             <span className="text-xs text-yellow-500 tracking-[0.25em] uppercase font-medium">
//               Private Limited
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.to}>
//               <Link
//                 to={link.to}
//                 className={`text-sm font-medium transition-colors ${
//                   location.pathname === link.to
//                     ? "text-yellow-500"
//                     : "text-gray-700 hover:text-yellow-500"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-gray-900 p-2"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden bg-white border-t border-gray-200">
//           <ul className="container mx-auto px-6 py-4 flex flex-col gap-2">
//             {navLinks.map((link) => (
//               <li key={link.to}>
//                 <Link
//                   to={link.to}
//                   className={`block px-4 py-3 rounded-md text-sm font-medium ${
//                     location.pathname === link.to
//                       ? "text-yellow-500 bg-gray-100"
//                       : "text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;





import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/companypolicies", label: "Company Policies" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}
    >
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Jalashvaa Maritime Logo"
            className="h-28 w-auto object-contain"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-gray-900">
              Jalashvaa Maritime
            </span>
            <span className="text-[#10px] text-yellow-500 tracking-[0.25em] uppercase font-bold">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-900 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-md text-sm font-medium ${
                    location.pathname === link.to
                      ? "text-yellow-500 bg-gray-100"
                      : "text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;