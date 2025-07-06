'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <section className="bg-white py-[3rem] sm:py-[7.5rem] px-6 sm:px-12 xl:px-[9.5rem] max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Left Column: Heading + Body (split for order control) */}
          <div className="md:w-[55%] flex flex-col">

            {/* Heading */}
            <motion.h3
              className="text-[25px] sm:text-[35px] font-lora font-medium text-[#7e7e6b] mb-6 tracking-tight leading-snug order-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              About Dr. Serena Blake
            </motion.h3>

            {/* Image - placed after heading on mobile */}
            <motion.div
              className="w-full md:hidden flex justify-center mb-6 order-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-[200px] sm:w-[360px] h-[300px] sm:h-[500px] relative">
                <Image
                  src="/drserena_profile.jpg"
                  alt="Dr. Serena Blake"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Body */}
            <div className="space-y-2 sm:space-y-7 text-[16px] sm:text-[18px] font-sans text-[#7e7e6b] leading-[1.9] tracking-[-0.01em] antialiased order-3">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experience: 8 years of practice, 500+ sessions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
              >
                 Finding time to truly care for ourselves can feel nearly impossible in today&apos;s fast-moving, high-pressure world. I view therapy as a sacred space — one where we pause, reflect, and reconnect with who we are and what we need. To me, therapy isn&apos;t just about solving problems — it&apos;s about discovering clarity, cultivating strength, and making room for self-compassion.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
              >
                 I&apos;m a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over eight years of experience and more than 500 individual therapy sessions behind me. I received my doctorate from the California School of Professional Psychology, and since then, I&apos;ve worked across a variety of settings — private practice, academic medical centers, and online platforms — supporting adults navigating anxiety, trauma, relationship challenges, life transitions, and identity exploration.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Image (only for desktop) */}
          <motion.div
            className="hidden md:flex md:w-[45%] justify-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-[280px] sm:w-[360px] h-[420px] sm:h-[500px] relative">
              <Image
                src="/drserena_profile.jpg"
                alt="Dr. Serena Blake"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <hr className="mt-30 sm:mt-12 w-[90%] mx-auto border-t-[0.5px] border-black" />
    </div>
  );
};

export default About;
