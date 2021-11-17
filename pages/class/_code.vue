<template>
  <div class="section">
    <header class="hero is-primary">
      <div class="hero-body">
        <h1 class="title">
          {{ classData.meta.name }}
        </h1>
        <p class="subtitle">
          {{ classData.meta.code }}
        </p>
      </div>
    </header>
    <section class="section">
      <nuxt-child/>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classData: undefined
    }
  },
  fetch () {
    const code = this.$decodeBase64(this.$route.params.code)
    const class_ = this.$store.getters.class_(code)
    // FIXME: doesn't go to error page
    if (!class_) {
      this.error({
        status: 404,
        message: 'Class not found'
      })
    } else {
      this.classData = class_
    }
  }
}
</script>

<style scoped>

</style>
