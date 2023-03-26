import './globals.css'
import BurgerMenu from '../ui/burgerMenu.jsx'
import Link from 'next/link'
import DarkMode from '../ui/darkMode.jsx'
import Image from 'next/image.js'

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

      <body  className="bg-white dark:bg-black  w-full h-full text-slate-800 dark:text-white ">


      <div className="lg:w-screen  relative z-20 mt-16 lg:mt-32 container bg-gradient-to-r from-black to-blue-300  px-6 bg-opacity-50 flex items-center  rounded-tr-full rounded-br-full overflow-hidden  ">
        <div className="max-w-xl">
          <div className="text-3xl md:text-6xl lg:text-6xl">
            <h2 className=" text-white dark:text-slate-300 font-semibold text-center lg:ml-64 pt-2">
              Jacob Elali
            </h2>
          </div>

          <div className="mt-6 py-2 ">
            <a
              href={process.env.RESUME}
              className="lg:inline-block lg:text-lg md:text-base lg:ml-64 sm:ml-0 md:ml-6 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white "
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="lg:ml-72 sm:ml-32 md:ml-32 relative py-4 px-4 ">
          <div className="blur opacity-50 dark:opacity-80 absolute -inset-0 bg-blue-200 dark:bg-blue-200 rounded-full"></div>
          <Image
            alt="jacobElali"
            className=" border-transparent hover:border-2 rounded-full relative lg:w-60 w-40"
            src={"/assets/myprofilepic.jpg"}
            width={200}
            height={200}
            priority
          />
        </div>
      </div>
      <div className="left-0 top-0 fixed z-50 w-22 bg-black">
        <DarkMode />
      </div>
      <nav className="right-0 top-0 fixed z-50  w-22 lg:w-screen rounded-full lg:rounded-none dark:bg-slate-800  bg-black p-6">


        <div className="lg:hidden float-right">
        <BurgerMenu />
        </div>
        <div className="lg:ml-4 w-full  lg:flex lg:justify-center lg:w-auto">
          <div className=" hidden  lg:flex text-xl lg:flex-grow">
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link href="/">Home</Link>
            </p>
            <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
              <Link href="/about">About me</Link>
            </p>
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
            <Link href="/academia">Academia</Link>
            </p>
            <p className=" mt-4  lg:mt-0 text-white hover:text-blue-300 mr-4">
            <Link href="/professional">Professional</Link>
            </p>
            <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
            <Link href="/projects">Projects</Link>
            </p>
            <p className=" mt-4 lg:mt-0 text-white hover:text-blue-300 mr-4">
            <Link href="/blog">Blog</Link>
            </p>
            <DarkMode />
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
