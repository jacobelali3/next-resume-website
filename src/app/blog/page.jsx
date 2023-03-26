import PocketBase from "pocketbase";
import Link from "next/link";

async function getBlogs() {
  const pb = new PocketBase(process.env.BACKEND);
  const authData = await pb.admins.authWithPassword(
    process.env.USER,
    process.env.PASS
  );

  const res = await fetch(
    `${process.env.BACKEND}/api/collections/post_metadata/records`,
    {
      headers: { Authorization: authData.token },
    }
  );
  if (!res.ok) {
    throw new Error("Error fetching posts from Pocketbase API");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getBlogs();
  return (
    <div className=" pb-24 pt-6 sm:pb-32 sm:pt-6 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
            Care to read?
          </h2>
          <p className="mt-2 text-lg leading-8 ">
            Here's some of my thoughts on various topics.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.items.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.created} className="mr-8">
                    {post.created}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">{post.author}</div>
                  </div>
                </div>
                <Link href={`/blog/${post.post_id}`}>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                    {post.title}
                </h3>
                </Link>
              </article>

          ))}
        </div>
      </div>
    </div>
  );
}
