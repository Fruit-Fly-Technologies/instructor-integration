<template>
  <div>
    <assignment v-for="assignment in assignments" :assignment="assignment" class="card" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      assignments: []
    }
  },
  fetch () {
    const code = this.$decodeBase64(this.$route.params.code)
    this.assignments = this.$store.getters.class_(code).assignments
  }
}
</script>

<style scoped>

</style>
