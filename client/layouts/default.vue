<template>
  <div>
    <Nav />
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import Footer from "./footer.vue";

export default {
  components: {
    Nav,
    Footer
  }
};
</script>

<style></style>
