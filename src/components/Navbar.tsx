// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About Us" },
//   { to: "/companypolicies", label: "Company Policies" },
//   { to: "/services", label: "Services" },
//   { to: "/fleet", label: "Fleet" },
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
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm`}
//     >
//       <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Jalashvaa Maritime Logo"
//             className="h-28 w-auto object-contain"
//           />

//           <div className="flex flex-col leading-tight">
//             <span className="text-2xl font-bold text-gray-900">
//               Jalashvaa Maritime
//             </span>
//             <span className="text-[#10px] text-yellow-500 tracking-[0.25em] uppercase font-bold">
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
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },

  {
    label: "About Us",
    dropdown: [
      { to: "/about/company-overview", label: "Company Overview" },
      { to: "/about/vision-mission", label: "Vision & Mission" },
      { to: "/about/board-members", label: "Board Members" },
      { to: "/about/management-team", label: "Management Team" },
      { to: "/about/voyage-so-far", label: "Voyage So Far" },
    ],
  },

  { to: "/companypolicies", label: "Company Policies" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/news", label: "News"},
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
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
            <span className="text-[14px] text-yellow-500 tracking-[0.25em] uppercase font-bold">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">

              {/* Normal Link */}
              {!link.dropdown && (
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
              )}

              {/* Dropdown */}
              {link.dropdown && (
                <>
                    <span className="text-sm font-medium text-gray-700 hover:text-yellow-500 flex items-center gap-1 py-2">
                    {link.label}
                    <ChevronDown size={16} />
                  </span>

                  {/* <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-56 border z-50"> */}
                    <ul className="absolute left-0 top-full pt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-56 border z-50">
                    {link.dropdown.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-500 transition"
                      >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}

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

            <li>
              <Link
                to="/"
                className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
              >
                Home
              </Link>
            </li>

            {/* Mobile About Dropdown */}
            <li className="px-4 text-sm font-semibold text-gray-700 mt-2">
              About Us
            </li>

            <li>
              <Link
                to="/about/company-overview"
                className="block px-6 py-2 text-sm text-gray-700 hover:text-yellow-500"
              >
                Company Overview
              </Link>
            </li>

            <li>
              <Link
                to="/about/vision-mission"
                className="block px-6 py-2 text-sm text-gray-700 hover:text-yellow-500"
              >
                Vision & Mission
              </Link>
            </li>

            <li>
              <Link
                to="/about/board-members"
                className="block px-6 py-2 text-sm text-gray-700 hover:text-yellow-500"
              >
                Board Members
              </Link>
            </li>

            <li>
              <Link
                to="/about/management-team"
                className="block px-6 py-2 text-sm text-gray-700 hover:text-yellow-500"
              >
                Management Team
              </Link>
            </li>

            <li>
              <Link
                to="/about/voyage-so-far"
                className="block px-6 py-2 text-sm text-gray-700 hover:text-yellow-500"
              >
                Voyage So Far
              </Link>
            </li>

            <li>
              <Link
                to="/companypolicies"
                className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
              >
                Company Policies
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/fleet"
                className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
              >
                Fleet
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block px-4 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;