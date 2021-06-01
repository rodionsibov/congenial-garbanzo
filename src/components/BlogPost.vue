<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">
          {{ post.title }}
        </h2>
        <h2 v-else>
          {{ post.title }}
        </h2>
        <p v-if="post.welcomeScreen">
          {{ post.blogPost }}
        </p>
        <p v-else class="content-preview">
          {{ post.blogHTML }}
        </p>
        <router-link v-if="post.welcomeScreen" class="link link-light" to="#">
          Login / Register
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="arrow arrow-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </router-link>
        <router-link v-else class="link" to="#">
          View the Post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" :src="post.photo" alt="" />
      <img v-else :src="post.blogCoverPhoto" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (min-width: 700px) {
  .blog-wrapper {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
}

.blog-wrapper .blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 4;
  order: 2;
}

@media (min-width: 700px) {
  .blog-wrapper .blog-content {
    order: 1;
  }
}

@media (min-width: 800px) {
  .blog-wrapper .blog-content {
    flex: 3;
  }
}

.blog-wrapper .blog-content div {
  max-width: 375px;
  padding: 72px 24px;
}

@media (min-width: 700px) {
  .blog-wrapper .blog-content div {
    padding: 0 24px;
  }
}

.blog-wrapper .blog-content div h2 {
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 24px;
}

@media (min-width: 700px) {
  .blog-wrapper .blog-content div h2 {
    font-size: 40px;
  }
}

.blog-wrapper .blog-content div p {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.7;
}

.blog-wrapper .blog-content div .content-preview {
  font-size: 13px;
  max-height: 24px;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-wrapper .blog-content div .link {
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}

.blog-wrapper .blog-content div .link:hover {
  border-bottom-color: #303030;
}

.blog-wrapper .blog-content div .link-light:hover {
  border-bottom-color: #fff;
}

.blog-wrapper .blog-photo {
  order: 1;
  flex: 1;
}

@media (min-width: 700px) {
  .blog-wrapper .blog-photo {
    order: 2;
  }
}

@media (min-width: 800px) {
  .blog-wrapper .blog-photo {
    flex: 4;
  }
}

.blog-wrapper .blog-photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-wrapper:nth-child(even) .blog-content {
  order: 2;
}

.blog-wrapper:nth-child(even) .blog-photo {
  order: 1;
}

.no-user:first-child .blog-content {
  background-color: #303030;
  color: #fff;
}
</style>