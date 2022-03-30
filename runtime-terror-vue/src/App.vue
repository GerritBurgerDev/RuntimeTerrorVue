<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <v-btn @click="$router.push('/')">Go To About</v-btn>
      <v-btn @click="$router.push('about')">Go To About</v-btn>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeComponent from "./components/Home/home-component.vue";

export default defineComponent({
  name: 'App',

  components: {
    HomeComponent,
  },

  data () {
    return {
      // None so far.
    }
  },
})
</script>
