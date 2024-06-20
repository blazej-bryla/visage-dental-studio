import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        companyPink: '#A42E68',
        companyPinkHover: '#942A5E',
        defaultGray: '#333333',
        thinGray: '#151515CC',
        darkSection: '#F5F5F5'
      },
      maxWidth:{
        projectWidth: 1200
      },
      fontFamily: {
        heading: ['Times New Roman']
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: []
}
export default config
