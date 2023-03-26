export const metadata = {
  title: 'Academia',
  academia: 'Jacob Elali portfolio software engineer academia degree uts machine learning',
  content:"Jacob Elali portfolio software engineer academic academia university uts sydney australia",
  viewport: 'width=device-width, initial-scale=1'
}

export default function AcademiaLayout({
    children,
  }) {
    return <div className="justify-center lg:w-1/2 lg:ml-20 px-4 py-4 block md:block lg:flex lg:flex-col  mt-14 h-full">
      {children}
      </div>;
  }