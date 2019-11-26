<template>
  <div id="app">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <!-- <AddBlog></AddBlog>
    <ShowBlogs></ShowBlogs>-->
  </div>
</template>
<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
import NavHeader from "./components/NavHeader";
export default {
  name: "App",
  components: {
    NavHeader
    // AddBlog,
    // ShowBlogs
  }
};
</script>
<style scoped>
</style>
