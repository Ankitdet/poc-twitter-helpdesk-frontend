<template>
  <section class="tasks">
    <div class="tasks-header">
      <div class="tasks-header-title">Tasks</div>
      <img src="../assets/img/down-arrow.svg" alt="dropdown-icon" class="dropdown-icon" />
    </div>
    <div class="tasks-list">
      <div class="tasks-list-item" v-for="item in tasksArray" :key="item">
        <input type="checkbox" />
        <div class="tasks-list-item-text">{{item}}</div>
      </div>
    </div>
    <div class="tasks-footer">
      All Tasks
    </div>
  </section>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      tasksArray: ["Clean up room", "Change linen and towels when guests are out", "Bring complimentary bottle of red wine"]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../utils/commonStyles/flex.scss";

.tasks {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 20px 20px 20px;
  border-top: 1px solid #dbdbdb;
}
.tasks-header {
  @include flex-row-b-sb-cen;
  color: grey;
  font-size: 14px;
}
.dropdown-icon{
  width: 12px;
  height: 10px;
}
.tasks-list-item {
  @include flex-row-v-start;
  margin: 10px 0;
}
.tasks-list-item input {
  margin-top: 4px;
}
.tasks-list-item-text {
  padding-left: 10px;
}
.tasks-footer {
  color: grey;
  font-size: 15px;
  padding: 10px 0 7px 0;
  border-bottom: 1px solid #dbdbdb;
  width: fit-content;
}
</style>
