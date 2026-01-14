import React from 'react'
import styles from "../../styles/HomeBanner.module.scss";
const HomeBanner = () => {
  return (
    <div className={styles["home-banner-content"]}>
      <video autoPlay loop muted playsInline className={styles["background-video"]}>
        <source src="/images/backgroundvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles["home-banner-details"]}>
        <h2>Shree <span>Balaji</span> Agro</h2>
        <h3>Rotavator</h3>
        <p>
         Kheti Ka Saathi
        </p>
      </div>
    </div>
  )
}

export default HomeBanner
