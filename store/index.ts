import _ from 'lodash'
import { State } from './interfaces'
import { User } from '@/interfaces'
import { getMe } from '@/services/api'
import { removeToken } from '@/utils'

export const state = (): State => ({
  user: <User>{},
})

export const mutations = {
  setUser(state: State, user: User) {
    state.user = user
  },
}

export const actions = {
  async fetchUser(context: any) {
    try {
      const data = await getMe()
      context.commit('setUser', data)
    } catch (error) {
      console.log('fetchUser', error)
      removeToken()
    }
  },
}

export const getters = {
  isLogin(state: State) {
    return !_.isEmpty(state.user)
  },
}
