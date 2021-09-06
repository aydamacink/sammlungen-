<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class About extends Vue {
  data(): { text: string } {
    return {
      text: "hello",
    };
  }
}
</script>
