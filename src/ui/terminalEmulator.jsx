'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

const COMMANDS = {
  help: {
    description: 'List all available commands',
    run: () => [
      '  Available commands:',
      '',
      '  help         Show this help message',
      '  whoami       About Jacob Elali',
      '  skills       Technical skills & languages',
      '  experience   Professional experience timeline',
      '  projects     Notable projects',
      '  education    Academic background',
      '  contact      Get in touch',
      '  links        Socials & links',
      '  clear        Clear the terminal',
      '',
      '  Tip: Use ↑ / ↓ to navigate command history',
    ],
  },
  whoami: {
    description: 'About Jacob Elali',
    link: { href: '/about', label: 'Read more → About Me' },
    run: () => [
      '  ╭──────────────────────────────────────────────╮',
      '  │             Jacob Elali                       │',
      '  │        Software Engineer · Sydney, AU         │',
      '  ╰──────────────────────────────────────────────╯',
      '',
      '  Backend engineer by trade, frontend tinkerer by night.',
      '  Passionate about building software that makes a real impact.',
      '',
      '  Currently working on payments technology at Westpac,',
      "  Australia's 2nd largest bank.",
      '',
      '  Inspired by Wall-E, Iron Giant, and the limitless',
      '  potential of technology to advance humanity.',
    ],
  },
  skills: {
    description: 'Technical skills & languages',
    link: { href: '/professional', label: 'Read more → Professional' },
    run: () => [
      '  ┌─── Languages ────────────────────────────────┐',
      '  │  JavaScript · TypeScript · Java · Python      │',
      '  │  Swift · C · Bash · KornShell · SQL           │',
      '  └──────────────────────────────────────────────-┘',
      '',
      '  ┌─── Frameworks & Libraries ───────────────────┐',
      '  │  Spring Boot · React · Next.js · Django       │',
      '  │  Flask · Tailwind CSS · Three.js              │',
      '  └──────────────────────────────────────────────-┘',
      '',
      '  ┌─── Cloud & DevOps ───────────────────────────┐',
      '  │  AWS (S3, CloudFront, EC2) · Jenkins          │',
      '  │  SumoLogic · AppDynamics · Control-M          │',
      '  └──────────────────────────────────────────────-┘',
      '',
      '  ┌─── Other ────────────────────────────────────┐',
      '  │  Git · Bitbucket · Jira · Confluence          │',
      '  │  Solaris UNIX · RHEL · Microservices          │',
      '  └──────────────────────────────────────────────-┘',
    ],
  },
  experience: {
    description: 'Professional experience timeline',
    link: { href: '/professional', label: 'Read more → Professional' },
    run: () => [
      '  ── Timeline ──────────────────────────────────────',
      '',
      '  ▸ 2024 - Present   Westpac Banking Corporation',
      '                      Software Engineer',
      '                      Payments tech · UNITE program',
      '',
      '  ▸ 2022 - 2024      Macquarie Group',
      '                      Software Engineer',
      '                      Core Banking · Microservices · AWS',
      '',
      '  ▸ 2022             Prospecta Software',
      '                      Graduate Software Engineer',
      '                      Spring Boot APIs · Elasticsearch',
      '',
      '  ▸ 2021 - 2022      Astronaut Technologies',
      '                      Software Engineer Intern',
      '                      Backend logging · API testing',
      '',
      '  ▸ 2021             Income Energy',
      '                      Software Engineer Intern',
      '                      Billing systems · Energy analytics',
      '',
      '  ────────────────────────────────────────────────────',
      '  Type "contact" to get in touch about opportunities.',
    ],
  },
  projects: {
    description: 'Notable projects',
    link: { href: '/projects', label: 'Read more → Projects' },
    run: () => [
      '  ▸ UTS HELPS Prototype',
      '    Student appointment booking system built with',
      '    Django, SQLite, JS & HTML. Auth, chat, email features.',
      '',
      '  ▸ COVID-19 App',
      '    Chatbot that predicted COVID diagnosis. Built with',
      '    React, Material UI & Flask. Stats, news, doctor comms.',
      '',
      '  ▸ This Portfolio Website',
      '    Next.js + Tailwind + Three.js (Wall-E!)',
      '    Migrated from CRA → Remix → React → Next.js',
      '    Heavy assets served via AWS CloudFront & S3.',
      '',
      '  ▸ More at: github.com/jacobelali3',
    ],
  },
  education: {
    description: 'Academic background',
    link: { href: '/academia', label: 'Read more → Academia' },
    run: () => [
      '  ╭──────────────────────────────────────────────╮',
      '  │  University of Technology Sydney (UTS)        │',
      '  │                                               │',
      '  │  Bachelor of Engineering (Honours)            │',
      '  │  Major: Software Engineering                  │',
      '  │  Sub-Major: Real-time Systems                 │',
      '  │  WAM: 77                                      │',
      '  │  2017 - 2022                                  │',
      '  ╰──────────────────────────────────────────────╯',
      '',
      '  Capstone: "Assisted Posting for Small Business',
      '  Owners on Instagram" — supervised by Prof. Alan Parr',
    ],
  },
  contact: {
    description: 'Get in touch',
    run: () => [
      '  ╭──────────────────────────────────────────────╮',
      '  │  ✉  jacobelali3@outlook.com                  │',
      '  ╰──────────────────────────────────────────────╯',
      '',
      '  Feel free to reach out about opportunities,',
      '  collaborations, or just to say hello!',
    ],
  },
  links: {
    description: 'Socials & links',
    run: () => [
      '  GitHub    → github.com/jacobelali3',
      '  Email     → jacobelali3@outlook.com',
    ],
  },
};

