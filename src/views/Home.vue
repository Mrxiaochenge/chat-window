<template>
  <div class="home">
    <div class="home-sidebar">
      <div v-for="(item, index) in 100" :key="index">
        侧边栏
      </div>
    </div>
    <div class="home-content">
      内容
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  width: 900px;
  height: 480px;
  margin: 100px auto;
  border: 1px solid #ccc;
  .home-sidebar {
    width: 240px;
    height: 100%;
    border-right: 1px solid #ccc;
    overflow: auto;
  }
  .home-content {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
}
</style>
