import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blogs');

export function getAllPosts() {
  // Get file names under /content/blogs
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".md" or ".mdx" from file name to get id
      const id = fileName.replace(/\.(md|mdx)$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        content,
        ...data,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostById(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  // Try .md first, then .mdx
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    const mdxPath = path.join(postsDirectory, `${id}.mdx`);
    fileContents = fs.readFileSync(mdxPath, 'utf8');
  }

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Combine the data with the id and content
  return {
    id,
    content,
    ...data,
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      return {
        params: {
          blogs: fileName.replace(/\.(md|mdx)$/, ''),
        },
      };
    });
}
