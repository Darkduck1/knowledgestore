<template>
<div class="box">
  <br/>
  <label style="font-size:17px">设置知识标题和标签<br/></label>
  <br/>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="知识标题"  prop="childTitle"> 
      <el-input type="text" style="width:80%" v-model="ruleForm.childTitle" autocomplete="off" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item label="选择标签" prop="checkPass" >
      <el-select v-model="ruleForm.childValue" multiple placeholder="请选择" style="width:80%">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="自定义标签" prop="pass">
      <el-input type="text" style="width:80%" v-model="ruleForm.childCustomer" autocomplete="off" placeholder="请输入标签"></el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" v-on:click="clickConfirm('ruleForm')">确定</el-button>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <el-button v-on:click="closeWindow">取消</el-button>
</div>
</template>
  <script>
  import axios from 'axios'
    export default {
      props: [
        'labelList',
        'articleName',
        'customLabel'
      ],
      data() {
        return {
          ruleForm: {
            childValue:[],
            childTitle:"",
            childCustomer:""
          },
          rules:{
              childTitle:[ { required: true, message: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0请输入标题',
               trigger: 'blur' },]
            },     
          options:[],
            // childValue:[],
            // childTitle:"",
            // childCustomer:""
        };
      },
      methods: {
        closeWindow(){
          this.$parent.showTitleEditWindow(false)
          this.ruleForm.childValue=this.labelList
          this.ruleForm.childTitle=this.articleName
          this.ruleForm.childCustomer=this.customLabel
        },
        clickConfirm(formName){
            console.log(this.ruleForm.childValue.toString()+this.childTitle)
            this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$emit('change',this.ruleForm.childValue,this.ruleForm.childTitle,this.ruleForm.childCustomer)
              this.$parent.showTitleEditWindow(false)
            } else {
              console.log("表单内容有误")
              return false;
            }
          })
        },
      },
      
    //   emitEvt(evt){
    //     this.value = evt.detail.value
    // },
    mounted () {
   // setTimeout模拟异步数据
   axios({
                    url: 'http://localhost:8081/edit/getlabellist',
                    method: 'post',
                    data:{},//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
                    }).then((response) => {
                        console.log(response.data)
                        this.options=response.data
                    });
    setTimeout(() => {
    console.log('parent 组件结束')
    console.log(this.articleName)
      this.ruleForm.childValue=this.labelList
      this.ruleForm.childTitle=this.articleName
      this.ruleForm.childCustomer=this.customLabel
      console.log(this.customLabel)
     }, 200)
  }
    }
  </script>
<style>
    .box{
    position: fixed;
    left: 30%;
    top:100px;
    border:1px solid gray;
    width: 35%;
    height: 350px;
    background-color: white;
    border-radius: 2%
}
</style>