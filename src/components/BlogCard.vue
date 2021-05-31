<template>
  <div class="blog-card">
    <div class="icons">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="edit"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </div>
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="delete"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
    <img :src="post.blogCoverPhoto" alt="" />
    <div class="info">
      <h4>
        {{ post.title }}
      </h4>
      <h6>Posted on {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
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
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 470px;
  transition: 0.5s ease all;
}

.blog-card:hover {
  transform: rotateZ(-1deg) scale(1.01);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4p -1px rgba(0, 0, 0, 0.06);
}

.blog-card .icons {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 99;
}

.blog-card .icons .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.5s ease all;
}

.blog-card .icons .icon:hover {
  background-color: #303030;
}

.blog-card .icons .icon:hover .edit,
.blog-card .icons .icon:hover .delete {
  color: #fff;
}

.blog-card .icons .icon:nth-child(1) {
  margin-right: 8px;
}

.blog-card .icons .icon .edit,
.blog-card .icons .icon .delete {
  pointer-events: none;
  height: 15px;
  width: auto;
}

.blog-card img {
  display: block;
  border-radius: 8px 8px 0 0;
  z-index: 1;
  width: 100%;
  min-height: 200px;
  object-fit: cover;
}

.blog-card .info {
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 3;
  padding: 32px 16px;
  color: #000;
}

.blog-card .info h4 {
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: 300;
}

.blog-card .info h3 {
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 16px;
}

.blog-card .info .link {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  font-weight: 500;
  padding-top: 20px;
  font-size: 12px;
  padding-bottom: 4px;
  transition: 0.5s ease all;
}

.blog-card .info .link:hover {
  color: rgba(48, 48, 48, 0.8);
}

.blog-card .info .link .arrow {
  width: 10px;
}
</style>