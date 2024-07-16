import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  preflight: true,
  // define the content to scan 👇🏻
  include: ['./src/**/*.{ts,tsx,js,jsx,astro,svelte}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  outdir: 'styled-system',
  theme: {
    extend: {
      breakpoints: {
        xsm: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      tokens: {
        fonts: {
          poppins_bold: { value: 'var(--font-poppins-bold), sans-serif' },
          poppins_bold_italic: { value: 'var(--font-poppins-bold-italic), sans-serif' },
          poppins_extra_bold: { value: 'var(--font-poppins-extra-bold), sans-serif' },
          poppins_extra_bold_italic: { value: 'var(--font-poppins-extra-bold-italic), sans-serif' },
          poppins_italic: { value: 'var(--font-poppins-italic), sans-serif' },
          poppins_regular: { value: 'var(--font-regular), sans-serif' },
        }
      }
    }
  }
})