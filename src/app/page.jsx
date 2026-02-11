import Link from 'next/link'
import Video from '../ui/codevideo.jsx'
import TerminalEmulator from '../ui/terminalEmulator.jsx'

export default function Home() {
  return (
    <div className='relative overflow-hidden min-h-screen'>

    <Video></Video>

    {/* Welcome banner */}
    <div className="relative z-10 mt-32 mb-6 flex justify-center mx-4 animate-beat">
      <Link href="/about" className="group">
        <div className="px-5 py-3 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-blue-400 transition-colors">
          <h1 className="text-lg md:text-xl text-white text-center">
            Welcome — I&apos;m a software engineer with a passion for technology
          </h1>
          <p className='text-sm text-slate-400 text-center group-hover:text-blue-300 transition-colors mt-1'>
            Learn more about me &rarr;
          </p>
        </div>
      </Link>
    </div>

    {/* Interactive terminal */}
    <div className="relative z-10 flex justify-center mx-4 mb-16">
      <div className="w-full max-w-3xl">
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-2 text-center font-mono">
          Type <code className="px-1 py-0.5 bg-gray-800 rounded text-blue-400 text-xs">help</code> to explore
        </p>
        <TerminalEmulator />
      </div>
    </div>

    </div>
  )
}

