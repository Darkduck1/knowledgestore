<template>
    <div>
        <div>
            标题
        </div>
        <div>
            <span>分类1</span>|
            <span>分类2</span>
        </div>
        <div class="TextBox" >
            <div class="MainContext">
                <p v-html="context"></p>
            </div>
        </div>
    </div>
    
</template>
<script>
export default{
    data(){
        
        return{
            context:"<p style=\"text-align: left;\">hello world</p><p><img src=\"https://www.bing.com/th?id=OHR.BeverleyWestwood_ZH-CN3729041588_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50\" alt=\"aaa\" data-href=\"a\" style=\"width: 262.00px;height: 147.38px;\"/></p><p><br></p><hr/><p><br></p>"
            // context:"<a href='https://blog.csdn.net/zl18603543572'>早起的年人的文章</a>"
        }
    }
}

</script>
<style>
.TextBox{
	display: flex;
    justify-content: center;/*水平主轴居中*/
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.interaction{
    height: 10%px;
    width: 100%;
}
.MainContext{
    width: 75%;
}
.buttoninlinestyle{
    height: 100%;
    width: 10%;
    float: right;
}
.MainContext{
    width: 75%;
}
</style>