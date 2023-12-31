/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'DEE4EE' : '#DEE4EE',
        '333A48' : '#333A48',
        '0D3966' : '#0D3966',
        '007BFF' : '#007BFF',
        'warning' : '#FFC107',
        'primary' : '#0D6EFD',
        'info' : '#0DCAF0',
        'danger' : '#DC3545'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}