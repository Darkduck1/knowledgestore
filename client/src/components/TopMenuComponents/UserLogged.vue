<template>
  <el-popover
    placement="top-start"
    width="150"
    trigger="hover">
    <el-button type="text" class="ButtonWrap" @click="jumpToMyPage">个人中心</el-button>
    <el-button type="text" class="ButtonWrap">我的知识</el-button>
    <el-button type="text" class="ButtonWrap" @click="jumpToLogin">退出 <i class="el-icon-arrow-right"></i></el-button>
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
data () {
    return {}
     },
methods: {
  jumpToMyPage() {
      this.$router.push({path:'/mypage',query:{UID:this.$route.query.UID}})
    },
  jumpToLogin(){
    this.$router.push("/login")
  }
}
 
}
</script>
