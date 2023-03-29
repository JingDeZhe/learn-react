import { boxCss, roundedCss, shadowCss, themeDarkCss } from '@/styles/util'
import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypedBox = (props) => {
  const box = useRef(null)
  const { texts = [''], speed = 50, ...rest } = props

  const Wrapper = styled.div([
    shadowCss,
    boxCss,
    themeDarkCss,
    {
      width: '30em',
    },
  ])

  useEffect(() => {
    const ins = new Typed(box.current, {
      strings: texts,
      typeSpeed: speed,
    })

    return () => ins.destroy()
  }, [])

  return (
    <Wrapper {...rest}>
      <span ref={box}></span>
    </Wrapper>
  )
}

export default TypedBox
