import { FULFILLED } from 'redux-promise-middleware'

const PREFIX = 'notifications/'

export const ADD = `${PREFIX}ADD`
export const ADD_FULFILLED = `${ADD}_${FULFILLED}`

export const REMOVE = `${PREFIX}REMOVE`
export const REMOVE_FULFILLED = `${REMOVE}_${FULFILLED}`

export const UPDATE = `${PREFIX}UPDATE`
export const UPDATE_FULFILLED = `${UPDATE}_${FULFILLED}`

// todo temporary https://github.com/react-community/create-react-native-app/issues/481
export const REMOVE_PAST = `${PREFIX}REMOVE_PAST`
