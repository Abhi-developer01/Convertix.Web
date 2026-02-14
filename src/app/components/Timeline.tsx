// "use client"

// import { useState, useRef } from "react"
// import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

// const timelineEvents = [
//   {
//     year: 2018,
//     title: "Flowers & Saints Founded",
//     description: "Our journey began with a passion for minimal design and floral artistry.",
//     details:
//       "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
//   },
//   {
//     year: 2019,
//     title: "First Major Exhibition",
//     description: "Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.",
//     details:
//       "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
//   },
//   {
//     year: 2020,
//     title: "Launch of Online Store",
//     description: "Expanded our reach by bringing our creations to the digital world.",
//     details:
//       "In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.",
//   },
//   {
//     year: 2021,
//     title: "Collaboration with Top Brands",
//     description: "Partnered with leading lifestyle brands to create exclusive collections.",
//     details:
//       "Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.",
//   },
//   {
//     year: 2022,
//     title: "International Recognition",
//     description: "Received the prestigious International Floral Design Award.",
//     details:
//       "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
//   },
//   {
//     year: 2023,
//     title: "Expansion to Physical Stores",
//     description: "Opened our first flagship store in the heart of Sydney.",
//     details:
//       "Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.",
//   },
// ]

// const FlowerIcon = ({ progress }: { progress: number }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-6 h-6"
//     style={{ transform: `scale(${progress})` }}
//   >
//     <path
//       d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
//       stroke="currentColor"
//       strokeWidth="2"
//     />
//     <path
//       d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
//       stroke="currentColor"
//       strokeWidth="2"
//     />
//   </svg>
// )

// export default function Timeline() {
//   const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   })

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   })

//   return (
//     <section ref={containerRef} className="py-20 bg-background overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
//           <p className="mt-4 text-lg text-muted-foreground">The evolution of Flowers & Saints through the years</p>
//         </motion.div>

//         <div className="relative">
//           {/* Vertical line */}
//           <motion.div
//             className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
//             style={{ scaleY: scaleX }}
//           />

//           {/* Flower icon */}
//           <motion.div
//             className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
//             style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
//           >
//             <FlowerIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
//           </motion.div>

//           {timelineEvents.map((event, index) => (
//             <TimelineEvent
//               key={event.year}
//               event={event}
//               index={index}
//               isExpanded={expandedEvent === index}
//               onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function TimelineEvent({
//   event,
//   index,
//   isExpanded,
//   onToggle,
// }: {
//   event: (typeof timelineEvents)[0]
//   index: number
//   isExpanded: boolean
//   onToggle: () => void
// }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.5 })

//   return (
//     <motion.div
//       ref={ref}
//       className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//     >
//       <div className="w-5/12" />
//       <div className="z-20">
//         <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
//           <div className="w-3 h-3 bg-background rounded-full" />
//         </div>
//       </div>
//       <motion.div
//         className="w-5/12 cursor-pointer"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={onToggle}
//       >
//         <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
//           <span className="font-bold text-primary">{event.year}</span>
//           <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
//           <p className="text-muted-foreground">{event.description}</p>
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }





// "use client"

// import { useRef, useState } from "react"
// import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion"

// const timelineEvents = [
//   {
//     year: "Project 01",
//     title: "Restaurant Ordering Platform",
//     description: "Minimalist brand + web experience for a digital-first restaurant.",
//     details:
//       "We built a complete ordering website with live menu, cart, and checkout. The new UI increased order completion rate by 42% and reduced customer drop-offs by 31%.",
//     impact: "Higher online orders, reduced dependency on food aggregators, and stronger brand identity.",
//     tech: "Next.js, Tailwind CSS, MongoDB, Razorpay",
//   },
//   {
//     year: "Project 02",
//     title: "E-commerce Web Experience",
//     description: "High-converting shopping experience for an online store.",
//     details:
//       "We redesigned product discovery, checkout flow, and mobile UX. Page load improved by 2.4x and conversion rate grew by 27% in the first month.",
//     impact: "Better SEO, faster load, and higher customer trust leading to more sales.",
//     tech: "Next.js, TypeScript, Node.js, MongoDB",
//   },
//   {
//     year: "Project 03",
//     title: "GenieZap – Grocery & Food Ordering App",
//     description: "End-to-end mobile + backend system for real-time grocery delivery.",
//     details:
//       "We built GenieZap using scalable backend, real-time inventory, and seamless payments. Vendors manage items and orders instantly via Supabase.",
//     impact: "Enabled hyperlocal stores to go online in days instead of months and process 5× more orders digitally.",
//     tech: "Next.js, Node.js, Express, Supabase, MongoDB, Razorpay, TypeScript",
//   },
//   {
//     year: "Project 04",
//     title: "Growth & Marketing Platform",
//     description: "A digital campaign system to attract and convert high-value customers.",
//     details:
//       "Landing pages, ad funnels, and analytics dashboards were created to track ROI and optimize campaigns.",
//     impact: "Generated 3× higher lead quality and 60% lower customer acquisition cost.",
//     tech: "Next.js, Analytics APIs, Conversion Tracking",
//   },
// ]

