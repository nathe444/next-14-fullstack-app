import PostCard from "@/components/postCard/postCard";
import styles from "./blogs.module.css";
import { usePathname, useSearchParams } from "next/navigation";
// import { getPosts } from "@/lib/data";
const getPosts = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  const post = await response.json();
  return post;
};

const posts = await getPosts();

export const metadata = {
  title: "Blog Page",
  description: "A Software Company",
};

const BlogPage = async () => {
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
