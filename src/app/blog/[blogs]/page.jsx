import PocketBase from "pocketbase";
import parse from "html-react-parser";

export async function generateMetadata({ params }) {
  const post = await getBlog(params.blogs);
  console.log(post.items[0].title);
  return {
    title: post.items[0].title,
  };
}


async function getBlog(id) {
  const pb = new PocketBase(process.env.BACKEND);
  const authData = await pb.admins.authWithPassword(
    process.env.USER,
    process.env.PASS
  );
  const res = await fetch(
    `${process.env.BACKEND}/api/collections/posts/records?filter=(id='${id}')`,
    {
      headers: { Authorization: authData.token },
    }
  );
  if (!res.ok) {
    console.log(res.Error);
    throw new Error("Error fetching post" + { id } + "from Pocketbase API");
  }
  return res.json();
}

export default async function BlogPage({ params }) {
  const post = await getBlog(params.blogs);
  return (
    <div className="lg:ml-20 px-4 text-2xl lg:w-1/2 w-auto mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {parse(post.items[0].content)}
    </div>
  );
}
