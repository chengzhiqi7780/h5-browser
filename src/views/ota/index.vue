<template>
  <div>
      <div class="scan">
      <van-nav-bar
        :title="$t('message.update')"
        :left-text="$t('message.back')"
        left-arrow
        @click-left="onClickLeft"
       >
    </van-nav-bar>
    <div>
      <van-card
        desc="版本1"
        title="SDK1.0"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        @click="open"
      />
    </div>
  </div>
  </div>
</template>

<script>
import { Card } from 'vant';
export default {
    created() {
      console.log('123')
    },
    methods:{
      // 返回上一级
      onClickLeft() {
        this.$router.push('/')
      },
      // 打开下载连接
      open() {
        window.open('https://nreal-public.nreal.ai/download/NRSDKForUnity_1.5.7.unitypackage')
      }
    }
}
</script>

<style>

</style>