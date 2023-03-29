import { decrease, increase, increaseByValue } from '@/stores/slices/counter'
import { Button, Chip, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="counter">
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => dispatch(increase())}>
          Increase
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrease())}>
          Decrease
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(increaseByValue(2))}
        >
          Increase By Value 2
        </Button>
        <Chip label={count} variant="outlined"></Chip>
      </Stack>
    </div>
  )
}

export default Counter
