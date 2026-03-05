// const CompanyPolicies = () => {
//   return (
//     <div className="py-20 text-center">
//       <h1 className="text-3xl font-bold">Company Policies</h1>
//       <p className="mt-4 text-muted-foreground">
//         This page is under construction.
//       </p>
//     </div>
//   );
// };

// export default CompanyPolicies;



// import { useState, useRef } from "react";
// import { ChevronDown } from "lucide-react";

// const policies = [
//   {
//     title: "Occupational Health, Safety, Quality & Environmental Protection Policy",
//     content: `
//     Paste your full 2-page policy content here.
//     You can write multiple paragraphs.
    
//     Example:
//     1. Our company is committed to ensuring the health and safety of all employees.
//     2. We comply with all maritime regulatory standards.
//     3. Continuous improvement remains our priority.
    
//     Add as much content as needed.
//     `,
//   },
//   // Add your remaining 12 policies here
//   {
//     title: "Drug and Alcohol Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Anti-Harassment and Bullying Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Personnel Recruitment and Training Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Maintenance Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Illicit Media Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Internet and Social Media Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Speaking Up Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Anti-Corruption Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Security Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Arms and Weapons Control Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Information and Cyber Security Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Seafarer's Rights Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Business Ethics Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Bunkering Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
//   {
//     title: "Cargo Policy",
//     content: `
//     Paste your full Drug and Alcohol Policy content here.

//     1. The company maintains a zero-tolerance approach to drug and alcohol misuse.
//     2. Employees must report to work free from the influence of drugs or alcohol.
//     3. Testing procedures and disciplinary measures are outlined within this policy.
    
//     Add your full 2-page content here.
//     `,
//   },
// ];

// const CompanyPolicies = () => {
//   const [openIndexes, setOpenIndexes] = useState<number[]>([]);

//   const togglePolicy = (index: number) => {
//     if (openIndexes.includes(index)) {
//       setOpenIndexes(openIndexes.filter((i) => i !== index));
//     } else {
//       setOpenIndexes([...openIndexes, index]);
//     }
//   };

//   return (
//     <div className="py-20 bg-background">
//       <div className="container mx-auto px-4 max-w-4xl">

//         {/* Header - unchanged */}
//         <div className="text-center mb-14">
//           <h1 className="text-3xl font-bold">Company Policies</h1>
//         </div>

//         <div className="space-y-6">
//           {policies.map((policy, index) => {
//             const isOpen = openIndexes.includes(index);

//             return (
//               <div
//                 key={index}
//                 className="border-2 border-foreground rounded-md overflow-hidden"
//               >
//                 {/* Title Button */}
//                 <button
//                   onClick={() => togglePolicy(index)}
//                   className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground bg-card hover:bg-muted transition"
//                 >
//                   <span>{policy.title}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Content Section */}
//                 <div
//                   className={`grid transition-all duration-300 ease-in-out ${
//                     isOpen
//                       ? "grid-rows-[1fr] opacity-100"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="p-6 border-t bg-muted/30 whitespace-pre-line text-muted-foreground leading-relaxed">
//                       {policy.content}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CompanyPolicies;


























// import { useState } from "react";
// import PageHeader from "@/components/PageHeader";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { ChevronDown } from "lucide-react";

// type Policy = {
//   title: string;
//   file?: string;
//   content?: string;
// };

// const policies: Policy[] = [
//   {
//     title: "Occupational Health, Safety, Quality & Environmental Protection Policy",
//     file: "/policies/occupational-health.md",
//   },
//   {
//     title: "Drug and Alcohol Policy",
//     file: "/policies/drug-and-alcohol.md",
//   },
//   {
//     title: "Anti-Harassment and Bullying Policy",
//     file: "/policies/anti-harrassment.md",
//   },
//   {
//     title: "Personnel Recruitment and Training Policy",
//     file: "/policies/personnel-recruiment.md",
//   },
//   {
//     title: "Maintenance Policy",
//     file: "/policies/Maintenance.md",
//   },
//   {
//     title: "Illicit Policy",
//     file: "/policies/Illicit.md",
//   },
//   {
//     title: "Internet and Social Media Policy",
//     file: "/policies/Internet.md",
//   },
//   {
//     title: "Speaking Up Policy",
//     file: "/policies/speaking.md",
//   },
//   {
//     title: "Anti-Corruption Policy",
//     file: "/policies/anti-corrpution.md",
//   },
//   {
//     title: "Security Policy",
//     file: "/policies/security.md",
//   },
//   {
//     title: "Arms and Weapons Control Policy",
//     file: "/policies/arms-and-weapons.md",
//   },
//   {
//     title: "Infromation and Cyber Security Policy",
//     file: "/policies/cyber.md",
//   },
//   {
//     title: "Seafarer's Rights Policy",
//     file: "/policies/seafarer.md",
//   },
//   {
//     title: "Business Ethics Policy",
//     file: "/policies/ethics.md",
//   },
//   {
//     title: "Bunkering Policy",
//     file: "/policies/Bunkering.md",
//   },
//   {
//     title: "Cargo Policy",
//     file: "/policies/Cargo.md",
//   },
  
