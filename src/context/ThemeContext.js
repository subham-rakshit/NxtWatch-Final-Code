import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  updateTheme: () => {},
})

export default ThemeContext
