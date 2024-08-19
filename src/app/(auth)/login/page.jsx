import { handleGitHubLogin } from "@/lib/action";

const page = async () => {
  return (
    <div>
      <h1>login page</h1>
      <form action={handleGitHubLogin}>
        <button>Login With Github</button>
      </form>
    </div>
  );
};

export default page;
