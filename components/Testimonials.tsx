"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nexus AI transformed our data infrastructure, enabling us to predict market trends with unprecedented accuracy.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote:
      "The ROI was immediate. Their autonomous agents handled 40% of our support tickets within the first month.",
    author: "David Chen",
    role: "VP of Operations, TechServe",
    image: "https://i.pravatar.cc/150?u=david",
  },
  {
    quote:
      "Professional, knowledgeable, and agile. They delivered a complex computer vision solution ahead of schedule.",
    author: "Elena Rodriguez",
    role: "Director of Innovation, MediCare",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    quote:
      "The scalable architecture they designed allowed us to handle 10x traffic during our peak season without a hitch.",
    author: "Michael Chang",
    role: "Head of Engineering, ShopStream",
    image: "https://i.pravatar.cc/150?u=michael",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Trusted by Innovators
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl relative flex-shrink-0"
            >
              <Quote className="w-10 h-10 text-blue-200 dark:text-blue-900 absolute top-6 left-6 -z-10" />
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 relative z-10 font-medium text-left">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-300 dark:bg-zinc-700 overflow-hidden">
                  <div className="w-full h-full bg-linear-to-tr from-blue-400 to-purple-500" />
                </div>
                <div className="text-left">
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
