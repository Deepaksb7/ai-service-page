"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Zap, ShieldCheck, Cpu } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-zinc-950"
    >
      {/* Aurora Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-full h-full bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -20, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[20%] w-[80%] h-[80%] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[0%] left-[20%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
              Next Gen Intelligence
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight text-white">
            Architecture <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-cyan-400">
              for the Future
            </span>
          </h1>

          <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
            We build the neural infrastructure that powers the next generation
            of business. Scalable, secure, and self-evolving.
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg flex items-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                Start Transformation <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#case-studies"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-medium text-lg hover:bg-white/10 backdrop-blur-sm transition-colors flex items-center"
              >
                Explore Use Cases
              </a>
            </MagneticButton>
          </div>

          <div className="mt-12 flex items-center gap-8 text-zinc-500">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm">Global Scale</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm">Enterprise Secure</span>
            </div>
          </div>
        </motion.div>

        {/* 3D Glass Dashboard Visual */}
        <motion.div
          style={{ y: y1 }}
          className="relative hidden lg:block h-[700px] w-full perspective-1000"
        >
          {/* Main Glass Card */}
          <motion.div
            initial={{ rotateX: 10, rotateY: -10, opacity: 0, scale: 0.9 }}
            animate={{ rotateX: 5, rotateY: -5, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-10 left-10 right-0 bottom-10 bg-zinc-900/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-blue-500/10 transform-style-3d overflow-hidden"
          >
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

            {/* Header */}
            <div className="flex items-center justify-between mb-8 relative z-10 border-b border-white/5 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-zinc-500">
                SYSTEM_MONITOR_V2.0
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {/* Chart Placeholder */}
              <div className="col-span-2 h-48 rounded-xl bg-white/5 border border-white/5 p-4 flex items-end gap-1">
                {[40, 60, 45, 70, 50, 80, 65, 90, 75, 55, 85, 95].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="flex-1 bg-linear-to-t from-blue-500/20 to-blue-500/60 rounded-t-sm hover:from-blue-500/40 hover:to-blue-500/80 transition-colors"
                    />
                  ),
                )}
              </div>

              {/* Stat Cards */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">98.5%</div>
                <div className="text-xs text-zinc-500">
                  Performance Efficiency
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <Cpu className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white mb-1">12ms</div>
                <div className="text-xs text-zinc-500">Latency Response</div>
              </div>
            </div>

            {/* Decorative Scanning Line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20 pointer-events-none"
            />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            style={{ y: y2 }}
            className="absolute -right-10 top-1/2 p-4 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-xs text-zinc-400">Security Status</div>
                <div className="text-sm font-bold text-white">
                  System Optimal
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
