import axios from 'axios'

import { AUTH_URL, ROOT_URL } from '../utils/constants'

export const login = () => {
  window.location = AUTH_URL
}

export const fetchImages = (token) => {
  return axios.get(`${ROOT_URL}/3/account/me/images`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const upload = (images,token) => {
  const promises = Array.from(images).map(img => {
    const formData = new FormData()
    formData.append('image', img)
    return axios.post(`${ROOT_URL}/3/image`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  })
  return Promise.all(promises)
}
