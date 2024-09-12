/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/Button.jsx','./src/components/Header.jsx','./src/components/MyComponent.jsx','./src/components/OptionGroup.jsx','./src/components/PromptInput.jsx','./src/components/ToneSelector.jsx','./src/components/UploadSection.jsx'
  ],
  theme: {
    extend: {
      'audiowide': ['Audiowide', 'sans-serif'],
    },
  },
  plugins: [],
}