// ];


// const CompanyPolicies = () => {
//   const [openIndexes, setOpenIndexes] = useState<number[]>([]);
//   const [loadedContent, setLoadedContent] = useState<Record<number, string>>(
//     {}
//   );

//   const togglePolicy = async (index: number) => {
//     const isOpen = openIndexes.includes(index);

//     if (isOpen) {
//       setOpenIndexes(openIndexes.filter((i) => i !== index));
//       return;
//     }

//     setOpenIndexes([...openIndexes, index]);

//     const policy = policies[index];

//     // If policy has file and not loaded yet → fetch it
//     if (policy.file && !loadedContent[index]) {
//       const res = await fetch(policy.file);
//       const text = await res.text();

//       setLoadedContent((prev) => ({
//         ...prev,
//         [index]: text,
//       }));
//     }
//   };

//   return (
//     <div className="py-20 bg-background">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <div className="text-center mb-14">
//           <h1 className="text-3xl font-bold">Company Policies</h1>
//         </div>

//         <div className="space-y-6">
//           {policies.map((policy, index) => {
//             const isOpen = openIndexes.includes(index);

//             return (
//               <div
//                 key={index}
//                 className="border-2 border-foreground rounded-lg overflow-hidden shadow-sm"
//               >
//                 <button
//                   onClick={() => togglePolicy(index)}
//                   className="w-full flex items-center justify-between p-5 text-left font-medium bg-card hover:bg-muted transition"
//                 >
//                   <span>{policy.title}</span>
//                   <ChevronDown
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {isOpen && (
//                   <div className="p-6 border-t bg-muted/20 prose max-w-none">
//                     <ReactMarkdown remarkPlugins={[remarkGfm]}>
//                       {policy.content || loadedContent[index] || "Loading..."}
//                     </ReactMarkdown>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyPolicies;

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown } from "lucide-react";

type Policy = {
  title: string;
  file?: string;
  content?: string;
};

const policies: Policy[] = [
  {
    title: "Occupational Health, Safety, Quality & Environmental Protection Policy",
    file: "/policies/occupational-health.md",
  },
  {
    title: "Drug and Alcohol Policy",
    file: "/policies/drug-and-alcohol.md",
  },
  {
    title: "Anti-Harassment and Bullying Policy",
    file: "/policies/anti-harrassment.md",
  },
  {
    title: "Personnel Recruitment and Training Policy",
    file: "/policies/personnel-recruiment.md",
  },
  {
    title: "Maintenance Policy",
    file: "/policies/Maintenance.md",
  },
  {
    title: "Illicit Policy",
    file: "/policies/Illicit.md",
  },
  {
    title: "Internet and Social Media Policy",
    file: "/policies/Internet.md",
  },
  {
    title: "Speaking Up Policy",
    file: "/policies/speaking.md",
  },
  {
    title: "Anti-Corruption Policy",
    file: "/policies/anti-corrpution.md",
  },
  {
    title: "Security Policy",
    file: "/policies/security.md",
  },
  {
    title: "Arms and Weapons Control Policy",
    file: "/policies/arms-and-weapons.md",
  },
  {
    title: "Information and Cyber Security Policy",
    file: "/policies/cyber.md",
  },
  {
    title: "Seafarer's Rights Policy",
    file: "/policies/seafarer.md",
  },
  {
    title: "Business Ethics Policy",
    file: "/policies/ethics.md",
  },
  {
    title: "Bunkering Policy",
    file: "/policies/Bunkering.md",
  },
  {
    title: "Cargo Policy",
    file: "/policies/Cargo.md",
  },
];

const CompanyPolicies = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [loadedContent, setLoadedContent] = useState<Record<number, string>>(
    {}
  );

  const togglePolicy = async (index: number) => {
    const isOpen = openIndexes.includes(index);

    if (isOpen) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
      return;
    }

    setOpenIndexes([...openIndexes, index]);

    const policy = policies[index];

    if (policy.file && !loadedContent[index]) {
      const res = await fetch(policy.file);
      const text = await res.text();

      setLoadedContent((prev) => ({
        ...prev,
        [index]: text,
      }));
    }
  };

  return (
    <main>
      {/* 🔵 BLUE HEADER (Same as Fleet Page) */}
      <PageHeader
        title="Company Policies"
        subtitle="Our commitment to safety, compliance, and operational excellence."
      />

      {/* 📄 POLICIES SECTION */}
      <SectionWrapper className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {policies.map((policy, index) => {
              const isOpen = openIndexes.includes(index);

              return (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => togglePolicy(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium bg-card hover:bg-muted transition"
                  >
                    <span>{policy.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-6 border-t bg-muted/20 prose max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {policy.content ||
                          loadedContent[index] ||
                          "Loading..."}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default CompanyPolicies;