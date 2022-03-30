<template>
  <v-app>
    <v-main>
      <nav-component></nav-component>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavComponent from "./components/Nav/nav-component.vue";

export default defineComponent({
  name: 'App',

  components: {
    NavComponent,
  },

  data () {
    return {
      // None so far.
    }
  },
})
</script>
