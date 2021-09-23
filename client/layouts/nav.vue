<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" style="color:white" href="#">Blog App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <nuxt-link to="/"><a class="nav-link active " style="color:white"  aria-current="page">Post Data</a> </nuxt-link>
           <nuxt-link to="/newsfeed"> <a class="nav-link" style="color:white" href="#">News Feed</a></nuxt-link>
            <nuxt-link to="/allpost"> <a class="nav-link" style="color:white" href="#">All Post</a></nuxt-link>
            
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>


</style>
