<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-if="!navigation" />
      <router-view />
      <Footer v-if="!navigation" />
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navigation, Footer },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
  methods: {
    checkRoute() {
      ["Login", "Register", "ForgotPassword"].includes(this.$route.name)
        ? (this.navigation = true)
        : (this.navigation = false);
    },
  },
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

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
}

button:focus,
.router-button:focus {
  outline: none;
}

button:hover,
.router-button:hover {
  background-color: rgba(48, 48, 48, 0.7);
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
}

@media (min-width: 700px) {
  .button-ghost {
    margin-top: 0;
    margin-left: auto;
  }
}

.button-ghost i {
  margin-left: 8px;
}

.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.button-inactive {
  pointer-events: none;
  cursor: none;
  background-color: rgba(128, 128, 128, 0.5);
}

.error {
  text-align: center;
  font-size: 12px;
  color: tomato;
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
