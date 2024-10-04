import { useState, useEffect } from 'react'
import { Appearance, ColorSchemeName } from 'react-native'

import themeDark from './themes/themeDark'
import themeLight from './themes/themeLight'

export default function StyleTheme () {
  const [theme, setTheme] = useState(themeLight)

  const updateTheme = (colorScheme: ColorSchemeName) => {
    setTheme(colorScheme === 'dark' ? themeDark : themeLight)
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
