<template lang="html">
  <div>
    <li>
      <img :src="beer.image_url" alt="example of the bottle" class="image">
      <h2>{{beer.name}}</h2>
      <p>{{beer.tagline}}</p>
      <p id="description">{{beer.description}}</p>
      <button @click="makeFavourite">Favourite Me</button>
    </li>
  </div>
</template>

<script>
import {eventBus} from "../main.js"

export default {
  name: 'list-item',
  props: ['beer'],
  // data(){
  //   return {
  //     favourites: []
  //   }
  // },
  methods: {
    makeFavourite() {
      return this.favourites.push();
      eventBus.$emit('list-item', this.favourites);
    }
  }

}
</script>

<style lang="css" scoped>
li {
  padding: 15px;
  width: 300px;
  /* border: solid 2px black; */
  list-style: none;
  background-color: whitesmoke;
  margin: 10px;
}

#description {
  max-height: 150px;
  overflow-y: scroll;
}

.image {
  max-height: 200px;
  float: left;
  margin: 3px;
}

</style>
