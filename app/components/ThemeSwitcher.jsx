"use client";

import React from "react";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <buton onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
      {mode === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </buton>
  );
};

export default ThemeSwitcher;
