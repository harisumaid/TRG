import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'backgr': 'rgb(var(--background-end-rgb))',
        'foregr': 'rgb(var(--foreground-rgb))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'make-visible': '3s 1 normal ease-in-out make-visible forwards'
      },
      keyframes: {
        'make-visible': {
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
export default config
