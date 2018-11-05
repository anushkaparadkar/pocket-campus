<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">Register</h1>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-model="username" :rules="rules" type="text" label="Username" required></v-text-field>
                <v-text-field v-model="name" type="text" :rules="rules" label="Name" required></v-text-field>
                <v-text-field v-model="password" type="password" :rules="rules" label="Password" required></v-text-field>
                <v-text-field v-model="email" type="email" :rules="emailRules" label="Email" required></v-text-field>
                <v-select :items="years" :rules="rules" label="Year" v-model="year"></v-select>
                <v-select :items="branches" :rules="rules" label="Branch" v-model="branch"></v-select>
                <v-text-field v-model="collegeName" type="text" :rules="rules" label="College Name" required></v-text-field>
                <v-slider v-model="attendanceCriteria" :rules="rules" thumb-label label="Attendance Criteria"></v-slider>
                <v-btn color="indigo white--text" disabled="!valid" @click.prevent="signup">Register</v-btn>
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
    attendanceCriteria: '',
    error: '',
    years: [
      'First Year (FE)',
      'Second Year (SE)',
      'Third Year (TE)',
      'Final Year (BE)'
    ],
    branches: ['Computers', 'Info. Tech.', 'Electronics', 'Production'],
    valid: true,
    rules: [v => !!v || 'Field is required'],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    // eslint-disable-next-line
    signup() {
      if (this.$refs.form.validate()) {
        axios
          .post('/register', {
            username: this.username,
            password: this.password,
            name: this.name,
            email: this.email,
            year: this.year,
            branch: this.branch,
            collegeName: this.collegeName,
            attendanceCriteria: this.attendanceCriteria
          })
          .then(res => {
            const data = res.data
            this.$session.start()
            this.$session.set('user', data)
            localStorage.setItem('user', JSON.stringify(data))
            this.$store.commit('setCurrentUser', JSON.stringify(data))
            this.$store.commit('setIsLoggedIn', true)
            this.$router.push('/users/' + data._id + '/dashboard')
          })
          .catch(err => {
            this.error = err.message
          })
      }
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
