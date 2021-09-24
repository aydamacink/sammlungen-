<template>
  <h3>Please select a tag or more to to filter the items</h3>
  <span>
    <input type="checkbox" value="chocolate" v-model="selected" />
    <label for="checkbox">chocolate</label>
  </span>
  <input type="checkbox" value="peanut" v-model="selected" />
  <input type="checkbox" value="cookies" v-model="selected" />
  <input type="checkbox" value="fruits" v-model="selected" />
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class About extends Vue {
  data(): { iceCreamFlavors: string[]; selected: [] } {
    return {
      iceCreamFlavors: ["chocolate", "peanut", "cookies", "fruits"],
      selected: [],
    };
  }
}
</script>
