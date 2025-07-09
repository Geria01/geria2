import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Helvetica Neue', 'sans-serif'],
        'sans': ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        geria: {
          red: '#D0021B',
          orange: '#F5A623',
          dark: '#1C1C1C',
          light: '#F9F9F9',
        },
        primary: '#D0021B',
        accent: '#F5A623',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'fluid-xs': 'clamp(0.87rem, calc(1.03rem + -0.21vw), 0.99rem)',
        'fluid-sm': 'clamp(1.04rem, calc(1.06rem + -0.02vw), 1.05rem)',
        'fluid-base': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
        'fluid-md': 'clamp(1.20rem, calc(1.10rem + 0.52vw), 1.50rem)',
        'fluid-lg': 'clamp(1.28rem, calc(1.10rem + 0.90vw), 1.80rem)',
        'fluid-xl': 'clamp(1.37rem, calc(1.09rem + 1.38vw), 2.16rem)',
        'fluid-2xl': 'clamp(1.46rem, calc(1.06rem + 1.97vw), 2.59rem)',
        'fluid-3xl': 'clamp(1.56rem, calc(1.01rem + 2.70vw), 3.11rem)',
        'fluid-4xl': 'clamp(1.66rem, calc(0.94rem + 3.60vw), 3.73rem)',
        'fluid-5xl': 'clamp(1.77rem, calc(0.83rem + 4.71vw), 4.48rem)',
        'fluid-6xl': 'clamp(1.89rem, calc(0.68rem + 6.06vw), 5.38rem)',
        'fluid-7xl': 'clamp(1.89rem, calc(0.68rem + 6.06vw), 5.38rem)',
        'fluid-8xl': 'clamp(2.02rem, calc(0.47rem + 7.71vw), 6.45rem)',
        'fluid-9xl': 'clamp(2.15rem, calc(0.21rem + 9.72vw), 7.74rem)',
      },
      spacing: {
        'fluid-1': 'clamp(0.50rem, calc(0.48rem + 0.11vw), 0.56rem)',
        'fluid-2': 'clamp(0.88rem, calc(0.83rem + 0.22vw), 1.00rem)',
        'fluid-3': 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
        'fluid-4': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
        'fluid-5': 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
        'fluid-6': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
        'fluid-7': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
        'fluid-8': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
        'fluid-9': 'clamp(5.06rem, calc(4.87rem + 0.98vw), 5.63rem);',
        'fluid-10': 'clamp(5.63rem, calc(5.41rem + 1.09vw), 6.25rem)',
      }
    },
  },
  plugins: [],
};
export default config;
