import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  let date = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/web.png" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>{date.now}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          blanditiis ut quae voluptas, quidem ducimus iste, facilis esse sed
          perferendis laborum accusantium, obcaecati fugiat consectetur nulla!
          Blanditiis animi quibusdam cupiditate!
        </p>
        <Link className={styles.link} href={`#`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
