import React from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  const categories = [
    "Cultivators",
    "Rotavators",
    "Seed Drills",
    "Ploughs",
    "Harrows",
    "Land Levelers",
  ];

  const usefulLinks = [
    "About Us",
    "Our Story",
    "Gallery",
    "Blog",
    "Contact Us",
  ];

  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-column"]}>
          <div className={styles["footer-brand"]}>
            <span className={styles["brand-name"]}>Shree Balaji Agro</span>
            <span className={styles["brand-tagline"]}>
              Precision Implements For Modern Farming
            </span>
          </div>
          <p>
            Shree Balaji Agro crafts reliable farm equipment that boosts
            productivity and protects soil health. Our machines are trusted for
            durability, performance, and clean field finishes.
          </p>
        </div>

        <div className={styles["footer-column"]}>
          <h3>Categories</h3>
          <ul>
            {categories.map((item) => (
              <li key={item}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["footer-column"]}>
          <h3>Useful Links</h3>
          <ul>
            {usefulLinks.map((item) => (
              <li key={item}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["footer-column"]}>
          <h3>Contact Us</h3>
          <div className={styles["footer-contact"]}>
            <Link href="tel:+919893494928">+91 9755080740</Link>
            <Link href="mailto:info@shreebalajiagro.in">
             shreebalajiagro05@gmail.com
            </Link>
            <span>Garoda Mandsaur, Madhya Pradesh, India</span>
          </div>
          <div className={styles["footer-socials"]}>
            <Link href="/" aria-label="Facebook">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.5V6.9C14 6.1 14.5 5.6 15.5 5.6H17V2.2C16.2 2.1 15.2 2 14 2C11.1 2 9.2 3.8 9.2 6.7V8.5H6.2V12H9.2V22H12.9V12H16L16.5 8.5H14Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="/" aria-label="Instagram">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8 2H7.2C4.3 2 2 4.3 2 7.2V16.8C2 19.7 4.3 22 7.2 22H16.8C19.7 22 22 19.7 22 16.8V7.2C22 4.3 19.7 2 16.8 2ZM20 16.8C20 18.6 18.6 20 16.8 20H7.2C5.4 20 4 18.6 4 16.8V7.2C4 5.4 5.4 4 7.2 4H16.8C18.6 4 20 5.4 20 7.2V16.8ZM12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 14.5 9.5 16.5 12 16.5C14.5 16.5 16.5 14.5 16.5 12C16.5 9.5 14.5 7.5 12 7.5ZM12 14.8C10.4 14.8 9.2 13.6 9.2 12C9.2 10.4 10.4 9.2 12 9.2C13.6 9.2 14.8 10.4 14.8 12C14.8 13.6 13.6 14.8 12 14.8ZM17.6 6.4C16.9 6.4 16.4 6.9 16.4 7.6C16.4 8.3 16.9 8.8 17.6 8.8C18.3 8.8 18.8 8.3 18.8 7.6C18.8 6.9 18.3 6.4 17.6 6.4Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <span>(c) 2026 Shree Balaji Agro. All rights reserved.</span>
        <span>Built for stronger harvests across India.</span>
      </div>
    </footer>
  );
};

export default Footer;
