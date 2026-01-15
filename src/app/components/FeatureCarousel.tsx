// "use client"

// import { useRef, useEffect, useState } from "react"
// import { motion, useAnimation, useMotionValue } from "framer-motion"

// const features = [
//   {
//     title: "Minimal Design",
//     description: "Clean aesthetics that put your content in the spotlight.",
//     icon: "✨",
//   },
//   {
//     title: "Responsive",
//     description: "Flawless experiences across all devices and screen sizes.",
//     icon: "📱",
//   },
//   {
//     title: "Fast Performance",
//     description: "Lightning-quick load times for smooth user interactions.",
//     icon: "⚡",
//   },
//   {
//     title: "Accessibility",
//     description: "Inclusive design practices for all users.",
//     icon: "🌈",
//   },
//   {
//     title: "SEO Optimized",
//     description: "Built to help your site rank higher in search results.",
//     icon: "🔍",
//   },
// ]

// export default function FeatureCarousel() {
//   const [width, setWidth] = useState(0)
//   const carousel = useRef<HTMLDivElement>(null)
//   const x = useMotionValue(0)
//   const controls = useAnimation()

//   useEffect(() => {
//     if (carousel.current) {
//       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
//     }
//   }, [])

//   const handleDragEnd = () => {
//     const currentX = x.get()
//     if (currentX > 0) {
//       controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
//     } else if (currentX < -width) {
//       controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
//     }
//   }

//   return (
//     <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us</h2>
//         <motion.div ref={carousel} className="cursor-grab overflow-hidden">
//           <motion.div
//             drag="x"
//             dragConstraints={{ right: 0, left: -width }}
//             whileTap={{ cursor: "grabbing" }}
//             animate={controls}
//             style={{ x }}
//             onDragEnd={handleDragEnd}
//             className="flex"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="min-w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
//               >
//                 <div>
//                   <div className="text-4xl mb-4">{feature.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
//                   <p className="text-muted-foreground">{feature.description}</p>
//                 </div>
//                 <div className="mt-4">
//                   <a
//                     href="https://evaraa.co/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary hover:underline"
//                   >
//                     Learn more →
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, animate } from "framer-motion"

const features = [
  { title: "Minimal Design", description: "Clean aesthetics that put your content in the spotlight.", icon: "✨" },
  { title: "Responsive", description: "Flawless experiences across all devices and screen sizes.", icon: "📱" },
  { title: "Fast Performance", description: "Lightning-quick load times for smooth user interactions.", icon: "⚡" },
  { title: "Accessibility", description: "Inclusive design practices for all users.", icon: "🌈" },
  { title: "SEO Optimized", description: "Built to help your site rank higher in search results.", icon: "🔍" },
]

export default function FeatureCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    const trackWidth = trackRef.current.scrollWidth
    const containerWidth = containerRef.current.offsetWidth

    setWidth(trackWidth / 2 - containerWidth)

    const controls = animate(x, [0, -trackWidth / 2], {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
    })

    return () => controls.stop()
  }, [])

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div ref={containerRef} className="overflow-hidden relative">
          <motion.div
            ref={trackRef}
            className="flex gap-4 sm:gap-6"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="min-w-[240px] sm:min-w-[300px] bg-background rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg p-4 sm:p-8 flex flex-col justify-between border border-primary/10"
              >
                <div>
                  <div className="text-2xl sm:text-4xl mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <span className="mt-4 text-xs sm:text-sm text-primary font-medium">
                  Learn more →
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
