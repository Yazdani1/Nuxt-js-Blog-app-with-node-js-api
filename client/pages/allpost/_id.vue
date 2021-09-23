<template>
  <div class="container card postDesign">
    <h1>Edit Post</h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Title:</label>
      <input
        type="text"
        v-model="Blog.title"
        class="form-control"
        id="exampleFormControlInput1"
        
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
      <button type="submit" @click="updatePost" class="btn btn-success">
        Edit Post
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import axios from "axios";

const urlgeteditdata = "http://localhost:8080/edit/";
const updateulr = "http://localhost:8080/update/"

export default {
  data() {
    return {
      Blog: {
        title: "",
        des: ""
      }
    };
  },
  methods: {
    async updatePost() {
      await axios
        .put(updateulr + this.$route.params.id, this.Blog)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  async mounted(){
      const result = await axios.get(urlgeteditdata + this.$route.params.id);

      this.Blog = result.data;
      
  }

  
};
</script>

