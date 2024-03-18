<template>
    <div>
        <div class="TypeBox">
        <span >
            <ul v-for="item in typelist1" :key="item">{{item}}</ul>
        </span>
        <span >
            <div class="HomePageTitle">
                知识库
            </div>
            <el-image :src="require('@/assets/logo-v2.png')">
            </el-image>
        </span>
        <span >
            <ul v-for="item in typelist2" :key="item">{{item}}</ul>
        </span>
        </div>
        <div class="HomeSearchBar">
            <SearchBarVue></SearchBarVue>
        </div>
    </div>
   
   
    
</template>
<script>
import SearchBarVue from '../TopMenuComponents/SearchBar.vue';
  export default {
    data() {
      return {
        src: '@/assets/logo-v2.png',
        typelist1:['生活、艺术与文化','中华文化','社会','世界各地','宗教及信仰',],
        typelist2:['人文与社会科学','自然与自然科学','工程、技术与应用科学','常用列表','主题首页']
      }
    },
    components:{
        SearchBarVue
    }
  }
</script>
<style>
.HomePageTitle{
    font-size: 36px;
}
.TypeBox{
	display: flex;
    justify-content: center;/*水平主轴居中*/
    align-items: center;/*垂直交叉轴居中*/
}
.HomeSearchBar{
    justify-content: center;/*水平主轴居中*/
    display: flex;
}
</style>
