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
<ul class="messages-container" v-autoscroll="{ smooth: false, always: true }">
  <li v-for="message in messages" v-text="message" class="message"></li>
</ul>
```

If you have a complicate html structure and you need to watch also for grandchildrens and more, you can use the __deep__ modifier.

```html
<div v-autoscroll.deep>
  <div v-for="(entries, key) in groupedEntries">
    <div>{{key}}</div>
    <div v-for="entry in entries">{{entry}}</div>
  </div>
</div>
```

---

## License

Released with [MIT License](./LICENSE) © [codekraft-studio](https://github.com/codekraft-studio)
