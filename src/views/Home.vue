<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Hi />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Hi from "@/components/Hi.vue";
@Options({
  components: {
    HelloWorld,
    Hi,
  },
})
export default class Home extends Vue {}
</script>
