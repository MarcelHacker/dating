<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <LoveCard msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoveCard from "@/components/LoveCard.vue"; // @ is an alias to /src

@Options({
  components: {
    LoveCard,
  },
})
export default class HomeView extends Vue {}
</script>
