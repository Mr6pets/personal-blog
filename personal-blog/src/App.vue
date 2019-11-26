<template>
  <div id="app">
    <!-- <AddBlog></AddBlog> -->
    <ShowBlogs></ShowBlogs>
  </div>
</template>
<script>
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";
export default {
  name: "App",
  components: {
    AddBlog,
    ShowBlogs
  }
};
</script>
<style>
</style>
