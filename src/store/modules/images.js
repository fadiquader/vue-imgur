import qs from 'qs'
//
import * as api from '../../api/imgur'
import router from '../../router'

const state = {
  images: []
}

const getters = {
  allImages(state) {
    return state.images
  }
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    try {
      const res = await api.fetchImages(token);
      commit('setImages', res.data.data)
    } catch (e) {

    }
  },
  async uploadImages({ rootState, commit }, images) {
    const { token } = rootState.auth;
    await api.upload(images, token)
    router.push('/')
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
