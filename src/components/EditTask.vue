<template>
  <div class="edit-task-wrapper">
    <NewTask title="Edit task:" btn="save card" />
    <input @click="back" type="button" value="Back to tasks!" />
  </div>
</template>

<script>
import NewTask from "./NewTask";
import { mapActions } from 'vuex';

export default {
  name: "EditTask",
  methods: {
    ...mapActions(["CLEAR_EDITABLETASK"]),
    back() {
      this.CLEAR_EDITABLETASK();
      this.$router.push("/");
    }
  },
  components: {
    NewTask
  }
}
</script>

<style lang="less" scoped>
.btn{
  border-color: #ccc;
}
input {
  box-shadow: .05em .2em .2em #ddd;
  margin: .2em 0;
  width: 100%;
  font-weight: 500;
  &:hover{
    box-shadow: 0 .1em .1em #eee;
    color: #fff;
    background-color: #999;
    cursor: pointer;
  }
}
</style>