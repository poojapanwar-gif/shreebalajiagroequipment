import React from "react";
import styles from "../../styles/OurStory.module.scss";

const OurStory = () => {
  return (
    <section className={styles.storySection} id="our-story">
      <div className={styles.storyInner}>
        <div className={styles.storyHeader}>
          <span className={styles.eyebrow}>Our Story</span>
          <h2>Rooted in craftsmanship, driven by farmers.</h2>
          <p>
            From a small workshop to a trusted name across farming communities,
            Shree Balaji Agro has grown by listening to the land and the people
            who work it. Every product we build reflects decades of hands-on
            experience, smarter engineering, and a promise of reliability.
          </p>
        </div>

        <div className={styles.storyGrid}>
          <article className={`${styles.storyCard} ${styles.cardOne}`}>
            <div className={styles.cardMedia}>
              <img
                src="/images/WhatsApp Image 2026-01-13 at 9.44.50 PM.jpeg"
                alt="Our early manufacturing workshop"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>1975: The Beginning</h3>
              <p>
                Built on dedication and practical know‑how, our first machines
                helped local farmers work faster without sacrificing quality.
              </p>
            </div>
          </article>

          <article className={`${styles.storyCard} ${styles.cardTwo}`}>
            <div className={styles.cardMedia}>
              <img
                src="/images/WhatsApp Image 2026-01-13 at 9.45.01 PM.jpeg"
                alt="Precision tools in action"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Smarter Engineering</h3>
              <p>
                We refined every component for strength and ease of use,
                creating implements that stand up to real field conditions.
              </p>
            </div>
          </article>

          <article className={`${styles.storyCard} ${styles.cardThree}`}>
            <div className={styles.cardMedia}>
              <img
                src="/images/WhatsApp Image 2026-01-13 at 9.45.21 PM.jpeg"
                alt="Machines ready for delivery"
              />
            </div>
            <div className={styles.cardContent}>
              <h3>Today & Beyond</h3>
              <p>
                With a focus on reliability and farmer success, we continue to
                innovate and deliver equipment built for the next generation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
