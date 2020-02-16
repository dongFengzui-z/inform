<template>
  <div>
    <mt-search v-model="value"></mt-search>
  </div>
</template>
<script>
import { Search } from "mint-ui";
export default {
  name: "search",
  data() {
    return {
      value: ""
    };
  }
};
</script>