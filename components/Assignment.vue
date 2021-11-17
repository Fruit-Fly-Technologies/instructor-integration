<template>
  <article class="card">
    <header class="card-header">
      <h3 class="title card-header-title">
        {{ assignment.title }}
      </h3>
    </header>
    <div class="card-content">
      <p>
        {{ assignment.instructions }}
      </p>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        Assigned {{ $moment(assignment.assignDate).format('MMM D, YYYY') }}
      </div>
      <div class="card-footer-item">
        Due {{ $moment(assignment.dueDate).format('MMM D, YYYY') }}
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Assignment',
  props: {
    assignment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
