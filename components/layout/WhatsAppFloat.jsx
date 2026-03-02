import React from "react";
import styles from "../../styles/WhatsAppFloat.module.scss";

const WhatsAppFloat = () => {
  return (
    <a
      className={styles.whatsappFloat}
      href="https://wa.me/919755080740"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src="/images/whatsappicon.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppFloat;
