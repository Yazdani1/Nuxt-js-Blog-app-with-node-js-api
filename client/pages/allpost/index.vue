<template>
  <div class="container card main_container">
    <div class="row">
      <div class="col-md-10">
        <h2>AlL Post</h2>
      </div>
      <div class="col-md-2">
        <nuxt-link to="/">
          <button type="button" class="btn btn-success">
            Create Post
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="row" v-for="datapost in post" :key="datapost._id">
      <div class="col-md-9 card each_item">
        <div>
          <h5>{{ datapost.title }}</h5>
          <p>{{ datapost.des.substring(0,100) }}</p>
        </div>
      </div>
      <div class="col-md-2 card each_item">
        <div>
          <nuxt-link :to="'/allpost/' + datapost._id">
            <button type="button" class="btn btn-primary">
              Edit
            </button>
          </nuxt-link>

          <button
            type="button"
            v-on:click="deletePost(datapost._id)"
            class="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: []
    };
  },

  mounted() {
    this.getallDATA();
  },

  methods: {
    async getallDATA() {
      await axios
        .get("http://localhost:8080/getdata")
        .then(res => {
          this.post = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    async deletePost(id) {
      await axios
        .delete("http://localhost:8080/delete/" + id)
        .then(res => {
          this.getallDATA();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.main_container {
  padding: 50px;
  margin-top: 30px;
}
.each_item {
  margin: 5px;
}


.each_item:hover {
  cursor: pointer;
  -webkit-box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 10px 15px -1px rgba(0, 0, 0, 0.46);
}
</style>
