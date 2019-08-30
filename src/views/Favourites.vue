<template lang="html">
  <div id="">
    <main-header title='Favourites' />
    <ul>
      <list-item v-if="" v-for="(favourite, index) in favourites" :favourite="favourite" :key="index"></list-item>
    </ul>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import ListItem from '@/components/ListItem.vue';

export default {
  name: 'favourites',
  props: ['favourites'],
  components: {
    'main-header': MainHeader,
    'list-item': ListItem
  }
}
</script>

<style lang="css" scoped>
li {
  padding: 15px;
  width: 300px;
  border: solid 2px black;
  list-style: none;
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
