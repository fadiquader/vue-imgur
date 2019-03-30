<template>
  <div>
    <h2>Images List</h2>
    <div class="image-container">
      <div v-for="image in allImages" :key="image.id">
        <!--<h3>{{image.name}}</h3>-->
        <img class="img-fluid" :src="image.link" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "ImageList",
    computed: mapGetters(['allImages']),
    methods: mapActions(['fetchImages']),
    created() {
      this.fetchImages()
    }
  }
</script>

<style scoped>
  .image-container {
    column-count: 3;
    column-gap: 0;
  }
  .image-container img {
    padding: 5px;
  }
</style>
