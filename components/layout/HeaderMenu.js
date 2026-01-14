"use client";

import React from "react";
import styles from "../../styles/Header.module.scss";
import Link from "next/link";

const HeaderMenu = ({ headerLinks, onClose }) => {
  return (
    <div className={styles["header-menu-overlay"]} onClick={onClose}>
      <div
        className={styles["header-menu-panel"]}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles["header-menu-head"]}>
          <div className={styles["menu-brand"]}>
            <span className={styles["menu-brand-name"]}>
              Shree Balaji Agro
            </span>
            <span className={styles["menu-brand-tagline"]}>
              Agricultural Equipment
            </span>
          </div>
          <button
            type="button"
            className={styles["menu-close"]}
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles["header-menu-links"]}>
          {headerLinks.map((item) => (
            <Link href={item.href} key={item.label} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles["header-menu-cta"]}>
          <Link href="/contact-us" onClick={onClose}>
            <button type="button">Contact Us</button>
          </Link>
          <p className={styles["header-menu-note"]}>
            Precision tools for modern farming, trusted since 1975.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
