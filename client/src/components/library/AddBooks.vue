<template>
  <div id="add-books">
    <v-container class="wrapper" grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <h2 class="new-header">Add New Books</h2>
          <v-form ref="form" lazy-validation>
            <v-text-field v-model="book.title" label="Book Name" required></v-text-field>
            <v-select :items="items" label="Book Type" v-model="book.type" required></v-select>
            <v-textarea v-model="book.description" label="Book Description" required></v-textarea>
            <v-text-field v-model="book.link" label="Book Link" required=""></v-text-field>
            <div>
              <v-btn @click.stop="submit" color="indigo" dark>Add New Book</v-btn>
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
  name: 'NewBook',
  data: () => ({
    book: {
      title: '',
      type: '',
      description: '',
      link: ''
    },
    error: '',
    items: ['Fiction', 'Non-Fiction', 'Reference Books', 'Autobiographies']
  }),
  methods: {
    submit() {
      axios
        .post('/library/books/add', { book: this.book })
        .then(this.$router.push('/library/books'))
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
