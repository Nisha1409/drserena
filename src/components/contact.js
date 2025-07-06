'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="bg-[#f7f5ef] pt-[2rem] sm:pt-[3rem] pb-[1rem] text-center">
            <motion.div
                className="max-w-[850px] mx-auto"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                {/* Heading */}
                <h2 className="font-garamond text-[25px] sm:text-[38px] text-[#3f3f3f] tracking-tight mb-10 text-center">
                    Dr. Serena Blake, PsyD (Clinical Psychologist)
                </h2>

                {/* Contact Info */}
                <div className="space-y-2 text-[#3f3f3f] font-lora text-[15px] sm:text-[18px] leading-relaxed">
                    <p><a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a></p>
                    <p > <span className='text-[#6b6b6b]'>Phone:</span><a href="tel:3235550192" className="underline">(323) 555-0192</a></p>
                    <p className='text-[#6b6b6b]'>1287 Maplewood Drive, Los Angeles, CA 90026</p>

                </div>
                <div className="mt-4 sm:mt-0 space-y-2 text-[#3f3f3f] font-lora text-[15px] sm:text-[18px] leading-relaxed">
                    <p>
                        <span className="text-[#6b6b6b]">Office Hours:</span><br />
                        <span className="underline">In-person:</span> Tue & Thu, 10 AM–6 PM<br />
                        <span className="underline">Virtual via Zoom:</span> Mon, Wed & Fri, 1 PM–5 PM
                    </p>
                </div>

                {/* Footer Links (optional) */}
                <div className="mt-1 pt-6 pb-2 flex flex-row justify-center gap-4 text-sm text-black">
                    <Link href="/" className="underline">Home</Link>
                    <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
                    <Link href="/good-faith-estimate" className="underline">Good Faith Estimate</Link>
                </div>
                <p className="hidden sm:block mt-16 text-[#6b6b6b] text-xl font-lora" >© 2025 Serena Blake, PsyD. All rights reserved.</p>
            </motion.div>
        </section>
    );
};

export default Contact;
