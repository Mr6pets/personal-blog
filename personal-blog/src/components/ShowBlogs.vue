<template>
  <div id="show-blogs" v-theme:col="'wide'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
      <h2 v-custome>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snipter}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name: "showBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    //placeolder在线地址
    //https://jsonplaceholder.typicode.com/posts
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      // console.log(data);
      this.blogs = data.body.slice(0, 10);
      console.log(this.blogs);
    });
  },
  computed: {
    filteredBlogs() {
      // 过滤每一条数据和数据中的title进行对比
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  // filters: {
  //   //局部的过滤方法，只能在本页面中使用---------在这里定义的函数会报错，原因还没有找到，记录下
  //   // "to-uppercase": function(value) {
  //   //   return value.toUppercase();
  //   // }
  //   // toUppercase(value) {
  //   //   return value.toUppercase();
  //   // }
  // }
  directives: {
    custome: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>