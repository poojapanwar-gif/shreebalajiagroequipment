import React from "react";
import styles from "../../styles/ProductsSection.module.scss";

const products = [
  {
    title: "Heavy-Duty Cultivator",
    description: "Breaks tough soil fast with deep, uniform tilling.",
    image: "/images/slider2.jpg",
  },
  {
    title: "Precision Seed Drill",
    description: "Even seed placement for better germination and yield.",
    image: "/images/slider3.jpeg",
  },
  {
    title: "Rotavator Series",
    description: "Fine tilth preparation with sturdy, low‑maintenance blades.",
    image: "/images/slider5.jpg",
  },
  {
    title: "Disc Harrow",
    description: "Smooth, reliable residue management after harvest.",
    image: "/images/slider6.jpeg",
  },
  {
    title: "Ridger & Furrow Maker",
    description: "Strong ridge shaping for water control and root health.",
    image: "/images/slider8.jpeg",
  },
  {
    title: "Multi‑Purpose Tiller",
    description: "Versatile setup for multiple crops and soil types.",
    image: "/images/slider9.jpeg",
  },
];

const ProductsSection = () => {
  return (
    <section className={styles.productsSection} id="products">
      <div className={styles.productsInner}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Our Products</span>
          <h2>Built for real fields and real seasons.</h2>
          <p>
            Every implement is engineered for durability, precision, and easy
            maintenance so your work stays smooth from preparation to harvest.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((item, index) => (
            <article
              key={item.title}
              className={styles.productCard}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className={styles.cardMedia}>
                <img src={item.image} alt={item.title} />
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
  );
};

export default ProductsSection;
