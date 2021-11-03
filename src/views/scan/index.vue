<template>
  <div class="scan">
      <van-nav-bar
        :title="$t('message.scan')"
        :left-text="$t('message.back')"
        left-arrow
        @click-left="onClickLeft"
       >
    </van-nav-bar>
    <!-- 已连接的Wi-Fi显示 -->
    <div style="margin-top:0.5rem;">
      <span style="margin: 0;
      
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;">{{ $t("message.wificonnected") }}</span>
    <van-cell-group inset sty>
      <van-cell v-for="(item,index) in listConnect" :key="index"
      :title="item.name" :value="item.name" :label="$t('message.quality')">
        <template #icon>
          <van-icon name="search" class="iconfont icon-Wi_Fi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
        </template>
      </van-cell>
    </van-cell-group>
    </div>
    
    <!-- 可用的Wi-Fi显示 -->
    <div style="margin-top:1rem;">
      <span style="margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;">{{ $t("message.wifiavailable") }}</span>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
            
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <van-cell v-for="(item,index) in listAll" :key="index"
            :title="item.name" icon is-link :value="item.name" @click="edit(item,index)">
              <template #icon>
                <van-icon name="search" class="iconfont icon-Wi_Fi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
        </van-list>
    </van-pull-refresh>
    </div>

    <!-- 添加其他网络 -->
    <div style="margin-top:1rem;">
      <van-cell-group inset>
        <van-cell :title="$t('message.othernet')" @click="add" style="color:green;"/>
      </van-cell-group>
    </div>
    
    <!-- 底部弹出层 -->
    <!-- <van-popup v-model="show" round closeable width="100%">
      <div style="width:6rem;margin-top:1rem;">
          <span style="text-align: center;display:block;font-size:0.5rem;">添加</span>
        
        <van-form @submit="onSubmit">

            <van-field
                v-model="username"
                label-width="1rem"
                name="账号"
                label="账号"
                placeholder="账号"
                :rules="[{ required: true, message: '请填写账号' }]"
            />
            <van-field
                v-model="password"
                label-width="1rem"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin-top:0.5rem;margin-bottom:0.5rem;">
                <van-button round block type="info" native-type="submit" size="small">提交</van-button>
            </div>
        </van-form>
      </div>
    </van-popup> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 所有的Wi-Fi列表渲染数据
      listAll: [
        {
          'name':'Nreal_5G',
        },
        {
          'name':'Nreal_4G',
        },
        {
          'name':'Nreal_3G',
        },
        {
          'name':'Nreal_2G',
        },
        {
          'name':'Nreal_1G',
        },
      ],
      // 已链接的Wi-Fi列表渲染数据
      listConnect: [
        {
          'name':'Nreal_5G',
        }
      ],
      loading: false,
      finished: false,
      refreshing: false,
      // 控制弹出框
      show:false,
      // 表单信息
      username: '',
      password: '',
    };
  },
  created() {
    if (this.$route.params.wifiName) {
      this.$toast.success(this.$t('message.success'));
      this.listConnect[0] = this.$route.params.wifiName
    }
    if (this.$route.params.isSuccess) {
      this.$toast.success(this.$t('message.success'));
      this.listConnect[0] = this.$route.params.wifiName
    }
  },
  methods: {
    onLoad() {

    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = false;
      this.onLoad();
    },
    onClickLeft() {
        this.$router.push('/')
    },
    // 添加
    edit(item,index) {
      // this.show = true
      this.$router.push({
        name:'link',
        params:{
          wifiName:item
        }
      })
    },
    // 提交表单
    onSubmit() {
      console.log('123')
      this.$notify({ type: 'primary', message: '添加成功',duration: 300, });
      this.show = false
    },
    // 添加其他网络
    add() {
      this.$router.push('add')
    }
  },
};
</script>

<style>
@font-face {
  font-family: "iconfont"; /* Project id 2871080 */
  src: url('//at.alicdn.com/t/font_2871080_n8map8psim.woff2?t=1634291324258') format('woff2'),
       url('//at.alicdn.com/t/font_2871080_n8map8psim.woff?t=1634291324258') format('woff'),
       url('//at.alicdn.com/t/font_2871080_n8map8psim.ttf?t=1634291324258') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-Wi_Fi:before {
  content: "\e662";
}
</style>