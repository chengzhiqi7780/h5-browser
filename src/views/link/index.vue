<template>
  <div>
        <van-nav-bar
        :title="$t('message.connections')"
        :left-text="$t('message.back')"
        left-arrow
        @click-left="onClickLeft"
       >
        </van-nav-bar>

         <van-form @submit="onSubmit">
            <van-field
                v-model="password"
                type="password"
                :name="$t('message.password')"
                :label="$t('message.password')"
                :placeholder="$t('message.password')"
            />
            <div style="margin-top:2rem;text-align:center">
                <van-button style="width:2.5rem;margin-right:0.5rem;margin-left:0.5rem" plain
                round type="info" size="normal" native-type="submit" >{{ $t("message.cancel") }}</van-button>
                <van-button style="width:2.5rem;" plain  round type="info" size="normal"
                native-type="submit" :disabled="isDisable" @click="connect">{{ $t("message.join") }}</van-button>
            </div>
        </van-form>
        <!-- 连接面板的提示 -->
        <van-action-sheet
            v-model="show"
            :actions="actions"
            :cancel-text="$t('message.connecting')+`${this.$route.params.wifiName.name}`"
            close-on-click-action
        />
        <!-- 连接失败提示 -->
        <van-dialog v-model="isShowDialog"
        :title="$t('message.passworderror')"
        :confirm-button-text="$t('message.know')"
        :show-cancel-button="false">

        </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      isDisable:true,
    // 动作面板的显示
      show: false,
    //   连接错误提示
    isShowDialog:false,
      actions: [
          { name: '着色选项', color: '#ee0a24',loading: true },
      ],
    };
  },
  watch:{
      'password':{
        handler() {
            if (this.password.length < 2) {
                this.isDisable = true
            } else {
                this.isDisable = false
            }
        }
      }
  },
  created() {
  },
  methods: {
    onSubmit(values) {
      // this.$notify({ type: 'primary', message: '添加成功',duration: 300, });
    },
    onClickLeft() {
        this.$router.push('scan')
    },
    // 连接Wi-Fi
    connect() {
        if (this.password == '12') {
            this.show = true,
            setTimeout(() => {
                this.show = false
                this.$router.push({
                  name:'scan',
                  params:{
                    wifiName:this.$route.params.wifiName
                  }
                })
            },3000);
        } else {
            // this.actions[0].name = '正在连接'+this.$route.params.wifiName
            console.log(this.actions[0].name)
            this.show = true,
            setTimeout(() => {
                this.show = false
                this.isShowDialog = true
            },3000);

        }
    }
  },
};
</script>

<style>

</style>