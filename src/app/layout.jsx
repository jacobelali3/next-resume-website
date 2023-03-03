import './globals.css'
import BurgerMenu from '../ui/burgerMenu.jsx'
import Link from 'next/link'
import DarkMode from '../ui/darkMode.jsx'

export const metadata = {
  title: 'Jacob Elali',
  description: 'Portfolio website for australian software engineer jacob elali',
  homepage: 'Jacob Elali portfolio software engineer Homepage',
  author:'Jacob Elali',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
      <div className="left-0 top-0 fixed z-50 w-22 bg-black">
        <DarkMode />
      </div>

      <nav className="right-0 top-0 fixed z-50  w-22 lg:w-screen rounded-full lg:rounded-none dark:bg-slate-800  bg-black p-6">
        <div className="  text-white "></div>
        <div className="lg:hidden float-right">
        <BurgerMenu />
        </div>
        <div className="lg:ml-4 w-full  lg:flex lg:justify-center lg:w-auto">
          <div className=" hidden  lg:flex text-xl lg:flex-grow">
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link href="/">Home</Link>
            </p>
            <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link href="/about">About Me</Link>
            </p>
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">

            </p>
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">

            </p>
            <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">

            </p>

          </div>

          <div className="">
            <a
              href={"mailto:jacobelali3@outlook.com"}
              className=" text-xl hidden  lg:flex px-4 py-1  mr-4  border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white "
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
        {children}
      </body>

    </html>
  )
}
