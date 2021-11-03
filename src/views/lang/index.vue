<template>
  <div>
      <van-nav-bar
        :title="$t('message.languageswitch')"
        :left-text="$t('message.back')"
        left-arrow
        @click-left="onClickLeft"
        >
        </van-nav-bar>
      <van-radio-group v-model="radio">
        <van-cell-group>
            <van-cell v-for="(item,index) in language" :key="index"
            :title="item.language" clickable @click="change(item,index)">
                <template #right-icon>
                    <van-radio :name="index" />
                </template>
            </van-cell>
        </van-cell-group>
     </van-radio-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
          radio: 0,
          language:[
              {
                  language:'English',
              },
              {
                  language:'中文',
              },
                //   日本語
              {
                  language:'日本語',
              },
              //   西班牙语Español
              {
                  language:'한국인',
              },
              {
                  language:'German',
              },
            //   {
            //       language:'español',
            //   },
          ]
        }
    },
    computed:{
        languageItem () {
            return this.$store.getters.language
        }
    },
    created() {
        
        let languageItem = localStorage["language"]
        
        let type = languageItem.slice(0,2)
        console.log(type)
        if (type == "zh") {
            this.radio = 1
            this.$i18n.locale='zh'
        } else if (type == "en") {
            this.radio = 0
            this.$i18n.locale='en'
        } else if (type == "ja") {
            this.radio = 2
            this.$i18n.locale='ja'
        } else if (type == "ko") {
            this.radio = 3
            this.$i18n.locale='ko'
        } else if (type == "de") {
            this.radio = 4
            this.$i18n.locale='de'
        }
    },
    methods:{
        // this.$i18n.locale='zhCHS'
        // 切换语言
        change(item,index) {
            this.radio = index
            if (index == 0) {
                this.$i18n.locale='en'
                localStorage.setItem("language",'en');
            } else if (index == 1) {
                this.$i18n.locale='zh'
                localStorage.setItem("language",'zh');
            } else if (index == 2) {
                this.$i18n.locale='ja'
                localStorage.setItem("language",'ja');
            }else if (index == 3) {
                this.$i18n.locale='ko'
                localStorage.setItem("language",'ko');
            }else if (index == 4) {
                this.$i18n.locale='de'
                localStorage.setItem("language",'de');
            }
        },
        // 返回按键
        onClickLeft() {
          this.$router.push('/')
        }
    }
}
</script>

<style>

</style>