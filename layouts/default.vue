<template>
  <div style="height: 100%; width: 100%;">
    <yheader></yheader>
    <a-row :style="{minHeight: mheight-180+'px'}" class="bk">
      <a-col :xs="1" :sm="2" :md="4" :lg="6"></a-col>
      <a-col :xs="22" :sm="20" :md="16" :lg="12">
        <div style="width: 100%">
          <nuxt />
        </div>
      </a-col>
      <a-col :xs="1" :sm="2" :md="4" :lg="6"></a-col>
    </a-row>
    <yfooter></yfooter>
    <div>
      <a-back-top />
    </div>
  </div>
</template>

<script>
  import yheader from '@/components/header/yheader'
  import yfooter from '@/components/footer/yfooter'
  export default {
    data() {
      return {
        mheight: this.$height
      }
    },
    components: {
      yheader,
      yfooter
    }
  }
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
#__nuxt{
  width: 100%;
  height: 100%;
}
#__layout {
  width: 100%;
  height: 100%;
}
  .bk {
    background-image: url('~static/img/1.png');
    background-size: cover;
    color: white;
    padding: 50px 0;
  }
</style>
