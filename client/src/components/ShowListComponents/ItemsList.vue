<template>
    <div>
        <div class="ItemList flex wrap">
                    <div class="ItemBox flex wrap" v-for="(item,index) in SearchResult.content" :key="index">
    
                        <div class="SearchResultTitle holdOneRow">
                            <div v-if="item.highlightFields.title ||item.content.title ">
                            <a href="" v-html="limitText(item.highlightFields.title[0])" v-if="item.highlightFields.hasOwnProperty('title')" ></a>
                            <a href="" v-html="limitText(item.content.title)" v-else></a>
                            </div>
                        </div>
                        <div>
                            <div class="flex wrap"  >
                                <div class="holdOneRow" v-if="item.highlightFields.content ||item.content.content">
                                    <p>{{TimeStampToDate(item.content.createTime)}} </p>
                                    <p v-html="limitText(item.highlightFields.content[0])" v-if="item.highlightFields.hasOwnProperty('content')"></p>
                                    <p v-html="limitText(item.content.content)" v-else></p>
                                </div>
                            </div>
                            <div class="flex wrap" v-if="item.highlightFields.label ||item.content.label">
                                <div v-for="(label,index) in item.content.label" :key="index">
                                <a class="ItemLabel" href="">{{ label }}</a>
                            </div>
                        </div>
                        <hr>
                    </div>
                    
                </div>
            </div>
    </div>
</template>
<script>
export default{
    props:['Result','pageNumber'],
    data(){
        return{
            SearchResult:this.Result,
        }
    },
    created(){
    },
    filters: {//限制文本显示字数,超出部分用...代替
        ellipsis (value) {

            if (!value) return ''
        if (value.length > 25) {
            return value.slice(0,25) + '...'//0:下标,从第一个字开始显示,50:显示字数,多余用...代替
        }
        return value
    }
  },
    methods:{
        limitText(value){
            var size=200
            if (!value) return ''
            if (value.length > size) {
            return value.slice(0,size) + '...'//0:下标,从第一个字开始显示,50:显示字数,多余用...代替
            }
            return value
        },
        TimeStampToDate(time){
            var date = new Date(time);  // 参数需要毫秒数，所以这里将秒数乘于 1000
            var Y = date.getFullYear() + '.';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
            var D = date.getDate() + ' ';
            var h = date.getHours() + ':';
            var m = date.getMinutes() + ':';
            var s = date.getSeconds();
            return Y+M+D+h+m+s;
        },
        handleSizeChange(val) {
            
            console.log(`每页 ${val} 条`);
        }
    }
}
</script>
<style>
.ItemLabel{
    padding: 5px;
}
.SearchImage{
    width: 100px; height: 100px
}
.holdOneRow{
    width:100%
}
.wrap{
    flex-wrap:wrap;
}
.SearchResultTitle{
}
.ItemBox{
    padding: 5%;
    padding-bottom: 1%;
    text-align: left;
}
.ItemList{
    flex-wrap:wrap;
    display: inline-flex;
    width: 100%;
}
</style>