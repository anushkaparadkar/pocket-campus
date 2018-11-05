<template>
  <div id="event-info">
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 lg7>
          <v-img class="poster" src="../../assets/test.jpg" width="100%" height="400"></v-img>
        </v-flex>
        <v-flex xs12 sm6 lg5 class="text-xs-center my-auto">
          <div class="header">{{event.name}}</div>
          <small class="font-weight-light grey--text ">{{event.type}}</small>
          <hr class="my-2">
          <div class="display-1 font-weight-light grey--text ">{{event.host}}</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="my-1">
        <v-flex xs12>
          <h3>Event Description:</h3>
          <p class="description">{{event.description}}</p>
          <div class="date">
            <strong>Date: </strong>
            {{event.date.substring(0,10)}}
          </div>
          <div class="register text-xs-center my-1">
            <v-btn @click.stop="register" color="indigo" dark class="register-btn">Register</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EventInfo',
  data: () => ({
    event: {},
    error: ''
  }),
  methods: {
    register() {
      console.log(this.event)
      console.log(this.$store.getters.getUser._id)
      axios
        .post('/events/' + this.$route.params.id + '/register', {
          uid: this.$store.getters.getUser._id,
          event: this.event
        })
        .then(this.$router.push('/events'))
    }
  },
  // eslint-disable-next-line
  created() {
    axios
      // eslint-disable-next-line
      .get('/events/' + this.$route.params.id)
      .then(res => {
        const data = res.data
        this.event = data
      })
      .catch(err => {
        this.error = err.message
      })
  }
}
</script>

<style scoped>
s #event-info {
  font-size: 1.2em;
}
.header {
  font-size: 3em;
  font-weight: 700;
  color: #39499f;
}
</style>
