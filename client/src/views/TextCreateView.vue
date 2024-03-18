<template>
    <div >
    <el-container>
        <el-header>
        <template>
        <TopMenuVue></TopMenuVue>
        </template>
        </el-header>
        <el-main>
            <WangEditVue v-bind:editType="editType" v-bind:articleId="articleId" 
            v-bind:UID="UID"></WangEditVue><!--通过标签传值,v-bind动态单向,解析引号内容,-->
        </el-main>
    </el-container>
    </div>
</template>
<script>
import TopMenuVue from '@/components/TopMenu.vue';
import TextMainVue from '@/components/TextShowComponents/TextMain.vue';
import WangEditVue from '@/components/WangEdit.vue';
export default {
    data(){
        return{
            editType:'create',//要向子组件传的值，设置富文本编辑器的模式是创造还是编辑
            articleId:this.$route.query.articleId,
            UID:this.$route.query.UID//用户名、文章id
            //UID:"aaa"
        }
   },
    components:{
        TopMenuVue,
        TextMainVue,
        WangEditVue
    },
    mounted(){
        //alert(this.edittype)
        
    },

}
</script>
<style>

</style>
