import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          We are a creative agency that specializes in creating beautiful
          websites and applications for our clients. We work with you to create
          the perfect solution for your needs.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brand" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt="hero" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
