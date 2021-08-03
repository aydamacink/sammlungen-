<template>
  <div class="about">
    <h1>This is a page about cats</h1>
    <div v-if="dataReady">
      <h2>hello</h2>
      <h3>{{ this.items }}</h3>
      <li v-for="item in items" :key="item.description">{{ item }}</li>
    </div>

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
  dataReady!: boolean;
  items!: unknown;

  data(): { dataReady: boolean; items: [] } {
    return {
      dataReady: false,
      items: [],
    };
  }

  async mounted(): Promise<unknown> {
    console.log("HEYYYYY");
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const response = await client.getEntries();
    const items = response.items;
    this.dataReady = true;
    console.log("data is here");
    this.items = items;
    return items;
  }
}
</script>
