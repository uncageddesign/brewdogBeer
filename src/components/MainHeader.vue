<template>
  <div class="header">
  <img src="@/assets/BrewDogLogo.png" alt="">
  <h2>{{ title }}</h2>
</div>
</template>

<script>
export default {
  name: 'main-header',
  props: ['title']
}
</script>

<style lang="css" scoped>

img {
  width: 100px;
  height: 100px;
}

h2 {
  font-size: 40px;
  font-family: neue-kabel, sans-serif;
}

.header {
  display: flex;
}

</style>
