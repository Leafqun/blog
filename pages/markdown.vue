<template>
  <div>
    <div style="margin-bottom: 15px;">
      标题：
      <a-input v-model="title" style="width: 60%"></a-input>
    </div>
    <div style="margin-bottom: 15px;">
      标签：
      <a-checkbox-group :options="tagList" @change="handleTagChange" style="color: white">
      </a-checkbox-group>
    </div>

    <mavon-editor @change="onChange" v-model="value"></mavon-editor>
    <div style="margin-top: 15px;">
      <a-button @click="handleSubmit">提交</a-button>
    </div>
  </div>
</template>

<script>
  import {url} from '../assets/js/url'
  export default {
    name: 'markdown',
    async asyncData({ $axios }) {
      const {data} = await $axios.$get(`${url}/tag/getTagList`)
      for (let i in data) {
        data[i]['label'] = data[i]['tag_name']
        data[i]['value'] = data[i]['tid']
      }
      return { tagList: data }
    },
    data() {
      return {
        content: '',
        value: '# hello',
        title: '',
        tag: '',
      }
    },
    methods: {
      onChange(value, render) {
        this.content = value
      },
      handleTagChange(e) {
        console.log(e)
        this.tag = e
      },
      async handleSubmit() {
        const result = await this.$axios.$post(`${url}/blog/insertBlog`, {title: this.title, content: this.content, tid: this.tag})
        if (result.message === 'success') {
          this.$message.success('This is a normal message');
        }
      }
    }
  }
</script>

<style scoped>

</style>
