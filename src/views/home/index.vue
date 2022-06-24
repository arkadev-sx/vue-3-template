<template>
  <div class="home" @click="change">
    <img alt="Vue logo" src="./images/logo.png" />
    <HelloWorld :msg="zxx" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/hello-world.vue'
// import { mapState } from 'pinia'
import { useMainStore } from '../../stores/main'

export default defineComponent({
  name: 'HomePage',
  components: { HelloWorld },

  setup() {
    const mainStore = useMainStore()

    return { mainStore }
  },
  data() {
    return {
      zxx: 'sassy',
    }
  },
  computed: {
    // ...mapState(useMainStore, ['testData']),
  },

  beforeMount() {
    this.mainStore.rewriteStr(this.mainStore.testData, 'newVal0')
    this.mainStore.rewriteStr(this.mainStore.key_1, '1')
  },

  methods: {
    change() {
      this.mainStore.rewriteStr(this.mainStore.testData, 'newVal1')
      this.mainStore.rewriteStr(this.mainStore.key_1, '2')
    },
  },
})
</script>
