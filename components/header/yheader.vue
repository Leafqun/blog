<template>
  <a-row type="flex" justify="space-around" align="middle" class="header">
    <a-col :xs="20" :sm="12" :md="12" :lg="12"><p class="icon">Leafqun的博客</p></a-col>
    <a-col :xs="0" :sm="12" :md="12" :lg="12">
      <ymenu></ymenu>
    </a-col>
    <a-col :xs="4" :sm="0" :md="0" :lg="0" style="text-align: right">
      <a-icon type="bars" style="font-size: 26px;" @click="visible=true"></a-icon>
    </a-col>
    <a-drawer
      title="菜單"
      placement="right"
      @close="visible=false"
      :closable="false"
      :visible="visible"
    >
      <p v-for="item in menuList" :key="item" @click="goto(item)" class="right_menu">{{item}}</p>
    </a-drawer>
  </a-row>
</template>

<script>
  import ymenu from './ymenu'
  import {menuList, path} from '../../assets/js/menu'
  export default {
    name: 'yheader',
    data() {
      return {
        visible: false,
        menuList: menuList,
        path: path
      }
    },
    components: {
      ymenu
    },
    methods: {
      goto(item) {
        this.visible = false
        this.$router.push(this.path[item])
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 80px;
    width: 100%;
    background-color: #f5f5f5;
    padding: 0 20px;
  }
  .icon {
    font-size: 20px;
    margin: auto 0;
    color: black;
  }
  .right_menu:active {
    background-color: #7f828b;
  }
</style>
