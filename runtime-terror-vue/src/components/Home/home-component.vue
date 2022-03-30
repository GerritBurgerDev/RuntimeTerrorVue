<template src="./home-component.html"></template>
<style src="./home-component.scss"></style>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ msg: string }>()

const count = ref(0);
</script>
