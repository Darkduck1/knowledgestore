<template>
    <div class="flex BodyBox ">
        <div class="SearchMain">
            <div class="SearchTitle" v-if="this.SearchResult.total!=0">搜索结果：</div>
            <div class="SearchTitle" v-else>未找到结果</div>

            <ItemsListVue :pageNumber="nowPage" :Result="SearchResult" ></ItemsListVue>
            <el-pagination
                @current-change="handleCurrentChange"
                hide-on-single-page
                background
                :page-size="SearchResult.pagesize"
                layout="prev, pager, next"
                :total="SearchResult.total"
                :page-count="SearchResult.pagecount"
                :current-page="parseInt(nowPage)+1"
                >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ItemsListVue from './ShowListComponents/ItemsList.vue';
export default{
    components:{
        ItemsListVue
    },

    created(){
        console.log(this.$route.query)
        this.getSearchResult()
    },
    methods:{
        getSearchResult(){
            axios({
            url:"search",
            method:"GET",
            params:{
                keyword:this.keyword,
                nowPage:this.nowPage
            }
        }).then(res=>{
            console.log(res)
            this.SearchResult.content=res.data.content.searchHits
            this.SearchResult.pagecount=res.data.totalPage
            this.SearchResult.pagesize=res.data.pageSize
            this.SearchResult.total=res.data.totalElement
        }
        )
        },
        
        handleCurrentChange(val) {
            console.log(val);
            this.$router.push({
            path:"/search",
            query:{
                keyword:this.$route.query.keyword,
                nowPage:val-1
          }
          
        })
        window.location.reload()

        }
    },
    watch:{
        $route(to,from){
            console.log(to)
            console.log(from)

            this.getSearchResult()
        }
    },
    data(){
        return {
            keyword:this.$route.query.keyword,
            nowPage:this.$route.query.nowPage,
            SearchResult:{
                pagesize:0,
                total:0,
                pagecount:0,
                content:[]
            }
        }
    }    
}
</script>
<style>
.SearchLabel{
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
.SearchResultItem{
    padding: 5%;
    padding-bottom: 1%;
    text-align: left;
}
.SearchResultList{
    flex-wrap:wrap;
    display: inline-flex;
    width: 100%;
}
.SearchTitle{
    padding: 5%;
    padding-bottom: 0%;
    text-align: left;
}
.SearchMain{
    background-color: white;    
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    width: 80%
}
.BodyBox{
    justify-content: center;
}
.flex{
    display: flex;
}

</style>