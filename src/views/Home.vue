<template>
  <div class="home">
    <div class="home-sidebar">
      <div v-for="(item, index) in 100" :key="index" class="sidebar-box">
        <img class="sidebar-box-img" />
        <div class="sidebar-box-right">
          <div class="right-top">
            <div>测试用户</div>
            <div>10:00</div>
          </div>
          <div>好的</div>
        </div>
      </div>
    </div>
    <div class="home-content">
      <div class="content-box"></div>
      <textarea class="content-inp"></textarea>
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
  height: 680px;
  margin: 100px auto;
  border: 1px solid #ccc;
  .home-sidebar {
    width: 240px;
    background: #ebe8e6;
    height: 100%;
    border-right: 1px solid #ccc;
    overflow: auto;
  }
  .home-content {
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  .sidebar-box {
    display: flex;
    padding: 10px;
  }
  .sidebar-box-img {
    width: 60px;
    height: 60px;
  }
  .sidebar-box-right {
    font-size: 14px;
    margin-left: 10px;
    text-align: left;
    flex: 1;
    .right-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
  }
  .content-box {
    height: 450px;
  }
  .content-inp {
    width: 99%;
    height: 220px;
  }
}
</style>
