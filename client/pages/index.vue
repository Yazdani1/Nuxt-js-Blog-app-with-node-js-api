<template>
  <div class="container card postDesign">
    <h1>Create Post</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title:</label>
      <input
        type="text"
        v-model="Blog.title"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Please write your title"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Description</label
      >
      <textarea
        class="form-control"
        v-model="Blog.des"
        id="exampleFormControlTextarea1"
        rows="5"
      ></textarea>
    </div>
    <nuxt-link to="/allpost">
      <button type="button" @click="addPost" class="btn btn-success">
        Create Post
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Blog: {
        title: "Your post Title",
        des: "Your description"
      }
    };
  },

  methods: {

    async addPost() {
      await axios
        .post("http://localhost:8080/post", this.Blog)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  },

  
};
</script>

<style scoped>
.postDesign {
  padding: 20px;
}
.postDesign {
  margin-top: 20px;
}
</style>
