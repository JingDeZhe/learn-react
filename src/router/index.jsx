import { createHashRouter, redirect } from 'react-router-dom'
import MockSql from '../pages/mock-sql'

const router = createHashRouter([
  {
    path: '/',
    loader({ request }) {
      if (new URL(request.url).pathname === '/') return redirect('/mock-sql')
      return null
    },
  },
  {
    path: '/mock-sql',
    element: <MockSql />,
  },
])

export default router
