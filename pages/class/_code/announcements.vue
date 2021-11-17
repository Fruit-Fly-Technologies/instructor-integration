<template>
  <div>
    <announcement v-for="announcement in announcements" :announcement="announcement" class="card" />
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
    this.announcements = this.$store.getters.class_(this.$route.params.code).announcements
  }
}
</script>

<style scoped>

</style>
