<template>
  <div style="position: relative" v-bind:class="{ open: openSuggestion }">
    <input class="form-control" type="text" v-model="selection" />
    <ul class="dropdown-menu" style="width: 100%">
      <li v-for="suggestion in matches" :key="suggestion">
        <a href="#">{{ suggestion }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Autocomplete extends Vue {
  suggestions!: [];
  selection!: string;
  /**
   * More to come here
   */
}
</script>
