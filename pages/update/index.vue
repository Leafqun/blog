<template>
  <div >
    <div style="color: white; margin-bottom: 30px; font-size: 26px; font-weight: 700">
      更新日志
    </div>
    <a-timeline  style="color: white">
      <a-timeline-item v-for="item in list" :key="item.id">
          <div style="margin-left: 30px;">
            <div style="font-weight: 500; font-size: 22px; margin-bottom: 15px;">
              {{item.id}}
            </div>
            <div style="margin-bottom: 15px; font-size: 14px;">{{item.create_time}}</div>
            <div v-for="(d,index) in item.detail" :key="index"><span><icon-font type="icon-cicleo" style="font-size: 12px; margin-right: 8px;"></icon-font></span>{{d}}</div>
          </div>

      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<script>
  import list from '@/static/js/update_log'
  export default {
    name: 'index',
    data() {
      return {
        list
      }
    }
  }
</script>

<style scoped>

</style>
