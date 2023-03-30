import TypedBox from './components/TypedBox'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  centerChildCss,
  roundedCss,
  screenWrapperCss,
  themeDarkCss,
  themeLightCss,
} from '@/styles/util'
import { Stack } from '@mui/system'
import { useState } from 'react'

const FakeGpt = () => {
  const Wrapper = styled.div(
    css([screenWrapperCss, centerChildCss, themeDarkCss])
  )

  const AppWrapper = styled(Stack)(
    css([
      themeLightCss,
      roundedCss,
      {
        backgroundColor: '#ddd',
        padding: '1em',
        width: '600px',
        height: '80%',
        border: '1px solid #aaa',
      },
    ])
  )

  const [drama, setDrama] = useState([
    'async和defer都会异步下载脚本，区别在于async下载之后便立刻执行，它的执行过程仍然会阻塞解析；',
    '回流一定重绘，重绘不一定回流。',
  ])

  const [msgs, setMsgs] = useState([drama.shift()])

  const addNewMsg = () => {
    if (drama.length) {
      const t = drama.shift()
      setDrama([...drama])
      setMsgs((pv) => {
        return [...pv, t]
      })
    }
  }
  return (
    <Wrapper className="fake-gpt">
      <AppWrapper spacing={2}>
        {msgs.map((v) => (
          <TypedBox key={v} texts={[v]} speed={50} onComplete={addNewMsg} />
        ))}
      </AppWrapper>
    </Wrapper>
  )
}

export default FakeGpt
