<template>
  <b-navbar type="dark" variant="dark">
    <div class="container">
      <b-navbar-nav>
        <b-nav-item href="/">
          <router-link to="/"><b>Image Storage</b></router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="!isLoggedIn">
        <b-nav-item v-if="!isLoggedIn" href="javascript:;" @click="login">Login</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
        <b-nav-item href="javascript:;" >Galleries</b-nav-item>
        <b-nav-item>
          <router-link to="/upload">Upload</router-link>
        </b-nav-item>
        <b-nav-item href="javascript:;" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "AppHeader",
    methods: {
      ...mapActions(['login', 'logout']),
      onLogoClick() {

      }
    },
    computed: {
      ...mapGetters(['isLoggedIn'])
    }
  }
</script>

<style scoped>

</style>
