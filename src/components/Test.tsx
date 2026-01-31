// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { useState } from "react";

// const projects = [
//   { title: "Fintech App", category: "UI/UX Design", color: "bg-blue-500" },
//   { title: "Eco-Store", category: "Web Development", color: "bg-emerald-500" },
//   { title: "Neuro-Brand", category: "Identity", color: "bg-purple-500" },
// ];

// export default function PortfolioGrid() {
//   // 1. Parent Variant for Staggering
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 }
//     }
//   };

//   return (
//     <motion.section 
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-[#0f172a] min-h-screen"
//     >
//       {projects.map((project, i) => (
//         <ProjectCard key={i} project={project} />
//       ))}
//     </motion.section>
//   );
// }

//  export function ProjectCard({ project }: { project: { title: string; category: string; color: string } }) {
//   // 2. Motion Values for Mouse Tracking
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Smooth out the movement with a Spring
//   const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
//   const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

//   // Map mouse position to rotation (-15 to 15 degrees)
//   const rotateX = useTransform(mouseY, [0.5, -0.5], ["15deg", "-15deg"]);
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const width = rect.width;
//     const height = rect.height;
//     const mouseXPos = e.clientX - rect.left;
//     const mouseYPos = e.clientY - rect.top;

//     x.set(mouseXPos / width - 0.5);
//     y.set(mouseYPos / height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   // 3. Child Variant for Entrance
//   const cardVariants = {
//     hidden: { y: 50, opacity: 0, rotateX: -20 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       rotateX: 0,
//       transition: { type: "spring", stiffness: 100 }
//     }
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       className={`relative h-[400px] w-full rounded-2xl cursor-pointer ${project.color} group p-8 flex flex-col justify-end`}
//     >
//       {/* Glossy Overlay */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//       {/* Floating Content (TranslateZ creates depth) */}
//       <motion.div style={{ translateZ: 50 }} className="z-10">
//         <p className="text-white/70 text-sm font-mono uppercase tracking-tighter">
//           {project.category}
//         </p>
//         <h3 className="text-white text-4xl font-bold mt-2">
//           {project.title}
//         </h3>
//       </motion.div>

//       {/* Background Icon (Deep Depth) */}
//       <motion.div 
//         style={{ translateZ: 20, rotate: -15 }}
//         className="absolute top-10 right-10 text-white/10 text-9xl font-bold select-none"
//       >
//         #0{project.title[0]}
//       </motion.div>
//     </motion.div>
//   );
// }