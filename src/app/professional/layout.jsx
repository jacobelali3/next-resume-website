export const metadata = {
  title: 'Professional',
  aboutMe: 'Jacob Elali portfolio software engineer about me',
  content:"Jacob Elali portfolio software engineer professional experiences sydney australia",
  viewport: 'width=device-width, initial-scale=1'
}

export default function ProfessionalLayout({
    children,
  }) {
    return <div className="mt-16 mb-12 ">
      {children}
      </div>;
  }