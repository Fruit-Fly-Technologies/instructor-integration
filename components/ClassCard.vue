<template>
  <nuxt-link :to="`/class/${$encodeBase64(code)}`" class="column is-one-third card-container">
    <div class="card">
      <div class="card-content">
        <p class="title">
          {{ name }}
        </p>
        <p class="subtitle">
          {{ code }}
        </p>
        <footer class="card-footer">
          <div>Professor <strong>{{ professor }}</strong></div>
        </footer>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    professor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card-container {
}
</style>
