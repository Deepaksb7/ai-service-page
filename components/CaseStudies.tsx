"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "Global FinTech Corp",
    category: "Financial Services",
    title: "Fraud Detection at Scale",
    description:
      "Implemented a real-time anomaly detection system processing 50M+ transactions daily. Reduced false positives by 60% while capturing 99.9% of fraudulent activities in real-time.",
    impact: "99.9% Fraud Reduction",
    image: "/case-study-fintech.png",
    shape: "rounded-3xl rounded-tr-[5rem]", // Cleaner tech look
  },
  {
    client: "MediCare Systems",
    category: "Healthcare",
    title: "AI Diagnostic Assistant",
    description:
      "Deployed a computer vision model to assist radiologists in early cancer detection. The system analyzes scans in seconds, highlighting potential anomalies for human review.",
    impact: "40% Higher Efficiency",
    image: "/case-study-health.png",
    shape: "rounded-[3rem] rounded-tr-lg", // Organic soft
  },
  {
    client: "ShopTrend Retail",
    category: "Retail",
    title: "Hyper-Personalization Engine",
    description:
      "Built a recommendation engine driving personalized shopping experiences for 10M users. Utilizing graph neural networks to predict purchasing intent with high accuracy.",
    impact: "25% Revenue Uptick",
    image: "/case-study-retail.png",
    shape: "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl", // Dynamic opposite diagonal
  },
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="case-studies"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Case Studies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
              Real-world impact delivering measurable ROI for industry leaders.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 font-semibold flex items-center gap-2 hover:underline"
          >
            View all projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Separator Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-24">
            {cases.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-50 dark:border-zinc-900 z-10 hidden md:block" />

                {/* Content Side A (Image) */}
                <div className="w-full md:w-1/2 group cursor-pointer">
                  <div
                    className={`h-64 md:h-80 relative overflow-hidden ${project.shape} shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white/90 font-bold text-4xl uppercase tracking-widest transform group-hover:scale-110 transition-transform duration-700 mix-blend-overlay">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Content Side B (Text) */}
                <div
                  className={`w-full md:w-1/2 text-center ${index === 0 ? "md:text-center" : "md:text-left"}`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 justify-center ${index % 2 === 0 && index !== 0 ? "md:justify-start" : index === 0 ? "md:justify-center" : "md:justify-end"}`}
                  >
                    <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-sm text-zinc-500">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div
                    className={`flex items-center gap-2 text-zinc-900 dark:text-white font-semibold justify-center ${index % 2 === 0 && index !== 0 ? "md:justify-start" : index === 0 ? "md:justify-center" : "md:justify-end"}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {project.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
