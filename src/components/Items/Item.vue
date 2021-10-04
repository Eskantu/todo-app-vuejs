<template>
  <div class="todo" :class="{ completed: todo.completed }">
    <div class="todo-body">
      <input
        v-bind:checked="todo.completed ? 'checked' : ''"
        v-on:change="checkTodo"
        type="checkbox"
      />
      <span>{{ todo.title }}</span>
      <div class="todo-actions">
        <v-btn
          color="red darken-4"
          elevation="2"
          @click="$emit('delete-todo', todo.id)"
        >
          Eliminar
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemComponent",
  props: ["todo"],
  methods: {
    checkTodo() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>

<style>
.todo {
  border-bottom: solid 1px #ccc;
  padding: 10px;
}

.todo:not(.completed):hover {
  background-color: #eee;
}

.completed {
  color: #ccc;
  text-decoration: line-through;
}
.completed .todo-body {
  text-decoration: line-through;
}

.todo-body,
.todo-actions {
  display: inline-block;
  vertical-align: top;
}

.todo-body {
  width: 85%;
}
.todo-actions {
  padding: 0 10px;
  width: 10%;
}
</style>