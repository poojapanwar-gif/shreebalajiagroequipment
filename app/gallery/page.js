import React from "react";
import Link from "next/link";
import styles from "@/styles/ProductsPage.module.scss";

export const metadata = {
  title: "Products | Shree Balaji Agro",
  description:
    "Explore cultivators, rotavators, seed drills, and farm implements built for Indian fields by Shree Balaji Agro.",
};

const stats = [
  { value: "20+", label: "Implement options" },
  { value: "50+", label: "Years of trust" },
  { value: "Strong", label: "Field-ready builds" },
  { value: "Fast", label: "Service support" },
];

const categories = [
  {
    title: "Cultivators",
    description: "Deep, even tilling for faster preparation and smoother beds.",
  },
  {
    title: "Rotavators",
    description: "Fine tilth creation with sturdy blades and low vibration.",
  },
  {
    title: "Seed Drills",
    description: "Precise spacing and depth control for healthy germination.",
  },
  {
    title: "Disc Harrows",
    description: "Residue management and soil mixing after harvest.",
  },
  {
    title: "Land Levelers",
    description: "Level fields for efficient irrigation and cleaner rows.",
  },
  {
    title: "Custom Attachments",
    description: "Fabrication tailored to crop types and soil conditions.",
  },
];

const products = [
  {
    title: "Heavy-Duty Cultivator",
    description: "Breaks hard soil fast with stable frames and strong tines.",
    tag: "Best for prep",
    image: "/images/slider2.jpg",
  },
  {
    title: "Precision Seed Drill",
    description: "Even seed placement and depth for better crop uniformity.",
    tag: "Better germination",
    image: "/images/slider3.jpeg",
  },
  {
    title: "Rotavator Series",
    description: "Fine tilth with strong blades and smooth operation.",
    tag: "Clean finish",
    image: "/images/slider5.jpg",
  },
  {
    title: "Disc Harrow",
    description: "Handles residue and soil mixing with steady balance.",
    tag: "Post harvest",
    image: "/images/slider6.jpeg",
  },
  {
    title: "Ridger and Furrow Maker",
    description: "Strong ridge shaping for water control and root health.",
    tag: "Water control",
    image: "/images/slider8.jpeg",
  },
  {
    title: "Multi Purpose Tiller",
    description: "Versatile setup for multiple crops and soil types.",
    tag: "Versatile use",
    image: "/images/slider9.jpeg",
  },
];

const buildSteps = [
  {
    title: "Design with the farmer",
    description: "We start with farmer feedback and field testing input.",
  },
  {
    title: "Quality steel selection",
    description: "Frames and blades are chosen for strength and durability.",
  },
  {
    title: "Precision fabrication",
    description: "Controlled welding and balancing for smooth performance.",
  },
  {
    title: "Field-ready finishing",
    description: "Each unit is tested and finished for reliable use.",
  },
];

const gallery = [
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.44.59 PM.jpeg",
    alt: "Workshop tools and components",
    size: "tall",
  },
  {
    src: "/images/slider1.jpg",
    alt: "Cultivator in the field",
    size: "wide",
  },
  {
    src: "/images/slider4.jpg",
    alt: "Precision farming implement close-up",
    size: "standard",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.02 PM (1).jpeg",
    alt: "Assembly and finishing work",
    size: "standard",
  },
  {
    src: "/images/slider7.jpeg",
    alt: "Equipment lineup ready for delivery",
    size: "wide",
  },
  {
    src: "/images/WhatsApp Image 2026-01-13 at 9.45.21 PM.jpeg",
    alt: "Machinery prepared for transport",
    size: "large",
  },
];

const gallerySizeClass = {
  large: styles.galleryLarge,
  wide: styles.galleryWide,
  tall: styles.galleryTall,
};

const ProductsPage = () => {
  return (
    <div className={styles.productsPage}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <img src="/images/homebanner.jpeg" alt="Shree Balaji Agro products" />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Products</span>
          <h1>Implements built for strong fields and smoother seasons.</h1>
          <p>
            Explore cultivators, rotavators, seed drills, and farm implements
            crafted to handle real soil conditions. Our machines deliver
            reliable performance, easy maintenance, and consistent field
            results.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact-us" className={styles.primaryButton}>
              Get a Quote
            </Link>
            <Link href="/about-us" className={styles.secondaryButton}>
              About Us
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

      <section className={`${styles.section} ${styles.categoriesSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Product Range</span>
            <h2>Tools made for every stage of farming.</h2>
            <p>
              From land preparation to sowing and soil conditioning, our
              implements are engineered to work smoothly season after season.
            </p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((item, index) => (
              <article
                key={item.title}
                className={styles.categoryCard}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <span className={styles.categoryIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.featuredSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Featured Implements</span>
            <h2>Best sellers trusted across farming communities.</h2>
            <p>
              These machines are known for stable operation, clean soil
              finishes, and easy maintenance.
            </p>
          </div>
          <div className={styles.featuredGrid}>
            {products.map((item, index) => (
              <article
                key={item.title}
                className={styles.productCard}
                style={{ "--delay": `${index * 0.12}s` }}
              >
                <div className={styles.cardMedia}>
                  <img src={item.image} alt={item.title} />
                  <span className={styles.cardTag}>{item.tag}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.buildSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.buildGrid}>
            <div className={styles.buildText}>
              <span className={styles.eyebrow}>How We Build</span>
              <h2>Every model is crafted for durability and balance.</h2>
              <p>
                Our process focuses on real-world performance. From steel
                selection to field testing, we make sure each implement is
                ready for long hours and changing conditions.
              </p>
              <Link href="/contact-us" className={styles.primaryButton}>
                Talk to Our Team
              </Link>
            </div>
            <div className={styles.buildSteps}>
              {buildSteps.map((item, index) => (
                <div
                  key={item.title}
                  className={styles.stepCard}
                  style={{ "--delay": `${index * 0.12}s` }}
                >
                  <span className={styles.stepIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Workshop & Fields</span>
            <h2>Real machines in real conditions.</h2>
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
            <h2>Need help choosing the right implement?</h2>
            <p>
              Share your crop type, soil conditions, and tractor capacity.
              We will recommend the best model for your farm.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact-us" className={styles.primaryButton}>
              Contact Us
            </Link>
            <Link href="/our-story" className={styles.secondaryButton}>
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
