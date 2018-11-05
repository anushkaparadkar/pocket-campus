<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">Register</h1>
              <v-form>
                <v-text-field v-model="username" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="name" type="text" label="Name" required></v-text-field>
                <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
                <v-text-field v-model="year" type="text" label="Year" required></v-text-field>
                <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
                <v-text-field v-model="branch" type="text" label="Branch" required></v-text-field>
                <v-text-field v-model="collegeName" type="text" label="College Name" required></v-text-field>
                <v-slider v-model="attendance_criteria" thumb-label label="Attendance Criteria"></v-slider>
                <v-btn color="indigo" dark @click.prevent="signup">Register</v-btn>
              </v-form>
              <p class="my-2">Already A User?
                <router-link class="log-link" to="/login">Login!</router-link>
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
  name: 'register',
  data: () => ({
    username: '',
    password: '',
    name: '',
    email: '',
    year: '',
    branch: '',
    collegeName: '',
    attendance_criteria: '',
    error: ''
  }),
  methods: {
    // eslint-disable-next-line
    signup() {
      axios
        .post('/register', {
          username: this.username,
          password: this.password,
          name: this.name,
          email: this.email,
          year: this.year,
          branch: this.branch,
          collegeName: this.collegeName,
          attendance_criteria: this.attendance_criteria
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
.reg-title {
  font-weight: 700;
  color: #39499f;
}
.log-link {
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
