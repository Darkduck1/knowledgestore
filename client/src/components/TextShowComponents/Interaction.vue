<template>
    <div>
         <!-- 交互动作条 -->
         <div class="interaction">
            <el-button id="commend" class="leftbuttonstyle" @click="drawer=true">{{commend }}</el-button>
            <el-button id="saving" class="rightbuttonstyle" @click="changeSaveState" >{{ savingstatus }}</el-button>
            <el-button id="thumbup" class="rightbuttonstyle" @click="changeThumbUpState" v-text="thumbupstatus"></el-button>
            <el-button id="sharing" class="rightbuttonstyle">{{ sharingstatus }}</el-button>
         </div>
            
        <!--评论弹窗-->
        <div v-if="drawer" class="commentDrawer">
            <br>
            <span>评论区</span>
            <span @click="drawer = false" style="cursor: pointer;float: left;margin-left: 10px">关闭</span>
            <!--输入框-->
            <div class="inputComment">
                <textarea v-model="textareaContent" placeholder="说点什么..." maxlength="200" @input="calcInput">
                </textarea>
                <span style="font-size: 14px;float: left">还可以输入{{ canInputText }}个字符</span>
                <span class="sent">发送</span>
            </div>
        </div>    
    </div>
</template>
<script>
export default{
    data(){
        return{
            savingstatus:'收藏',
            saving:false,
            thumbupstatus:'点赞',
            thumbup:false,
            sharingstatus:'分享',
            commend:'评论',
            drawer: false,
            textareaContent: '',
            canInputText: 200,
        };
    },
    method: {
        //跳转评论详情
        toCommend() {
            this.drawer = !this.drawer
        },
        //计算输入字数
        calcInput() {
            let len = this.textareaContent.length;
            this.canInputText = 200 - len;
        },
        //修改save状态
        changeSaveState(){
            this.saving=!this.saving;
            console.log(this.saving);
            if(saving){
                this.savingstatus='已收藏';
            }else{
                this.savingstatus='收藏';
            }
        },
        //修改点赞状态
        changeThumbUpState(){
            this.thumbup=!this.thumbup;
            if(thumbup){
                this.thumbupstatus='已点赞';
            }else{
                this.thumbupstatus='点赞';
            }
        },

    },
}
</script>
<style>
.interaction{
    height: 40%;
    width: 100%;
}
.leftbuttonstyle{
    height: 100%;
    width: 10%;
    float: left;
}
.rightbuttonstyle{
    height: 100%;
    width: 10%;
    float: right;
    border:1px solid gray;
}
.commentDrawer {
    position: fixed;
  z-index: 2005;
  width: 30%;
  height: 100%;
  right: 0;
  top: 0;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: white;
}

.inputComment {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 5%;
  width: 88%;
  margin-left: 3%;
  position: relative;
  height: 185px;
  border-radius: 13px;
  padding: 3%;

}

.inputComment textarea {
  width: 98%;
  position: relative;
  height: 150px;
  border: 0 solid;
  outline: none;
  resize: none;
  background-color: var(--main-bg-color);
  color: var(--text-color);
}

.inputComment .sent {
  border-radius: 30px;
  background-color: #ee464b;
  color: white;
  padding: 2px 15px;
  font-size: 16px;
  float: right;
  cursor: pointer;
  height: 25px;
}

</style>