import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// StrictMode intentionally double-invokes effects in dev, which tears down and
// doesn't cleanly re-establish imperative GSAP/Lenis scroll setup. Disabled so
// the scroll animations initialize once and run reliably.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
