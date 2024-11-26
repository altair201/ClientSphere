import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import useStyleTheme from './src/theme/StyleTheme'
import Main from './src/components/Main'

export default function App () {
  const theme = useStyleTheme()
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}
