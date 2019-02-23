<template>
  <div>
    <a-timeline style="color: white">
      <a-timeline-item>
        <div style="font-size: 28px; font-weight: 700; margin-bottom: 20px;">{{title}}</div>
      </a-timeline-item>
      <a-timeline-item v-for="(item,index) in blogList" :key="index" v-if="blogList">
        <div>
          <div>
            <span style="font-size: 14px;">{{item.create_time | time}}</span>
            <span style="color: #666;font-size: 16px; padding-left: 10px;"><a @click="goto(item.title)">{{item.title}}</a></span>
          </div>
          <a-divider dashed></a-divider>
        </div>
      </a-timeline-item>
      <a-timeline-item v-if="!blogList">
        <div style="font-size: 20px; font-weight: 700; margin-bottom: 20px;">目前没有内容</div>
        <a-divider dashed></a-divider>
      </a-timeline-item>
    </a-timeline>
    <div style="text-align: center;">
      <a-pagination size="small" :total="total" showQuickJumper v-if="total > 10"></a-pagination>
    </div>
  </div>
</template>

<script>
  import {url} from '../../assets/js/url'

  export default {
    name: '_title',
    async asyncData ({ params, $axios }) {
      const title = params.title // When calling /abc the slug will be "abc"
      const {data} = await $axios.$get(`${url}/blog/getBlogListByTag`, {params: {currentPage: 1, tag_name: title}})
      return { title, blogList: data && data.blogList, total: data && data.total }
    },
    methods: {
      handlePageChange(page) {
        this.fetchBlogList(page)
      },
      async fetchBlogList(page) {
        const {data} = await $axios.$get(`${url}/blog/getBlogListByTag`, {params: {currentPage: 1, tag_name: this.title}})
        this.blogList = data.blogList
        this.total = data.total
        this.$scrollTop()
      },
      goto(title) {
        this.$router.push(`/blog/${title}`)
      }
    },
    filters: {
      time(val) {
        if (!val) {
          return ''
        }
        return val.substring(0, 10)
      }
    }
  }
</script>

<style scoped>

</style>
