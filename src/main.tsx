import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import './styles/fonts.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Set the background color on the root element
  useEffect(() => {
    document.documentElement.style.backgroundColor = 'var(--background)';
  }, []);

  return (
    <React.StrictMode>
      <div className="min-h-screen bg-background">
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
        {!isLoading && <RouterProvider router={router} />}
      </div>
    </React.StrictMode>
  )
}

// Ensure the root element has the background color
const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.style.backgroundColor = 'var(--background)';
}

ReactDOM.createRoot(rootElement!).render(<App />)
