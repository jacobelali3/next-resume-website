'use client';
import useDarkMode from "../hooks/useDarkMode.jsx";

function DarkMode() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="lg:relative fixed mt-2 ml-2 lg:mt-0 lg:ml-32  rounded-full pt-1 px-2 lg:px-0 lg:py-0">
      <button aria-label = "welcome button"
      onClick = {()=>setTheme(colorTheme)} className="">
        {colorTheme === "light" ? (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-600 lg:text-yellow-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>


        )}
      </button>
    </div>
  );
}

export default DarkMode;
