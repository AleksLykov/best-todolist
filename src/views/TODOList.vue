<template>
  <div class="main-wrapper">
    <NewTask title="New task:" btn="add card" :newTask="true" />
    <TasksList />
  </div>
</template>

<script>
import TasksList from "@/components/TasksList.vue";
import NewTask from "@/components/NewTask";

export default {
  name: "TODOList",
  components: {
    TasksList,
    NewTask
  }
};
</script>

<style lang="less" scoped>
</style>
