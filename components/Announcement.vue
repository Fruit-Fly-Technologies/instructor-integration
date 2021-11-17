<template>
  <article class="card">
    <header class="card-header">
      <h3 class="title card-header-title">
        {{ announcement.title }}
      </h3>
    </header>
    <div class="card-content">
      {{ announcement.body }}
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        Announced {{ $moment(announcement.date).format('MMM D, YYYY') }}
      </p>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Announcement',
  props: {
    announcement: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
