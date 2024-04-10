import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  activeTab: 'Home',
  saveVideoList: [],
  updateTheme: () => {},
  changeTab: () => {},
  updateVideoList: () => {},
})

export default ThemeContext
