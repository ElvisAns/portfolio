import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        red_mine: {
          50: '#fff1f3',
          100: '#ffe4e9',
          200: '#ffcdd7',
          300: '#ffa3b7',
          400: '#ff6b8b',
          500: '#fd3e62',
          600: '#ea1942',
          700: '#c41034',
          800: '#a31130',
          900: '#88152f',
          950: '#4b0616'
        }
      }
    }
  }
} 