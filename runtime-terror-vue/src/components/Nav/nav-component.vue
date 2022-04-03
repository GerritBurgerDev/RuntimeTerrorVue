<template>
  <v-container class="nav-container">
    <v-app-bar dense>
      <v-toolbar-title @click="$router.push('/')">RTV Example</v-toolbar-title>

      <a @click="$router.push('/')" class="text-blue">Home</a>
      <a @click="$router.push('/state-demo')" class="text-blue">State Demo</a>
      <a @click="$router.push('/about')" class="text-blue">About</a>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>
<style src="./nav-component.scss"></style>

<script setup lang="ts">
  const props = defineProps<{}>();
</script>
