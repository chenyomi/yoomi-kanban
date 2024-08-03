
// border box
import borderBox1 from './components/borderBox1/index'
import borderBox2 from './components/borderBox2/index'
import borderBox3 from './components/borderBox3/index'
import borderBox4 from './components/borderBox4/index'
import borderBox5 from './components/borderBox5/index'
import borderBox6 from './components/borderBox6/index'
import borderBox7 from './components/borderBox7/index'
import borderBox8 from './components/borderBox8/index'
import borderBox9 from './components/borderBox9/index'
import borderBox10 from './components/borderBox10/index'
import borderBox11 from './components/borderBox11/index'
import borderBox12 from './components/borderBox12/index'
import borderBox13 from './components/borderBox13/index'
import chenyomiBox1 from './components/chenyomiBox1/src/main.vue'
import chenyomiBox2 from './components/chenyomiBox2/src/main.vue'
import chenyomiBox3 from './components/chenyomiBox3/src/main.vue'

export default function (Vue) {
  Vue.use(borderBox1)
  Vue.use(borderBox2)
  Vue.use(borderBox3)
  Vue.use(borderBox4)
  Vue.use(borderBox5)
  Vue.use(borderBox6)
  Vue.use(borderBox7)
  Vue.use(borderBox8)
  Vue.use(borderBox9)
  Vue.use(borderBox10)
  Vue.use(borderBox11)
  Vue.use(borderBox12)
  Vue.use(borderBox13)
  Vue.component('chenyomiBox1', chenyomiBox1)
  Vue.component('chenyomiBox2', chenyomiBox2)
  Vue.component('chenyomiBox3', chenyomiBox3)
}
