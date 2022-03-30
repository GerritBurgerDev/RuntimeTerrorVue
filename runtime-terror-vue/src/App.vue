<template>
  <v-app>
    <v-main>
      <HomeComponent msg="Runtime Terror Vue Demo"/>
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
