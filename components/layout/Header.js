"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";

const Header = () => {
  const headerLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/about-us", label: "Our Story" },
    { href: "/gallery", label: "Products" },
    { href: "/blog", label: "Blog" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`${styles["header-section-container"]} ${
          scrolled ? styles["scrolled"] : ""
        }`}
      >
        <div className={styles["header-content"]}>
          <div className={styles["header-logo-div"]}>
            <Link href="/" className={styles["header-logo-image"]}>
              <span className={styles["brand-name"]}>Shree Balaji Agro</span>
              <span className={styles["brand-tagline"]}>
                Cultivator | Rotavator | Seed Drill
              </span>
            </Link>
          </div>
          <nav className={styles["header-nav-links"]}>
            {headerLinks.map((item) => (
              <Link href={item.href} key={item.label}>
                <h6>{item.label}</h6>
              </Link>
            ))}
          </nav>
          <div className={styles["button-menu-icon"]}>
            <Link href="/contact-us">
              <button type="button">Contact Us</button>
            </Link>
            <div
              className={styles["menu-icon"]}
              onClick={() => setIsMenuOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Open menu"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setIsMenuOpen(true);
                }
              }}
            >
              <svg
                width="30"
                height="21"
                viewBox="0 0 30 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.5H28.5M1.5 10.1667H28.5M1.5 18.8333H28.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <HeaderMenu
          headerLinks={headerLinks}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
