<template>
  <div class="footer">
    <div class="lianjie">
      <a-icon type="weibo" style="font-size: 34px; margin-right: 20px"/>
      <a-icon type="wechat" theme="filled" style="font-size: 34px;"/>
      <a-icon type="qq" theme="outlined" style="font-size: 34px; margin-left: 20px" @mouseover="handleMouseOver" @mouseout="handleMouseOut" />
      <a v-show="isShow" href="http://119.23.22.99/blog-manage-umi" target="_blank">登录</a>
    </div>
    <div class="copyright">
      Copyright©2019. Design by Leafqun
    </div>
  </div>
</template>

<script>
  export default {
    name: 'yfooter',
    data() {
      return {
        isShow: false,
        timer: null
      }
    },
    methods: {
      handleMouseOver() {
        this.timer = setTimeout(() => {
          this.isShow = true
        }, 5000)
      },
      handleMouseOut() {
        clearTimeout(this.timer)
      }
    }
  }
</script>

<style scoped>
  .footer {
    height: 100px;
    width: 100%;
    background-color: rgba(240, 240, 240, 1);
  }

  .lianjie {
    text-align: center;
    padding-top: 18px;
    margin-bottom: 10px;
  }

  .copyright {
    position: relative;
    text-align: center;
    color: black;
  }
</style>
