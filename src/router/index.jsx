import { createHashRouter, redirect } from 'react-router-dom'
import MockSql from '@/pages/mock-sql/index'
import Counter from '@/pages/counter'
import FakeGpt from '@/pages/fake-gpt'

const router = createHashRouter([
  {
    path: '/',
    loader({ request }) {
      if (new URL(request.url).pathname === '/') return redirect('/fake-gpt')
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
  {
    path: '/fake-gpt',
    element: <FakeGpt />,
  },
])

export default router
