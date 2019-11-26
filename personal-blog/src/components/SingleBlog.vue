<template>
  <div class="singleBlog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="(item,index) in blog.categories" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "singleBlog",
  data() {
    return {
      //通过$route拿到地址栏上请求的id值
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    //vue-resouce请求对应的id的数据
    this.$http
      .get(
        "https://personal-blog-a676e.firebaseio.com/addBlog/" +
          this.id +
          ".json"
      )
      .then(res => {
        // console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data);//{author: "lili", categories: Array(2), content: "丽丽", title: "丽丽"}
        this.blog = data;
      });
  }
};
</script>
<style scoped>
.singleBlog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>