<template>
  <div class="container">
    <div class="detailspost card">
      <h4>{{ Post.title }}</h4>
      <p>{{ Post.des }}</p>
      <p>Published on: {{ getcustomizeDate(Post.date) }}</p>

      <nuxt-link to="/newsfeed">
        <button type="button" class="btn btn-primary">
          Back
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
const url = "http://localhost:8080/details/";
export default {
  methods: {
    getcustomizeDate: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },

  data() {
    return {
      Post: []
    };
  },
  async mounted() {
    const result = await axios.get(url + this.$route.params.id);
    this.Post = result.data;
  }
};
</script>
<style scoped>
.detailspost {
  padding: 20px;
  margin-top: 20px;
}
</style>
