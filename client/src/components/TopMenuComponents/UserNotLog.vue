<template>
  <el-popover
    placement="top-start"
    width="150"
    trigger="hover">
    <el-button type="text" class="ButtonWrap" @click="jumpToLogin()">登陆</el-button>
    <el-button type="text" class="ButtonWrap">首次使用？立即注册</el-button>
    <el-avatar slot="reference" icon="el-icon-user-solid">
    </el-avatar>
  </el-popover>
</template>
<style>
.ButtonWrap{
    /* 设置margin为0，否则会错位，不加important失效 */
    margin: 0px !important;
    width: 100%;
    
}
</style>
<script>
  export default {
    methods:{
      jumpToLogin(){
        this.$router.push({path:'/login'})
      }
    }
  }
</script>