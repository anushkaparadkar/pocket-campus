<template>
  <div id="add-event">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Event</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="event.name" :rules="rules" label="Event Name" required></v-text-field>
            <v-textarea v-model="event.description" :rules="rules" label="Event Description" hint="Detailed Event Description preffered."></v-textarea>
            <v-select :items="items" label="Event Type" :rules="rules" v-model="event.type"></v-select>
            <v-text-field v-model="event.host" label="Host" :rules="rules" required></v-text-field>
            <v-datetime-picker label="Date and Time" :rules="rules" v-model="event.date">
            </v-datetime-picker>
            <div class="my-2 mx-auto">
              <v-btn @click="submit" disabled="!valid" color="indigo white--text">Add New Event</v-btn>
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
    items: ['Technical', 'Non-Technical', 'Sports', 'Literary'],
    valid: true,
    rules: [v => !!v || 'Field is required']
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
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
