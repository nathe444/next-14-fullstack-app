import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Byte Brilliance</h1>
        <p className={styles.desc}>
          is a dynamic software agency that turns your ideas into innovative
          digital solutions. Our expert team specializes in crafting custom
          software tailored to your business needs. Whether you're a startup or
          an established enterprise, we deliver scalable, user-centric solutions
          that drive success in the digital age.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Book Now</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.png"
          alt="Hero Image"
          className={styles.heroImg}
          fill
        />
      </div>
    </div>
  );
};

export default Home;
