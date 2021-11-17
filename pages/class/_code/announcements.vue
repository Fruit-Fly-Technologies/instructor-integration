<template>
  <div>
    <announcement v-for="announcement in announcements" :announcement="announcement" class="card"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      announcements: []
    }
  },
  fetch () {
    const code = this.$decodeBase64(this.$route.params.code)
    this.announcements = this.$store.getters.class_(code).announcements
  }
}
</script>

<style scoped>

</style>
