import React from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1  className={styles.title}>
          We are a creative agency 
        </h1>
        <p className={styles.desc}>
          We are a creative agency located in the heart of the city. We pride
          ourselves on our innovative and creative solutions. Our team is
          passionate about design and technology and we strive to deliver the
          best results to our clients.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>

      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
