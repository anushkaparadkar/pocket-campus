<template>
  <div id="index-page">
    <section id="hero-kollab">
      <v-container>
        <v-layout row wrap>
          <v-flex sm12 md6>
            <div id="title-heading">
              <h1>Pocket Kampus</h1>
              <h3 class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis? Iure quam ducimus, a nam quia quasi nemo illo harum nihil maiores corrupti molestias ipsum aliquid quo! Dolor, quae molestiae!</h3>
              <br>
              <v-btn to="/register" large color="deep-purple darken-1" raised dark>Get Started!</v-btn>
              <br>
            </div>
          </v-flex>
          <v-flex sm12 md6>
            <v-img src="../assets/hero.svg"></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <br>
    <!-- <section id="kollab-content" class="my-4">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card color="blue-grey" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Common Council Hub</div>
                <div>
                  A one-place access to all the councils and their activities in the university / college
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat class="mx-auto" dark to="/signup">Register as Council</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card color="blue-grey" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Extensive Events Area</div>
                <div>
                  One page glance at everything happening around in the college / university
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat class="mx-auto" dark to="/event/all">Explore Events</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card color="blue-grey" class="white--text">
              <v-card-title primary-title>
                <div class="headline">User Area</div>
                <div>
                  Register and be part of councils with the simple, user-friendly UI of the user area
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat class="mx-auto" dark to="/user/create">User Area</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped lang="scss">
#index-page {
  background-color: #ffffff;
}
#hero-kollab {
  background-image: url('../assets/welcome-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 10em;
}
#title-heading {
  margin-top: 9em;
  text-align: center;
  h1 {
    font-size: 5em;
    color: #ffffff;
    padding: 0.1rem;
  }
  .subheading {
    color: #e4e4e4;
  }
}
@media only screen and (max-width: 600px) {
  #title-heading {
    margin: auto;
  }
}
</style>
