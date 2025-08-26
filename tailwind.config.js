/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(240, 5%, 90%)',
        ring: 'hsl(240, 100%, 70%)',
        background: 'black',
        foreground: '#111111',
        // Custom color palette
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0)' 
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(-30px)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0)' 
          },
        },
        fadeInLeft: {
          '0%': { 
            opacity: 0, 
            transform: 'translateX(-30px)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateX(0)' 
          },
        },
        fadeInRight: {
          '0%': { 
            opacity: 0, 
            transform: 'translateX(30px)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateX(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: 0, 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'scale(1)' 
          },
        },
        slideInFromTop: {
          '0%': { 
            transform: 'translateY(-100%)' 
          },
          '100%': { 
            transform: 'translateY(0)' 
          },
        },
        slideInFromBottom: {
          '0%': { 
            transform: 'translateY(100%)' 
          },
          '100%': { 
            transform: 'translateY(0)' 
          },
        },
        bounceIn: {
          '0%': { 
            transform: 'scale(0.3)', 
            opacity: 0 
          },
          '50%': { 
            transform: 'scale(1.05)' 
          },
          '70%': { 
            transform: 'scale(0.9)' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: 1 
          },
        },
        wiggle: {
          '0%, 100%': { 
            transform: 'rotate(-3deg)' 
          },
          '50%': { 
            transform: 'rotate(3deg)' 
          },
        },
        pulse: {
          '0%, 100%': { 
            opacity: 1 
          },
          '50%': { 
            opacity: 0.5 
          },
        },
        shimmer: {
          '0%': { 
            transform: 'translateX(-100%)' 
          },
          '100%': { 
            transform: 'translateX(100%)' 
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeInDown: 'fadeInDown 0.6s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.6s ease-out forwards',
        fadeInRight: 'fadeInRight 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        slideInFromTop: 'slideInFromTop 0.5s ease-out forwards',
        slideInFromBottom: 'slideInFromBottom 0.5s ease-out forwards',
        bounceIn: 'bounceIn 0.8s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.3)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}