"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    description: "A clean and modern website for a Restaurant ordering system",
    imageUrl: "/images/11.png",
    category: "Web Development",
    redirectUrl: "https://delicious-eats-lime.vercel.app/",
  },
  {
    id: 2,
    title: "Sleek Web Experience",
    description: "Elegant online presence for E-commerce platform",
    imageUrl: "/images/12.png",
    category: "Web Design",
    redirectUrl: "https://evaraa.co/",
  },
  {
    id: 3,
    title: "Intuitive Mobile App",
    description: "User-friendly app design for a health and wellness company",
    imageUrl: "/images/13.png",
    category: "Mobile App",
    redirectUrl: "https://www.geniezap.com/",
  },
  {
    id: 4,
    title: "Elegant Digital Campaign",
    description: "Sophisticated marketing strategy for a luxury automotive brand",
    imageUrl: "/images/14.png",
    category: "Digital Marketing",
    redirectUrl: "https://museboard-rosy.vercel.app/",
  },
  // {
  //   id: 5,
  //   title: "Refined UI/UX Design",
  //   description: "Streamlined user interfaces for a financial services platform",
  //   imageUrl: "/images/5.png",
  //   category: "UI/UX",
  //   redirectUrl: "https://delicious-eats-lime.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Minimalist Product Design",
  //   description: "Sleek and functional design for a smart home device",
  //   imageUrl: "/images/6.png",
  //   category: "Product Design",
  //   redirectUrl: "https://delicious-eats-lime.vercel.app/",
  // },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-200 px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Work</h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             A showcase of our minimalist designs and creative solutions.
//           </p>
//         </motion.div>

//         <div className="flex justify-center space-x-4 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setFilter(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 filter === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 layout
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
//               >
//                 <div className="relative h-96 overflow-hidden">
//                   <Link
//   href="https://delicious-eats-lime.vercel.app/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="relative block w-full h-full"
// >
//   {/* <Image
//     src={project.imageUrl || "/placeholder.svg"}
//     alt={project.title}
//     fill
//     className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
//   /> */}
//   <Image
//   src={project.imageUrl || "/placeholder.svg"}
//   alt={project.title}
//   fill
//   className="object-contain bg-black transition-transform duration-300 ease-in-out group-hover:scale-105"
// />

//                   <motion.div
//                     className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
//                     whileHover={{ opacity: 1 }}
//                   >
//                     <p className="text-white text-center px-4">{project.description}</p>
//                   </motion.div>
//                   </Link>
//                 </div>
//                 <div className="p-6">
//                   <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
//                   <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
//                   <a
//                     href={project.redirectUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline inline-flex items-center"
//                   >
//                     View Project
//                     <svg
//                       className="w-4 h-4 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   )

  // return (
  //   <section className="py-20 bg-background">
  //     <div className="max-w-7xl mx-[200px] px-6">

  //       {/* Title */}
  //       <motion.div
  //         className="text-center mb-12"
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.8 }}
  //       >
  //         <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
  //           Our Work
  //         </h2>
  //         <p className="mt-4 text-lg text-muted-foreground">
  //           A showcase of our minimalist designs and creative solutions.
  //         </p>
  //       </motion.div>

  //       {/* Filters */}
  //       <div className="flex justify-center gap-4 mb-10 flex-wrap">
  //         {categories.map((category) => (
  //           <button
  //             key={category}
  //             onClick={() => setFilter(category)}
  //             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
  //               filter === category
  //                 ? "bg-primary text-primary-foreground"
  //                 : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  //             }`}
  //           >
  //             {category}
  //           </button>
  //         ))}
  //       </div>

  //       {/* Grid */}
  //       <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
  //         <AnimatePresence>
  //           {filteredProjects.map((project) => (
  //             <motion.div
  //               key={project.id}
  //               layout
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               exit={{ opacity: 0 }}
  //               transition={{ duration: 0.4 }}
  //               className="rounded-3xl overflow-hidden shadow-xl bg-background"
  //             >

  //               {/* IMAGE CARD */}
  //               <div className="relative w-full aspect-square overflow-hidden group px-6 py-6 ">
  //                 <Link
  //                   href={project.redirectUrl || "https://delicious-eats-lime.vercel.app/"}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className="absolute inset-0 z-10"
  //                 >
  //                   {/* Image */}
  //                   <Image
  //                     src={project.imageUrl || "/placeholder.svg"}
  //                     alt={project.title}
  //                     fill
  //                     className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
  //                   />

  //                   {/* Gradient */}
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent" />

  //                   {/* Text on image */}
  //                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
  //                     <div className="text-xs uppercase tracking-wide opacity-80">
  //                       {project.category}
  //                     </div>
  //                     <h3 className="text-xl font-semibold mt-1">
  //                       {project.title}
  //                     </h3>
  //                     <p className="text-white   text-sm leading-relaxed">
  //                       {project.description}
  //                     </p>
  //                   </div>

  //                   {/* Hover overlay */}
  //                   {/* <motion.div
  //                     className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 z-30"
  //                     whileHover={{ opacity: 1 }}
  //                   >
  //                     <p className="text-white text-center px-8 text-sm leading-relaxed">
  //                       {project.description}
  //                     </p>
  //                   </motion.div> */}
  //                 </Link>
  //               </div>

  //             </motion.div>
  //           ))}
  //         </AnimatePresence>
  //       </motion.div>

  //     </div>
  //   </section>
  // );
  return (
  <section className="py-16 sm:py-20 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* Title */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
          Our Work
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto">
          A showcase of our minimalist designs and creative solutions.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-16"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-background"
            >
              {/* IMAGE CARD */}
              <div className="relative w-full aspect-square overflow-hidden group p-4 sm:p-6">
                <Link
                  href={project.redirectUrl || "https://delicious-eats-lime.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                >
                  {/* Image */}
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Text on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-20">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wide opacity-80">
                      {project.category}
                    </div>
                    <h3 className="text-sm sm:text-xl font-semibold mt-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  </section>
);

}


