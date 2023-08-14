"use client";

import React from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <buton
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className="ml-3 flex items-center justify-center rounded-full p-1"
    >
      {mode === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </buton>
  );
};

export default ThemeSwitcher;
