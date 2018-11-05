<template>
  <div id="edit-event">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header text-xs-center">Edit {{event.name}}</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="event.name" label="Event Name" required></v-text-field>
            <v-textarea v-model="event.description" label="Event Description" hint="Detailed Event Description preffered."></v-textarea>
            <v-select :items="items" label="Event Type" v-model="event.type" :placeholder="event.type"></v-select>
            <div class="subheading mb-2">Select Date:</div>
            <v-date-picker v-model="event.date" reactive required></v-date-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Edit Event</v-btn>
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
  name: 'EditEvent',
  data: () => ({
    event: {},
    error: '',
    items: ['Technical', 'Non-Technical', 'Sports', 'Literary']
  }),
  created () {
    axios
      // eslint-disable-next-line
      .get('/event/' + this.$route.params.id + '/edit')
      .then(res => {
        const data = res.data
        this.event = data
      })
      .catch(err => {
        this.error = err.message
      })
  },
  methods: {
    submit () {
      axios
        // eslint-disable-next-line
        .put('/event/' + this.$route.params.id + '/edit', { event: this.event })
        .then(this.$router.push('/event/all'))
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
