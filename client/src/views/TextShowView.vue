<template>
    <div >
    <el-container>
        <el-header>
        <template>
        <TopMenuVue></TopMenuVue>
        </template>
        </el-header>
        <el-main>
            <TextMainVue></TextMainVue>
            <InteractionVue></InteractionVue>
        </el-main>
    </el-container>
    </div>
</template>
<script>
import TopMenuVue from '@/components/TopMenu.vue';
import TextMainVue from '@/components/TextShowComponents/TextMain.vue';
import InteractionVue from '@/components/TextShowComponents/Interaction.vue'
export default {
    components:{
        TopMenuVue,
        TextMainVue,
        InteractionVue
    },
   
}
</script>
<style>

</style>
