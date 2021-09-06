<template>
  <div class="about">
    <h1>Collections</h1>
    <select-filter />
    <div class="cards-container" v-if="dataReady">
      <ul>
        <li class="card" v-for="item in items" :key="item.id">
          <div class="title-container">
            {{ item.fields.title }}
          </div>
          <div class="body-container">
            {{ item.fields.description }}
            <div class="author-container">
              {{ item.fields.credits }}
              <div class="tag-container">
                {{ item.fields.tags.join(", ") }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}

.cards-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
  padding-bottom: 2rem;
}

.card {
  margin-top: 1rem;
  padding: 2px;
  justify-self: stretch;
  align-self: stretch;
  border: 1px solid black;
}

.title-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  text-align: left;
  width: 100%;
  padding-right: 10px;
}

.body-container .author-container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  align-items: stretch;
}

.tag-container {
  display: flex;
  margin-left: 80%;
  align-items: stretch;
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { client } from "@/utils/contentful";
import SearchBar from "@/components/SearchBar.vue";
import SelectFilter from "@/components/SelectFilter.vue";
@Options({
  components: {
    SearchBar,
    SelectFilter,
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
