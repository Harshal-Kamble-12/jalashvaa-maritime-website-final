// import PageHeader from "@/components/PageHeader";
// import SectionWrapper from "@/components/SectionWrapper";

// const MgmtTeam = [
//   {
//     name: "Kunal Saxena",
//     role: "Head - Technical",
//     image: "/board/kunal.jpg",
//     description:
//       "Capt Shravan Kumar brings decades of maritime leadership experience in fleet operations and international shipping management. With a deep understanding of global maritime standards and safety practices, he leads Jalashvaa Maritime with a vision of operational excellence and sustainable growth.",
//   },
//   {
//     name: "Capt Manish Yadav",
//     role: "Technical Superintendent",
//     image: "/board/manish.jpg",
//     description:
//       "Cmdr Harsh Kumar contributes strong leadership and operational expertise gained through years of maritime and naval experience. His strategic insight and commitment to efficiency help guide the company's expansion and operational stability.",
//   },
//   {
//     name: "Ankit Singh",
//     role: "Technical Superintendent",
//     image: "/board/ankit.jpg",
//     description:
//       "Mr Romie Umriger oversees the technical operations and fleet maintenance strategy. With extensive experience in ship engineering and maritime technical management, he ensures the highest standards of vessel performance, compliance, and safety.",
//   },
//   {
//     name: "Amit Singh",
//     role: "Compliance Manager",
//     image: "/board/amit.jpg",
//     description:
//       "Mr Romie Umriger oversees the technical operations and fleet maintenance strategy. With extensive experience in ship engineering and maritime technical management, he ensures the highest standards of vessel performance, compliance, and safety.",
//   },
//   {
//     name: "Neha Murudkar",
//     role: "Head Accounts / Finance ",
//     image: "/board/neha.jpg",
//     description:
//       "Mr Romie Umriger oversees the technical operations and fleet maintenance strategy. With extensive experience in ship engineering and maritime technical management, he ensures the highest standards of vessel performance, compliance, and safety.",
//   },
// ];

// const ManagementTeam = () => {
//   return (
//     <main>
//       <PageHeader
//         title="Our Management Team"
//         subtitle="Seasoned professionals driving our maritime vision"
//       />

//       <SectionWrapper className="py-20">
        
//         {/* Container to prevent cards touching screen edges */}
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//             {MgmtTeam.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md overflow-hidden
//                 transition-all duration-300 ease-in-out
//                 hover:-translate-y-2 hover:shadow-2xl"
//               >
                
//                 {/* Image */}
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-80 object-cover"
//                 />

//                 {/* Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {member.name}
//                   </h3>

//                   <p className="text-yellow-600 text-sm font-medium mb-3">
//                     {member.role}
//                   </p>

//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {member.description}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </SectionWrapper>
//     </main>
//   );
// };

// export default ManagementTeam;

import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";

const MgmtTeam = [
  {
    name: "Kunal Saxena",
    role: "Head - Technical",
    image: "/board/kunal.jpg",
    description:
      "An accomplished maritime executive with over 20 years of cross-functional experience in technical ship management, marine operations, and project leadership. He oversees the technical and commercial operations of diverse vessel types including oil tankers, chemical tankers, PSVs, OSVs, AHTS, and seismic research vessels. Having an extensive experience in vessel operations of West Africa",
  },
  {
    name: "Capt Manish Yadav",
    role: "Head - Operations",
    image: "/board/manish.jpg",
    description:
      "Master Mariner (FG) and Marine Superintendent with over 20 years of seagoing and shore-based experience on dry, liquid, and offshore vessels. Responsible for marine operations, safety management, statutory compliance, vetting and PSC readiness, incident investigations, and audits, while advancing operational excellence in line with TMSA and HSEQ objectives.",
  },
  {
    name: "Ankit Singh",
    role: "Head - Technical",
    image: "/board/ankit.jpg",
    description:
      "A chief engineer having a proven track record in managing a pool of ships (Dry as well as Liquid Cargo). While being an expert technical manager he specializes in the new building and has delivered 3 oil/chem tankers (keel to delivery). Involved in drawing approval of 2 vessels in Namura & Imabari in Japan.",
  },
  {
    name: "Amit Singh",
    role: "Head - Compliance & Statuatory",
    image: "/board/amit.jpg",
    description:
      "An accomplished Compliance Manager responsible for ensuring adherence to statutory, regulatory, and classification requirements across offshore and main fleet operations. He oversees compliance frameworks, regulatory coordination, and documentation to ensure all operations meet applicable maritime standards and company policies.",
  },
  {
    name: "Neha Murudkar",
    role: "Head Accounts / Finance",
    image: "/board/neha.jpg",
    description:
      "The Head of Accounts and Finance manages the company’s overall financial activities, including accounting, budgeting, and financial reporting. They ensure proper financial records, control expenses, and guide the finance team to maintain smooth financial operations.",
  },
  {
    name: "Vaibhav Tiwari",
    role: "Advisor - Marine Services MIE",
    image: "/board/vaibhav.jpg",
    description:
      "Director - Marine Business at Farohar Enterprizes. Vaibhav is an Experienced Professional with over 15 years in the maritime industry. He also has rich experience as certified Marine Engineer Officer serving onboard different class of vessels",
  },
];

const ManagementTeam = () => {
  return (
    <main>
      <PageHeader
        title="Our Management Team"
        subtitle="Seasoned professionals driving our maritime vision"
      />

      <SectionWrapper className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Cards Layout */}
          <div className="flex flex-wrap justify-center gap-10">

            {MgmtTeam.map((member, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                w-full
                sm:w-[45%]
                lg:w-[30%]
                transition-all
                duration-300
                group
                hover:-translate-y-3
                hover:shadow-2xl
                "
              >

                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                    w-full
                    h-full
                    object-cover
                    object-top
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                  />

                  {/* Soft Blur Overlay */}
                  <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  opacity-60
                  "></div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-yellow-600 text-sm font-semibold mt-1 mb-3">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </SectionWrapper>
    </main>
  );
};

export default ManagementTeam;