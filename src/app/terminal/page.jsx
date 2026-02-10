import TerminalEmulator from '../../ui/terminalEmulator.jsx';

export default function TerminalPage() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">Terminal</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
        Explore my profile the engineer way — type <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-blue-500 dark:text-blue-300 text-base">help</code> to get started.
      </p>
      <TerminalEmulator />
    </div>
  );
}
