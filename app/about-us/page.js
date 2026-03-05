import React from "react";
import Link from "next/link";
import styles from "@/styles/AboutPage.module.scss";

export const metadata = {
  title: "About Us | Shree Balaji Agro",
  description:
    "Learn about Shree Balaji Agro, a trusted manufacturer of cultivators, rotavators, seed drills, and farm implements since 1975.",
};

const stats = [
  { value: "50+", label: "Years of craft" },
  { value: "1000+", label: "Farming families served" },
  { value: "20+", label: "Implements and attachments" },
  { value: "Pan-India", label: "Support and delivery" },
];

const highlights = [
  {
    title: "Field-tested builds",
    description:
      "Every model is refined by real farm conditions for strength and stability.",
  },
  {
    title: "Easy maintenance",
    description:
      "Simple servicing and accessible parts keep downtime low during the season.",
  },
  {
    title: "Precise soil finish",
    description:
      "Balanced weight and sharp geometry leave clean, uniform seedbeds.",
  },
  {
    title: "Farmer-first support",
    description:
      "Guidance, setup help, and honest advice from people who know the field.",
  },
];

const values = [
  {
    title: "Built to last",
    description: "Heavy-duty frames, clean welds, and stable alignment.",
  },
  {
    title: "Soil-respectful",
    description: "Tools that work deeper without harming soil structure.",
  },
  {
    title: "Simple to operate",
    description: "Ergonomic setups that feel familiar to every operator.",
  },
  {
    title: "Honest engineering",
    description: "Practical designs focused on results, not just features.",
  },
];

const milestones = [
  {
    year: "1975",
    title: "The beginning",
    description:
      "Started as a small workshop serving nearby farming communities.",
  },
  {
    year: "1992",
    title: "Range expansion",
    description:
      "Added seed drills and cultivators to meet growing crop diversity.",
  },
  {
    year: "2008",
    title: "Precision upgrades",
    description:
      "Improved balancing, blades, and gear systems for smoother operation.",
  },
  {
    year: "Today",
    title: "Trusted partner",
    description:
      "Continuing to build dependable machines for modern Indian farms.",
  },
];

const capabilities = [
  {
    title: "Cultivators",
    description: "Deep, uniform tilling for fast field preparation.",
  },
  {
    title: "Rotavators",
    description: "Fine soil finish with sturdy blades and stable depth.",
  },
  {
    title: "Seed drills",
    description: "Even seed placement for healthier germination.",
  },
  {
    title: "Disc harrows",
    description: "Residue management and soil mixing after harvest.",
  },
  {
    title: "Land levelers",
    description: "Clean surface leveling for efficient irrigation.",
  },
  {
    title: "Custom fabrication",
    description: "Attachments tailored for local crop and soil needs.",
  },
];

const gallery = [
  {
    src: "/images/slider1.jpg",
    alt: "Cultivator working in the field",
    size: "large",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.04 PM.jpeg",
    alt: "Workshop craftsmanship and assembly",
    size: "tall",
  },
  {
    src: "/images/slider4.jpg",
    alt: "Precision farm implement close-up",
    size: "wide",
  },
  {
    src: "/images/slider7.jpeg",
    alt: "Rotavator blades and soil finish",
    size: "standard",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.21 PM.jpeg",
    alt: "Ready machinery for delivery",
    size: "standard",
  },
  {
    src: "/images/slider9.jpeg",
    alt: "Field-ready agricultural equipment",
    size: "wide",
  },
];

const gallerySizeClass = {
  large: styles.galleryLarge,
  wide: styles.galleryWide,
  tall: styles.galleryTall,
};

const AboutUsPage = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src="/images/homebanner.jpeg" alt="Shree Balaji Agro workshop" />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>About Us</span>
          <h1>Crafted for Indian farms since 1975.</h1>
          <p>
            Shree Balaji Agro builds reliable cultivators, rotavators, seed
            drills, and farm implements from Garoda, Mandsaur. Our focus is on
            strength, easy maintenance, and field finishes that help farmers
            work faster with confidence.
          </p>
          <div className={styles.heroActions}>
            <Link href="/gallery" className={styles.primaryButton}>
              Explore Products
            </Link>
            <Link href="/contact-us" className={styles.secondaryButton}>
              Visit Our Workshop
            </Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.legacySection}`} id="about-us">
        <div className={styles.sectionInner}>
          <div className={styles.legacyGrid}>
            <div className={styles.legacyText}>
              <span className={styles.eyebrow}>Our Legacy</span>
              <h2>Built by farmers, refined by engineers.</h2>
              <p>
                We listen to the people who spend their days on the land. That
                experience shapes every weld, angle, and blade we manufacture.
                The result is equipment that feels sturdy, balanced, and ready
                for long hours in real field conditions.
              </p>
              <div className={styles.legacyHighlights}>
                {highlights.map((item) => (
                  <div key={item.title} className={styles.highlightCard}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.legacyMedia}>
              <div className={styles.mediaStack}>
                <img
                  src="/images/slider3.jpeg"
                  alt="Precision seed drill in action"
                  className={`${styles.mediaCard} ${styles.mediaOne}`}
                />
                <img
                  src="/images/WhatsApp Image 2026-01-13 at 9.44.58 PM.jpeg"
                  alt="Equipment assembly and finishing"
                  className={`${styles.mediaCard} ${styles.mediaTwo}`}
                />
                <div className={styles.mediaBadge}>
                  Reliable builds for every season
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Our Values</span>
            <h2>What guides every machine we build.</h2>
            <p>
              From raw steel to ready-to-work equipment, we hold the same
              standards: dependable build quality, smart engineering, and
              honest service.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((item, index) => (
              <article
                key={item.title}
                className={styles.valueCard}
                style={{ "--delay": `${index * 0.12}s` }}
              >
                <span className={styles.valueIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.journeySection}`} id="our-story">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Our Story</span>
            <h2>Decades of growth powered by farmers.</h2>
            <p>
              From a single workshop to a trusted name across farming
              communities, we have grown by improving every season and every
              model.
            </p>
          </div>
          <div className={styles.journeyGrid}>
            {milestones.map((item, index) => (
              <article
                key={item.title}
                className={styles.journeyCard}
                style={{ "--delay": `${index * 0.14}s` }}
              >
                <span className={styles.journeyYear}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.capabilitiesSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Capabilities</span>
            <h2>Implements designed for every stage of farming.</h2>
            <p>
              Our range covers land preparation, sowing, soil conditioning, and
              residue management with implements engineered to stay stable and
              efficient.
            </p>
          </div>
          <div className={styles.capabilitiesGrid}>
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className={styles.capabilityCard}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={styles.capabilityArrow} aria-hidden="true">
                  -&gt;
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Workshop & Fields</span>
            <h2>Real machines. Real farms. Real results.</h2>
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
            <h2>Ready for stronger harvests this season?</h2>
            <p>
              Tell us about your crop and soil needs. We will recommend the
              right implement and make sure it is ready for your next field
              operation.
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

export default AboutUsPage;
