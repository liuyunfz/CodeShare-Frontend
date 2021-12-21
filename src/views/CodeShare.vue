<template>
    <div>
        <div class="demo-input-suffix">
            高亮:
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:130px;">
                <el-option label="纯文本" value="Plain text"></el-option>
                <el-option label="Java" value="Java"></el-option>
                <el-option label="Python" value="Python"></el-option>
                <el-option label="C/C++" value="C/C++"></el-option>
            </el-select>
        </div>
        <div style="margin-top: 15px;">
            <el-input
            type="textarea"
            :rows="12"
            placeholder="写点什么进来吧"
            v-model="textarea">
            </el-input>
        </div>
        <div style="margin-top:15px;">
            <el-button type="primary" plain @click="saveCode">保存</el-button>
            <el-switch
            v-model="is_permanent"
            active-text="置为永久"
            inactive-color="#ff4949"
            style="margin-left:15px;">
            </el-switch>
        </div>
    </div>
</template>

<script>
import {postRequest} from '../uitls/api';
export default {
    data(){
        return{
            select : "Plain text",
            is_permanent: false,
            textarea: ""
        }
    },
    methods:{
        saveCode(){
            postRequest('/save',{"code": this.textarea,
                                "language": this.select,
                                "is_permanent": this.is_permanent}).then(resp=>{
                                    this.$router.push({path:"/CodeResult",query: {param: resp}});
                                })

        }
    }
}
</script>

<style>

</style>