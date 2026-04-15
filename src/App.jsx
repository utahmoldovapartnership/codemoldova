import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import Calendar from './pages/Calendar'
import Resources from './pages/Resources'
import Lesson from './pages/Lesson'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-dvh min-h-[100dvh] flex-col bg-bg font-body text-primary pb-[env(safe-area-inset-bottom,0px)]">
        <a
          href="#main-content"
          className="sr-only rounded-elem bg-mon px-4 py-2 font-mono text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex min-h-0 flex-1 flex-col outline-none" tabIndex={-1}>
          <div className="flex min-h-full min-h-0 flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/lesson/:week/:day" element={<Lesson />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
