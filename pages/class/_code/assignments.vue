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
    this.assignments = this.$store.getters.class_(this.$route.params.code).assignments
  }
}
</script>

<style scoped>

</style>
