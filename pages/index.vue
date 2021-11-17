<template>
  <section class="section">
    <div class="columns is-mobile">
      <class-card
        v-for="class_ in $store.state.profiles[$store.state.currentProfile].classes"
        :key="class_.meta.code"
        :code="class_.meta.code"
        :name="class_.meta.name"
        :professor="class_.meta.professor"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
