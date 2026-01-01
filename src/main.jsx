import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assest/style/home.css'
import './assest/style/slider.css'
import 'aos/dist/aos.css';
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
