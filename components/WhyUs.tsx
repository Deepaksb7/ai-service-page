"use client";

import {
  motion,
  useInView,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} />;
}

export function WhyUs() {
  return (
    <section className="py-32 bg-white dark:bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 dark:text-white">
            Engineered for Impact
          </h2>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-zinc-100 dark:border-white/10 py-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-display">
                <Counter value={50} suffix="%" />
              </div>
              <div className="text-sm font-medium tracking-wide uppercase text-zinc-500">
                Time Saved
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 font-display">
                <Counter value={10} suffix="x" />
              </div>
              <div className="text-sm font-medium tracking-wide uppercase text-zinc-500">
                ROI
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2 font-display">
                24/7
              </div>
              <div className="text-sm font-medium tracking-wide uppercase text-zinc-500">
                Availability
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2 font-display">
                <Counter value={100} suffix="+" />
              </div>
              <div className="text-sm font-medium tracking-wide uppercase text-zinc-500">
                Deployments
              </div>
            </div>
          </div>
        </motion.div>

        {/* Z-Pattern Content */}
        <div className="space-y-32">
          {/* Row 1: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                Precision execution, <br />
                every time.
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                We don't believe in black boxes. Our methodology is transparent,
                rigorous, and designed to integrate seamlessly with your
                existing workflows. From the first line of code to the final
                model weight, everything is built for production stability.
              </p>
              <div className="h-1 w-24 bg-blue-600 rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video bg-zinc-200 dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Placeholder for tech visualization */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </motion.div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video bg-zinc-200 dark:bg-white/5 rounded-2xl overflow-hidden order-last md:order-first shadow-lg"
            >
              {/* Placeholder for tech visualization */}
              <div className="absolute inset-0 bg-[url('/security-core.png')] bg-cover bg-center opacity-90" />
              <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                Security at the core.
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                Enterprise data demands enterprise-grade security. We implement
                ISO-standard governance protocols, ensuring your proprietary
                data remains yours. No leaks, no training on public models
                without consent.
              </p>
              <div className="h-px w-24 bg-purple-600" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
