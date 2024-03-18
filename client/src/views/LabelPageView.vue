
<template>
  
  <el-container>
  <el-header>
    <template>
    <TopMenuVue></TopMenuVue>
    </template>
  </el-header>
  <el-main>
    <LabelMainVue></LabelMainVue>
  </el-main>
  </el-container>
</template>
<script>
// @ is an alias to /src
import TopMenuVue from '@/components/TopMenu.vue'
import HomePageMainVue from '@/components/HomePageComponents/HomePageMain.vue'
import LabelMainVue from '@/components/LabelMain.vue';
export default {
components: {
  TopMenuVue,
  HomePageMainVue,
  LabelMainVue
}
}
</script>
