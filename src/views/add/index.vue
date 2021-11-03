<template>
  <div>
        <van-nav-bar
        :title="$t('message.add')"
        :left-text="$t('message.back')"
        left-arrow
        @click-left="onClickLeft"
       >
        </van-nav-bar>
        <div style="margin-bottom:1rem;padding-top:0.3rem;">
          <p style="font-size:0.5rem;margin-left:0.4rem;">{{ $t("message.findnetwork") }}</p>
          <p style="font-size:0.4rem;margin-top:0.5rem;margin-left:0.4rem;">{{ $t("message.inputnetwork") }}</p>
        </div>
        <!-- 网络名称和密码的输入 -->
         <van-form>
            <van-field
                v-model="form.name"
                :name="$t('message.networkname')"
                :label="$t('message.networkname')"
                :placeholder="$t('message.networkname')"
            />
            <van-field
                v-model="form.password"
                type="password"
                :name="$t('message.password')"
                :label="$t('message.password')"
                :placeholder="$t('message.password')"
            />
            <div style="margin-top:1rem">
                <van-button style="width:2.5rem;margin-right:0.5rem;margin-left:0.5rem" plain
                round type="info" size="normal" native-type="submit" @click="onClickLeft">{{ $t("message.cancel") }}</van-button>
                <van-button style="width:2.5rem;" plain  round type="info" size="normal"
                native-type="submit" @click="add">{{ $t("message.join") }}</van-button>
            </div>
        </van-form>
        <!-- 连接面板的提示 -->
        <van-action-sheet
            v-model="show"
            :actions="actions"
            :cancel-text="$t('message.connecting')+`${this.form.name}`"
            close-on-click-action
        />
      <!-- 连接失败提示 -->
        <van-dialog v-model="isShowDialog"
        :title="$t('message.failed')"
        :confirm-button-text="$t('message.know')"
        :show-cancel-button="false">

        </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form:{
        name: '',
        password: '',
      },
      isShowDialog:false,
      // 加载提示
      actions: [
          { name: '着色选项', color: '#ee0a24',loading: true },
      ],
      show:false,
    };
  },
  watch:{
      // form:{
      //   handler() {
      //     console.log('123')
      //   },
      //   deep:true
      // }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      // this.$notify({ type: 'primary', message: '添加成功',duration: 300, });
    },
    // 点击左上角的按钮返回扫描界面
    onClickLeft() {
      console.log('123')
      this.$router.push('scan')
    },
    // 点击取消按钮返回扫描界面

    // 点击加入网络
    add() {
      console.log(this.form)
      if (this.form.name.length == 0 ) {
        console.log('123')
        this.$toast.fail(this.$t('message.notnull'));
        return
      }
      if (this.form.password.length < 8) {
        this.$toast.fail(this.$t('message.passwordlength'));
        return
      }
      this.show = true
      if (this.form.name == 'admin') {
        setTimeout(() => {
            this.show = false
            this.$router.push({
            name:'scan',
            params:{
              isSuccess:true,
              wifiName:this.form
            }
            })
        },3000);
        
      } else {

      }
       // this.actions[0].name = '正在连接'+this.form.name
      
      
      setTimeout(() => {
          this.show = false
          this.isShowDialog = true
      },3000);
    }
  },
};
</script>

<style>

</style>