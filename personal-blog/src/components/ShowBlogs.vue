<template>
  <div id="show-blogs" v-theme:col="'wide'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search" />
    <div v-for="(blog,index) in filteredBlogs" :key="index" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-custome>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | snipter}}</article>
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
    //测试用：jsonplaceholderd地址<--https://jsonplaceholder.typicode.com/posts-->
    //firebase地址：<--https://personal-blog-a676e.firebaseio.com/-->
    this.$http
      .get("https://personal-blog-a676e.firebaseio.com/addBlog.json")
      .then(res => {
        // console.log(res);
        // 将返回回来的数据json化
        return res.json();
        // console.log(res.json());
      })
      .then(data => {
        //拿到了firebase中中存储的数条数据
        // console.log(data); //{-Lud98ACO05ts01X9wo8: {…}, -LudARLTkvG7SF5K6gyg: {…}}
        var blogsArray = [];
        for (let key in data) {
          // console.log(key); //-Lud98ACO05ts01X9wo8  -Lud98ACO05ts01X9wo8
          // console.log(data[key]); //{author: "alvis", categories: Array(1), content: "这是第一条数据", title: "alvie first"}   {author: "lili", categories: Array(2), content: "丽丽", title: "丽丽"}

          //在每个对象中添加一个id,id的内容就是我们拿到的key值
          data[key].id = key;
          blogsArray.push(data[key]);
          // console.log(blogsArray);
        }
        this.blogs = blogsArray;
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