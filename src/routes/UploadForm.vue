<template>
  <div>
    <div class="dropper">
      <input
        type="file"
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*"
      />
      <span>Drag files here</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "UploadForm",
    methods: mapActions(['uploadImages'])
  }
</script>

<style scoped>
  .dropper {
    padding: 16px;
    height: 30vh;
    max-width: 500px;
    border: 2px dashed #888;
    border-radius: 5px;
    margin: 32px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.2s background-color ease-in-out;
    cursor: pointer;
  }
  .dropper:hover {
    background-color: #f5f5f5;
  }
  input {
    /*visibility: hidden;*/
    width: 100%;
    height: 30vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    opacity: 0;
  }
</style>
