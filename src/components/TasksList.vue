<template>
  <div class="task-list-wrapper">
    <div class="func-head">
      <p>pages:
        <router-link to="/1">{{ Math.ceil(TODOS.length / 10) }}</router-link></p>
      <h3>ALL TASKS:</h3>
      <button class="btn sort" @click="invertSorting">invert sorting</button>
    </div>
    <article class="tasks" v-for="(todo, idx) in TODOS" :key="idx">
      <div class="task-head-wrapper" :class='{"done": todo.taskRead}' @click.self="show ? show = null : show = todo">
        <div class="head-data">
          <div class="checkbox">
            <input :id="idx" type="checkbox" v-model="todo.taskRead" @click.self="changeDoneTask(todo)"/>
            <label :for="idx"></label>
          </div>
          <p>{{ idx + 1 }}.</p>
          <h4>{{ todo.taskName }}</h4>
        </div>
        <div class="buttons">
          <button class="btn" @click="editTask(todo, idx)">EDIT</button>
          <button class="btn" @click="removeTask(todo.id)">X</button>
        </div>
      </div>
      <transition name="fade">
        <div class="task-body-wrapper" v-show="show === todo">
          <p>Task content: {{ todo.taskContent }}</p>
          <p>Created: {{ createDate(todo.createdAt.seconds) }}</p>
        </div>
      </transition>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { todos } from "../main";

export default {
  name: "TaskList",
  data() {
    return {
      show: null
    };
  },
  computed: {
    ...mapGetters(["TODOS", "PAGES"]),
  },
  methods: {
    ...mapActions(["SET_EDITABLETASK", "TODOS_REVERSE"]),
    editTask(todo, idx) {
      this.SET_EDITABLETASK(todo);
      this.$router.push({ path: `/edit/${idx}` });
    },
    removeTask(id) {
      todos.doc(id).delete();
    },
    changeDoneTask(todo) {
      todo.taskRead = !todo.taskRead;
      todos.doc(todo.id).set(todo);
    },
    createDate(date) {
      return `at ${new Date(date * 1000).toDateString()}, in ${new Date(date * 1000).toTimeString().slice(0,8)}`
    },
    invertSorting() {
      this.TODOS_REVERSE();
    }
  }
}
</script>

<style lang="less" scoped>
.tasks {
  display: flex;
  flex-flow: column nowrap;
  margin: .8em auto;
}
.task-head-wrapper{
  border: solid 1px #ddd;
  border-radius: .5em;
  outline: none;
  padding: .5em .5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;
  background-color: #fff;
  transition: background-color ease .5s;
  &:hover {
    background-color: #eee;
  }
}
.func-head{
  padding-top: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
}
.done {
  background-color: rgba(12, 197, 12, 0.4);
  &:hover {
    background-color: rgba(12, 197, 12, 0.7);
  }
}
.head-data, .buttons {
  display: flex;
  flex-flow: row nowrap;
}
.btn{
  padding: 0 .7em;
  margin: 0 .3em;
}
.sort {
  border-color: #ccc;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-enter{
  opacity: 0;
}
.checkbox input[type="checkbox"] {
  opacity: 0;
}
.checkbox label::before {
  content: "";
  display: inline-block;
  height: 1.3em;
  width: 1.3em;
  border: 1px solid #ddd;
  border-radius: .2em;
  cursor: pointer;
  background-color: #fff;
}
.checkbox label::after {
  content: "";
  display: inline-block;
  height: 6px;
  width: 9px;
  border-left: 2px solid;
  border-bottom: 2px solid;
  transform: rotate(-45deg);
  cursor: pointer;
}
.checkbox label {
  position: relative;
  margin-right: 1em;
}
.checkbox label::before,
.checkbox label::after {
  position: absolute;
}
/*Внешний блок*/
.checkbox label::before {
  top: .05em;
  left: -.8em;
}
/*Галка*/
.checkbox label::after {
  top: .4em;
  left: -.45em;
}
.checkbox input[type="checkbox"] + label::after {
  content: none;
}
.checkbox input[type="checkbox"]:checked + label::after {
  content: "";
}
</style>

