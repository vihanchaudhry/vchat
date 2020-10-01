<template>
  <div class="justify-between w-full bg-gray-300">
    <div
      class="z-40 flex items-center bg-gray-700 text-white h-16 px-6 w-full text-center shadow"
    >
      <h1 class="font-semibold">Aadya</h1>
    </div>

    <div class="z-0 chat p-6 overflow-x-hidden overflow-y-scroll break-words">
      <div
        v-for="message in messages"
        :key="message.id"
        class="bg-white rounded w-1/3 mb-2 p-3"
      >
        <p class="">
          {{ message.content }}
        </p>
        <p class="text-sm text-gray-500">
          Sent by {{ message.user }} on {{ message.createdAt.toUTCString() }}
        </p>
      </div>
    </div>

    <div class="z-20 h-16 w-full shadow flex">
      <input
        type="text"
        class="w-full px-6 py-4 z-20 shadow"
        autofocus
        autocomplete="off"
        placeholder="Say hi!"
        v-model="newMessage"
        v-on:keyup.enter="sendMessage"
      />
      <button
        v-on:click="sendMessage"
        class="w-16 bg-gray-700 text-white font-bold uppercase z-20 shadow"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      newMessage: "",
      messages: [],
    };
  },
  methods: {
    sendMessage: function () {
      const msg = this.newMessage && this.newMessage.trim();

      if (!msg) {
        return;
      }

      this.messages.push({
        id: this.messages.length,
        content: msg,
        user: "Vihan",
        createdAt: new Date(),
      });

      this.newMessage = "";
    },
  },
};
</script>

<style>
.chat {
  height: calc(100vh - 4rem - 4rem);
}
</style>