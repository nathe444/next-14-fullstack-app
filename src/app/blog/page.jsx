import PostCard from "@/components/postCard/postCard";
import styles from "./blogs.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { connectToDb } from "@/lib/connection";
import { getPosts } from "@/lib/data";
// const getPosts = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   const post = await response.json();
//   return post;
// };

export const metadata = {
  title: "Blog Page",
  description: "A Software Company",
};

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
