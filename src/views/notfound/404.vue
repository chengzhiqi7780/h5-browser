<template>
    <div class="bgcpage">
        <div class="text_box1">
            <div class="text_box">
                <p class="text1">
                    {{ $t("message.noexist") }}
                </p>
                <p>
                    <a @click="link">
                        {{ $t("message.backhome") }}
                    </a>
                </p>
            </div>
            
                
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    created() {
        // console.log($t("message.backhome"))
    },
    methods:{
        link() {
            this.$router.push('/')
        }
    }
}
</script>
    
<style lang="less">
.bgcpage {
    width:100%;
    height:100%;
    .text_box1 {
        padding-top:60%;
        .text_box {
        display: flex;
        flex-direction:column;
        justify-content: center;//实现水平居中
        align-items: center;//实现垂直居中
        .text1 {
        color: black;
        margin-bottom:0.5rem;
    }
    }
    }
    
    
}
</style>