import { useState, useEffect } from 'react'
import { Appearance, ColorSchemeName } from 'react-native'

import themeDark from './themes/themeDark'
import themeLight from './themes/themeLight'

export default function useStyleTheme () {
  const [theme, setTheme] = useState(themeDark)

  const updateTheme = (colorScheme: ColorSchemeName) => {
    if (colorScheme) {
      setTheme(colorScheme === 'dark' ? themeDark : themeLight)
    }
  }

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme()
    updateTheme(colorScheme)

    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme(colorScheme)
    })
    return () => {
      listener.remove()
    }
  }, [])
  return theme
}
