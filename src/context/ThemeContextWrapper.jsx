import { useState, useEffect } from 'react'
import { ThemeContext, themes } from './theme';

export const ThemeContextWrapper = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  useEffect(() => {
    if (theme === themes.dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
