<template>
  <div id="search-container">
    <input
      v-model="query"
      type="text"
      placeholder="search todo"
      v-on:input="$emit('query-change', query)"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style >
#search-container {
  width: 600px;
  margin: 0 auto;
}

input {
  padding: 10px;
  width: 100%;
  outline: none;
  color: white;
}
</style>