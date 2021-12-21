<template>
    <div>
        <p style="padding: 16px 12px 36px 12px;background-color:#f7f7f7;border-radius: 4px">
            <span style="float:left;"><a>{{lines}} 行 | {{language}}</a></span>
            <span style="float:right;"><el-link type="primary" icon='el-icon-document-copy' @click="copyCode">复制</el-link></span>
            
        </p>
        <p style="padding-right: 12px;">
        <prism-editor id='codes' class="my-editor" v-model="codeTxt" :highlight="highlighter" line-numbers :readonly='true'></prism-editor></p>
    </div>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
import { Message } from 'element-ui';
import {getRequest} from '../uitls/api';
export default { 
    components: {
        PrismEditor
    },
    data(){
        return{
            codeTxt:'',
            lines:0,
            language:"Plain text",
        }
        
    },
    created(){
        var url = window.location.href;
        let arr = url.split('#');
        getRequest('/code/'+arr[arr.length-1]).then(resp=>{
            this.codeTxt=resp.data.code;
            this.language=resp.data.language;
            this.lines = this.codeTxt.split('\n').length;
        })
        
    },
    methods:{
        copyCode(){
            this.$copyText(this.codeTxt).then(function (e) {
                Message.success('代码复制成功');
                }, function (e) {
                Message.error('代码复制失败');
                console.log(e)
            })
        },
        highlighter(code) {
            return highlight(code, languages.js); // languages.<insert language> to return html with markup
        }
    }
}
</script>


<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  border-radius: 4px;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}


.height-300 {
  height: 300px;
}
</style>
