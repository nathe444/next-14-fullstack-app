import Link from "next/link";
const NotFound = () => {
  return (
    <div>
      <h2>Nothing Here</h2>
      <p>The page you are looking for doesn't exist</p>
      <Link href="/">Return To Home</Link>
    </div>
  );
};

export default NotFound;
