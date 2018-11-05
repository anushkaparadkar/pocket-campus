<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <div class="council-reg">
          <v-card raised class="mx-auto my-5 card-wrapper">
            <v-card-text class="form-content">
              <h1 class="reg-title">Update Details</h1>
              <v-form>
                <v-text-field v-model="name" type="text" label="Name" required></v-text-field>
                <v-text-field v-model="year" type="text" label="Year" required></v-text-field>
                <v-text-field v-model="branch" type="text" label="Branch" required></v-text-field>
                <v-slider v-model="attendance_criteria" thumb-label label="Attendance Criteria"></v-slider>
                <v-btn color="indigo" dark @click.prevent="edit">Update Details</v-btn>
              </v-form>
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
    name: '',
    year: '',
    branch: '',
    attendance_criteria: '',
    error: ''
  }),
  // eslint-disable-next-line
  created() {
    // Add Logic
  },
  methods: {
    // eslint-disable-next-line
    edit() {
      axios
        .put('link', {
          username: this.username,
          password: this.password,
          name: this.name,
          year: this.year,
          branch: this.branch,
          attendance_criteria: this.attendance_criteria
        })
        .then(res => {
          this.$router.push('/dashboard')
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
