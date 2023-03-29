import { request } from '../../utils/request.js'
import { Button, Stack } from '@mui/material'

const MockSql = () => {
  return (
    <div className="mock-sql">
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            request.post('/login', { username: 'snooby', password: 'charile' })
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            request.get('/user')
          }}
        >
          Get User
        </Button>
      </Stack>
    </div>
  )
}

export default MockSql
