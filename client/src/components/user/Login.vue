<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-login">
          <v-card raised ripple class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="login-title">Login</h1>
              <v-form>
                <v-text-field v-model="username" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                <v-btn color="indigo" dark @click.prevent="login">Login</v-btn>
              </v-form>
              <p class="my-2">Not Already A User?
                <router-link class="reg-link" to="/register">Register Now!</router-link>
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    // eslint-disable-next-line
    login() {
      axios
        .post('/login', {
          username: this.username,
          password: this.password
        })
        .then(res => {
          const data = res.data
          this.$session.start()
          this.$session.set('user', data)
          localStorage.setItem('user', JSON.stringify(data))
          this.$router.push('/users/' + data._id + '/dashboard')
        })
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>

<style scoped lang="scss">
.login-title {
  font-weight: 700;
  color: #39499f;
}
.reg-link {
  text-decoration: none;
}
.card-wrapper {
  width: 80%;
  padding: 3em;
}
@media (min-width: 992px) {
  .card-wrapper {
    width: 50%;
  }
}
</style>
