import _ from 'lodash'
import { State } from './interfaces'
import { User } from '~/interfaces'

export const state = (): State => ({
  user: <User>{},
})

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user
  },
}

export const getters = {
  isLogin(state: State) {
    return !_.isEmpty(state.user)
  },
}
