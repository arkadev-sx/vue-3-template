import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    testData: 'test_2',
    key_1: '0',
  }),
  actions: {
    rewriteStr(key: string, newValue: string) {
      key = newValue
      console.info(`?? rewritten to ${key}`)
    },
  },
})
