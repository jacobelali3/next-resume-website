export const metadata = {
  title: 'Blog page',
  blog: 'Jacob Elali blog page, thoughts and tech discussions',
  content:"Jacob Elali blog pages, thoughts, tech, guides, discussion and engineering.",
  viewport: 'width=device-width, initial-scale=1'
}
export default function BlogLayout({
    children,
  }) {
    return <div className=" ">
      {children}
      </div>;
  }