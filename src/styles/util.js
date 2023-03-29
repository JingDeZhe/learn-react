import { css } from '@emotion/react'

export const zIndex1 = 10

export const demoWrapper = css({})

export const roundedCss = css({
  borderRadius: '0.2em',
})

export const shadowCss = css({
  boxShadow: '2px 2px 6px #30303050',
})

export const screenWrapperCss = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: zIndex1,
})

export const centerChildCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const boxCss = css([
  roundedCss,
  {
    padding: '0.5em',
  },
])

export const themeDarkCss = css({
  backgroundColor: '#303030',
  color: '#efefef',
})
