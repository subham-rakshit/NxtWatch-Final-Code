import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  isSaveBtnClicked: false,
  saveVideoId: '',
  activeTab: 'Home',
  saveVideoLists: [],
  updateTheme: () => {},
  changeTab: () => {},
  updateVideoList: () => {},
  updateVideoSavedStatus: () => {},
})

export default ThemeContext
