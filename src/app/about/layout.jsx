export const metadata = {
  title: 'About me',
  about: 'Jacob Elali portfolio software engineer about me',
  content:"Jacob Elali portfolio software engineer about me page description sydney australia",
  viewport: 'width=device-width, initial-scale=1'
}


export default function AboutMeLayout({
    children,
  }) {
    return <div className="pb-4 lg:w-3/4 lg:ml-20 px-4 block md:block mt-14">
      {children}
      </div>;
  }