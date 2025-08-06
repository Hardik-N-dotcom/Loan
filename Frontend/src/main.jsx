import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { UserProvider } from './contexts/UserContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { register as registerSW } from './utils/serviceWorker.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <UserProvider>
          <Toaster/>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)

// Register service worker for caching and offline functionality
registerSW({
  onSuccess: () => {
    console.log('SmartLoan is now available offline!');
  },
  onUpdate: () => {
    console.log('New version available! Please refresh to update.');
  }
});
