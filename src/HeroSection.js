import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef();
  const imgRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 300]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section
        className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white"
        style={{ position: 'relative' }}
      >
        <motion.img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800"
          alt="Hero"
          className="position-absolute top-50 start-50 translate-middle rounded shadow"
          style={{ scale, y, zIndex: 10 }}
        />
        <h1 className="display-3 position-relative">🔥 Hero Section</h1>
      </section>

      {/* Second Section where the image settles */}
      <section
        className="vh-100 bg-white d-flex align-items-center justify-content-center flex-column"
      >
        <div
          className="rounded shadow"
          style={{ width: '300px', height: 'auto', overflow: 'hidden' }}
        >
          <img
            src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800"
            alt="Settled"
            className="img-fluid"
          />
        </div>
        <h2 className="display-6 mt-4">Image Landed Here 👇</h2>
      </section>
    </div>
  );
};

export default HeroSection;
