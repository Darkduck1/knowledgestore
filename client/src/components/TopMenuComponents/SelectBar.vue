<template>
  <div>
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick" @select="handleSelect">
      <el-tab-pane label="首页" name="first"></el-tab-pane>
      <el-tab-pane label="分类索引" name="second"></el-tab-pane>
      <el-tab-pane label="最近更改" name="third"></el-tab-pane>
    </el-tabs> -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-submenu index="2">
      <template slot="title">首页</template>
      <el-menu-item index="homepage" route="/">首页</el-menu-item>
      <el-menu-item index="typeinHome">分类索引</el-menu-item>
      <el-menu-item index="lastchange">最近更改</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>