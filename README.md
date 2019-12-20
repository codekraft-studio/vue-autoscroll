# vue-autoscroll

> Automatic scroll-down directive for VueJs

### [DEMO](https://codekraft-studio.github.io/vue-autoscroll/)

## Installation

Install the project locally using your favourite package manager.

```
npm install @codekraft-studio/vue-autoscroll
```

Register the plugin in your Vue application.

```js
import Vue from 'vue'
import VueAutoscroll from '@codekraft-studio/vue-autoscroll'

Vue.use(VueAutoscroll)
```

Than place the directive on the container you want to scroll automatically.

```html
<ul class="messages-container" v-autoscroll>
  <li v-for="message in messages" v-text="message" class="message"></li>
</ul>
```

You can also use custom scroll settings.

```html
<ul class="messages-container" v-autoscroll="{smooth: true, always: true}">
  <li v-for="message in messages" v-text="message" class="message"></li>
</ul>
```

---

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