// const ProductOrb = ({ progress }: { progress: any }) => (
//   <motion.div
//     className="w-14 h-14 rounded-full bg-gradient-to-r from-primary via-purple-500 to-cyan-400 shadow-xl"
//     style={{ scale: progress }}
//   />
// )

// export default function Timeline() {
  
//   const containerRef = useRef(null)
//   const timelineRef = useRef(null)
//   // const { scrollYProgress } = useScroll({
//   //   target: containerRef,
//   //   offset: ["start end", "end start"],
//   // })

//   const { scrollYProgress } = useScroll({
//   target: timelineRef,
//   offset: ["start 20%", "end 90%"],
// })


//   const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
//   const orbScale = useTransform(scrollYProgress, [0, 1], [0.6, 1])

//   return (
//     <section ref={containerRef} className="py-24 bg-background overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl font-bold">How We Build Impactful Products</h2>
//           <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
//             Every product we create is designed to generate revenue, scale operations and deliver delightful user experience.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         {/* <div className="relative">
//           <motion.div
//             className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary via-purple-500 to-cyan-400 rounded-full"
//             style={{ scaleY, originY: 0 }}
//           />

//           <motion.div
//             className="sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
//           >
//             <ProductOrb progress={orbScale} />
//           </motion.div>

//           {timelineEvents.map((event, index) => (
//             <TimelineEvent key={index} event={event} index={index} />
//           ))}
//         </div> */}
//         <div ref={timelineRef} className="relative">

//   <motion.div
//     className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-primary via-purple-500 to-cyan-400 rounded-full"
//     style={{ scaleY, originY: 0 }}
//   />

//   <motion.div className="sticky top-1/2 -translate-y-1/2 z-20 flex justify-center">
//     {/* <ProductOrb progress={orbScale} /> */}
//   </motion.div>

//   {timelineEvents.map((event, index) => (
//     <TimelineEvent key={index} event={event} index={index} />
//   ))}

// </div>

//         <TechStack />
//         <Pricing />
//       </div>
//     </section>
//   )
// }

// function TimelineEvent({ event, index }: any) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 80 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       className={`relative mb-20 flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
//     >
//       <div className="w-[46%] relative">
//         <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-xl opacity-50"></div>
//         <div className="relative p-6 bg-background border rounded-xl shadow-lg">
//           <span className="text-primary font-semibold">{event.year}</span>
//           <h3 className="text-xl font-bold mt-1">{event.title}</h3>
//           <p className="mt-2 text-muted-foreground">{event.description}</p>

//           <p className="mt-4 text-sm">{event.details}</p>

//           <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
//             <strong>Impact:</strong> {event.impact}
//           </div>

//           <div className="mt-3 text-xs text-primary">Tech: {event.tech}</div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// function TechStack() {
//   const stack = ["Next.js", "Node.js", "Express", "Supabase", "MongoDB", "TypeScript", "Razorpay", "Tailwind"]

//   return (
//     <div className="mt-32 text-center">
//       <h3 className="text-3xl font-bold">Technology We Use</h3>
//       <p className="text-muted-foreground mt-4">Built for scale, performance and security.</p>

//       <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
//         {stack.map((tech) => (
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             key={tech}
//             className="p-6 bg-background border rounded-xl shadow-md"
//           >
//             {tech}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function Pricing() {
//   return (
//     <div className="mt-32">
//       <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>

//       <div className="grid md:grid-cols-3 gap-8">
//         <PriceCard title="Startup" price="₹49,000" features={["Landing Page", "UI/UX", "Payment Gateway", "1 Month Support"]} />
//         <PriceCard
//           title="Business"
//           price="₹1,49,000"
//           highlighted
//           features={["Web App + Admin", "Razorpay", "MongoDB / Supabase", "3 Months Support"]}
//         />
//         <PriceCard
//           title="Enterprise"
//           price="Custom"
//           features={["Mobile App", "Real-time Orders", "Vendor Dashboard", "Analytics", "Dedicated Team"]}
//         />
//       </div>
//     </div>
//   )
// }

