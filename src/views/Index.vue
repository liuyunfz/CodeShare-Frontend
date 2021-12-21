<template>
    <el-container>
        <el-header class="main_head"><el-link type="primary" id='mainNav' href='/#/CodeShare'>CodeShare</el-link></el-header>
        <el-main class="main_container">
            <router-view/>
        </el-main>
        <el-footer style="text-align: center;font-size: .8em;">
            <p><a>Copyright&nbsp;©&nbsp;2021&nbsp;</a><a href="mailto:ly@6yfz.cn">liuyunfz</a></p>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    
    methods:{
    },
    created(){
        if(this.$route.name=="Index"){
            this.$router.replace({path:"/CodeShare"});
        }
    }
}
</script>

<style>
.main_container{
    width: 76.67%;
    margin: 0 auto;
}
.main_head{
    height: 10%;
    width: 100%;
    background-color: #343a40;
}
body{
    margin: 0px;
}
#mainNav{
    color:#fff;
    text-align: center;
    font-size: 1.25rem;
    height: 100%;
    padding-top: 0;
    /* 0.9625rem */
}
</style>