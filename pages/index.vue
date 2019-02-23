<template>
  <div>
    <a-card v-if="blogList"
      hoverable :bordered="false"
      v-for="item in blogList" :key="item.bid"
      style="margin-bottom: 25px; background-color: rgba(240,240,240,0.1); color: white;">
      <div>
        <div>
          <div style="font-size: 20px; font-weight: 700; margin-bottom: 10px;">{{item.title}}</div>
          <div style="margin-bottom: 15px;">
            {{item.create_time | time}}
            <span v-for="(tag, index) in item.tagList" :key="index">
              <a-divider type="vertical" />
              <a-tag color="#f50">{{tag.tag_name}}</a-tag>
            </span>

          </div>
        </div>
        <div class="content" v-html="change(item.content)"></div>
      </div>
      <a-card-meta>
        <template slot="description"><a @click="goto(item.title)">阅读更多>></a></template>
      </a-card-meta>
    </a-card>
    <div v-if="!blogList">内容为空</div>
    <div style="text-align: center; margin-top: 50px;">
      <a-pagination size="small" :total="total" showQuickJumper style="color: white;" @change="handlePageChange" v-if="total > 10"></a-pagination>
    </div>
  </div>
</template>

<script>
  import {url} from '../assets/js/url'
  export default {
    name: 'index',
    async asyncData({ $axios }) {
      const {data} = await $axios.$get(`${url}/blog/getBlogList`, {params: {currentPage: 1}})
      return { blogList: data && data.blogList, total: data.total }
    },
    data() {
      return {
        currentPage: 1,
        pageSize: 10
      }
    },
    methods: {
      goto(title) {
        this.$router.push('/blog/' + title)
      },
      change(content) {
        return this.$marked(content || '', {
          sanitize: true
        });
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
  .content{
    margin-bottom: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    max-height: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .title {

  }
</style>
