<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >FireBlogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }"
            >Login/Register</router-link
          >
        </ul>
      </div>
    </nav>
    <svg
      @click="toggleMobileNav"
      v-show="mobile"
      xmlns="http://www.w3.org/2000/svg"
      class="menu-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" :to="{name: 'Login'}">Login / Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen;
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

.link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
}

.link:hover {
  color: #1eb8b8;
}

nav {
  display: flex;
  padding: 25px 0;
}

nav .branding {
  display: flex;
  align-items: center;
}

nav .branding .header {
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
}

nav .nav-links {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

nav .nav-links ul {
  margin-right: 32px;
}

nav .nav-links ul .link {
  margin-right: 32px;
}

nav .nav-links ul .link:last-child {
  margin-right: 0;
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: 25px;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.mobile-nav .link {
  padding: 15px 0;
  color: #fff;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.3s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>