// function PriceCard({ title, price, features, highlighted = false }: any) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className={`p-8 rounded-xl border shadow-lg ${highlighted ? "border-primary" : ""}`}
//     >
//       <h4 className="text-xl font-bold">{title}</h4>
//       <p className="text-3xl font-bold mt-4 text-primary">{price}</p>

//       <ul className="mt-6 space-y-2 text-sm">
//         {features.map((f: string) => (
//           <li key={f}>✔ {f}</li>
//         ))}
//       </ul>

//       <button className="mt-6 w-full py-3 bg-slate-800 text-white rounded-lg">
//         Get Started
//       </button>
//     </motion.div>
//   )
// }


"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "Project 01",
    title: "Restaurant Ordering Platform",
    description: "Minimalist brand + web experience for a digital-first restaurant.",
    details:
      "We built a complete ordering website with live menu, cart, and checkout. The new UI increased order completion rate by 42% and reduced customer drop-offs by 31%.",
    impact: "Higher online orders, reduced dependency on food aggregators, and stronger brand identity.",
    tech: "Next.js, Tailwind CSS, MongoDB, Razorpay",
  },
  {
    year: "Project 02",
    title: "E-commerce Web Experience",
    description: "High-converting shopping experience for an online store.",
    details:
      "We redesigned product discovery, checkout flow, and mobile UX. Page load improved by 2.4x and conversion rate grew by 27% in the first month.",
    impact: "Better SEO, faster load, and higher customer trust leading to more sales.",
    tech: "Next.js, TypeScript, Node.js, MongoDB",
  },
  {
    year: "Project 03",
    title: "GenieZap – Grocery & Food Ordering App",
    description: "End-to-end mobile + backend system for real-time grocery delivery.",
    details:
      "We built GenieZap using scalable backend, real-time inventory, and seamless payments.",
    impact: "Stores processed 5× more orders digitally.",
    tech: "Next.js, Node.js, Supabase, MongoDB",
  },
  {
    // year: "Project 04",
    // title: "Growth & Marketing Platform",
    // description: "A digital campaign system to attract and convert high-value customers.",
    // details:
    //   "Landing pages, ad funnels, and analytics dashboards were created.",
    // impact: "3× higher lead quality and 60% lower acquisition cost.",
    // tech: "Next.js, Analytics APIs",
    year: "Project 04",
title: "Museboard - Social Media Platform",
description: "A social media platform designed to connect creators and audiences seamlessly.",
details:
  "Developed user profiles, content feeds, real-time notifications, and interactive media sharing. Implemented follower/following system, likes, comments, and analytics dashboards to track engagement.",
impact: "Increased user engagement by 4× and boosted content sharing by 70%.",
tech: "Next.js, Firebase, Socket.IO, Tailwind CSS, Supabase, Analytics APIs"
  },
]

export default function Timeline() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 90%"],
  })

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold">
            How We Build Impactful Products
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every product we create is designed to scale revenue and deliver great UX.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">

          {/* Vertical line */}
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-primary via-purple-500 to-cyan-400"
            style={{ scaleY, originY: 0 }}
          />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineEvent key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        <TechStack />
        {/* <Pricing /> */}
      </div>
    </section>
  )
}

/* ---------------------------- TIMELINE ITEM ---------------------------- */

