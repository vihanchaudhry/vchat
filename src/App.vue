<template>
  <div id="app" class="fixed w-full h-screen flex font-sans text-center text-gray-800">
    <Sidebar msg="Hi Vihan!" />
    <Chat />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Chat from "./components/Chat.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Chat,
  },
};
</script>