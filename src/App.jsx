import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home'
import Course from './pages/Course'
import CourseMaterialLayout from './components/CourseMaterialLayout.jsx'
import Resources from './pages/Resources'
import Lesson from './pages/Lesson'
import { devMockupRoutes } from '@course-dev-routes'

function AppShell() {
  const isHome = true
  return (
    <div
      className={`flex min-h-dvh min-h-[100dvh] flex-col font-body pb-[env(safe-area-inset-bottom,0px)] ${
        isHome ? 'bg-paper text-ink' : 'bg-bg text-primary'
      }`}
    >
      <a
        href="#main-content"
        className={
          isHome
            ? 'sr-only rounded-elem bg-dart px-4 py-2 font-mono text-sm text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ink'
            : 'sr-only rounded-elem bg-mon px-4 py-2 font-mono text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white'
        }
      >
        Skip to content
      </a>
      <Nav homeLight={isHome} />
        <main id="main-content" className="flex min-h-0 flex-1 flex-col outline-none" tabIndex={-1}>
          <div className="flex min-h-full min-h-0 flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<CourseMaterialLayout />}>
                <Route path="/course" element={<Course />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/lesson/:week/:day" element={<Lesson />} />
              </Route>
              <Route path="/roadmap" element={<Navigate to="/course" replace />} />
              <Route path="/calendar" element={<Navigate to="/course" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              {devMockupRoutes}
              <Route path="/lesson-mockup" element={<Navigate to="/course" replace />} />
              <Route path="/course-mockup" element={<Navigate to="/course" replace />} />
              <Route path="/roadmap-mockup" element={<Navigate to="/course" replace />} />
              <Route path="/resources-mockup" element={<Navigate to="/course" replace />} />
            </Routes>
          </div>
        </main>
        <Footer homeLight={isHome} />
      </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  )
}
