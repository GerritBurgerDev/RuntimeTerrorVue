<template>
  <v-app>
    <v-main>
      <nav-component></nav-component>
      <router-view></router-view>
    </v-main>
    <footer-component></footer-component>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavComponent from "./components/Nav/nav-component.vue";
import FooterComponent from "./components/Footer/footer-component.vue";

export default defineComponent({
  name: 'App',

  components: {
    FooterComponent,
    NavComponent,
  },

  data () {
    return {
      footerHeight: '0px',
    }
  },
  mounted() {
    this.footerHeight = this.getFooterHeight();
  },
  methods: {
    getFooterHeight: () => {
      const element = document.querySelector('.v-footer');
      const height = element ? element.clientHeight : 0;
      return (height - 50) + 'px';
    }
  }
})
</script>

<style scoped>
.v-main {
  padding-bottom: v-bind(footerHeight) !important;
}
</style>
