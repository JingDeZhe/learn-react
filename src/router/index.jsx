import { createHashRouter, redirect } from 'react-router-dom'
import MockSql from '@/pages/mock-sql/index'
import Counter from '@/pages/counter'

const router = createHashRouter([
  {
    path: '/',
    loader({ request }) {
      if (new URL(request.url).pathname === '/') return redirect('/counter')
      return null
    },
  },
  {
    path: '/mock-sql',
    element: <MockSql />,
  },
  {
    path: '/counter',
    element: <Counter />,
  },
])

export default router
