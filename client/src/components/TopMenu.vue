<template>
  <div  class="topMenu" style="background-color:rgb(255,255,255)">
  <el-row :gutter="10">
    <el-col :span="2">
      <template><IconKVue></IconKVue></template>
    </el-col>
    <el-col  :span="4">
        <template><SelectBarVue></SelectBarVue></template>
    </el-col>
    <el-col :span="12" >
        <template><div><SearchBarVue></SearchBarVue></div></template>
    </el-col>
    <el-col :span="6">
      <template>
        <UserLoggedVue v-if="this.$route.query.UID!=null&&this.$route.query.UID!=''"></UserLoggedVue>
        <UserNotLogVue v-else></UserNotLogVue>
      </template>
    </el-col>
  </el-row>

  </div>
    
</template>

<script>
import SearchBarVue from './TopMenuComponents/SearchBar.vue'
import SelectBarVue from './TopMenuComponents/SelectBar.vue'
import UserLoggedVue from './TopMenuComponents/UserLogged.vue'
import UserNotLogVue from './TopMenuComponents/UserNotLog.vue'
import IconKVue from './IconK.vue'
export default {
  components: {
    SearchBarVue,
    SelectBarVue,
    UserLoggedVue,
    UserNotLogVue,
    IconKVue
  },
  data(){
    return{
      logged : true,

    }
  }
}

</script>
<style>
.topMenu{
  vertical-align: bottom;

}
</style>