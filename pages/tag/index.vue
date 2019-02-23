<template>
  <div>
    <a-card :bordered="false" class="yq-sort">
      <div style="font-size: 18px; color: white; padding-top: 15px;padding-bottom: 30px;">目前共{{total}}个标签</div>
      <div style="display: flex; flex-flow: row wrap; justify-content: space-between;">
        <div v-for="(item, index) in tagList" :key="index">
          <div style="margin-bottom: 20px; margin-right: 25px;">
            <a-tag color="#f50" @click="goto(item.tag_name)">{{item.tag_name}}</a-tag>
          </div>
        </div>
      </div>
    </a-card>
  </div>
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
</style>
