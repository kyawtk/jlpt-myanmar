'use client';

import * as React from 'react';
// import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';

import { Button } from '#/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu';
import IconSun from './icons/IconSun';
interface Props {
  className?: string;
}
export function ThemeSwitcher({ className }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="dark:hover-none dark:hover: m-0 flex h-fit items-center gap-4 border-none bg-transparent p-0 text-lg font-normal ring-offset-0 hover:bg-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-none">
          <IconSun className="h-5 w-5 rotate-0 scale-100 transition-all duration-700 dark:-rotate-180" />
          Dark mode
          {/* <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-[#B6B9B7]" /> */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
