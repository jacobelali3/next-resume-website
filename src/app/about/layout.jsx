export const metadata = {
  title: 'About me',
  aboutMe: 'Jacob Elali portfolio software engineer about me',
  content:"Jacob Elali portfolio software engineer about me page description sydney australia",
  viewport: 'width=device-width, initial-scale=1'
}


export default function AboutMeLayout({
    children,
  }) {
    return <div className="pb-4 lg:flex justify-center block md:block ">
      {children}
      </div>;
  }