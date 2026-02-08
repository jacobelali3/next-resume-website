'use client';
import { useEffect, useState } from "react";


export default function useDarkMode()
{
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const colorTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setTheme(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  return [colorTheme, setTheme, mounted];
}