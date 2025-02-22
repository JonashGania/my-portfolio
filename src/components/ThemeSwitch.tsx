"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger
        className="w-10 h-10 rounded-full flex items-center justify-center pr-0 border-none"
        aria-label="Theme"
      >
        {resolvedTheme === "dark" ? (
          <Moon size={20} className="text-gray-400" />
        ) : (
          <Sun size={20} className="text-zinc-700" />
        )}
      </SelectTrigger>
      <SelectContent align="center">
        {themes.map((themeOption) => (
          <SelectItem key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitch;
