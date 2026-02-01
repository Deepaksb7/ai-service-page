"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Zap,
  Shield,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-32 bg-zinc-50 dark:bg-black relative overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white bg-clip-text text-transparent"
          >
            Capability Matrix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Deploying specialized intelligence across every layer of your
            enterprise stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {/* Card 1: Large Span */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Brain className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                <Brain className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                  Complete AI Strategy
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg text-lg">
                  From data readiness to model deployment, we architect the
                  roadmap for your AI transformation, ensuring alignment with
                  core business KPIs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Tall Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:row-span-2 group relative p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
              <Cpu className="w-7 h-7" />
            </div>

            <h3 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
              Custom LLM Engineering
            </h3>

            <ul className="space-y-6">
              {[
                "Domain-specific fine-tuning",
                "RAG Architecture setup",
                "Private cloud deployment",
                "Model evaluation & safety",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300"
                >
                  <div className="mt-1 p-1 rounded-full bg-purple-500/10 text-purple-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-br from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
              <Workflow className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors duration-300">
              Agentic Automation
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Autonomous agents that handle complex, multi-step workflows
              without human intervention.
            </p>
          </motion.div>

          {/* Card 4: Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-br from-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-500/20">
              <Database className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">
              Data Infrastructure
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Building the high-performance data pipelines required to feed
              hungry AI models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
