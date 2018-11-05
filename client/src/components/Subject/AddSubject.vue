<template>
  <div id="add-subject">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Subject</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="subject.name" label="Subject Name" required></v-text-field>
            <v-text-field v-model="subject.teacher" label="Subject Teacher"></v-text-field>
            <div>
              <v-btn @click="submit" color="indigo" dark>Add New Subject</v-btn>
            </div>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'subject',
  data: () => ({
    subject: {
      name: '',
      teacher: '',
      error: ''
    }
  }),
  methods: {
    submit() {
      axios
        .post('/users/' + this.$route.params.id + '/subjects/add', {
          subject: this.subject
        })
        .then(
          this.$router.push('/users/' + this.$route.params.id + '/dashboard')
        )
        .catch(err => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 80%;
}
@media (min-width: 992px) {
  .wrapper {
    width: 50%;
  }
}
.new-header {
  color: #39499f;
  font-weight: 300;
}
</style>
