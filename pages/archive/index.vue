<template>
  <div>
    <a-timeline style="color: white">
      <a-timeline-item>
        <div style="font-size: 16px; margin-bottom: 20px;">目前共{{total}}份日志</div>
      </a-timeline-item>
      <a-timeline-item v-for="(item,index) in itemList" :key="index">
        <!--<a-icon slot="dot" type="clock-circle-o" style="font-size: 20px;" v-if="!isObject(item)"></a-icon>-->
        <div style="font-size: 28px; font-weight: 700; margin: auto 0 18px 0;" v-if="!isObject(item)">
          {{item}}
        </div>
        <div v-else>
          <div>
            <span style="font-size: 14px;">{{item.create_time.substring(5, 10)}}</span>
            <span style="color: #666;font-size: 16px; padding-left: 10px;"><a @click="goto(item.title)">{{item.title}}</a></span>
          </div>
          <a-divider dashed></a-divider>
        </div>
      </a-timeline-item>
    </a-timeline>
    <div style="text-align: center;">
      <a-pagination size="small" :total="total" showQuickJumper @change="handlePageChange" v-if="total > 10"></a-pagination>
    </div>
  </div>
</template>

<script>
  import {url} from '../../assets/js/url'

  export default {
    name: 'index',
    async asyncData({ $axios }) {
      const {data} = await $axios.$get(`${url}/blog/getBlogList`, {params: {currentPage: 1}})
      return { blogList: data.blogList, total: data.total }
    },
    computed: {
      itemList() {
        let l = this.$lodash
        const parList = l.groupBy(this.blogList, 'year')
        const keys = l.reverse(l.keys(parList))
        return l.flatMap(keys, function(n) {
          return l.concat(n, parList[n])
        })
      }
    },
    methods: {
      isObject(time) {
        return this.$lodash.isObject(time)
      },
      handlePageChange(page) {
        this.currentPage = page
        this.fetchBlogList(page)
      },
      async fetchBlogList(page) {
        const {data} = await this.$axios.$get(`${url}/blog/getBlogList`, {params: {currentPage: page}})
        this.blogList = data.blogList
        this.total = data.total
        this.$scrollTop()
      },
      goto(title) {
        this.$router.push(`/blog/${title}`)
      }
    }
  }
</script>

<style scoped>

</style>
