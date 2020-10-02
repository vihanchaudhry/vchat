<template>
  <div
    id="app"
    class="fixed w-full h-screen flex font-sans text-center text-gray-800"
  >
    <app-sidebar msg="Hi Vihan!"></app-sidebar>
    <app-chat></app-chat>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue"
import AppChat from "./components/AppChat.vue"

export default {
  name: "App",
  components: {
    AppSidebar,
    AppChat,
  },
}
</script>