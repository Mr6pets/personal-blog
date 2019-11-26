<template>
  <div class="edit-blog">
    <h2>编辑博客</h2>
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
      <button @click.prevent="editBlog">编辑博客</button>
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
  name: "edit-blog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["alvis", "lili", "miqi", "pinking"],
      submitted: false
    };
  },
  methods: {
    getDate() {
      // console.log(this.id);
      this.$http
        .get(
          "https://personal-blog-a676e.firebaseio.com/addBlog/" +
            this.id +
            ".json"
        )
        .then(res => {
          // console.log(res);
          this.blog = res.body;
        });
    },
    //firebase地址：<--https://personal-blog-a676e.firebaseio.com/-->
    editBlog: function() {
      this.$http
        .put(
          "https://personal-blog-a676e.firebaseio.com/addBlog/" +
            this.id +
            ".json",
          this.blog
        )
        .then(data => {
          // console.log(data);
          this.submitted = true;
        });
    }
  },
  created() {
    //进入页面开始请求这个请求的id的内容数据
    this.getDate();
  }
};
</script>

<style scoped>
.edit-blog * {
  box-sizing: border-box;
}

.edit-blog {
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
