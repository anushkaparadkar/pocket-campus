<template>
  <div id="add-event">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Event</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="event.name" label="Event Name" required></v-text-field>
            <v-textarea v-model="event.description" label="Event Description" hint="Detailed Event Description preffered."></v-textarea>
            <v-select :items="items" label="Event Type" v-model="event.type"></v-select>
            <v-text-field v-model="event.host" label="Host" required></v-text-field>
            <div class="subheading mb-2">Select Date:</div>
            <v-date-picker v-model="event.date" reactive required></v-date-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" color="indigo" dark>Add New Event</v-btn>
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
  name: 'NewEvent',
  data: () => ({
    event: {
      name: '',
      description: '',
      type: '',
      date: '',
      host: ''
    },
    error: '',
    items: ['Technical', 'Non-Technical', 'Sports', 'Literary']
  }),
  methods: {
    submit() {
      // this.event.host = this.$store.state.user._id;
      axios
        .post('/events/add', { event: this.event })
        .then(this.$router.push('/events'))
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
