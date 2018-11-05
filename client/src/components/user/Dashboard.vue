<template>
  <div id="dashboard">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 md7 align-center>
          <v-card raised class="text-xs-center">
            <v-card-title>
              <v-avatar size="300" class="mx-auto">
                <v-img position="center center" src="../../assets/dp.jpg"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              <h1>Ryan Dsilva</h1>
              <h3 class="subheading">Third Year, IT</h3>
              <h3 class="subheading">Fr. Conceicao Rodrigues College of Engineering</h3>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md5 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="indigo" dark>
              <h3 class="mx-auto">Reminders</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="reminder in reminders" :key="reminder.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{reminder.title}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{reminder.description}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-btn absolute dark fab bottom right color="indigo" :to="reminderLink">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
          <br>
          <v-divider class="my-4"></v-divider>
          <div class="text-xs-center">
            <v-btn color="indigo" dark large :to="calLink">View Calendar</v-btn>
          </div>
          <div class="text-xs-center">
            <v-btn color="indigo" dark large to="/library/books">Library</v-btn>
          </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12>
          <h3 class="text-xs-center">Attendance Meter</h3>
          <v-tooltip bottom>
            <v-progress-linear slot="activator" background-color="success" color="info" :value="userAttendance" height="20">
            </v-progress-linear>
            <span>{{userAttendance}}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card raised class="text-xs-center">
            <v-toolbar color="red lighten-2" dark>
              <h3 class="mx-auto">Pending Submissions</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-list-tile ripple v-for="subm in submissions" :key="subm.title">
                  <v-list-tile-content>
                    <v-list-tile-title>{{subm.title}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{subm.description}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-switch v-model="subm.status"></v-switch>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12 align-center>
          <v-card raised class="text-xs-center">
            <v-toolbar color="green lighten-2" dark>
              <h3 class="mx-auto">Subjects</h3>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-card color="blue-grey my-1" v-for="subject in subjects" :key="subject.name" :to="subjectLink+subject._id" class="white--text">
                  <v-card-title primary-title>
                    <h2>{{subject.name}}</h2>
                    <h3 class="ml-auto">{{subject.teacher}}</h3>
                  </v-card-title>
                </v-card>
              </v-list>
            </v-card-text>
            <br>
            <v-btn absolute dark fab bottom right color="green lighten-2" :to="subjectAdd">
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
          <br>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  // eslint-disable-next-line
  data() {
    return {
      reminders: [],
      submissions: [],
      subjects: [],
      attendedLects: [],
      totalLectures: 0
    }
  },
  computed: {
    // eslint-disable-next-line
    calLink() {
      return '/users/' + this.$route.params.id + '/calendar'
    },
    // eslint-disable-next-line
    reminderLink() {
      return '/users/' + this.$route.params.id + '/reminders/add'
    },
    // eslint-disable-next-line
    subjectAdd() {
      return '/users/' + this.$route.params.id + '/subjects/add'
    },
    // eslint-disable-next-line
    subjectLink() {
      return '/users/' + this.$route.params.id + '/subjects/'
    },
    userAttendance() {
      const attended = this.attendedLects.length
      const attendanceP = (attended / this.totalLectures) * 100
      return attendanceP
    }
  },
  created() {
    axios.get('/users/' + this.$route.params.id + '/dashboard').then(res => {
      const data = res.data
      this.reminders = data.reminders
      this.attendedLects = data.attendance
      this.subjects = data.subjects
      data.subjects.forEach(subject => {
        axios
          .get('/users/' + this.$route.params.id + '/subjects/' + subject._id)
          .then(res => {
            const submissions = res.data.submissions
            const lectures = res.data.lectures
            submissions.forEach(submission => {
              this.submissions.push(submission)
            })
            lectures.forEach(lecture => {
              this.totalLectures += 1
            })
          })
      })
    })
  }
}
</script>

<style scoped>
.rounded {
  border-radius: 50%;
}
</style>
