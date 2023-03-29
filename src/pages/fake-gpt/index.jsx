import TypedBox from './components/TypedBox'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { centerChildCss, screenWrapperCss } from '@/styles/util'

const FakeGpt = () => {
  const Wrapper = styled.div(css([screenWrapperCss, centerChildCss, {}]))
  return (
    <Wrapper className="fake-gpt">
      <TypedBox
        texts={[
          'async和defer都会异步下载脚本，区别在于async下载之后便立刻执行，它的执行过程仍然会阻塞解析；',
        ]}
        speed={50}
      />
    </Wrapper>
  )
}

export default FakeGpt
