<template lang="html">
  <div id="">
    <main-header title='Beers' />
    <beers-list :beers="beers"></beers-list>
  </div>


</template>

<script>
import MainHeader from '@/components/MainHeader';
import BeerList from '@/components/BeerList.vue';

export default {
  name: 'beers',
  props: ['beers'],
  components: {
    'main-header': MainHeader,
    'beers-list': BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
