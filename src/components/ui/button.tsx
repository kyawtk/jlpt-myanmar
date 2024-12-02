'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '#/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // default:
        //   ' text-primary-foreground hover:bg-green-700 px-4 py-2 bg-green-700',
        //link button will have an underline when hovered and it is animated to become longer and initiall hidden
        link: `
        relative text-primary
        after:absolute after:left-0 after:bottom-2 after:h-[2px] after:w-0 after:bg-primary
        after:transition-[width] after:duration-200 after:ease-in-out
        hover:after:w-full  py-2
      `,
        //         default: `
        // px-4 py-2 bg-green-600 text-primary-foreground active:pb-[5px] active:translate-y-[4px] transition-all ease-out duration-100  shadow-button-bottom  active:shadow-button-bottom-active
        //     `,
        default: `
px-4 py-2 bg-green-600 text-primary-foreground shadow-button-bottom ease-out duration-350
active:shadow-button-bottom-active active:translate-y-[2px]
`,

        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        'drop-down-trigger':
          'bg-maya-blue-50 hover:bg-maya-blue-100 border border-maya-blue-300 rounded-full px-2 py-1! text-xs ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
