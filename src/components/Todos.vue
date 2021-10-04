<template>
  <div>
    <div v-for="todo in todosList" :key="todo.id">
      <ItemComponent
        v-bind:todo="todo"
        v-on:delete-todo="$emit('delete-todo', todo.id)"
      />
    </div>
  </div>
</template>

<script>
import ItemComponent from "./Items/Item.vue";
export default {
  name: "Todos",
  props: ["todosList"],
  components: { ItemComponent },
};
</script>