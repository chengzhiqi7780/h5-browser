<template>
  <div class="bgc">
    <!-- <fc-wave-filter color="#047">
        <img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9IndpZHRoOjFlbTtoZWlnaHQ6MWVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiIG92ZXJmbG93PSJoaWRkZW4iPjxwYXRoIGQ9Ik0yNjQuMTI5IDI2MS4yNjJjNS4wMjUtNS45NCA0LjI4NS0xNS4yNS0zLjAwOS0yMS40MS02LjQ3NS01LjQzNS0xNi4wODUtMy45MzgtMjAuMzU0IDEuMTk4bC0zOC4wNzcgNDUuMzIzIDIzLjY2MiAxOS44NjYgMzcuNzc4LTQ0Ljk3N3ptLTQzLjkzNy01MC4wMTljLTYuMTQ0LTUuMTA0LTE1LjU2NS01LjI3Ny0xOS43ODctLjMxNWwtMzYuMjAzIDQzLjE2NiAyMi40MDIgMTguNzk0IDM1Ljc5My00Mi42NjFjNC41MzctNS4zNTcgNC41MDYtMTMuMzQ0LTIuMjA1LTE4Ljk4NHptNTY2LjQxMyAxMzUuODE0bC0yMi40NDktMjcuOTE2IDQ0LjcyNS02NS4zNzgtLjI4My0uMzE1LTczLjIwOCAzMC4xMjEtMjIuNjg2LTI3Ljc1OCA3Ny40OTMtOTkuNzIyIDE5LjEyNSAyMy42My00OC41MjIgNjMuNTA1IDc0LjE4NS0zMS44NyAyMC41MTIgMjUuMzYzLTQ2LjU2OSA2NS45MyA3Mi4yLTM0LjI4IDE5LjEyNiAyMy41OTktMTEzLjY0OSA1NS4wOTF6TTUwNy4xNjQgODA3LjAzOGMtMTY1LjYwNSAwLTI5OS44NzUtMTM0LjI1NC0yOTkuODc1LTI5OS44NzQgMC0xNjUuNTczIDEzNC4yNy0yOTkuODQzIDI5OS44NzUtMjk5Ljg0MyAxNjUuNjIgMCAyOTkuODc0IDEzNC4yNTQgMjk5Ljg3NCAyOTkuODQzIDAgMTY1LjYyLTEzNC4yNTQgMjk5Ljg3NC0yOTkuODc0IDI5OS44NzR6TTEyNi45MjkgMjY0Ljk4bDYwLjI5LTcxLjgyMmMxMi41MDgtMTQuODg3IDI5Ljk2NC0yNi43ODIgNDYuNTUyLTEyLjg0IDUuMTA1IDQuMjcgNy4yOTQgNS42ODggMTMuNTAxIDE3LjA0NiAxLjQ2NSA0LjAwMiAyLjU4NCAxMS4yOTYtLjE4OSAxOC40NDggMTQuNDE1LTguOTY0IDI5Ljc5LTYuMDM0IDM5LjcxNiAzLjYyMyAxNS4yODEgMTQuODU2IDEzLjA2IDMxLjk5Ni0xLjQ2NSA0OS4zMjZsLTYzLjU4MyA3NS43NzYtOTQuODIyLTc5LjU1N3ptMzExLjYxLTIwMy4yNTZoMzcuMjI3bDMzLjYxOSA4OCAzMy42MTktODhoMzcuMTYzdjEyMy41NzNoLTI0LjczNHYtODYuM2wtMzIuNTQ3IDg2LjNoLTI3LjA1bC0zMi40ODQtODYuM3Y4Ni4zSDQzOC41NFY2MS43MjR6bTY4LjYyNS0yMy45OTRDMjQ3LjkxOCAzNy43MyAzNy43MyAyNDcuOTE4IDM3LjczIDUwNy4xNjRjMCAyNTkuMjc2IDIxMC4xODggNDY5LjQ4IDQ2OS40MzQgNDY5LjQ4IDI1OS4zMDggMCA0NjkuNDgtMjEwLjIwNCA0NjkuNDgtNDY5LjQ2NVM3NjYuNDcyIDM3LjcxNSA1MDcuMTY0IDM3LjcxNXptMCA3NDkuOTk0YzE1NC45ODYgMCAyODAuNjA3LTEyNS41OSAyODAuNjA3LTI4MC41Nkg1MDcuMTY0Vjc4Ny43NHptLTI4MC41NzYtMjgwLjU2aDI4MC41NzZWMjI2LjYxOWMtMTU0Ljk3MSAwLTI4MC41NzYgMTI1LjYwNS0yODAuNTc2IDI4MC41NDV6bTI4MC41NzYgNDg5LjYzYy0yNjkuOTU4IDAtNDg5LjY0Ni0yMTkuNjU3LTQ4OS42NDYtNDg5LjYzIDAtMjY5Ljk1OCAyMTkuNjg4LTQ4OS42MyA0ODkuNjQ2LTQ4OS42MyAyNzAuMDA1IDAgNDg5LjY0NSAyMTkuNjcyIDQ4OS42NDUgNDg5LjYzIDAgMjY5Ljk3My0yMTkuNjQgNDg5LjYzLTQ4OS42NDUgNDg5LjYzem0wLTk5Ni43OTRDMjI3LjUgMCAwIDIyNy41MDEgMCA1MDcuMTY0YzAgMjc5LjY2MiAyMjcuNTAxIDUwNy4xOTUgNTA3LjE2NCA1MDcuMTk1IDI3OS42OTMgMCA1MDcuMTc5LTIyNy41MzMgNTA3LjE3OS01MDcuMTk1QzEwMTQuMzQzIDIyNy41IDc4Ni44NTcgMCA1MDcuMTYzIDB6IiBmaWxsPSIjQjlCRUMzIi8+PC9zdmc+" />
      </fc-wave-filter> -->
      <!-- <fc-wave-filter color="#047">
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 579.3 139" style="enable-background:new 0 0 579.3 139" xml:space="preserve"><g><path class="st0" d="M329.8,97.9c-6.7,7.1-16.2,11.5-26.7,11.5c-15.6,0-29.1-9.9-34.3-23.7h59.7h9h30.7c0.9-4.2,1.3-8.7,1.3-13.1
          c0-36.7-29.8-66.3-66.3-66.3S236.8,36,236.8,72.6c0,36.7,29.8,66.3,66.3,66.3c23.3,0,43.8-12.1,55.6-30.2L329.8,97.9z M303.2,35.8
          c16.3,0,30.2,10.6,35,25.4h-69.9C273,46.5,286.9,35.8,303.2,35.8z"></path></g><path class="st0" d="M66.3,6.2C29.7,6.2,0,35.9,0,72.5v66.3h33.2V72.5c0-18.4,14.9-33.2,33.2-33.2s33.2,14.9,33.2,33.2v66.3h33.2
        V72.5C132.7,36,102.9,6.2,66.3,6.2z"></path><path class="st0" d="M223.7,6.2c-36.6,0-66.3,29.8-66.3,66.3v66.3h33.2V72.5c0-18.4,14.9-33.2,33.2-33.2h1V6.1L223.7,6.2L223.7,6.2
        L223.7,6.2z"></path><path class="st0" d="M455.2,6.2c-36.7,0-66.3,29.8-66.3,66.3c0,36.7,29.8,66.3,66.3,66.3c13.6,0,26.3-4.1,36.8-11.2l0,0l29.5,11.2
        V72.5C521.6,35.9,491.9,6.2,455.2,6.2z M455.2,109.5c-20.3,0-36.8-16.5-36.8-36.8s16.5-36.8,36.8-36.8S492,52.4,492,72.7
        S475.5,109.5,455.2,109.5z"></path><polygon class="st0" points="579.3,12.6 546.2,0 546.2,139 579.3,139 "></polygon>
        </svg>
    </fc-wave-filter> -->
    <div style="width:5rem;height:2rem;padding-top:0.5rem;padding-left:0.5rem;">
      <!-- <fc-wave-filter color="#047">
        <img style="width:2rem;height:1.5rem;" src="./logo.png" alt="">
      </fc-wave-filter> -->
      <!-- <fc-wave-filter color="#047"> -->
       <a href="https://www.nreal.ai/" target="_blank"> 
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 579.3 139" style="enable-background:new 0 0 579.3 139" xml:space="preserve">
          <g>
            <path class="st0" d="M329.8,97.9c-6.7,7.1-16.2,11.5-26.7,11.5c-15.6,0-29.1-9.9-34.3-23.7h59.7h9h30.7c0.9-4.2,1.3-8.7,1.3-13.1
          c0-36.7-29.8-66.3-66.3-66.3S236.8,36,236.8,72.6c0,36.7,29.8,66.3,66.3,66.3c23.3,0,43.8-12.1,55.6-30.2L329.8,97.9z M303.2,35.8
          c16.3,0,30.2,10.6,35,25.4h-69.9C273,46.5,286.9,35.8,303.2,35.8z"></path></g><path class="st0" d="M66.3,6.2C29.7,6.2,0,35.9,0,72.5v66.3h33.2V72.5c0-18.4,14.9-33.2,33.2-33.2s33.2,14.9,33.2,33.2v66.3h33.2
        V72.5C132.7,36,102.9,6.2,66.3,6.2z"></path><path class="st0" d="M223.7,6.2c-36.6,0-66.3,29.8-66.3,66.3v66.3h33.2V72.5c0-18.4,14.9-33.2,33.2-33.2h1V6.1L223.7,6.2L223.7,6.2
        L223.7,6.2z"></path><path class="st0" d="M455.2,6.2c-36.7,0-66.3,29.8-66.3,66.3c0,36.7,29.8,66.3,66.3,66.3c13.6,0,26.3-4.1,36.8-11.2l0,0l29.5,11.2
        V72.5C521.6,35.9,491.9,6.2,455.2,6.2z M455.2,109.5c-20.3,0-36.8-16.5-36.8-36.8s16.5-36.8,36.8-36.8S492,52.4,492,72.7
        S475.5,109.5,455.2,109.5z"></path><polygon class="st0" points="579.3,12.6 546.2,0 546.2,139 579.3,139 "></polygon>
        </svg>
       </a>
    <!-- </fc-wave-filter> -->
  <span style="font-size:0.5rem;">{{ $t("message.wifiSetting") }}</span>
     
    </div>
    <!-- <div style="padding-top:6rem;">
        <p style="font-family: Times New Roman, Times, serif;font-size:0.5rem;text-align: center;" @click="$router.push('./scan')">scan(扫描)</p>
        <p style="margin-top:0.5rem;border-top: solid #ACC0D8 1px;"></p>
        <p style="margin-top:0.5rem;font-family: Times New Roman, Times, serif;font-size:0.5rem;text-align: center;" @click="$router.push('./add')">添加</p>
        <p style="margin-top:0.5rem;border-top: solid #ACC0D8 1px;"></p>

    </div> -->
    <!-- 可用的Wi-Fi显示 -->
    <div style="margin-top:1rem;">
        <van-list>
            <!-- Wi-Fi连接 -->
            <van-cell title="WLAN"
            icon is-link  @click="edit1()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-Wi_Fi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!-- 系统更新 -->
            <van-cell :title="$t('message.update')"
            icon is-link  @click="edit2()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-xitonggengxin" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!--  -->
            <!-- 日期和时间-->
            <van-cell :title="$t('message.date')"
            icon is-link  @click="edit3()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-shijian" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!-- 语言-->
            <van-cell :title="$t('message.lang')"
            icon is-link  @click="edit4()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-duoyuyan" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!-- 恢复出厂设置/重置-->
            <van-cell :title="$t('message.resetting')"
            icon is-link  @click="edit5()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-ziyuanxhdpi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!-- 关于设备和盒子-->
            <van-cell :title="$t('message.equipment')"
            icon is-link  @click="edit6()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-xinxi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>
            <!-- 显示-->
            <van-cell :title="$t('message.showing')"
            icon is-link  @click="edit7()">
              <template #icon>
                <van-icon name="search" class="iconfont icon-pingmuxianshi" style="margin-top:0.2rem;margin-right:0.5rem;"/>
              </template>
            </van-cell>

        </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 所有的Wi-Fi列表渲染数据
      listAll: [
        {
          'name':'WLAN',
          'routeName':'scan',
          'icon':'iconfont icon-Wi_Fi'
        },
        {
          'name':'系统更新',
          'routeName':'ota',
          'icon':'iconfont icon-xitonggengxin'
        },
        {
          'name':'日期和时间',
          'routeName':'date',
          'icon':'iconfont icon-shijian'
        },
        {
          'name':'语言',
          'routeName':'lang',
          'icon':'iconfont icon-duoyuyan',

        },
        {
          'name':'恢复出厂设置/重置',
          'routeName':'setting',
          'icon':'iconfont icon-ziyuanxhdpi'
        },
        {
          'name':'关于设备/盒子',
          'routeName':'box',
          // icon-xinxi
          'icon':'iconfont icon-xinxi'
        },
        {
          'name':'显示',
          'routeName':'scene',
          'icon':'iconfont icon-pingmuxianshi'
        },
      ],
    };
  },
  created() {
    
    
  },
  methods: {
    // wifi跳转
    edit1() {
      this.$router.push({
        name:'scan',
        params:{
          name:'WLAN'
        }
      })
    },
    // 系统更新
    edit2() {
      this.$router.push({
        name:'ota',
        params:{
          name:'系统更新'
        }
      })
    },
    // 日期和时间
    edit3() {
      this.$router.push({
        name:'date',
        params:{
          name:'日期和时间'
        }
      })
    },
    // 语言设置
    edit4() {
      this.$router.push({
        name:'lang',
        params:{
          name:'日期和时间'
        }
      })
    },
    // 恢复出厂设置/重置
    // edit4() {
    //   this.$router.push({
    //     name:'setting',
    //   })
    // },
    // 恢复出厂设置/重置
    edit5() {
      this.$router.push({
        name:'box',
      })
    },
    // 关于设备和盒子
    edit6() {
      this.$router.push({
        name:'box',
      })
    },
    // 关于设备和盒子
    edit7() {
      this.$router.push({
        name:'scene',
      })
    },
  },
};
</script>

<style lang="less">
.textScan {

}
@font-face {
  font-family: "iconfont"; /* Project id 2871080 */
  src: url('//at.alicdn.com/t/font_2871080_c2q8x42uu1v.woff2?t=1635581429832') format('woff2'),
       url('//at.alicdn.com/t/font_2871080_c2q8x42uu1v.woff?t=1635581429832') format('woff'),
       url('//at.alicdn.com/t/font_2871080_c2q8x42uu1v.ttf?t=1635581429832') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xinxi:before {
  content: "\e649";
}

.icon-duoyuyan:before {
  content: "\e654";
}

.icon-shijian:before {
  content: "\e66b";
}

.icon-xitonggengxin:before {
  content: "\e62f";
}

.icon-ziyuanxhdpi:before {
  content: "\e62b";
}

.icon-pingmuxianshi:before {
  content: "\e63c";
}

.icon-Wi_Fi:before {
  content: "\e662";
}
</style>