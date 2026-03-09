"use client";

import { motion } from "framer-motion";
import { BUILD_FEATURES } from "@/lib/data";
import { ModernSystel } from "../../../public/assets/svg";

export default function BuildFaster() {
  const cardColors = ["bg-[#691CC1]", "bg-[#691CC1]", "bg-[#7F25D1]"];

  const cardShapes = [
    "rounded-[80px_20px]",
    "rounded-[80px]",
    "rounded-[80px_20px]",
  ];

  return (
    <section className="relative overflow-hidden py-24 mt-[-100px] px-6">
      {/* Orange parallelogram layer */}
      <div
        className="absolute inset-0 bg-[linear-gradient(158deg,#FECF08_-22.06%,#F5835F_64.54%,#7F25D1_148.66%)] 
    [clip-path:polygon(0_250px,0_100%,100%_calc(100%-250px),100%_0)]"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/10 pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two-column top */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_455px] gap-14 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl mt-20 text-[#3D076C] leading-[1.1]">
              We build{" "}
              <span className="font-medium">modern systems faster</span>,{" "}
              <span className="font-medium">smarter</span>, and{" "}
              <span className="font-medium">more secure</span> with{" "}
              <span className="font-medium">Trusted AI</span> Agents.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-center mx-auto"
            >
              <ModernSystel width={442} />
            </motion.div>
            <p className="text-[#000000] text-right md:text-lg leading-relaxed">
              An innovative approach to building modern and scalable systems. We
              build modern systems faster, smarter, and more secure.
            </p>
          </motion.div>
        </div>

        {/* Feature columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {BUILD_FEATURES.map(({ Icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              // className="bg-[#691CC1] rounded-[80px_20px] p-8"
              className={`${cardColors[i]} ${cardShapes[i]} p-16`}
            >
              {i !== 2 && (
                <h4 className="font-[300] text-[28px] mb-2 leading-snug">{title}</h4>
              )}
              <p className="text-white text-[18px] leading-relaxed mt-3">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
