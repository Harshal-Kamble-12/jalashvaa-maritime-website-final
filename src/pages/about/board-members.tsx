// import PageHeader from "@/components/PageHeader";
// import SectionWrapper from "@/components/SectionWrapper";

// const boardMembers = [
//   {
//     name: "Capt Shravan Kumar",
//     role: "Managing Director & CEO",
//     image: "/board/shravan.jpg",
//     description:
//       "Capt Shravan Kumar brings decades of maritime leadership experience in fleet operations and international shipping management. With a deep understanding of global maritime standards and safety practices, he leads Jalashvaa Maritime with a vision of operational excellence and sustainable growth.",
//   },
//   {
//     name: "Cmdr Harsh Kumar",
//     role: "Director",
//     image: "/board/harsh.jpg",
//     description:
//       "Cmdr Harsh Kumar contributes strong leadership and operational expertise gained through years of maritime and naval experience. His strategic insight and commitment to efficiency help guide the company's expansion and operational stability.",
//   },
//   {
//     name: "Mr Romie Umriger",
//     role: "Director Technical",
//     image: "/board/romie.jpg",
//     description:
//       "Mr Romie Umriger oversees the technical operations and fleet maintenance strategy. With extensive experience in ship engineering and maritime technical management, he ensures the highest standards of vessel performance, compliance, and safety.",
//   },
// ];

// const BoardMembers = () => {
//   return (
//     <main>
//       <PageHeader
//         title="Our Board Members"
//         subtitle="Seasoned professionals driving our maritime vision"
//       />

//       <SectionWrapper className="py-20">

//         {/* Container */}
//         <div className="max-w-7xl mx-auto px-6">

//           {/* FLEX Layout */}
//           <div className="flex flex-wrap justify-center gap-10">

//             {boardMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="
//                 bg-white
//                 rounded-xl
//                 shadow-md
//                 overflow-hidden
//                 w-full
//                 sm:w-[45%]
//                 lg:w-[30%]
//                 transition-all
//                 duration-300
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//                 "
//               >

//                 {/* Image */}
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-72 object-cover"
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

// export default BoardMembers;



// import PageHeader from "@/components/PageHeader";
// import SectionWrapper from "@/components/SectionWrapper";

// const boardMembers = [
//   {
//     name: "Capt Shravan Kumar",
//     role: "Managing Director & CEO",
//     image: "/board/shravan.jpg",
//     description:
//       "Capt Shravan Kumar brings decades of maritime leadership experience in fleet operations and international shipping management. With a deep understanding of global maritime standards and safety practices, he leads Jalashvaa Maritime with a vision of operational excellence and sustainable growth.",
//   },
//   {
//     name: "Cmdr Harsh Kumar",
//     role: "Director",
//     image: "/board/harsh.jpg",
//     description:
//       "Cmdr Harsh Kumar contributes strong leadership and operational expertise gained through years of maritime and naval experience. His strategic insight and commitment to efficiency help guide the company's expansion and operational stability.",
//   },
//   {
//     name: "Mr Romie Umriger",
//     role: "Director Technical",
//     image: "/board/romie.jpg",
//     description:
//       "Mr Romie Umriger oversees the technical operations and fleet maintenance strategy. With extensive experience in ship engineering and maritime technical management, he ensures the highest standards of vessel performance, compliance, and safety.",
//   },
// ];

// const BoardMembers = () => {
//   return (
//     <main>
//       <PageHeader
//         title="Our Board Members"
//         subtitle="Seasoned professionals driving our maritime vision"
//       />

//       <SectionWrapper className="py-20">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="flex flex-wrap justify-center gap-10">

//             {boardMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="
//                 group
//                 bg-white
//                 rounded-2xl
//                 shadow-lg
//                 overflow-hidden
//                 w-full
//                 sm:w-[45%]
//                 lg:w-[30%]
//                 transition-all
//                 duration-300
//                 hover:-translate-y-3
//                 hover:shadow-2xl
//                 "
//               >

//                 {/* Image Container */}
//                 <div className="w-full h-72 flex items-center justify-center bg-gray-100 overflow-hidden">

//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="
//                     max-h-full
//                     max-w-full
//                     object-contain
//                     p-6
//                     transition-transform
//                     duration-500
//                     group-hover:scale-105
//                     "
//                   />

//                 </div>

//                 {/* Content */}
//                 <div className="p-7">

//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {member.name}
//                   </h3>

//                   <p className="text-yellow-600 text-sm font-semibold mt-1 mb-4">
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

// export default BoardMembers;




import PageHeader from "@/components/PageHeader";
import SectionWrapper from "@/components/SectionWrapper";

const boardMembers = [
  {
    name: "Capt Shravan Kumar",
    role: "Managing Director & CEO",
    image: "/board/shravan.jpg",
    description:
      "A Master Mariner specializing in marketing and operations, with diverse expertise spanning commercial and technical operations of bulkers, containers, offshore vessels, and India’s first advertisement vessels.",
  },
  {
    name: "Cdr. Harsh Kumar",
    role: "Director",
    image: "/board/harsh.jpg",
    description:
      "Commander Harsh Kumar is a former Indian Naval officer with extensive experience in gas turbine operations, project management, and administrative leadership. During his distinguished service in the Indian Navy, he developed deep technical expertise in marine gas turbine systems, ensuring the efficient operation and maintenance of critical propulsion machinery on naval platforms.Beyond his technical proficiency, Cdr Harsh Kumar has strong capabilities in project planning, execution, and team management, successfully overseeing complex engineering and operational initiatives. His disciplined approach, strategic thinking, and organizational skills make him highly effective in technical management, operations, and administrative roles.",
  },
  {
    name: "Mr Romie Umriger",
    role: "Director Technical",
    image: "/board/romie.jpg",
    description:
      "A seasoned Marine Engineer and name to reckon with having global experience in operating Gas, chemical and product tankers, as well as dry fleet vessels. Skilled in complex project management, he excels at foreseeing intricate details to execute projects successfully.",
  },
];

const BoardMembers = () => {
  return (
    <main>
      <PageHeader
        title="Our Board Members"
        subtitle="Seasoned professionals driving our maritime vision"
      />

      <SectionWrapper className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Cards Layout */}
          <div className="flex flex-wrap justify-center gap-10">

            {boardMembers.map((member, index) => (
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
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

export default BoardMembers;