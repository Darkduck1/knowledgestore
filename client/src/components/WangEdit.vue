<template>
    
    <div>
        <div>
            <label style="color:#00CCFF;font-size: 25px;">知识编辑页</label> 
        <div style="float:right"><el-button type="primary" v-on:click="showTitleEditWindow(true)">设置标题、标签</el-button></div>
        
        </div>
        
        <br>
        <div style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
        />
        </div>
        <br>
        <router-link
        :to="{
          path:'../mypage',
          query:{
            UID:this.UID,
          },
          param:{}
        }"></router-link>
        <el-button type="primary" v-on:click="pushEvent(false)">提交</el-button>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-button  v-on:click="pushEvent(true)">暂存草稿</el-button>
        <!---->
        <TitleEditWindow v-show="titleEditFlag" v-bind:labelList="labelList" v-bind:articleName="articleName" v-bind:customLabel="customLabel" @change="changeValueTitle"> </TitleEditWindow><!--给子组件串show参数-->
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import TitleEditWindow from './EditPageComponents/TitleEditWindow.vue'
export default Vue.extend({
    components: { Editor, Toolbar,TitleEditWindow },
    props:[
        'editType','articleId','UID'//editType=edit必须传articleId，=create必须传UID
    ],//接受父组件的值
    data() {
        return {
            editor: null,
            html: '',
            toolbarConfig: { },
            //配置这样写
            editorConfig: {
                placeholder: '请输入内容...' ,
                MENU_CONF:{
                    uploadImage:{
                        customUpload: this.uploadImg//重写上传方法
                    }   
                }
            },
            mode: 'default', // or 'simple'
            titleEditFlag: false,
            articleName:'',
            customLabel:"",
            labelList:[],
            //editType:this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.editType
        }
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        pushEvent(isStore){
            if(this.articleName==""||this.html==""){
                alert("文章标题或内容不能为空")
            }
            else{
                console.log('要发送的信息：')
                console.log(this.html)
                console.log(this.labelList)
                console.log(this.articleName)
                console.log(this.customLabel)
                console.log(this.articleId)
                console.log(this.UID)
                console.log(this.editType)
                console.log(isStore)
                if(this.editType=="edit"){
                    console.log("当前为修改模式")
                    let backData=new FormData()
                    backData.append('src',this.html)
                    backData.append('articleName',this.articleName)
                    backData.append('customLabel',this.customLabel)
                    backData.append('articleId',this.articleId)
                    backData.append('labelList',this.labelList)
                    backData.append('isStore',isStore)
                    axios({
                        url: 'http://localhost:8081/edit/editarticle',
                        method: 'post',
                        data: backData,//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
                        }).then((response) => { 
                            alert(response.data.status)
                            this.$router.push({path:'/mypage',query:{UID:this.UID}}) //得到后端响应后再跳转
                        });

                }
                else if(this.editType=="create"){
                    let backData=new FormData()
                    backData.append('src',this.html)
                    backData.append('articleName',this.articleName)
                    backData.append('customLabel',this.customLabel)
                    backData.append('labelList',this.labelList)
                    backData.append('isStore',isStore)
                    backData.append('UID',this.UID)
                    console.log("当前为创建模式")
                    axios({
                        url: 'http://localhost:8081/edit/createarticle',
                        method: 'post',
                        data: backData,//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
                        }).then((response) => {
                            alert(response.data.status)
                            this.$router.push({path:'/mypage',query:{UID:this.UID}}) //得到后端响应后再跳转
                        });
                }
            }
        },
        storeEvent(){

        },
        uploadImg(file, insertFn){
            let imgData = new FormData();
			imgData.append('pic', file);//对应RequestParam value = "pic"
             //调接口，上传图片
            axios({
            url: 'http://localhost:8081/api/uploadimg',
            method: 'post',
            data: imgData,//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
            }).then((response) => {
            insertFn(response.data.picURL);//data为后端返回的JSON
            alert(response.data.status)
                });
        },
        showTitleEditWindow(visiable){
            this.titleEditFlag=visiable
        },
        changeValueTitle(param1,param2,param3){//父组件监听事件，子组件通过$emit('change',this.childValue.toString(),this.childTitle)
            console.log(param1)
            console.log(param2)
            console.log(param3)
            this.labelList=param1
            this.articleName=param2
            this.customLabel=param3
        }
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        /*setTimeout(() => {
            this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
        }, 1500)*/
        //this.edittype=this.$parent.$parent.edittype
        if(this.editType!='create'){
            //console.log(this.value)
            //console.log(this.title)
            let backData=new FormData()
            backData.append("articleId",this.articleId)
            axios({
            url: 'http://localhost:8081/edit/getarticle',
            method: 'post',
            data: backData,//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
            }).then((response) => {
                //data为后端返回的JSON
                console.log(response.data)
                this.labelList=response.data.labelList
                this.customLabel=response.data.customLabel
                this.html=response.data.src
                this.articleName=response.data.articleName
            });
        }
        console.log(this.editType)
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() //组件销毁时，及时销毁编辑器
    },
})
</script>
<style src="@wangeditor/editor/dist/css/style.css">

</style>