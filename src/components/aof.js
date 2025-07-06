'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Aof = () => {
  return (
    <div className="bg-[#f7f5ef]">
      <section className="pt-[3rem] sm:pt-[7rem] pb-[4rem]">
        {/* Heading */}
        <motion.div
          className="max-w-[900px] mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="font-garamond text-[34px] sm:text-[45px] text-[#3f3f3f] tracking-tight">
            Area of Focus
          </p>
        </motion.div>

        {/* Image Grid with Animated Text */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 sm:gap-14 max-w-[1270px] mx-auto">
          {[
            {
              src: '/as.jpg',
              label: 'Anxiety & Stress Management',
              desc: "When your mind feels overstimulated and your body carries tension, therapy offers a place to pause and reset. This service supports individuals who feel trapped in cycles of worry, restlessness, or emotional exhaustion. Together, we work to develop awareness of stress triggers, strengthen emotional regulation, and cultivate grounding practices that restore calm. Whether you're managing day-to-day overwhelm or navigating high-functioning anxiety, this space is tailored to bring you back to clarity and ease — without judgment, only care."
            },
            {
              src: '/rh.jpg',
              label: 'Relationship Counseling ',
              desc: "Our relationships shape us — but they can also wound us. This therapy focuses on untangling patterns of emotional disconnect, unresolved conflict, or miscommunication. Whether you're struggling with family tension, breakups, intimacy blocks, or boundary issues, this space gently explores what’s beneath the surface. With compassion and skill, we uncover relational dynamics and help you rebuild from a place of self-awareness, trust, and emotional courage."
            },
            {
              src: '/pg.jpg',
              label: 'Trauma Recovery',
              desc: "Grief isn’t always loud — sometimes it lingers quietly in the body. This service offers a therapeutic home for those holding pain from loss, trauma, or life-altering experiences. With a trauma-informed approach, we explore emotional imprints, coping patterns, and stories left untold. You are not rushed here. Healing unfolds at your pace, with care and consistency. Together, we aim not just to mend but to honor your strength and reclaim a sense of meaning."
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Static Circular Image */}
              <div className="relative aspect-square w-[300px] sm:w-[340px] rounded-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Animated Label */}
              <motion.p
                className="mt-3 text-[24px] text-[#3f3f3f] tracking-tight font-garamond"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                {item.label}
              </motion.p>

              {/* Animated Description */}
              <motion.p
                className="mt-3 text-[14.3px] leading-[1.9] text-[#3f3f3f] tracking-[0.003em] font-sans max-w-[85%] sm:max-w-[90%]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
              >
                {item.desc}
              </motion.p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aof;
