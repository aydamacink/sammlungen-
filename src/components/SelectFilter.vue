<template>
  <h3>Please select a tag or more to to filter the items</h3>
  <span class="filter-option" v-for="tag in tags" :key="tag">
    <input type="checkbox" :id="tag" checked @change="setFilter" />
    <label for="checkbox">{{ tag }}</label>
  </span>
</template>

<script lang="ts">
/* eslint-disable */
import { Options, Vue } from "vue-class-component";
import { client } from "@/utils/contentful";

Options({
  components: {},
  emits: [`change-filter`],
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
  [x: string]: any;
  dataReady!: boolean;
  items!: unknown;
  tags!: string[];

  data(): {
    dataReady: boolean;
    items: [];
    tags: [];
    selected: Record<string, boolean>;
  } {
    return {
      dataReady: false,
      items: [],
      tags: [],
      selected: {
        philosophical: true,
        logical: true,
        "short story": true,
        "Curious Characters": true,
        film: true,
        "multiple interpretations": true,
        dystopia: true,
        confinement: true,
        song: true,
        novel: true,
      },
    };
    // const selected = tags?.reduce((acc,curr)=> (acc[curr]=true,acc),{}); reduce to get the elements of the array to be the keys of the object and true to be their value
    // I had typescript issues/
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
      .map((tag) => tag);
    const tags = [...new Set(arrayOfTags)];
    this.tags = tags;
    return tags;
  } // maybe take a look at created instead of mounted . Mounted implies component stuck inside the DOM. -> time consuming process
  // created -> just created.

  //where should the api calls happen in which lyfestyle

  setFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    const inputId = target.id;
    const isActive = target.checked;
    const updatedSelected = {
      ...this.selected,
      [inputId]: isActive,
    };
    this.selected = updatedSelected;
    this.$emit("change-filter", updatedSelected);
  }
}
</script>
