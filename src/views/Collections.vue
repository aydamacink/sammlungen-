<template>
  <div class="about">
    <h1>Collections</h1>
    <h3>Please select a tag or more to to filter the items</h3>
    <span>
      <input type="checkbox" value="philosophical" v-model="selectedTags" />
      <label for="checkbox">philosophical</label>
    </span>
    <span>
      <input type="checkbox" value="logical" v-model="selectedTags" />
      <label for="checkbox">logical</label>
    </span>
    <span>
      <input type="checkbox" value="short story" v-model="selectedTags" />
      <label for="checkbox">short story</label>
    </span>
    <span>
      <input
        type="checkbox"
        value="Curious Characters"
        v-model="selectedTags"
      />
      <label for="checkbox">Curious Characters</label>
    </span>
    <span>
      <input
        type="checkbox"
        value="multiple interpretations"
        v-model="selectedTags"
      />
      <label for="checkbox">multiple interpretations</label>
    </span>
    <span>
      <input type="checkbox" value="dystopia" v-model="selectedTags" />
      <label for="checkbox">dystopia</label>
    </span>
    <span>
      <input type="checkbox" value="confinement" v-model="selectedTags" />
      <label for="checkbox">confinement</label>
    </span>
    <span>
      <input type="checkbox" value="song" v-model="selectedTags" />
      <label for="checkbox">song</label>
    </span>
    <span>
      <input type="checkbox" value="novel" v-model="selectedTags" />
      <label for="checkbox">novel</label>
    </span>
    <div class="search-wrapper">
      <input
        class="input"
        type="text"
        v-model="search"
        placeholder="Search by tags"
      />
    </div>
    <section>
      <div class="cards-container" v-if="dataReady">
        <ul>
          <li class="card" v-for="item in filteredList" :key="item.id">
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
    </section>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}

.search-wrapper {
  position: relative;
}

.label {
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  top: 8px;
  left: 12px;
  z-index: -1;
  transition: 0.15s all ease-in-out;
}

.input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
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
import { Vue } from "vue-class-component";
import { client } from "@/utils/contentful";
import { Entry } from "contentful";

interface X {
  title: string;
  tags: string[];
}

export default class Collections extends Vue {
  dataReady!: boolean;
  items!: Entry<X>[];
  search!: string;
  filteredItems!: Entry<X>[];
  selectedTags!: [];
  tags!: string[];
  data(): {
    dataReady: boolean;
    items: [];
    search: string;
    filteredItems: [];
    tags: string[];
    selectedTags: [];
  } {
    return {
      dataReady: false,
      items: [],
      search: "",
      filteredItems: [],
      tags: [],
      selectedTags: [],
    };
  }

  get filteredList(): Entry<X>[] {
    return this.selectedTags.length === 0 ? this.items : this.filteredItems;
  }

  get ListofTags(): string[] {
    const arraysOfTags = this.items.map(
      (item: { fields: { tags: unknown } }): unknown => item.fields.tags
    );
    const arrayOfTags = Array.prototype.concat(...arraysOfTags);
    const tagList = [...new Set(arrayOfTags)];
    this.tags = tagList;
    return tagList;
  }

  async beforeUpdate(): Promise<Entry<X>[]> {
    const response = await client.getEntries<X>({
      access_token: "ThmEQDURWMEx8GvPNh7gAmyLyfqZnOrpY7e_q7b4TNw",
      content_type: "item",
      "fields.tags[in]": this.selectedTags.join(","),
    });
    const filteredItems = response.items;
    this.filteredItems = filteredItems;
    console.log("filteredItems", this.filteredItems);
    console.log("typeof", typeof filteredItems);
    console.log("selected", this.selectedTags);
    return this.filteredItems;
  }

  async mounted(): Promise<unknown> {
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    const response = await client.getEntries<X>();
    const items = response.items;
    console.log("items", items);
    this.dataReady = true;
    console.log("data is here");
    this.items = items;
    return items;
  }
}
</script>

/*TODO : at the moment the UI is not very helpful for the user since they woukd
have to type the exact tag within the search field solve this Problem */
