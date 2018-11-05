<template>
  <v-container>
    <full-calendar :events="events" :config="config"></full-calendar>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'calendar',
  // eslint-disable-next-line
  data() {
    return {
      events: [],
      user: {},
      config: {
        defaultView: 'month'
      }
    }
  },
  created() {
    axios.get('/users/' + this.$route.params.id + '/dashboard').then(res => {
      this.user = res.data
      const reminders = res.data.reminders
      const subjects = res.data.subjects
      reminders.forEach(reminder => {
        this.events.push({
          title: reminder.title,
          start: reminder.time
        })
      })
      subjects.forEach(subject => {
        axios
          .get('/users/' + this.$route.params.id + '/subjects/' + subject._id)
          .then(res => {
            const lectures = res.data.lectures
            const submissions = res.data.submissions
            lectures.forEach(lecture => {
              this.events.push({
                title: subject.name,
                start: lecture.date
              })
            })
            submissions.forEach(submission => {
              this.events.push({
                title: submission.title,
                start: submission.dueDate
              })
            })
          })
      })
    })
  }
}
</script>

<style>
</style>
