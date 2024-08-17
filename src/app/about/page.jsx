import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "A Software Company",
};
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.h3}>About Byte Brilliance</h3>
        <p className={styles.desc}>
          Byte Brilliance is a dynamic software agency that takes your ideas and
          transforms them into cutting-edge digital products and services. We
          leverage the latest technologies and agile development methodologies
          to rapidly bring innovative concepts to life.
        </p>
        <div className={styles.statsContainer}>
          <div className={styles.statsNumber}>
            <div>10 K+</div>
            <div>200 K+</div>
            <div>5 K+</div>
          </div>
          <div className={styles.statsText}>
            <div>Years of experience</div>
            <div>pusers reached</div>
            <div>products & services</div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          className={styles.aboutImg}
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
