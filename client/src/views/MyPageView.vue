
<template>
  <div style="background-color:white;height:1000px">
    <el-container>
    <el-header >
        <TopMenuVue></TopMenuVue>
    </el-header>
    <el-main>
      <img src="../assets/myPageBackground.jpg" style="width: 100%;height: 110px;">
      <img src="../assets/headPortrait.jpg" class="headPortrait">
      <UserBaseInfo class="userBaseInfo" v-bind:UID="UID"></UserBaseInfo>
      <el-button round class="changeBackGround">修改封面图片</el-button>
      <router-link
        :to="{
          path:'../create',
          query:{
            UID:'1',
            articleId:'1'
          },
          param:{}
        }">
        <el-button type="primary" class="startCreate">创建文章</el-button><!--url参数跳转-->
      </router-link>
    </el-main>
    <el-main>
      <select-bar class="selectBar"></select-bar>
    </el-main>
    </el-container>
    </div>
</template>

<script>
// @ is an alias to /src
import TopMenuVue from '@/components/TopMenu.vue'
import UserBaseInfo from '@/components/MyPageComponents/UserBaseInfo.vue';
import SelectBar from '@/components/MyPageComponents/SelectBar.vue';
import axios from 'axios';
//import HomePageMainVue from '@/components/HomePageComponents/HomePageMain.vue';
export default {
  components: {
    TopMenuVue,
    UserBaseInfo,
    SelectBar
  },
  data(){
    return{
      UID:this.$route.query.UID
    }
  },
  mounted(){
    
  }
}
</script>
<style>
  .headPortrait{
    height: 100px;
    left: 10%;
    top: 170px;
    position: absolute;
  }
  .userBaseInfo{
    left: 25%;
    position: absolute;
  }
  .startCreate{
    position: absolute;
    left: 70%;
    width: 17%;
    height: 7%;
    top:300px
  }
  .changeBackGround{
    position: absolute;
    left: 70%;
    top:150px;
    opacity: 0.5;
  }
  .selectBar{
    position: absolute;
    top: 320px;
    left: 20%;
  }
</style>
