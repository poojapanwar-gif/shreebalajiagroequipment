"use client";
import React, { useEffect, useRef } from "react";
import styles from '../../styles/CareerSlider.module.scss'

export default function Panorama() {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const images = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpeg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider6.jpeg",
    "/images/slider7.jpeg",
    "/images/slider8.jpeg",
    "/images/slider9.jpeg",
  ];
  const repeatedImages = [...images, ...images];

  useEffect(() => {
    let position = 0;
    const speed = 1.0;
    const cardWidth = 300;
    const gap = 20;
    const loopWidth = (cardWidth + gap) * images.length;

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= loopWidth) {
        position = 0;
      }

      const container = carouselRef.current;
      if (container) {
        container.style.transform = `translateX(${position}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [images.length]);

  return (
    <section className={styles.curvedCarouselSection}>
      <div className={styles.carouselContainer}>
        <div className={`${styles.ellipseMask} ${styles.ellipseTop}`} />

        <div className={styles.carouselViewport}>
          <div
            ref={carouselRef}
            className={styles.carouselTrack}
            style={{ left: 0 }}
          >
            {repeatedImages.map((image, index) => (
              <div key={index} className={styles.carouselCard}>
                <img
                  src={image}
                  alt={`Slide ${(index % images.length) + 1}`}
                  className={styles.cardImage}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.ellipseMask} ${styles.ellipseBottom}`} />
      </div>
    </section>
  );
}
