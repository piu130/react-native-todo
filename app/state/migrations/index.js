export default {
  1: (state) => state,
  // Rename barStyle -> navigationBarStyle
  2: (state) => {
    const { barStyle, ...colors } = state.colors
    colors.navigationBarStyle = barStyle
    return {
      ...state,
      colors
    }
  },
  // Add theme id
  3: (state) => {
    const colors = state.colors
    switch (colors.colorPrimary) {
      case '#212121':
        colors.id = 'dark'
        break
      case '#f68630':
        colors.id = 'light'
        break
      case '#ff4081':
        colors.id = 'pink'
        break
      default:
        colors.id = 'custom'
    }
    return {
      ...state,
      colors
    }
  }
}
