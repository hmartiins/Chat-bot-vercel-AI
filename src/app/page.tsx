"use client";

import { Chat, Toggle } from "@/components";
import { useApplicationTheme } from "./hooks";

import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useApplicationTheme();
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center dark:bg-[#202123]">
      <Chat />
      <Toggle
        title="Trocar de tema"
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => toggleDarkMode()}
      >
        {isDarkMode ? <Sun className="text-white" /> : <Moon />}
      </Toggle>
    </div>
  );
}
