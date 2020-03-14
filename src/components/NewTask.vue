<template>
  <div class="new-task-wrapper">
    <h3>{{ title }}</h3>
    <form
      class="new-task-form"
      action=""
      method="post"
      @submit.prevent="putTask"
    >
      <input
        v-if="newTask"
        v-model="NEWTASK.taskName"
        class="new-task-form__name"
        type="text"
        required
        placeholder="Input task name..."
      />
      <input
        v-else
        v-model="EDITABLETASK.taskName"
        class="new-task-form__name"
        type="text"
        required
        placeholder="Input task name..."
      />
      <textarea
        v-if="newTask"
        v-model="NEWTASK.taskContent"
        class="new-task-form__content"
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Input text content..."
        required
      ></textarea>
      <textarea
        v-else
        v-model="EDITABLETASK.taskContent"
        class="new-task-form__content"
        name=""
        id=""
        cols="30"
        rows="4"
        placeholder="Input text content..."
        required
      ></textarea>
      <input class="new-task-form__submit" type="submit" :value="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { todos } from "../main";

export default {
  name: "NewTask",
  props: {
    title: { type: String },
    btn: { type: String },
    newTask: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters(["NEWTASK", "EDITABLETASK"])
  },
  methods: {
    ...mapActions(["ADD_TASK"]),
    putTask() {
      if(this.newTask) {this.ADD_TASK(this.NEWTASK)} else todos.doc(this.EDITABLETASK.id).set(this.EDITABLETASK);
      !this.newTask && this.$router.push("/");
    }
  }
}
</script>

<style lang="less" scoped>
input, textarea {
  box-shadow: .05em .2em .2em #ddd;
  margin: .2em 0;
  width: 100%;
  &:hover{
    box-shadow: 0 .1em .1em #eee;
  }
}
h3{
  margin-bottom: .5em;
}
.new-task-form{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &__content{
    resize: none;
  }
  &__submit{
    font-weight: 500;
  }
  &__submit:hover{
    color: #fff;
    background-color: #999;
    cursor: pointer;
  }
}
</style>
