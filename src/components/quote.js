'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Quote = () => {
  return (
    <section className="relative h-[460px] sm:h-[410px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/quote.jpg" // Replace with your actual image path
        alt="Ocean waves background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Quote Content */}
      <motion.div
        className="relative z-10 max-w-[800px] mx-auto h-full flex flex-col justify-center items-center px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="font-garamond text-[26px] sm:text-[30px] text-black leading-relaxed tracking-tight">
          “I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival.”
        </p>
        <p className="mt-6 text-blak text-[16px] sm:text-[17px] font-sans tracking-wide">
          — Audre Lorde
        </p>
      </motion.div>
    </section>
  );
};

export default Quote;
