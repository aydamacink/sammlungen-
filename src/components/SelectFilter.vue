<template>
  <h3>Please select a tag to filter the items</h3>
  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option v-for="tag in tags" :key="tag">{{ tag }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { client } from "@/utils/contentful";

Options({
  components: {},
  methods: {
    getTags() {
      const arraysOfTags = this.items.map(
        (item: { fields: { tags: unknown } }): unknown => item.fields.tags
      );
      const arrayOfTags = Array.prototype.concat(...arraysOfTags);
      return [...new Set(arrayOfTags)];
    },
  },
});

interface X {
  title: string;
  tags: string[];
}

export default class SelectFilter extends Vue {
  dataReady!: boolean;
  items!: unknown;
  tags!: unknown;

  data(): { dataReady: boolean; items: []; tags: [] } {
    return {
      dataReady: false,
      items: [],
      tags: [],
    };
  }

  async mounted(): Promise<unknown[]> {
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const response = await client.getEntries<X>();
    const items = response.items;
    this.dataReady = true;
    console.log("select filter is called");
    this.items = items;
    const arraysOfTags = items.map((item) => item.fields.tags);
    const arrayOfTags = Array.prototype
      .concat(...arraysOfTags)
      .map((tag) => tag.toUpperCase());
    const tags = [...new Set(arrayOfTags)];
    this.tags = tags;
    return tags;
  } // maybe take a look at created instead of mounted . Mounted implies component stuck inside the DOM. -> time consuming process
  // created -> just created.

  //where should the api calls happen in which lyfestyle
}
</script>
