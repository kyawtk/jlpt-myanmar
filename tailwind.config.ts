import { withUt } from 'uploadthing/tw';
export default withUt({
  darkMode: ['class'],

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'button-bottom': '0px 3px 0px hsl(var(--chart-3))',
        'button-bottom-active': '0px 1px 0px hsl(var(--chart-3))',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        yellow: {
          100: '#ffdd33', // Yellow-0
          400: '#ffc00a', // Yellow-1
          600: '#ffa602', // Yellow-2
          800: '#d89e00', // Yellow-3
        },
        orange: {
          100: '#fad09e', // Orange-0
          400: '#f5a23d', // Orange-1
          500: '#eb670f', // Orange-2
          700: '#e24104', // Orange-3
        },
        red: {
          100: '#ff99aa', // Red-0
          400: '#ff3355', // Red-1
          500: '#eb213c', // Red-2
          700: '#c60929', // Red-3
        },
        green: {
          100: '#b2df9c', // Green-0
          400: '#66bb39', // Green-1
          500: '#26890c', // Green-2
          700: '#106b03', // Green-3
        },
        teal: {
          100: '#99e5e5', // Teal-0
          400: '#33cccc', // Teal-1
          500: '#0aa3a3', // Teal-2
          700: '#028282', // Teal-4
        },
        blue: {
          100: '#a2d1f2', // Blue-0
          400: '#45a3e5', // Blue-1
          500: '#1368ce', // Blue-2
          700: '#0542b9', // Blue-3
        },
        purple: {
          100: '#c2a5df', // Purple-0
          400: '#864cbf', // Purple-1
          500: '#46178f', // Purple-2
          700: '#25076b', // Purple-3
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});
