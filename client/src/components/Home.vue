<template>
  <div id="index-page">
    <section id="hero-kollab">
      <v-container>
        <v-layout row wrap>
          <v-flex sm12 md6 class="text-xs-center mx-auto">
            <div id="title-heading">
              <h1>Pocket Kampus</h1>
              <h3 class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis? Iure quam ducimus, a nam quia quasi nemo illo harum nihil maiores corrupti molestias ipsum aliquid quo! Dolor, quae molestiae!</h3>
              <br>
              <v-btn to="/register" large color="deep-purple darken-1" raised dark>Get Started!</v-btn>
              <br>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <br>
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
