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
import { cn } from '#/lib/utils';

interface Props {
  className?: string;
}
export function ThemeSwitcher({ className }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            'dark:hover-none dark:hover: border-none bg-transparent ring-offset-0 hover:bg-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-none',
            className,
          )}
          variant="outline"
          size="icon"
        >
          <IconSun className="h-[24px] w-[24px] rotate-0 scale-100 transition-all duration-700 dark:-rotate-180" />
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
