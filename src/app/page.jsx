import Link from 'next/link'
import Video from '../ui/codevideo.jsx'
//import { lazy } from 'react';
//const AvatarComponent = lazy(() => import('./AvatarComponent'));
export default function Home() {
  return (
    <div className='overflow-hidden'>

    <Video></Video>

    <div  className=" h-22 mt-48 flex justify-center mx-12">
      <div className="px-6 py-6 relative bg-slate-800 rounded-lg animate-beat ">
        <h1 className="text-2xl text-white text-center">Welcome,<br></br>I&apos;m a software engineer with a passion for technology!</h1>
        <p className="pt-4 text-white text-center no-underline hover:underline decoration-blue-400"><Link href="/about">Check me out!</Link></p>

        </div>

    </div>

    </div>


  )
}

