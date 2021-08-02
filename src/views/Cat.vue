<template>
  <div class="about">
    <h1>This is a page about cats</h1>
    <Hi />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { client } from "@/utils/contentful";
import Hi from "@/components/Hi.vue";
@Options({
  components: {
    Hi,
  },
})
export default class Cat extends Vue {
  async mounted() {
    console.log("HEYYYYY");
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const response = await client.getEntries();
    console.log(response.items);
  }
}
</script>
