<template>
  <div id="app">
    <header class="header">
      <div class="navbar-brand">
        <img alt="Vue logo" src="./assets/logo.png" />
      </div>

      <div class="navbar-brand-name">
        <h1 class="title">Vue Autoscroll</h1>
        <h2 class="subtitle">
          scrolls to bottom when
          <strong>new content</strong> is added
        </h2>
      </div>
    </header>

    <div class="container">
      <div class="chat-container">
        <nav class="level chat-settings">
          <div class="level-left">
            <div class="level-item">
              <label class="checkbox">
                <input type="checkbox" v-model="options.smooth" />
                Smooth scroll
              </label>
            </div>

            <div class="level-item">
              <label class="checkbox">
                <input type="checkbox" v-model="options.always" />
                Always Scroll
              </label>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">
              <a class="button is-small is-dark" @click="senteces = []">Clear</a>
            </div>

            <div class="level-item">
              <a
                class="button is-small"
                :class="{
                'is-primary': !isStreaming,
                'is-warning': isStreaming
              }"
              >
                <span v-show="!isStreaming" @click="startStream">Start Stream</span>
                <span v-show="isStreaming" @click="stopStream">Stop Stream</span>
              </a>
            </div>
          </div>
        </nav>

        <ul class="messages-container box" v-autoscroll="options">
          <li class="message" v-for="(sentence, index) in senteces" :key="index">
            <div class="message-body" v-text="sentence"></div>
          </li>
        </ul>

        <div class="messages-input">
          <input
            class="input is-medium"
            v-model="newSentence"
            placeholder="Enter your message"
            @keyup.enter="add"
            @keyup.esc="clear"
          />
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The source code is licensed
          <a href="https://github.com/codekraft-studio/vue-autoscroll/blob/master/LICENSE">MIT</a>.
          Made with ♥ by
          <a href="https://github.com/codekraft-studio">Codekraft Studio</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  name: 'app',
  data () {
    return {
      isStreaming: false,
      newSentence: '',
      senteces: [],
      options: {
        always: false,
        smooth: true
      }
    }
  },
  methods: {
    clear () {
      this.newSentence = ''
    },
    add () {
      if (!this.newSentence || this.newSentence === '') {
        return
      }

      this.stopStream()
      this.senteces.push(this.newSentence)
      this.clear()
    },

    async startStream () {
      this.isStreaming = true

      for (;;) {
        if (!this.isStreaming) {
          break
        }

        const rndSentence = this._sentences[Math.floor(Math.random()*this._sentences.length)]
        this.senteces.push(rndSentence)
        await sleep(2000)
      }
    },
    stopStream () {
      this.isStreaming = false
    }
  },
  async created () {
    const senteces = await this.$http.get('https://baconipsum.com/api/?type=meat-and-filler&paras=40')
    if (!senteces.data || senteces.data.length === 0) {
      console.error('The API failed and the demo page is not working')
      return
    }

    await sleep(1500)
    this._sentences = senteces.data
    this.startStream()
  }
}
</script>

<style lang="scss">
header {
  padding: 20px 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .navbar-brand img {
    height: 64px;
    margin-right: 20px;
    width: 64px;
  }
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.chat-container {
  max-width: 500px;
  margin: 0 auto;
  .chat-settings {
    margin-bottom: 16px;
  }
  .messages-container {
    background-color: #eee;
    height: 400px;
    overflow-x: auto;
    padding: 10px 20px;
    .message {
      margin: 16px 0;
      .message-body {
        border: none;
      }
    }
  }
}
</style>
