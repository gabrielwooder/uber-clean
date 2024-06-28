module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
  daisyui: {
    themes:[{
    'mainTheme': {                      
      'primary': '#00787D',            // Your chosen primary color
      // 'primary': '#8DC642',            // Your chosen primary color
      'primary-focus': '#005932',      // A darker variant for focused primary elements
      'primary-content': '#ffffff',    // Text color to use on primary color background    

      'secondary': '#8DC642',            // Your chosen primary color
      // 'secondary': '#00787D',            // Your chosen primary color
      'secondary-focus': '#35524a',      // A darker variant for focused primary elements
      'secondary-content': '#ffffff', 

      'accent': '#4A7A62',             // Your chosen accent color
      'accent-focus': '#3e544e',       // A darker variant for focused accent elements
      'accent-content': '#ffffff',     // Text color to use on accent color background

      'neutral': '#D9E5D6',            // Your chosen neutral color
      'neutral-focus': '#BAC2B9',      // A darker variant for focused neutral elements
      'neutral-content': '#1f2937',    // Text color to use on neutral color background

      'base-100': '#FFFFFF',           // Your base color (background color)
      'base-200': '#F1F5F9',           // A lighter variant for secondary background or for hover states
      'base-300': '#E2E8F0',           // An even lighter variant for tertiary backgrounds or stripes
      'base-content': '#9CA3AF',       // Text color to use on base color background

      'info': '#3B82F6',               // Your info color
      'success': '#22C55E',            // Your success color
      'warning': '#F59E0B',            // Your warning color
      'error': '#EF4444',              // Your error color
    }}],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ]
};