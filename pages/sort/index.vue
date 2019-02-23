<template>
  <a-card :bordered="false" class="yq-sort">
    <div style="font-size: 18px; color: white;padding: 20px 0;">目前共{{total}}个分类</div>
    <div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
      <div v-for="(item, index) in tagList" :key="index">
        <div style="margin-bottom: 20px; margin-right: 25px;">
          <icon-font type="icon-weibiaoti1"></icon-font>
          <a style="border-bottom: 1px solid white" @click="goto(item.tag_name)">{{item.tag_name}}</a>
          <span style="color: white">({{item.blog_num}})</span>
        </div>
      </div>
    </div>
  </a-card>
</template>

<script>
  import {url} from '../../assets/js/url'

  export default {
    name: 'index',
    async asyncData({ $axios }) {
      const {data} = await $axios.$get(`${url}/tag/getTagList`)
      const res = await $axios.$get(`${url}/tag/getTagTotalNum`)
      return { tagList: data, total: res.data[0].total }
    },
    methods: {
      goto(name) {
        this.$router.push('/sort/'+name)
      }
    }
  }
</script>

<style scoped>
  .yq-sort {
    background-color: rgba(240, 240, 240, 0.1);
    display: flex;
    flex-flow: row nowrap;
    font-size: 18px;
  }

  a:hover {
    color: orangered;
    border-bottom-color: orangered;
  }
</style>
