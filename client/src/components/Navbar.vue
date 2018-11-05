<template>
  <span>
    <v-navigation-drawer v-model="drawer" temporary dark absolute class="blue-grey darken-4">
      <v-list>
        <v-list-tile class="sidebarHeader">
          <v-list-tile-content>
            <v-list-tile-title class="council-name">Pocket Kampus</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-divider class="mb-5"></v-divider>
        <v-list-tile to="/" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!isLoggedIn" to="/login" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLoggedIn" :to="makeLink" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!isLoggedIn" to="/register" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Register</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/events" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Events</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isLoggedIn" @click.prevent="logout" class="side-links">
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo darken-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text main">
        <router-link to="/">Pocket Kampus</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!isLoggedIn" to="/login" flat>Login</v-btn>
        <v-btn v-if="!isLoggedIn" to="/register" flat>Register</v-btn>
        <v-btn v-if="isLoggedIn" :to="makeLink" flat>Dashboard</v-btn>
        <v-btn to="/events" flat>Events</v-btn>
        <v-btn v-if="isLoggedIn" @click.prevent="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Navbar',
  // eslint-disable-next-line
  data: () => {
    return {
      drawer: false,
      error: ''
    }
  },
  methods: {
    // eslint-disable-next-line
    logout() {
      axios
        .get('/logout')
        // eslint-disable-next-line
        .then(res => {
          this.$session.destroy()
          localStorage.removeItem('user')
          this.$router.push('/')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  },
  computed: {
    // eslint-disable-next-line
    makeLink() {
      // eslint-disable-next-line
      return '/users/' + this.user._id + '/dashboard'
    },
    // eslint-disable-next-line
    user() {
      return this.$store.getters.getUser
    },
    // eslint-disable-next-line
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style scoped lang="scss">
.main a {
  text-decoration: none;
  color: white;
}
.sidebarHeader {
  margin: 10px;
}
.council-name {
  padding: 1em auto;
  font-weight: 700;
  font-size: 1.8em;
}
</style>
