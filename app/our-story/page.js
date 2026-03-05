import React from "react";
import Link from "next/link";
import styles from "@/styles/OurStoryPage.module.scss";

export const metadata = {
  title: "Our Story | Shree Balaji Agro",
  description:
    "Discover the journey of Shree Balaji Agro from a small workshop in 1975 to a trusted manufacturer of agricultural implements across India.",
};

const stats = [
  { value: "1975", label: "Founded in Garoda" },
  { value: "50+", label: "Years of craftsmanship" },
  { value: "1000+", label: "Farms supported" },
  { value: "Pan-India", label: "Service reach" },
];

const timeline = [
  {
    year: "1975",
    title: "Humble beginnings",
    description:
      "Started with a single workshop focused on durable tools for local farmers.",
  },
  {
    year: "1987",
    title: "Growing trust",
    description:
      "Expanded production to cultivators and seed drills built for local soils.",
  },
  {
    year: "2002",
    title: "Engineering focus",
    description:
      "Refined blade geometry and frames to improve balance and soil finish.",
  },
  {
    year: "2015",
    title: "Modern workshop",
    description:
      "Upgraded manufacturing for consistency, precision, and quicker service.",
  },
  {
    year: "Today",
    title: "Farmer-first partner",
    description:
      "Continuing to build reliable machines that perform season after season.",
  },
];

const pillars = [
  {
    title: "Strength in every weld",
    description:
      "Heavy-duty frames and clean finishes stand up to real field pressure.",
  },
  {
    title: "Soil-friendly design",
    description:
      "Tools that work deep while keeping structure healthy for crops.",
  },
  {
    title: "Easy to maintain",
    description:
      "Simple access and service-ready parts help reduce downtime.",
  },
  {
    title: "Consistent results",
    description:
      "Balanced machines deliver clean, uniform field preparation.",
  },
];

const gallery = [
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.44.50 PM.jpeg",
    alt: "Workshop heritage equipment",
    size: "tall",
  },
  {
    src: "/images/slider2.jpg",
    alt: "Cultivator working in the field",
    size: "wide",
  },
  {
    src: "/images/slider5.jpg",
    alt: "Rotavator blades in action",
    size: "standard",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.01 PM.jpeg",
    alt: "Precision tool assembly",
    size: "standard",
  },
  {
    src: "/images/slider7.jpeg",
    alt: "Field-ready machinery lineup",
    size: "wide",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.21 PM.jpeg",
    alt: "Machines ready for delivery",
    size: "large",
  },
];

const gallerySizeClass = {
  large: styles.galleryLarge,
  wide: styles.galleryWide,
  tall: styles.galleryTall,
};

const OurStoryPage = () => {
  return (
    <div className={styles.storyPage}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src="/images/slider1.jpg" alt="Fields and farm machinery" />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Our Story</span>
          <h1>From a small workshop to a trusted farming partner.</h1>
          <p>
            Shree Balaji Agro began in 1975 with a mission to build dependable
            implements for Indian farms. Decades later, our equipment is known
            for strength, balance, and smooth performance in real field
            conditions.
          </p>
          <div className={styles.heroActions}>
            <Link href="/about-us" className={styles.secondaryButton}>
              About Us
            </Link>
            <Link href="/contact-us" className={styles.primaryButton}>
              Talk With Us
            </Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statCard}>
              <span className={styles.statValue}>{item.value}</span>
              <span className={styles.statLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.originGrid}>
            <div className={styles.originText}>
              <span className={styles.eyebrow}>Our Roots</span>
              <h2>Crafted with farmers, refined by experience.</h2>
              <p>
                Every machine we build reflects the knowledge of the fields.
                We listen to farmers, test in real soil conditions, and refine
                each model until it feels reliable, balanced, and easy to
                operate.
              </p>
              <div className={styles.originHighlights}>
                {pillars.map((item) => (
                  <div key={item.title} className={styles.highlightCard}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.originMedia}>
              <div className={styles.mediaStack}>
                <img
                  src="/images/slider3.jpeg"
                  alt="Seed drill precision setup"
                  className={`${styles.mediaCard} ${styles.mediaOne}`}
                />
                <img
                  src="/images/WhatsApp Image 2026-01-13 at 9.44.58 PM.jpeg"
                  alt="Workshop craftsmanship"
                  className={`${styles.mediaCard} ${styles.mediaTwo}`}
                />
                <div className={styles.mediaBadge}>
                  Built for real field conditions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Milestones</span>
            <h2>Decades of steady growth and trusted performance.</h2>
            <p>
              Our journey is marked by constant improvement, field feedback,
              and a promise to build implements that farmers can rely on.
            </p>
          </div>
          <div className={styles.timelineGrid}>
            {timeline.map((item, index) => (
              <article
                key={item.title}
                className={styles.timelineCard}
                style={{ "--delay": `${index * 0.12}s` }}
              >
                <span className={styles.timelineYear}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Workshop & Fields</span>
            <h2>Real machines from real people.</h2>
          </div>
          <div className={styles.galleryGrid}>
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`${styles.galleryItem} ${gallerySizeClass[item.size] || ""}`}
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaContent}>
            <span className={styles.eyebrow}>Work With Us</span>
            <h2>Let us build the right implement for your fields.</h2>
            <p>
              Share your crop, soil, and acreage needs. We will recommend the
              best tool and make sure you are ready for the season.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link href="/gallery" className={styles.secondaryButton}>
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
