<template>
  <header>L</header>
  <div>
    <input type="text" v-model="text" class="textInput" placeholder="" />
    <div class="mt-2">Value: {{ text }}</div>
  </div>

  <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
  <!-- -->
  <!-- <b-container fluid>
      <b-row class="text-area">
        <b-col sm="2">
          <label for="textarea-small">Small:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="textarea-small"
            size="sm"
            placeholder="Small textarea"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mt-2 text-area">
        <b-col sm="2">
          <label for="textarea-default">Default:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="textarea-default"
            placeholder="Default textarea"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <b-row class="mt-2 text-area">
        <b-col sm="2">
          <label for="textarea-large">Large:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            id="textarea-large"
            size="lg"
            placeholder="Large textarea"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </b-container>
  </div> -->
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class SearchBar extends Vue {
  data(): { text: string } {
    return {
      text: "hello",
    };
  }
}
</script>
<style scoped>
h1 {
  margin: 40px 0 0;
}

.text-area {
  border: 1px solid red;
}

#textarea {
  height: 10px;
  border: 1px solid red;
}
</style>
