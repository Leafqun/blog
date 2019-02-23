<template>
  <div class="menu">
    <div v-for="item in menuList" class="item" @mouseover="hover[item] = true" @mouseout="hover[item] = false" :style="{color: which === path[item] ? 'rgba(0,0,0)' : 'rgba(0, 0, 0, 0.55)'}">
      <transition name="left">
        <p v-if="hover[item]" style="position: relative; z-index: 1;">[</p>
      </transition>
      <p style="margin: 0 4px;" @click="goto(item)">{{item}}</p>
      <transition name="right">
        <p v-if="hover[item]">]</p>
      </transition>
    </div>
  </div>
</template>

<script>
  import {menuList, path, hover} from '@/assets/js/menu'
  export default {
    name: 'ymenu',
    data() {
      return {
        menuList: menuList,
        hover: hover,
        path: path
      }
    },
    computed: {
      which () {
        const path = this.$route.path
        return path.substring(path.lastIndexOf('/'))
      }
    },
    methods: {
      goto (item) {
        this.$router.push(this.path[item])
      }
    }
  }
</script>

<style scoped>
  .menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
  }
  .item {
    line-height: 40px;
    font-size: 16px;
    width: 70px;
    font-weight: 700;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  .item:hover {
    cursor:pointer;
  }
  .left-enter-active, .left-leave-active {
    transition: all .2s;
  }

  .left-enter, .left-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(20px);
    opacity: 0;
  }

  .right-enter-active, .right-leave-active {
    transition: all .2s;
  }

  .right-enter, .right-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
