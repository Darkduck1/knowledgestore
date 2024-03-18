<template>
  <div>
    <el-tabs v-model="activeName"  @tab-click="handleClick" >
      <el-tab-pane label='我发布的' name="first"></el-tab-pane>
      <el-tab-pane label="正在审核  " name="second"></el-tab-pane>
      <el-tab-pane label="我的草稿  " name="third"></el-tab-pane>
      <el-tab-pane label="我的点赞  " name="forth"></el-tab-pane>
      <el-tab-pane label="我的收藏" name="fifth"></el-tab-pane>
    </el-tabs>
    <el-table :data="tableData">
      <el-table-column
        prop="articleName"
        label="文章标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="90">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="90">
      </el-table-column>
      <el-table-column
        prop="label"
        label="标签"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="150">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="editEvent(scope.row)" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articleName: 'first',
        tableData:[{
          articleId:'1',
          articleName:'标题',
          createTime:"1900-0-0",
          author:"xyz",
          label:"标签一、标签二、标签三",
          status:"审核不通过：aaaaaaa"
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      editEvent(row){//row:tableData[i]
        console.log(row.articleId)
        this.$router.push({path:'/edit',query:{articleId:row.articleId,UID:this.$route.query.UID}})
      }
    }
  };
</script>