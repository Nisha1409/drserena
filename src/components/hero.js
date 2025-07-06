'use client';
import { useState } from 'react';
import Image from 'next/image';
import ContactFormModal from "./contactForm";
export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  return (

    <section className="bg-[#F4F4F2] py-4 sm:py-10 md:pb-14 px-4 md:px-10 overflow-x-hidden ">
      {/* Logo + Name */}
      <div className="flex items-center flex-row sm:flex-row sm:ml-4 mb-2 sm:mb-8 text-center sm:text-left">
        <Image width={80}
          height={80} src="/logo.svg" alt="Logo" className="h-20 w-auto" />
        <div className="text-[#6D8A9A] font-lora text-md sm:text-xl tracking-tight leading-tight">
          <p>Dr. Serena Blake, PsyD</p>
          <p>(Clinical Psychologist)</p>
        </div>
      </div>

      {/* Hero Container */}
      <div className="sm:mx-4 overflow-hidden shadow-lg">
        <div className="px-0 sm:px-10 relative h-[570px] sm:h-[580px] md:h-[700px] ">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-start text-[#F4F4F2] px-4 md:px-6 pt-[7.5rem] sm:pt-[8rem] md:pb-24 text-center">
            <h1 className="text-[2.4rem] md:text-[3.5rem] tracking-tight font-lora font-bold  sm:leading-loose mb-4">
              Psychological Care for
              <br />
              <span className="leading-tight md:leading-loose block mt-6 md:mt-0 text-[2.4rem] md:text-[2.8rem">
                Change, Insight, and Well-Being
              </span>
            </h1>

            <p className="text-lg md:text-2xl font-body leading-relaxed max-w-6xl">
              Helping individuals find clarity, growth, and meaningful change-one conversation at a time.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="mt-4 sm:mt-20 w-[200px] sm:w-[380px] md:w-[280px] h-[60px] md:h-[100px] bg-[#94b0b0] text-white font-medium sm:font-semibold tracking-wide uppercase [border-radius:100%/100%] transition duration-300 hover:opacity-80 shadow-md">
              Schedule a <span className="inline sm:hidden lg:inline">
                <br />
              </span> Consultation
            </button>
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={showForm} onClose={() => setShowForm(false)} />

    </section>
  );
}