function TimelineEvent({ event, index }: any) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative flex w-full 
        ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}
        justify-start`}
    >
      <div className="w-full sm:w-[45%] pl-12 sm:pl-0">
        <div className="p-6 bg-background border rounded-xl shadow-lg">
          {/* <span className="text-primary font-semibold">{event.year}</span>
          <h3 className="text-xl font-bold mt-1">{event.title}</h3>
          <p className="mt-2 text-muted-foreground">{event.description}</p>

          <p className="mt-3 text-sm">{event.details}</p> */}
          <span className="text-primary font-semibold text-xs sm:text-sm">
  {event.year}
</span>

<h3 className="mt-1 font-bold text-base sm:text-xl">
  {event.title}
</h3>

<p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
  {event.description}
</p>

<p className="mt-3 text-xs sm:text-sm leading-relaxed">
  {event.details}
</p>


          {/* <div className="mt-4 p-3 bg-muted rounded-lg text-sm"> */}
          <div className="mt-4 p-3 bg-muted rounded-lg text-xs sm:text-sm leading-relaxed">

            <strong>Impact:</strong> {event.impact}
          </div>

          {/* <div className="mt-3 text-xs text-primary"> */}
          <div className="mt-3 text-[10px] sm:text-xs text-primary">

            Tech: {event.tech}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ---------------------------- TECH STACK ---------------------------- */

// function TechStack() {
//   const stack = ["Next.js", "Node.js", "Supabase", "MongoDB", "TypeScript", "Razorpay", "Tailwind"]

//   return (
//     <div className="mt-32 text-center">
//       <h3 className="text-xl sm:text-3xl font-bold">Technology We Use</h3>
//       <p className="text-muted-foreground mt-4">
//         Built for scale, performance and security.
//       </p>

//       <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {stack.map((tech) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             key={tech}
//             className="p-6 bg-background border rounded-xl shadow-md"
//           >
//             {tech}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

function TechStack() {
  const stack = ["Next.js", "Node.js","Express.js", "Supabase", "MongoDB", "TypeScript", "Razorpay", "Tailwind",]

  return (
    <div className="mt-20 sm:mt-32 text-center">
      <h3 className="text-lg sm:text-3xl font-bold">Technology We Use</h3>
      <p className="text-muted-foreground mt-2 sm:mt-4 text-xs sm:text-base">
        Built for scale, performance and security.
      </p>

      <div className="mt-8 sm:mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 px-2 sm:px-0">
        {stack.map((tech) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={tech}
            className="py-2 px-3 sm:p-6 bg-background border rounded-lg sm:rounded-xl shadow-sm sm:shadow-md text-[11px] sm:text-base"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  )
}


/* ---------------------------- PRICING ---------------------------- */

// function Pricing() {
//   return (
//     <div className="mt-32">
//       <h3 className="text-3xl font-bold text-center mb-12">Pricing Plans</h3>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <PriceCard title="Startup" price="₹49,000" features={["Landing Page", "UI/UX", "Payments", "1 Month Support"]} />
//         <PriceCard
//           title="Business"
//           price="₹1,49,000"
//           highlighted
//           features={["Web App", "Admin Panel", "Payments", "3 Months Support"]}
//         />
//         <PriceCard
//           title="Enterprise"
//           price="Custom"
//           features={["Mobile App", "Real-time Orders", "Vendor Panel", "Analytics"]}
//         />
//       </div>
//     </div>
//   )
// }

function Pricing() {
  return (
    <div className="mt-20 sm:mt-32">
      <h3 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Pricing Plans
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 px-2 sm:px-0">
        <PriceCard title="Startup" price="₹49,000" features={["Landing Page", "UI/UX", "Payments", "1 Month Support"]} />
        <PriceCard
          title="Business"
          price="₹1,49,000"
          highlighted
          features={["Web App", "Admin Panel", "Payments", "3 Months Support"]}
        />
        <PriceCard
          title="Enterprise"
          price="Custom"
          features={["Mobile App", "Real-time Orders", "Vendor Panel", "Analytics"]}
        />
      </div>
    </div>
  )
}


// function PriceCard({ title, price, features, highlighted = false }: any) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className={`p-8 rounded-xl border shadow-lg bg-background ${
//         highlighted ? "border-primary" : ""
//       }`}
//     >
//       <h4 className="text-xl font-bold">{title}</h4>
//       <p className="text-3xl font-bold mt-4 text-primary">{price}</p>

//       <ul className="mt-6 space-y-2 text-sm">
//         {features.map((f: string) => (
//           <li key={f}>✔ {f}</li>
//         ))}
//       </ul>

//       <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-lg">
//         Get Started
//       </button>
//     </motion.div>
//   )
// }

function PriceCard({ title, price, features, highlighted = false }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`p-5 sm:p-8 rounded-xl border shadow-md sm:shadow-lg bg-background ${
        highlighted ? "border-primary" : ""
      }`}
    >
      <h4 className="text-base sm:text-xl font-bold">{title}</h4>

      <p className="text-xl sm:text-3xl font-bold mt-2 sm:mt-4 text-primary">
        {price}
      </p>

      <ul className="mt-4 sm:mt-6 space-y-2 text-[11px] sm:text-sm">
        {features.map((f: string) => (
          <li key={f}>✔ {f}</li>
        ))}
      </ul>

      <button className="mt-4 sm:mt-6 w-full py-2 sm:py-3 text-sm sm:text-base bg-slate-900 text-white rounded-lg">
        Get Started
      </button>
    </motion.div>
  )
}

