<template>
  <div>
    <div class="top"></div>
    <div class="book-cards">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 align-center>
            <div class="text-xs-center">
              <h1>Library</h1>
              <v-btn to="/library/books/add" fab dark color="indigo">
                <v-icon>add</v-icon>
              </v-btn>
            </div>
          </v-flex>
          <v-flex v-for="book in books" :key="book.title" xs12 md6 lg3>
            <v-card>
              <v-img src="../../assets/test.jpg"></v-img>
              <v-card-title primary-title>
                <div class="text-xs-center mx-auto">
                  <h3 class="headline mb-1">{{book.title}}</h3>
                  <div class="grey--text">{{book.type}}</div>
                  <p>{{book.description}}</p>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="mx-auto" :to="book.link" dark color="indigo">Read book</v-btn>
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
  name: 'AllBooks',
  data: () => ({
    books: [],
    error: ''
  }),
  created() {
    axios
      .get('/library/books')
      .then(res => {
        const data = res.data
        data.forEach(book => {
          this.books.push(book)
        })
      })
      .catch(err => {
        this.error = err.message
      })
  }
}
</script>

<style>
</style>
