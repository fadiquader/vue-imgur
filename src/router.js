import VueRouter from 'vue-router'
//
import AuthHandler from './routes/AuthHandler'
import ImageList from './routes/ImageList'
import UploadForm from './routes/UploadForm'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    },
    {
      path: '/oauth/callback',
      component: AuthHandler
    },
  ]
})

export default router
