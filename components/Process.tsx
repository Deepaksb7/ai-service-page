"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We analyze your data infrastructure and identify high-value AI use cases aligned with KPIs.",
  },
  {
    icon: PenTool,
    title: "Prototyping & MVP",
    description:
      "Rapid development of proof-of-concepts to validate feasibility and demonstrate immediate value.",
  },
  {
    icon: Rocket,
    title: "Scale & Integration",
    description:
      "Full-scale deployment into production environments with robust monitoring and training.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="py-32 bg-zinc-50 dark:bg-black relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            A proven methodology to go from concept to production-ready AI.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-13 left-0 w-full h-0.5 bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 70,
                }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8 p-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border-4 border-zinc-50 dark:border-black z-10 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-20 h-20 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center relative shadow-lg shadow-blue-500/5 group-hover:shadow-blue-500/20 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="w-full h-full p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-500/5">
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
