import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
//使用vue-resource
Vue.use(VueResource)
//自定义指令
// Vue.directive('custome', {
//   //自定义指令v-custome el:代表元素 binding接收传递过来的属性
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8)
//   }
// })

Vue.directive('theme', {
  //在使用v-theme的时候，如果页面传递过来的字符串是wide的话 让元素的宽度为1180px
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1180px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "300px"
    }
    //如果v-theme：col后面有col那就执行下面的方法
    if (binding.arg == 'col') {
      el.style.background = "#999999";
      el.style.padding = '20px'
    }
  }
})

//自定义一个全局过滤器 所有组件都是可以调用的
// 页面的结构是{{blog.title | to-uppercase}},定义一个to-uppercase 回调中取到管道中的值
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})
// 定义一个全局过滤器 文本内容slice截取0-100的字符末尾加...
Vue.filter('snipter', value => {
  return value.slice(0, 100) + '...'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
