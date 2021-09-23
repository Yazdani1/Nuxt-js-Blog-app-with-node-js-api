<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="newsfeed card" v-for="blogPost in Blog" :key="blogPost._id">
          <h4>{{ blogPost.title }}</h4>
          <p>{{ blogPost.des.substring(0, 200) }}</p>
          <p>Published on: {{ getcustomizeDate(blogPost.date) }}</p>
          <nuxt-link :to="'/newsfeed/' + blogPost._id">
            <button type="button" class="btn btn-primary">
              Read More
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="col-md-4">
        <div class="main_latest_post card">
          <span class="latest_post_title">Latest Post</span>
          <div
            class="latest_post card"
            v-for="latestspost in LatestPost"
            :key="latestspost._id"
          >
            <h5>{{ latestspost.title }}</h5>
            <p>{{ latestspost.des.substring(0, 80) }}</p>
            <p>Published on: {{getlatestpostDate(latestspost.date)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
const url = "http://localhost:8080/getdata";
const latestposturl = "http://localhost:8080/latestpost";
export default {
  methods: {
    getcustomizeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    },
      getlatestpostDate: function(date) {
      return moment(date).format('dddd');
    }
  },
  data() {
    return {
      Blog: [],
      LatestPost: []
    };
  },
  async mounted() {
    //to get all post
    await axios
      .get(url)
      .then(res => {
        this.Blog = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    //to get latest post

    await axios
      .get(latestposturl)
      .then(reslatestpost => {
        this.LatestPost = reslatestpost.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.newsfeed {
  margin: 10px;
  padding: 10px;
}

.read_more {
  background: crimson;
  color: white;
  padding: 10px;
  border-radius: 10px;
}

.latest_post {
  margin: 10px;
  padding: 10px;
}
.main_latest_post {
  margin-top: 10px;
}
.latest_post_title {
  background: blueviolet;
  margin: 10px;
  padding: 5px;
  color: white;
  font-size: 20px;

  text-align: center;
}
</style>
