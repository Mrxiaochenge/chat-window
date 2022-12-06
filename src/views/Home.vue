<template>
  <div class="home">
    <div class="home-sidebar">
      <div
        v-for="(item, index) in 100"
        :key="index"
        :class="[currentIndex == index ? 'currentTab' : '', 'sidebar-box']"
        @click="changeCurrent(index)"
      >
        <img src="" alt="" class="sidebar-box-img" />
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
        <div style="overflow: auto;height: 400px;">
          <div
            class="has-box-left has-box-user"
            v-for="(item, index) in 5"
            :key="index"
          >
            <img src="" alt="" class="has-img" />
            <div>
              <div class="bubble-left">
                6546456546454654645465464546546454654645465464544
              </div>
            </div>
          </div>
          <div
            class="has-box-right has-box-user"
            v-for="(item, index) in 5"
            :key="index"
          >
            <img src="" alt="" class="has-img" />
            <div>
              <div class="bubble-right">
                6546456546454654645465464546546454654645465464544
              </div>
            </div>
          </div>
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
  data() {
    return {
      currentIndex: '',
    };
  },
  methods: {
    changeCurrent(index) {
      this.currentIndex = index;
    },
  },
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
    height: 100%;
    border-right: 1px solid #e7e7e7;
    overflow: auto;
  }
  .home-content {
    flex: 1;
    height: 100%;
    overflow: auto;
    background: #f5f5f5;
  }
  .sidebar-box {
    display: flex;
    padding: 10px;
    cursor: pointer;
    background: #e8e5e3;
  }
  .currentTab {
    background-color: #d7d4d4;
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
    width: 100%;
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
      background: #f5f5f5; /*带点绿*/
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
  .has-box-user {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .has-img {
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }
  // .has-box-left {
  //   text-align: left;
  //   position: relative;
  //   left: 0;
  // }
  .has-box-right {
    flex-direction: row-reverse;
  }
  .bubble-right {
    position: relative;
    right: 0;
  }
  .bubble-left {
    position: relative;
    height: 30px;
    font-size: 14px;
    max-width: 280px;
    padding: 2px 10px;
    line-height: 30px;
    border-radius: 4px;
    background-color: #fff;
    display: table;
  }
  .bubble-left::after {
    position: absolute;
    top: 10px;
    left: -16px;
    content: '';
    border: 8px solid transparent;
    border-right-color: #fff;
  }
  .bubble-right {
    position: relative;
    height: 30px;
    font-size: 14px;
    line-height: 14px;
    max-width: 280px;
    padding: 2px 10px;
    line-height: 30px;
    border-radius: 4px;
    background-color: #95ec69;
    display: table;
  }

  .bubble-right::after {
    position: absolute;
    top: 10px;
    right: -16px;
    content: '';
    border: 8px solid transparent;
    border-left-color: #95ec69;
  }
}
</style>
