// "use client";

// import { motion } from "framer-motion";
// import Spline from "@splinetool/react-spline";

// export default function Hero() {
//   return (
//     <div className="relative isolate overflow-hidden bg-background">
//       <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
//           <motion.h1
//             className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-gradient">Convertix Web</span>
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-lg leading-8 text-muted-foreground"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             Where minimal design meets floral artistry. We craft elegant experiences that inspire and elevate your
//             space.
//           </motion.p>
//           <motion.div
//             className="mt-10 flex items-center gap-x-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <a
//               href="https://evaraa.co/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="apple-button"
//             >
//               Explore Our Work
//             </a>
//             <a
//               href="https://evaraa.co/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sm font-semibold leading-6 text-foreground"
//             >
//               Learn more <span aria-hidden="true">→</span>
//             </a>
//           </motion.div>
//         </div>
//         <motion.div
//           className="mx-auto mt-16 lg:mt-0"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div className="relative w-[500px] h-[500px]">
//             <Spline
//               scene="https://prod.spline.design/fNkN0lFFlE55rGH8/scene.splinecode"
//               className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client"

import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">

        {/* LEFT CONTENT */}
        <div className="mx-auto max-w-xl text-center lg:text-left lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-6 sm:mt-10 text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Convertix Web</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Where minimal design meets floral artistry. We craft elegant experiences that inspire and elevate your space. */}
            “Where innovation meets precision. We craft digital experiences that drive growth and elevate your brand.”
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <a
              href="https://evaraa.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button text-sm sm:text-base px-5 py-3"
            >
              Explore Our Work →
            </a> */}

            <button
  onClick={() => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }}
  className="apple-button"
>
  Explore Our Work →
</button>


            {/* <a
              href="https://evaraa.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-foreground"
            >
              Learn more →
            </a> */}
          </motion.div>
        </div>

        {/* RIGHT 3D MODEL */}
        <motion.div
          className="mx-auto mt-12 sm:mt-16 lg:mt-0 w-full flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-[260px] h-[360px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Spline
              scene="https://prod.spline.design/fNkN0lFFlE55rGH8/scene.splinecode"
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </motion.div>

      </div>
    </div>
  )
}
