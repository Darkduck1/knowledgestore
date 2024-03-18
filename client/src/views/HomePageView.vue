
<template>
  
    <el-container>
    <el-header>
      <template>
      <TopMenuVue></TopMenuVue>
      </template>
    </el-header>
    <el-main>
      <HomePageMainVue></HomePageMainVue>
    </el-main>
    </el-container>
</template>
<script>
// @ is an alias to /src
import TopMenuVue from '@/components/TopMenu.vue'
import HomePageMainVue from '@/components/HomePageComponents/HomePageMain.vue';
export default {
  components: {
    TopMenuVue,
    HomePageMainVue
  }
}
</script>
