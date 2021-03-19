import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Yonetim from './views/Yonetim.vue'
import Market from './views/Market.vue'
import Sepet from './views/Sepet.vue'
import Stok from './components/Stok.vue'
import Cuzdan from './components/Cuzdan.vue'

const router = new VueRouter({
  routes: [
    {path: '/yonetim', component: Yonetim,
    children: [
      {path: '/yonetim/stok', component: Stok},
      {path: '/yonetim/cuzdan', component: Cuzdan}
    ]
  },
    {path: '/market', component: Market, props: {productList:App.data().productList}},
    {path: '/sepet', component: Sepet, props: {cartItems:App.data().cartItems}}

  ],
  mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
