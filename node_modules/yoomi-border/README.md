# 看板边框

['borderBox1', 'borderBox2', 'borderBox3', 'borderBox4', 'borderBox5', 'borderBox6', 'borderBox7', 'borderBox8', 'borderBox9', 'borderBox10', 'borderBox11', 'borderBox12', 'borderBox13', 'chenyomiBox1', 'chenyomiBox2', 'chenyomiBox3']

# 快速开始

```shell
npm i yoomi-border
```

# vue3

main.js

```javascript
import { createApp } from "vue";
import borderFn from "yoomi-border";

const app = createApp(App);
borderFn(app);
app.mount("#app");
```

# vue3

template

```html
<component is="borderBox1"></component>
```

或者

```html
<borderBox1></borderBox1>
```

# props

```javascript
borderType: Number || "chenyiomi的3个border的颜色" || "1,2,3,4";
```
