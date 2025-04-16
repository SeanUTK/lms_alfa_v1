import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-50: #f0f9ff;
    --primary-100: #e0f2fe;
    --primary-200: #bae6fd;
    --primary-300: #7dd3fc;
    --primary-400: #38bdf8;
    --primary-500: #0ea5e9;
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    --primary-800: #075985;
    --primary-900: #0c4a6e;

    /* Neutral Colors */
    --neutral-50: #f8fafc;
    --neutral-100: #f1f5f9;
    --neutral-200: #e2e8f0;
    --neutral-300: #cbd5e1;
    --neutral-400: #94a3b8;
    --neutral-500: #64748b;
    --neutral-600: #475569;
    --neutral-700: #334155;
    --neutral-800: #1e293b;
    --neutral-900: #0f172a;

    /* Accent Colors */
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-yellow: #f59e0b;
    --accent-purple: #8b5cf6;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border Radius */
    --border-radius-sm: 0.125rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.5rem;
    --border-radius-xl: 0.75rem;
    --border-radius-2xl: 1rem;
    --border-radius-full: 9999px;
    
    /* Animation Speed */
    --transition-fast: 150ms;
    --transition-normal: 250ms;
    --transition-slow: 350ms;
    
    /* Font Sizes */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    height: 100%;
  }

  /* Ensure text selection is visible with proper contrast in all contexts */
  ::selection {
    background-color: ${props => props.theme.colors.primary[600]};
    color: white;
  }

  ::-moz-selection {
    background-color: ${props => props.theme.colors.primary[600]};
    color: white;
  }

  /* Ensure text selection within inputs and contentEditable elements works in dark mode */
  input::selection, 
  textarea::selection, 
  [contenteditable]::selection,
  select::selection,
  option::selection,
  td::selection,
  th::selection,
  div::selection,
  p::selection,
  span::selection,
  li::selection,
  a::selection,
  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background-color: ${props => props.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for Firefox */
  input::-moz-selection, 
  textarea::-moz-selection, 
  [contenteditable]::-moz-selection,
  select::-moz-selection,
  option::-moz-selection,
  td::-moz-selection,
  th::-moz-selection,
  div::-moz-selection,
  p::-moz-selection,
  span::-moz-selection,
  li::-moz-selection,
  a::-moz-selection,
  h1::-moz-selection, h2::-moz-selection, h3::-moz-selection, h4::-moz-selection, h5::-moz-selection, h6::-moz-selection {
    background-color: ${props => props.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for table row selection */
  tr.selected, tr:focus-within {
    background-color: ${props => 
      props.theme.colors.background.primary === '#0f172a' 
        ? props.theme.colors.primary[900] + '80'  // Dark theme
        : props.theme.colors.primary[50]          // Light theme
    } !important;
    outline: 1px solid ${props => props.theme.colors.primary[500]};
  }

  tr td.selected, tr td:focus-within {
    background-color: ${props => 
      props.theme.colors.background.primary === '#0f172a' 
        ? props.theme.colors.primary[700] + '50'  // Dark theme
        : props.theme.colors.primary[100]         // Light theme
    } !important;
  }

  /* Make checkboxes more visible in dark mode */
  input[type="checkbox"] {
    accent-color: ${props => props.theme.colors.primary[600]};
    width: 16px;
    height: 16px;
    
    &:checked {
      background-color: ${props => props.theme.colors.primary[600]};
      border-color: ${props => props.theme.colors.primary[600]};
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-600);
    transition: color var(--transition-fast) ease-in-out;
    
    &:hover {
      color: var(--primary-700);
    }
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  /* Fix for selection in inputs */
  input::selection, textarea::selection {
    background-color: ${props => props.theme.colors.primary[400]};
    color: ${props => props.theme.colors.text.inverse};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: var(--font-size-4xl);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  p {
    margin-bottom: 1rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.lighter};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.text.tertiary};
    border-radius: var(--border-radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.text.secondary};
  }
`;

export default GlobalStyle; 