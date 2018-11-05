<template>
  <v-footer height="auto" color="indigo">
    <v-layout justify-center row wrap>
      <v-btn v-for="link in links" :key="link.name" color="white" :to="link.href" flat round>
        {{ link.name }}
      </v-btn>
      <v-flex indigo darken-1 py-3 text-xs-center white--text xs12>
        &copy;2018 —
        <strong>Anushka Paradkar</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Events',
        href: '/events'
      }
    ]
  })
}
</script>
