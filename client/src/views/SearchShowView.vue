<template>
    <div >
    <el-container>
        <el-header>
        <template>
        <TopMenuVue></TopMenuVue>
        </template>
        </el-header>
        <el-main>
            <SearchMainVue></SearchMainVue>
        </el-main>
    </el-container>
    </div>
</template>
<script>
import TopMenuVue from '@/components/TopMenu.vue';
import SearchMainVue from  '@/components/SearchMain.vue'
export default {
    components:{
        TopMenuVue,
        SearchMainVue
    },
   
}
</script>
<style>

</style>
