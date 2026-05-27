import { Route, Navigate } from 'react-router-dom'
import LessonMockup from './pages/LessonMockup.jsx'
import CourseMockup from './pages/CourseMockup.jsx'
import ResourcesMockup from './pages/ResourcesMockup.jsx'

/** Dev-only preview routes (not included in production builds). Must be <Route> nodes, not a wrapper component. */
export const devMockupRoutes = (
  <>
    <Route path="/lesson-mockup" element={<LessonMockup />} />
    <Route path="/course-mockup" element={<CourseMockup />} />
    <Route path="/roadmap-mockup" element={<Navigate to="/course-mockup" replace />} />
    <Route path="/resources-mockup" element={<ResourcesMockup />} />
  </>
)
