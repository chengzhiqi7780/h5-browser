import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import Vant from 'vant';
import { FcWaveFilter } from 'fancy-components'
import 'amfe-flexible/index.js'
import 'vant/lib/index.less'
import { Notify } from 'vant';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Card } from 'vant';
import VueI18n from 'vue-i18n'
import LangEn from './lang/en'
import LangZh from './lang/zh'
import LangKo from './lang/ko'
import LangJa from './lang/ja'
import LangDe from './lang/de'
import LangEs from './lang/es'



Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(NavBar)
Vue.use(Notify);
Vue.use(VueI18n);
Vue.use(Vuex);
Vue.use(Toast);
Vue.use(Card);

new FcWaveFilter()

Vue.config.ignoredElements = [/^fc-/]

// 全局注册
const i18n = new VueI18n({
  //定义默认语言
  locale: 'zh',
  messages:{
    'en':LangEn,
    'zh':LangZh,
    'ko':LangKo,
    'ja':LangJa,
    'de':LangDe,
    'es':LangEs,
  }
})



new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
