import React from "react";
import styles from "../../styles/AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about-us">
      <div className={styles.aboutInner}>
        <div className={styles.textBlock}>
          <span className={styles.eyebrow}>About Shree Balaji Agro</span>
          <h2>
            Crafted for Indian farms, trusted for generations.
          </h2>
          <p>
            Since 1975, we have been building agricultural equipment that
            balances strength, efficiency, and ease of use. From cultivators and
            seed drills to rotavators and precision implements, every machine
            is engineered to handle real field conditions with confidence.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span>50+</span>
              <p>Years of manufacturing excellence</p>
            </div>
            <div className={styles.featureCard}>
              <span>1000+</span>
              <p>Farmers served across regions</p>
            </div>
            <div className={styles.featureCard}>
              <span>Trusted</span>
              <p>Durable builds with easy maintenance</p>
            </div>
          </div>
        </div>

        <div className={styles.mediaBlock}>
          <div className={styles.imageStack}>
            <img
              src="/images/slider1.jpg"
              alt="Agricultural equipment in the field"
              className={`${styles.imageCard} ${styles.imageOne}`}
            />
            <img
              src="/images/slider4.jpg"
              alt="Precision farming tools"
              className={`${styles.imageCard} ${styles.imageTwo}`}
            />
            <img
              src="/images/slider7.jpeg"
              alt="Farm machinery craftsmanship"
              className={`${styles.imageCard} ${styles.imageThree}`}
            />
            <div className={styles.glow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
