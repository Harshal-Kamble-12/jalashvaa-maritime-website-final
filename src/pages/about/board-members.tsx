// import PageHeader from "@/components/PageHeader";
// import SectionWrapper from "@/components/SectionWrapper";

// const boardMembers = [
//   {
//     name: "Capt Shravan Kumar",
//     role: "Managing Director & CEO",
//     image: "/board/shravan.jpg",
//     description:
//       "A Master Mariner specializing in marketing and operations, with diverse expertise spanning commercial and technical operations of bulkers, containers, offshore vessels, and India’s first advertisement vessels.",
//   },
//   {
//     name: "Cdr. Harsh Kumar",
//     role: "Director",
//     image: "/board/harsh.jpg",
//     description:
//       "Commander Harsh Kumar is a former Indian Naval officer with extensive experience in gas turbine operations, project management, and administrative leadership. During his distinguished service in the Indian Navy, he developed deep technical expertise in marine gas turbine systems, ensuring the efficient operation and maintenance of critical propulsion machinery on naval platforms.Beyond his technical proficiency, Cdr Harsh Kumar has strong capabilities in project planning, execution, and team management, successfully overseeing complex engineering and operational initiatives. His disciplined approach, strategic thinking, and organizational skills make him highly effective in technical management, operations, and administrative roles.",
//   },
//   {
//     name: "Mr Romie Umriger",
//     role: "Director Technical",
//     image: "/board/romie.jpg",
//     description:
//       "A seasoned Marine Engineer and name to reckon with having global experience in operating Gas, chemical and product tankers, as well as dry fleet vessels. Skilled in complex project management, he excels at foreseeing intricate details to execute projects successfully.",
//   },
//   {
//     name: "Dr Farzin Karma",
//     role: "Hon. Director / Senior Advisor - Marine Business",
//     image: "/board/farzin.jpg",
//     description:
//       "A seasoned Marine Engineer and name to reckon with having global experience in operating Gas, chemical and product tankers, as well as dry fleet vessels. Skilled in complex project management, he excels at foreseeing intricate details to execute projects successfully.",
//   },
// ];

// const BoardMembers = () => {
//   return (
//     <main>
//       <PageHeader
//         title="Our Board Members"
//         subtitle="Seasoned professionals driving our maritime vision"
//       />

//       <SectionWrapper className="py-20 bg-gray-50">

//         <div className="max-w-7xl mx-auto px-6">

//           {/* Cards Layout */}
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
//                 group
//                 hover:-translate-y-3
//                 hover:shadow-2xl
//                 "
//               >

//                     {/* Image */}
//                 <div className="relative h-72 w-full overflow-hidden bg-gray-100">

//                 <img
//                      src={member.image}
//                      alt={member.name}
//                      className="
//                      w-full
//                       h-full
//                      object-cover
//                      object-top
//                      transition-transform
//                      duration-500
//                      group-hover:scale-105
//                         "
//                  />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
//                  </div>
                

//                 {/* Content */}
//                 <div className="p-6">

//                   <h3 className="text-xl font-semibold text-gray-900">
//                     {member.name}
//                   </h3>

