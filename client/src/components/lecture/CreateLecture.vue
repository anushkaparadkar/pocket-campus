<template>
  <div id="add-lecture">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Lecture</h2>
          <v-form ref="form" lazy-validation>
            <v-textarea v-model="lecture.description" label="Lecture Description" required hint="Details about topics to be covered in lecture."></v-textarea>
            <v-layout row wrap>
              <v-flex sm12 md6>
                <div class="subheading mb-2">Select time:</div>
                <v-time-picker v-model="lecture.time" color="green lighten-1" header-color="primary"></v-time-picker>
              </v-flex>
              <v-flex sm12 md6>
                <div class="subheading mb-2">Select Date:</div>
                <v-date-picker v-model="lecture.date" reactive required></v-date-picker>
              </v-flex>
            </v-layout>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Add New Lecture</v-btn>
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
  name: 'lecture',
  data: () => ({
    lecture: {
      description: '',
      time: null,
      date: ''
    }
  }),
  methods: {
    submit() {
      axios
        .post(
          '/users/' +
            this.$route.params.id +
            '/subjects/' +
            this.$route.params.subject_id +
            '/lectures/add',
          {
            lecture: this.lecture
          }
        )
        .then(
          this.$router.push(
            '/users/' +
              this.$route.params.id +
              '/subjects/' +
              this.$route.params.subject_id
          )
        )
    }
  }
}
</script>

<style>
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
