<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Navigation, Footer },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  color: black;
}

.arrow-light {
  color: white;
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
}

@media (min-width: 500) {
  .blog-card-wrap {
    padding: 100px 16px;
  }
}

.blog-card-wrap .blog-cards {
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;
}

@media (min-width: 500px) {
  .blog-card-wrap .blog-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .blog-card-wrap .blog-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .blog-card-wrap .blog-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}


</style>
