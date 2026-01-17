import { getPostById, getAllPostIds } from "../../../lib/posts.js";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    blogs: post.params.blogs,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostById(params.blogs);
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPage({ params }) {
  const post = getPostById(params.blogs);

  return (
    <div className="lg:ml-20 px-4 md:w-3/4 lg:w-3/4 mt-12 block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1>{post.title}</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          {post.author && <span> • {post.author}</span>}
        </div>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
