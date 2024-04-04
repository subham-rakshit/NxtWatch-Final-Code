import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  updateTheme: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  saveVideoLists: [],
  updateVideoList: () => {},
  filterVideoList: () => {},
})

export default ThemeContext
