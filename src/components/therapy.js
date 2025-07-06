'use client';

import { motion } from 'framer-motion';

const Therapy = () => {
  return (
    <div className="bg-[#f7f5ef]">
    <section className="px-6 sm:px-12 xl:px-[18rem] py-[3rem] mt-10 sm:mt-14">
      <motion.div
        className="max-w-[900px] mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <p className="font-garamond text-[35px] sm:text-[45px] text-[#3f3f3f] leading-tight sm:leading-none tracking-tight">
          Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
        </p>

        <motion.p
          className="text-[16.5px] sm:text-[18px] leading-[1.9] tracking-tight font-body text-[#3f3f3f] mt-8 antialiased"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
        >
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma,
          grief and loss, self-esteem issues, or challenges with family, parenting or parental relationships.
          Whatever the source of your stress, you don’t have to face it alone. Therapy offers you the time
          and space to work toward wellness and peace.
        </motion.p>
      </motion.div>
      
    </section>
     <hr className="mt-10 w-[90%] mx-auto border-t border-black" />
    </div>
  );
};

export default Therapy;
