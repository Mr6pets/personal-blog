import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import ShowBlogs from '../components/ShowBlogs'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/SingleBlog'
import EditBlog from '../components/EditBlog'

//创建路由
const routes = [
  { path: "/", component: ShowBlogs },
  { path: "/add", component: AddBlog },
  { path: "/blog/:id", component: SingleBlog },
  { path: "/edit/:id", component: EditBlog }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
