<template>
  <div class="sidebar bg-gray-500 hidden md:flex flex-col">
    <div
      class="z-50 flex justify-center items-center bg-gray-800 text-white h-16 w-full text-center shadow"
    >
      <h1 class="font-semibold">{{ msg }}</h1>
    </div>

    <div class="side-content z-40 p-6 text-left shadow">
      <ul class="font-semibold">
        <li class="mb-2">Item 1</li>
        <li class="mb-2">Item 2</li>
        <li class="mb-2">Item 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-sidebar",
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.sidebar {
  min-width: 16rem;
}
.side-content {
  height: calc(100vh - 4rem);
}
</style>