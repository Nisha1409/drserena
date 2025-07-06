'use client';

import { motion } from 'framer-motion';

const Rai = () => {
  return (
    <div className="bg-[#94b0b0]">
      <section className="max-w-[850px] mx-auto px-6 sm:px-10 py-[2rem] text-center ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-12"
        > 
          <h2 className="font-garamond text-[35px] text-[#1F1F1F] tracking-tight">
            Rates and Insurance
          </h2>
        </motion.div>

        {/* Session Info */}
        <div className="space-y-10 text-[#1F1F1F] text-[18px] leading-[1.85] font-sans">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p>Individual Session – $200</p>
            <p>Couples Session – $240</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rai;
