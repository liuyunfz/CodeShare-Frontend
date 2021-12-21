<template>
    <div>
        <el-col :sm="24" :lg="24" style="background-color:#e9ecef;">
            <el-result icon="success" title="保存成功">
            <template slot="extra">
                <p><a>分享代码的地址：<a :href='url'>{{url}}</a></a></p>
                <p>
                <el-popover
                    placement="right"
                    width="100"
                    trigger="hover"
                    style="width:100px;height: 100px">
                    <vue-qr :logoSrc="imageUrl" :text="url" :size="150"></vue-qr>
                    <el-button type="text" slot="reference">扫描二维码</el-button>
                </el-popover>
                </p>
                <el-button type="primary" size="medium" @click="backToShare">继续分享</el-button>
            </template>
            </el-result>
        </el-col>
    </div>
</template>

<script>
import {Message} from 'element-ui';
import vueQr from 'vue-qr';
export default {
    created(){
        if(this.$route.query.param==undefined){
            this.$router.replace('/CodeShare');
        }else{
            this.$copyText(this.url).then(function (e) {
                Message.success('分享成功，已自动复制分享URL');
                }, function (e) {
                Message.error('分享URL自动复制失败，请手动复制分享');
            })
        }
    },
    data(){
        return {
            imageUrl: require("../assets/logo.png"),
            url:'http://'+window.location.host+'/#/ShowCode#'+this.$route.query.param.data.param,

        }
    },
    components: {
        vueQr
    },
    methods:{
        backToShare(){
            this.$router.push({path:"/CodeShare"});
        }
    }
}
</script>

<style>

</style>