import Link from 'next/link'
import Video from '../ui/codevideo.jsx'

export default function Home() {
  return (
    <div className='overflow-hidden'>

    <Video></Video>

    <div  className=" h-22 mt-48 flex justify-center mx-12">
    <Link href="/about">
      <button aria-label = "welcome button"
      className="px-6 py-4 relative bg-slate-800 rounded-lg animate-beat ">
        <h1 className="mb-4 text-2xl text-white text-center">Welcome,<br></br>I&apos;m a software engineer with a passion for technology!</h1>
        <p className='text-white text-center no-underline hover:underline decoration-blue-400'>Check me out!</p>
        </button>
        </Link>
    </div>

    </div>


  )
}