//                   <p className="text-yellow-600 text-sm font-semibold mt-1 mb-3">
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
  //       "A Master Mariner specializing in marketing and operations, with diverse expertise spanning commercial and technical operations of bulkers, containers, offshore vessels, and India’s first advertisement vessels.",
  //   },
  //   {
  //     name: "Cdr. Harsh Kumar",
  //     role: "Director",
  //     image: "/board/harsh.jpg",
  //     description:
  //       "Commander Harsh Kumar is a former Indian Naval officer with extensive experience in gas turbine operations, project management, and administrative leadership. During his distinguished service in the Indian Navy, he developed deep technical expertise in marine gas turbine systems, ensuring the efficient operation and maintenance of critical propulsion machinery on naval platforms.Beyond his technical proficiency, Cdr Harsh Kumar has strong capabilities in project planning, execution, and team management, successfully overseeing complex engineering and operational initiatives. His disciplined approach, strategic thinking, and organizational skills make him highly effective in technical management, operations, and administrative roles.",
  //   },
  //   {
  //     name: "Mr Romie Umriger",
  //     role: "Director Technical",
  //     image: "/board/romie.jpg",
  //     description:
  //       "A seasoned Marine Engineer and name to reckon with having global experience in operating Gas, chemical and product tankers, as well as dry fleet vessels. Skilled in complex project management, he excels at foreseeing intricate details to execute projects successfully.",
  //   },
  //   {
  //     name: "Dr Farzin Karma",
  //     role: "Hon. Director / Senior Advisor - Marine Business",
  //     image: "/board/farzin.jpg",
  //     description:
  //       "Farzin R. Karma is the founder, Chairman, and Managing Director of the Karma Group of Companies. Globally recognized as the most experienced and accomplished authority on marine enterprize systems management and maximizing efficiencies and returns through the optimal use of suitable technology and process management.He has over 25 years of senior management experience in diverse industries including corporate and federal consultancies, aviation, shipping, process management, incubation of businesses and enterprise systems implementation.",
  //   },
  // ];

  // const BoardMembers = () => {
  //   return (
  //     <main>
  //       <PageHeader
  //         title="Our Board Members"
  //         subtitle="Seasoned professionals driving our maritime vision"
  //       />

  //       <SectionWrapper className="py-20 bg-gray-50">

  //         <div className="max-w-7xl mx-auto px-6">

  //           {/* Cards Layout */}
  //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

  //             {boardMembers.map((member, index) => (
  //               <div
  //                 key={index}
  //                 className="
  //                 bg-white
  //                 rounded-xl
  //                 shadow-md
  //                 overflow-hidden
                  
  //                 transition-all
  //                 duration-300
  //                 group
  //                 hover:-translate-y-3
  //                 hover:shadow-2xl
  //                 "
  //               >

  //                     {/* Image */}
  //                 <div className="relative h-72 w-full overflow-hidden bg-gray-100">

  //                 <img
  //                      src={member.image}
  //                      alt={member.name}
  //                      className="
  //                      w-full
  //                       h-full
  //                      object-cover
  //                      object-top
  //                      transition-transform
  //                      duration-500
  //                      group-hover:scale-105
  //                         "
  //                  />

  //                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
  //                  </div>
                  

  //                 {/* Content */}
  //                 <div className="p-6">

  //                   <h3 className="text-xl font-semibold text-gray-900">
  //                     {member.name}
  //                   </h3>

  //                   <p className="text-yellow-600 text-sm font-semibold mt-1 mb-3">
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
    description: `A Master Mariner specializing in marketing and operations.
    
With diverse expertise spanning commercial and technical operations of bulkers, containers, offshore vessels, and India’s first advertisement vessels.`,
  },
  {
    name: "Cdr. Harsh Kumar",
    role: "Director",
    image: "/board/harsh.jpg",
    description: `Commander Harsh Kumar is a former Indian Naval officer with extensive experience in gas turbine operations, project management, and administrative leadership. 

During his distinguished service in the Indian Navy, he developed deep technical expertise in marine gas turbine systems, ensuring the efficient operation and maintenance of critical propulsion machinery on naval platforms.

Beyond his technical proficiency, Cdr Harsh Kumar has strong capabilities in project planning, execution, and team management, successfully overseeing complex engineering and operational initiatives. His disciplined approach, strategic thinking, and organizational skills make him highly effective in technical management, operations, and administrative roles.`,
  },
  {
    name: "Mr Romie Umriger",
    role: "Director Technical",
    image: "/board/romie.jpg",
    description: `A seasoned Marine Engineer and name to reckon with having global experience in operating Gas, chemical and product tankers, as well as dry fleet vessels. 

Skilled in complex project management, he excels at foreseeing intricate details to execute projects successfully.`,
  },
  {
    name: "Dr Farzin Karma",
    role: "Hon. Director / Senior Advisor - Marine Business",
    image: "/board/farzin.jpg",
    description: `Farzin R. Karma is the founder, Chairman, and Managing Director of the Karma Group of Companies. 

Globally recognized as the most experienced and accomplished authority on marine enterprize systems management and maximizing efficiencies and returns through the optimal use of suitable technology and process management. 

He has over 25 years of senior management experience in diverse industries including corporate and federal consultancies, aviation, shipping, process management, incubation of businesses and enterprise systems implementation.`,
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="
                bg-white
                rounded-xl
                shadow-md
                overflow-hidden
                
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

                  {/* Added whitespace-pre-line here to support the enters */}
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
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


// this is test line to check if the version control is working or not
