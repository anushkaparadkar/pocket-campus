<template>
  <div id="index-page">
    <section id="hero">
      <v-container>
        <v-layout row wrap>
          <v-flex sm12 md12>
            <div id="title-heading">
              <h1>Pocket Campus</h1>                       
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
#hero {
  background-image: url('../assets/img1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 550px;
  image-rendering: auto;
}
#title-heading {
padding: 15%;
  text-align: center;
  h1 {
    font-size: 5em;
    color:black;
  }
  .subheading {
    color: black;
    font-weight: 700;
  }
}
@media only screen and (max-width: 600px) {
  #title-heading {
    margin: auto;
  }
}
</style>
