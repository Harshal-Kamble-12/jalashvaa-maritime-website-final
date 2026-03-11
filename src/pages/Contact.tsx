// import { useState, FormEvent } from "react";
// import PageHeader from "@/components/PageHeader";
// import SectionWrapper from "@/components/SectionWrapper";
// import { MapPin, Phone, Mail, Send } from "lucide-react";

// //my code
// import emailjs from "@emailjs/browser";

// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm(
//     "service_cczkuhc",
//     "template_vxqcuq1",
//     e.target,
//     "POKhYNphUvX08Jkb8 "
//   )
//   .then(() => {
//     alert("Message sent successfully!");
//   })
//   .catch(() => {
//     alert("Failed to send message.");
//   });
// };

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   phone?: string;
//   message?: string;
// }

// const Contact = () => {
//   const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitted, setSubmitted] = useState(false);

//   const validate = (): boolean => {
//     const errs: FormErrors = {};
//     if (!form.name.trim()) errs.name = "Name is required.";
//     if (!form.email.trim()) errs.email = "Email is required.";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email.";
//     if (form.phone && !/^[+\d\s()-]{7,20}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
//     if (!form.message.trim()) errs.message = "Message is required.";
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (validate()) setSubmitted(true);
//   };

//   return (
//     <main>
//       <PageHeader title="Contact Us" subtitle="Get in touch with our team for inquiries, partnerships, or support." />

//       <SectionWrapper className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//             {/* Contact Info */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   We'd love to hear from you. Whether you have a question about our services, fleet, or anything else, our team is ready to assist.
//                 </p>
//               </div>

//               <div className="space-y-5">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
//                     <MapPin className="w-5 h-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold text-foreground">Registered Office</h4>
//                     <p className="text-muted-foreground text-sm mt-1">
//                       508-509,A-wing,Mahavir Icon, Plot 89/90, Sector 15, CBD Belapur,<br />Navi Mumbai - 400 614, Maharashtra, India
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
//                     <Phone className="w-5 h-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold text-foreground">Phone</h4>
//                     <p className="text-muted-foreground text-sm mt-1">+91 22-688-39378</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
//                     <Mail className="w-5 h-5 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-heading font-semibold text-foreground">Email</h4>
//                     <p className="text-muted-foreground text-sm mt-1">admin@jalashvaa.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="rounded-lg overflow-hidden shadow-maritime">
//                 <iframe
//                   title="Jalashvaa Maritime Office Location Map"
//                   src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3772.1377556422403!2d73.03321852503818!3d19.013650532178165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJalashvaa%20Maritime%20Private%20Limited%20508-509%2C%20A-wing%2C%20Mahavir%20Icon%2C%20Plot%2089%2F90!5e0!3m2!1sen!2sin!4v1771997470998!5m2!1sen!2sin"

//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-card rounded-lg p-8 shadow-maritime">
//               <h3 className="font-heading text-xl font-bold text-foreground mb-6">Contact with us</h3>

//               {submitted ? (
//                 <div className="text-center py-12 space-y-4">
//                   <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
//                     <Send className="w-8 h-8 text-gold" />
//                   </div>
//                   <h4 className="font-heading text-xl font-semibold text-foreground">Thank You!</h4>
//                   <p className="text-muted-foreground">Your message has been received. We'll get back to you shortly.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//                   <div>
//                     <label htmlFor="name" className="block font-heading text-sm font-medium text-foreground mb-1.5">
//                       Full Name *
//                     </label>
//                     <input
//                       id="name"
//                       type="text"
//                       value={form.name}
//                       onChange={(e) => setForm({ ...form, name: e.target.value })}
//                       className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
//                       placeholder="Enter your name"
//                     />
//                     {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block font-heading text-sm font-medium text-foreground mb-1.5">
//                       Email Address *
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => setForm({ ...form, email: e.target.value })}
//                       className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
//                       placeholder="Enter your email"
//                     />
//                     {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block font-heading text-sm font-medium text-foreground mb-1.5">
//                       Phone Number
//                     </label>
//                     <input
//                       id="phone"
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                       className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
//                       placeholder="+91-XXXX-XXXXXX"
//                     />
//                     {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block font-heading text-sm font-medium text-foreground mb-1.5">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       rows={4}
//                       value={form.message}
//                       onChange={(e) => setForm({ ...form, message: e.target.value })}
//                       className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
//                       placeholder="How can we help you?"
//                     />
//                     {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-navy text-primary-foreground font-heading font-semibold py-3 rounded-md hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
//                   >
//                     Send Message <Send className="w-4 h-4" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>
//     </main>
//   );
// };

// export default Contact;



import { useState,useEffect, FormEvent } from "react";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";



interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://elfsightcdn.com/platform.js";
  script.async = true;
  document.body.appendChild(script);
}, []);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!form.name.trim()) errs.name = "Name is required.";

    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email.";

    if (form.phone && !/^[+\d\s()-]{7,20}$/.test(form.phone))
      errs.phone = "Enter a valid phone number.";

    if (!form.message.trim()) errs.message = "Message is required.";

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .send(
        "service_cczkuhc",
        "template_vxqcuq1",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "POKhYNphUvX08Jkb8"
      )
      .then(() => {
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, partnerships, or support."
      />

      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to hear from you. Whether you have a question about our services,
                  fleet, or anything else, our team is ready to assist.
                </p>
              </div>



              {/* Google Reviews */}
                <div className="mb-6">

                  <div
                    className="elfsight-app-464d20a4-dada-461e-98de-47d9ef33079f"
                    data-elfsight-app-lazy
                  ></div>
                </div>
            <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Registered Office
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      508-509,A-wing,Mahavir Icon, Plot 89/90, Sector 15, CBD Belapur,<br />
                      Navi Mumbai - 400 614, Maharashtra, India
                    </p>
                  </div>
                </div>

                

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Phone
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      +91 22-688-39378
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      Email
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      info@jalashvaa.in
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-maritime">
                <iframe
                  title="Jalashvaa Maritime Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3772.1377556422403!2d73.03321852503818!3d19.013650532178165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJalashvaa%20Maritime%20Private%20Limited%20508-509%2C%20A-wing%2C%20Mahavir%20Icon%2C%20Plot%2089%2F90!5e0!3m2!1sen!2sin!4v1771997470998!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>


          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-maritime">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Contact with us
            </h3>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  Thank You!
                </h4>
                <p className="text-muted-foreground">
                  Your message has been received. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* Full Name */}
                <div>
                  <label className="block font-heading text-sm font-medium text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-heading text-sm font-medium text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-heading text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    placeholder="+91-XXXX-XXXXXX"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-heading text-sm font-medium text-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-primary-foreground font-heading font-semibold py-3 rounded-md hover:bg-navy-light transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </div>

          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Contact;