<template>
  <div
    id="app"
    class="w-screen h-screen flex font-sans text-center text-emerald-green"
  >
    <app-sidebar msg="V-Channel"></app-sidebar>
    <app-chat v-if="!loading && user" v-bind:user="user"></app-chat>
    <app-login v-if="!loading && !user"></app-login>
    <app-loading v-if="loading"></app-loading>
  </div>
</template>

<script>
  import AppLogin from './components/AppLogin.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppChat from './components/AppChat.vue'
  import AppLoading from './components/AppLoading.vue'
  import firebase from './firebase'

  export default {
    name: 'App',
    components: {
      AppLogin,
      AppSidebar,
      AppChat,
      AppLoading,
    },
    data() {
      return {
        user: null,
        loading: true,
      }
    },
    created() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      firebase.auth().onAuthStateChanged((user) => {
        // console.log('auth state changed', user)
        this.user = user
        this.loading = false
      })
    },
  }
</script>