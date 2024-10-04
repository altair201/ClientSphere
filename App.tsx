import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import StyleTheme from './src/theme/StyleTheme'
import Main from './src/components/Main'

export default function App () {
  return (
    <ThemeProvider theme={StyleTheme()}>

      <Main />
    </ThemeProvider>
  )
}
