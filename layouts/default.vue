<template>
  <div>
    <nav
      aria-label="main navigation"
      class="navbar header has-shadow is-primary"
      role="navigation"
    >
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/"
        >
          <nuxt-img
            alt="Fruit Fly Technologies"
            height="28"
            src="/banana.png"
          />
        </nuxt-link>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item icon="home" label="Home" tag="nuxt-link" to="/" />
            <b-menu-list label="Classes">
              <b-menu-item
                v-for="class_ in $store.getters.classes"
                :key="class_.meta.code"
                :label="class_.meta.code"
                :to="{path: `/class/${class_.meta.code}`}"
                expanded
                icon="school"
                tag="nuxt-link"
              >
                <b-menu-item
                  v-for="tab in classTabs"
                  :key="tab"
                  :label="tab"
                  :to="{path: `/class/${class_.meta.code}/${tab.toLowerCase()}`}"
                  tag="nuxt-link"
                />
              </b-menu-item>
            </b-menu-list>
          </b-menu-list>
        </b-menu>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],
      classTabs: [
        'Assignments',
        'Announcements'
      ]
    }
  }
}
</script>
