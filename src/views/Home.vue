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
      <div class="content-box">
        <div class="content-title">测试用户</div>
        <div class="chat-box">
          <div></div>
        </div>
      </div>
      <div class="content-inp-box">
        <textarea class="inp"></textarea>
        <div class="btn">发送</div>
      </div>
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
  border: 1px solid #e7e7e7;
  .home-sidebar {
    width: 240px;
    background: #ebe8e6;
    height: 100%;
    border-right: 1px solid #e7e7e7;
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
  .content-inp-box {
    position: relative;
    border-top: 1px solid #e7e7e7;
    width: 99%;
    height: 220px;
    .inp {
      margin-top: 20px;
      height: 70%;
      width: 92%;
      margin-left: 20px;
    }
    textarea {
      border: none;
      outline: none; /*边线不显示*/
      resize: none; /*禁止拉伸*/
      background: #fff; /*带点绿*/
      appearance: none;
    }
    .btn {
      width: 86px;
      height: 34px;
      right: 20px;
      border-radius: 4px;
      bottom: 0px;
      font-size: 14px;
      line-height: 34px;
      background-color: #e9e9e9;
      text-align: center;
      position: absolute;
    }
  }
  .content-title {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    font-size: 20px;
  }
}
</style>
