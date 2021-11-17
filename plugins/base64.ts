import { Plugin } from '@nuxt/types'

function encodeBase64 (value: string): string {
  if (process.client) {
    return window.btoa(unescape(encodeURIComponent(value)))
  } else {
    return Buffer.from(value, 'ascii').toString('base64')
  }
}

function decodeBase64 (value: string): string {
  if (process.client) {
    return decodeURIComponent(escape(window.atob(value)))
  } else {
    return Buffer.from(value, 'base64').toString('ascii')
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $encodeBase64: (value: string) => string,
    $decodeBase64: (value: string) => string
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$lines inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $encodeBase64: (value: string) => string,
    $decodeBase64: (value: string) => string
  }
  // nuxtContext.$lines
  interface Context {
    $encodeBase64: (value: string) => string,
    $decodeBase64: (value: string) => string
  }
}

declare module 'vuex/types/index' {
  // this.$lines inside Vuex stores
  // eslint-disable-next-line
  interface Store<S> {
    $encodeBase64: (value: string) => string,
    $decodeBase64: (value: string) => string
  }
}

const base64Plugin: Plugin = (_context, inject) => {
  inject('encodeBase64', encodeBase64)
  inject('decodeBase64', decodeBase64)
}

export default base64Plugin
