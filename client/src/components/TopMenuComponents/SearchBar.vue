<template>
  <el-row :gutter ="10">
  <el-col>
    <el-input
        placeholder="请输入搜索内容"
        v-model="input"
        clearable
        @keyup.enter.native="handleSearchClick"
        >
        <el-button slot="append" icon="el-icon-search" @click="handleSearchClick" ></el-button>
    </el-input>
  </el-col>
</el-row>
</template>
<script>
  export default {
    created(){
      console.log(this.$route.query.keyword ==null)
      if(this.$route.query.keyword !=null){
        console.log()
        this.input=this.$route.query.keyword
      }
    },
    data() {
      return {
        input: ''
      }
    },
    methods:{
      handleSearchClick(){
        console.log(this.input)
        this.$router.push({
          path:"search",
          query:{
            keyword:this.input,
            nowPage:0
          }
          
        })
        console.log(this.$route.path)
        if(this.$route.path=='/search'){
          window.location.reload()

        }
      }
    }
  }
</script>