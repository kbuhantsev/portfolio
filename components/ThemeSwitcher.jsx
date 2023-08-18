'use client';

import React from 'react';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { MoonIcon, SunIcon } from './Icons';

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <button
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center rounded-full p-1 z-10"
    >
      {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
