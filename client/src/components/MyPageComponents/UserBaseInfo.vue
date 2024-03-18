<template>
    <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">{{ username }}</el-descriptions-item>
    <el-descriptions-item label="电子邮件" id="userMail">{{userMail}}</el-descriptions-item>
    <br>
    <el-descriptions-item label="居住地">合肥市</el-descriptions-item>
    <el-descriptions-item label="权限">
      <el-tag size="small" id="userLimit">{{ userLimit }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="注册时间">{{createDays}}</el-descriptions-item>
</el-descriptions>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            username: '-1',
            userid: '-1',
            userMail: '-1',
            userLimit: '-1',
            createDays:-2
        }
    },
    mounted(){
        setTimeout(() => {
        console.log('parent 组件结束')
        let backData=new FormData()
        backData.append('UID',this.UID)//对应@RequestParam(value = "UID") String UID
        axios({
                url: 'http://localhost:8081/profile/userprofile',
                method: 'post',
                data: backData,//请求体中内容，用于post.  param：请求头中内容,参数在url中，用于get
                }).then((response) => {
                    //data为后端返回的JSON
                    console.log(response.data)
                    this.username=response.data.userName
                    this.userid=this.UID
                    this.userMail=response.data.email
                    if(response.data.priority==1){
                        this.userLimit="管理员"
                    }
                    this.createDays=response.data.createDays
                });
        }, 50)
  },
    props:['UID']
}
</script>
