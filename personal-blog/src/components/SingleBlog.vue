<template>
  <div class="singleBlog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="(item,index) in blog.categories" :key="index">{{item}}</li>
    </ul>
    <button @click="deleteSingleBlog" class="delBlog">删除博客</button>
    <div class="editBlog">
      <router-link :to="/edit/+this.id">编辑博客</router-link>
    </div>
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
  },
  methods: {
    deleteSingleBlog() {
      this.$http
        .delete(
          "https://personal-blog-a676e.firebaseio.com/addBlog/" +
            this.id +
            ".json"
        )
        .then(response => {
          //删除成功跳转到博客页面
          this.$router.push({ path: "/" });
        });
    }
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
.delBlog {
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 2px;
  background-color: rgb(70, 161, 209);
  color: white;
  font-size: 16px;
  margin: 0 5px;
}
.editBlog {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
  background-color: green;
  font-size: 16px;
  display: inline-block;
}
.editBlog a {
  text-decoration: none;
  color: white;
}
</style>