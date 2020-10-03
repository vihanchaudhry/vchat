<template>
  <div>
    <button v-on:click="signInWithGoogle">Sign in with Google</button>
  </div>
</template>

<script>
  import firebase from '../firebase'

  export default {
    name: 'app-login',
    methods: {
      signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      },
    },
  }
</script>

<style scoped>
</style>