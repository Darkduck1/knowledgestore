<template>
    <div class="LabelBox">
        <div class="LabelMain">
            <div class="LabelTitle">知识库分类索引：</div>
            <div class="LableList">
                
                <div  class="LabelItem" v-for="(item) in label" :key="item">
                    <div>
                       <el-image :src=labelImagSrc[0].imagesrc ></el-image>
                    </div>
                    <div>
                        {{ item.labelname }}
                    </div>
                    <div  class="inline-flex moreitem" v-for="(moreitem) in item.more" :key="moreitem">
                       <div>
                        <a :href="moreitem.src">{{moreitem.morelabel}}</a>
                       </div>
                       －
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default{
    data(){
        return{
            labelImagSrc:[{
                imagesrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Crystal_Project_colors.png/35px-Crystal_Project_colors.png",
            },],
            label:[
            {
                labelname:'生活、艺术与文化',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
                
            },
            {
                labelname:'中华文化',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname:'社会',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname:'世界各地',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname:'宗教及信仰',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname: '人文与社会科学',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname: '自然与自然科学',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname: '工程、技术与应用科学',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname: '常用列表',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            {
                labelname: '主题首页',
                more:[{morelabel:'收藏',src:''},{morelabel:'饮食',src:''},{morelabel:'服装',src:''},{morelabel:',交通',src:''}],
            },
            ],
            

        }
    }
}
</script>
<style>
.moreitem{
    font-size: 10px;
}
.inline-flex{
    display: inline-flex;
}
.LabelItem{
    padding: 5%;
    padding-bottom: 1%;
    text-align: left;
    width: 40%;
}
.LableList{
    flex-wrap:wrap;
    display: inline-flex;
    width: 100%;
}
.LabelBox{
    display: flex;
    justify-content: center;
}
.LabelMain{
    background-color: white;    
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 80%;
}
.LabelTitle{
    padding: 5%;
    padding-bottom: 0%;
    text-align: left;
}
</style>