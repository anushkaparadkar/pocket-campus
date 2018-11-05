<template>
  <div>
    <div class="top"></div>
    <div class="event-cards">
      <v-container grid-list-md>
        <div id="page-heading">
          <h1>Events</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis sequi explicabo nobis iste rerum maiores ipsum esse facilis atque doloribus exercitationem nihil, non at laudantium tenetur optio dicta amet mollitia. Illum, alias fugit culpa nemo veritatis ex possimus iusto placeat quae est sit neque dolores repellendus iure impedit, atque qui.</p>
        </div>
        <div class="text-xs-center">
          <v-btn to="/events/add" fab dark color="indigo">
            <v-icon>add</v-icon>
          </v-btn>
        </div>
        <v-layout row wrap>
          <v-flex v-for="event in events" :key="event.name" xs12 md6 lg3>
            <v-card>
              <v-img src="../../assets/test.jpg"></v-img>
              <v-card-title primary-title>
                <div class="text-xs-center mx-auto">
                  <h3 class="headline mb-1">{{event.name}}</h3>
                  <div class="grey--text">{{event.host}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="mx-auto" :to="'/events/' + event._id" dark color="indigo">More Info</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AllEvents',
  data: () => ({
    events: [],
    error: ''
  }),
  created() {
    axios
      .get('/events')
      .then(res => {
        const data = res.data
        data.forEach(event => {
          this.events.push(event)
        })
      })
      .catch(err => {
        this.error = err.message
      })
  }
}
</script>

<style scoped lang="scss">
#page-heading {
  text-align: center;
  color: #808080;

  h1 {
    font-weight: 700;
    color: #3949ab;
    font-size: 2em;
  }
}
</style>
