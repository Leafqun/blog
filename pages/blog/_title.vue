<template>
  <div>
    <a-card :bordered="false" class="yq-sort">
      <div>
        <a-skeleton active :paragraph="{rows: 10}" :loading="false">
          <div style="color: white">
            <div style="font-size: 26px; font-weight: 700;margin-bottom: 10px;">{{blog.title}}</div>
            <div style="margin-bottom: 20px; color: rgb(102, 102, 102);">
              {{blog.create_time | time}}
              <span v-for="(tag, index) in blog.tagList" :key="index">
                <a-divider type="vertical"/>
                <a-tag color="#f50">{{tag.tag_name}}</a-tag>
              </span>
            </div>
            <div v-html="change(blog.content)"></div>
          </div>
        </a-skeleton>
      </div>
    </a-card>
  </div>
</template>

<script>
  import { url } from '../../assets/js/url'

  export default {
    name: '_title',
    async asyncData({ $axios, params }) {
      const { data } = await $axios.$get(`${url}/blog/getBlog`, { params: { title: params.title } })
      return { blog: data }
    },
    methods: {
      change(content) {
        return this.$marked(content || '', {
          sanitize: true
        })
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
  .yq-sort {
    background-color: rgba(240, 240, 240, 0.1);
  }
</style>
