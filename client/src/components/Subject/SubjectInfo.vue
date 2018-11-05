<template>
  <v-container>
    <div id="page-heading">
      <h1>{{subject.name}}</h1>
      <br>
      <p>{{subject.teacher}}</p>
    </div>
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex sm12 lg6 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="green" dark>
              <h3 class="mx-auto">Lectures</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="lecture in subject.lectures" :key="lecture.date" :to="lectureLink+lecture._id">
                  <v-list-tile-content>
                    <v-list-tile-title>{{lecture.date.substring(0,10)}}</v-list-tile-title>
                    <v-list-tile-sub-title>
                      {{lecture.description}}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn :to="lectAdd" absolute dark fab bottom right color="green">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
        <v-flex sm12 lg6 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="red lighten-2" dark>
              <h3 class="mx-auto">Submissions</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="submission in subject.submissions" :key="submission.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{submission.title}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{submission.dueDate.substring(0,10)}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn :to="subAdd" absolute dark fab bottom right color="red lighten-2">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    subject: {},
    error: ''
  }),
  created() {
    axios
      .get(
        '/users/' +
          this.$route.params.id +
          '/subjects/' +
          this.$route.params.subject_id
      )
      .then(res => {
        const data = res.data
        this.subject = data
      })
  },
  computed: {
    subAdd() {
      return (
        '/users/' +
        this.$route.params.id +
        '/subjects/' +
        this.$route.params.subject_id +
        '/submissions/add'
      )
    },
    lectAdd() {
      return (
        '/users/' +
        this.$route.params.id +
        '/subjects/' +
        this.$route.params.subject_id +
        '/lectures/add'
      )
    },
    lectureLink() {
      return (
        '/users/' +
        this.$route.params.id +
        '/subjects/' +
        this.$route.params.subject_id +
        '/lectures/'
      )
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}
</style>
