export const STATE_KEY = 'ui'

export const initialState: UIState = {
  splashVisible: true,
  navbarIndex: 0,
  navbarVisible: true,
}

export const UIActions = {
  SHOW_SPLASH: `${STATE_KEY}/SHOW_SPLASH`,
  HIDE_SPLASH: `${STATE_KEY}/HIDE_SPLASH`,
  NAVBAR_HOME_SELECTED: `${STATE_KEY}/HOME_SELECTED`,
  NAVBAR_EXPERIENCE_SELECTED: `${STATE_KEY}/EXPERIENCE_SELECTED`,
  NAVBAR_CHAT_SELECTED: `${STATE_KEY}/CHAT_SELECTED`,
  NAVBAR_PROFILE_SELECTED: `${STATE_KEY}/PROFILE_SELECTED`,
  NAVBAR_VISIBLE_NAVBAR: `${STATE_KEY}/VISIBLE_NAVBAR`,
  HIDDEN_NAVBAR: `${STATE_KEY}/HIDDEN_NAVBAR`,
  RESTORE_NAVBAR: `${STATE_KEY}/RESTORE_NAVBAR`,
}
