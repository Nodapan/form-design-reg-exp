import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入图标选择器
import iconPicker from 'e-icon-picker';
import "e-icon-picker/dist/symbol.js"; //基本彩色图标库
import 'e-icon-picker/dist/index.css'; // 基本样式，包含基本图标
import 'font-awesome/css/font-awesome.min.css'; //font-awesome 图标库

import elformdesign from './plugin/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(elformdesign)
Vue.use(iconPicker, {
  FontAwesome: true,
  ElementUI: true,
  eIcon: true,//自带的图标，来自阿里妈妈
  eIconSymbol: false,//是否开启彩色图标
});
new Vue({
  el: '#app',
  render: h => h(App)
})
