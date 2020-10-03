<template>
  <div class="chat-container justify-between bg-off-white">
    <div
      class="z-40 flex justify-between items-center bg-emerald-green text-white h-16 px-6 w-full text-center shadow"
    >
      <h1 class="">Signed in as {{ user.displayName }}</h1>
      <button v-on:click="signOut" class="font-semibold">Sign out</button>
    </div>

    <div
      ref="chat"
      class="chat flex flex-col z-0 px-6 md:px-20 py-6 overflow-x-hidden overflow-y-scroll break-words"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        v-bind:class="{
          'chat-message bg-white rounded mb-3 p-3 shadow': true,
          'bg-emerald-green ml-auto text-white': message.uid === user.uid,
        }"
      >
        <p>
          {{ message.text }}
        </p>
        <p class="text-sm text-gray-500">
          Sent by {{ message.name }} on
          {{ message.createdAt.toDate().toLocaleTimeString() }}
        </p>
      </div>
      <div ref="bottom"></div>
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
        class="w-16 bg-emerald-green text-white font-bold uppercase z-20 shadow"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script>
  import firebase from '../firebase'

  export default {
    name: 'app-chat',
    props: {
      user: Object,
    },
    data() {
      return {
        newMessage: '',
        messages: [],
        messagesRef: null,
        unsubscribe: Function,
      }
    },
    created() {
      const db = firebase.firestore()
      this.messagesRef = db.collection('messages')
      const query = this.messagesRef.orderBy('createdAt').limit(25)

      this.unsubscribe = query.onSnapshot(
        { includeMetadataChanges: true },
        snapshot => {
          snapshot.docChanges().forEach(change => {
            const message = change.doc.data()
            if (message.createdAt) {
              this.messages.push(message)

              this.$nextTick(() => {
                this.$refs['chat'].scrollTo({
                  top: this.$refs['chat'].scrollHeight,
                  behaviour: 'smooth',
                })
              })
            }
          })
        }
      )
    },
    methods: {
      signOut: function () {
        this.unsubscribe()
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log('signed out')
          })
          .catch(err => console.error(err))
      },
      sendMessage: function () {
        const msg = this.newMessage && this.newMessage.trim()

        if (!msg) {
          return
        }

        this.messagesRef.add({
          text: msg,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid: this.user.uid,
          name: this.user.displayName,
        })

        this.newMessage = ''
      },
    },
  }
</script>

<style scoped>
  .chat {
    height: calc(100vh - 4rem - 4rem);
  }

  .chat-container {
    width: 100%;
  }

  .chat-message {
    max-width: 66.67%;
  }

  @media (min-width: 768px) {
    .chat-container {
      width: calc(100vw - 256px);
    }

    .chat-message {
      min-width: 33%;
      max-width: 50%;
    }
  }
</style>