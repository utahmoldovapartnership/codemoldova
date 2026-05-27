import { Outlet } from 'react-router-dom'
import CourseAccessGate from './CourseAccessGate.jsx'

/** Wraps paid course routes with the access-code overlay. */
export default function CourseMaterialLayout() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <CourseAccessGate>
        <Outlet />
      </CourseAccessGate>
    </div>
  )
}
