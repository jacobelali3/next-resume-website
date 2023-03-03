'use client';
import Link from "next/link";
function MobileNav() {
  return (
    <div>

      <nav className="right-0 top-16  fixed z-50 opacity-80 rounded-lg w-auto h-auto  dark:bg-slate-800  bg-black p-6">
        <div className="  text-white "></div>

        <div className=" w-full px-4 py-4">
          <p className=" mt-4  text-white hover:text-blue-300 ">
          <Link href="/">Home</Link>
          </p>
          <p className=" mt-4 text-white hover:text-blue-300 ">
          <Link href="/about">About me</Link>
          </p>
          <p className=" mt-4  text-white hover:text-blue-300 ">
          <Link href="/academia">Academia</Link>
          </p>
          <p className=" mt-4  text-white hover:text-blue-300  ">
          <Link href="/professional">Professional</Link>
          </p>
          <p className=" mt-4  text-white hover:text-blue-300 ">
          <Link href="/projects">Projects</Link>
          </p>
          <p className="mt-4 px-4 py-1 border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white">
            <a
              href={"mailto:jacobelali3@outlook.com"}
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </p>

        </div>

        <div >
          <a
            href={"mailto:jacobelali3@outlook.com"}
            className=" text-xl hidden  lg:flex px-4 py-1  mr-4  border rounded text-white border-white hover:border-transparent hover:text-blue-300 hover:bg-white "
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>

      </nav>


    </div>
  );
}

export default MobileNav;
