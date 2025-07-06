'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'No, but a superbill is provided for self-submission.',
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f7f5ef] py-[6rem]">
      <div className="max-w-[850px] mx-auto px-6 sm:px-10">
        <motion.h2
          className="font-garamond text-[30px] sm:text-[38px] text-[#1f1f1f] text-center mb-10 tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="divide-y divide-[#d6dee4] bg-[#f7f5ef]">
          {faqs.map((faq, index) => (
            <div key={index} className="px-5 py-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-start gap-2 items-center text-left text-[#265d85] font-semibold text-[16.5px] font-sans"
              >
                <motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[14px]"
                >
                  <FaChevronRight />
                </motion.span>
                <span>{faq.question}</span>
                
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className="mt-4 text-[#3f3f3f] text-[15px] font-sans leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
