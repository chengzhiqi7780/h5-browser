<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  created () {
    // 先去看看本地有没有语言种类
    let languageItem = localStorage["language"]
    console.log(languageItem)
    console.log(languageItem)
    if (languageItem == undefined) {
      // 如果为空，我先去获取本地浏览器的语言种类
      let language = navigator.language || navigator.browserLanguage
      // 我将语言存到本地
      localStorage.setItem("language",language);
      // 然后负值给store
      this.$store.commit('changement', language)
      let type = language.slice(0,2)
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
        }else if (type == "es") {
            this.radio = 5
            this.$i18n.locale='es'
        }
      
    } else {
      this.$i18n.locale = languageItem
      this.$store.commit('changement', localStorage["language"])
      console.log(this.$store)
    }
  }
  
}
</script>


<style lang="less">

@import url('./assets/style/base.css');
html,body,#app {
  width:100%;
  height:100%;
}


</style>
