export const metadata = {
  title: 'Terminal',
  description: 'Interactive terminal - explore Jacob Elali\'s profile via command line',
  viewport: 'width=device-width, initial-scale=1'
}

export default function TerminalLayout({ children }) {
  return (
    <div className="pb-4 lg:w-3/4 lg:ml-20 px-4 block md:block mt-14">
      {children}
    </div>
  );
}
