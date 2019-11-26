<template>
  <div class="add-blog">
    <h2>博客添加</h2>
    <form v-if="!submitted">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label for>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="blog.categories" />
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="(author ,index) in authors" :key="index">{{author}}</option>
      </select>
      <button @click.prevent="addBlog">添加博客</button>
    </form>
    <div v-if="submitted">
      <h3>发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客预览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <ul>
        <li v-for="(item,index) in blog.categories" :key="index">{{item}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["alvis", "lili", "miqi", "pinking"],
      submitted: false
    };
  },
  methods: {
    //测试用：jsonplaceholderd地址<--https://jsonplaceholder.typicode.com/posts-->
    //firebase地址：<--https://personal-blog-a676e.firebaseio.com/-->
    addBlog: function() {
      this.$http
        //测试用：jsonplaceholderd地址
        // .post("https://jsonplaceholder.typicode.com/posts", {
        //   title: this.blog.title,
        //   body: this.blog.content,
        //   userId: 1
        // })
        .post(
          "https://personal-blog-a676e.firebaseio.com/addBlog.json",
          this.blog
        )
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    }
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.add-blog * {
  box-sizing: border-box;
}

.add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>