const WELCOME_MESSAGE = [
  '',
  '  ╔═══════════════════════════════════════════════════╗',
  '  ║         Welcome to Jacob Elali\'s Terminal         ║',
  '  ║                                                   ║',
  '  ║   Software Engineer · Sydney, Australia           ║',
  '  ╚═══════════════════════════════════════════════════╝',
  '',
  '  Type "help" to see available commands.',
  '',
];

export default function TerminalEmulator() {
  const [poweredOn, setPoweredOn] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [history, setHistory] = useState([
    ...WELCOME_MESSAGE.map((text) => ({ type: 'output', text })),
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    if (poweredOn) {
      inputRef.current?.focus();
    }
  }, [poweredOn]);

  const powerOn = () => {
    setAnimating(true);
    setTimeout(() => {
      setPoweredOn(true);
      setAnimating(false);
    }, 600);
  };

  const handleCommand = useCallback(
    (cmd) => {
      const trimmed = cmd.trim().toLowerCase();

      const newEntries = [{ type: 'input', text: `visitor@jacob ~ $ ${cmd}` }];

      if (trimmed === '') {
        setHistory((prev) => [...prev, ...newEntries]);
        return;
      }

      if (trimmed === 'clear') {
        setHistory([]);
        return;
      }

      const command = COMMANDS[trimmed];
      if (command) {
        const output = command.run();
        newEntries.push(...output.map((text) => ({ type: 'output', text })));
        if (command.link) {
          newEntries.push({ type: 'link', href: command.link.href, text: command.link.label });
        }
        newEntries.push({ type: 'output', text: '' });
      } else {
        newEntries.push({
          type: 'error',
          text: `  Command not found: ${trimmed}. Type "help" for available commands.`,
        });
        newEntries.push({ type: 'output', text: '' });
      }

      setHistory((prev) => [...prev, ...newEntries]);
      setCommandHistory((prev) => [cmd, ...prev]);
      setHistoryIndex(-1);
    },
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-2 text-center font-mono">
        {poweredOn ? (
          <>Type <code className="px-1 py-0.5 bg-gray-800 rounded text-blue-400 text-xs">help</code> to explore</>
        ) : (
          <span
            className="cursor-pointer hover:text-slate-300 transition-colors animate-pulse"
            onClick={powerOn}
          >
            ▶ Click to open terminal
          </span>
        )}
      </p>

      <div
        className={`rounded-xl overflow-hidden shadow-2xl border border-gray-700 origin-top ${
          !poweredOn && !animating ? 'crt-off cursor-pointer' : ''
        }${
          animating ? ' crt-animate' : ''
        }`}
        onClick={!poweredOn && !animating ? powerOn : focusInput}
      >
        <div className="flex items-center px-4 py-3 bg-gray-900 border-b border-gray-700">
          <div className="flex gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 font-mono">
            visitor@jacob-elali — bash
          </span>
        </div>

        <div
          ref={terminalRef}
          className="bg-gray-950 p-4 h-[500px] overflow-y-auto font-mono text-sm leading-relaxed"
        >
        {history.map((entry, i) =>
          entry.type === 'link' ? (
            <div key={i} className="my-2 ml-2">
              <Link
                href={entry.href}
                className="inline-block px-3 py-1.5 text-xs font-mono rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                {entry.text}
              </Link>
            </div>
          ) : (
            <div
              key={i}
              className={`whitespace-pre-wrap break-words ${
                entry.type === 'input'
                  ? 'text-blue-300'
                  : entry.type === 'error'
                    ? 'text-red-400'
                    : 'text-gray-300'
              }`}
            >
              {entry.text}
            </div>
          )
        )}

        <div className="flex items-center">
          <span className="text-blue-300 whitespace-pre">
            visitor@jacob ~ ${' '}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-100 outline-none font-mono text-sm caret-blue-300"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
          </div>
        </div>
    </div>
  );
}
