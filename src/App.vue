<template lang="html">
  <div id="app">

    <nav>
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'beers'}">Beers</router-link>
      <router-link :to="{ name: 'favourites'}">Favourites</router-link>
    </nav>
    <router-view :beers="beers" id="view"></router-view>
  </div>
</template>

<script>

import {eventBus} from './main.js'



export default {
  name: 'app',
  data(){
    return {
      beers: [],
      favourites: []
    };
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => this.beers = beers)

    eventBus.$on("list-item", (beer) => {
      this.favourites = beer;
    })

  }

}
</script>

<style lang="css" scoped>
</style>
