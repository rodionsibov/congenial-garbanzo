<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard v-for="(post, index) in sampleBlogCards" :key="index" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "Home",
  components: { BlogPost, BlogCard },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: "https://picsum.photos/400?random=1",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "https://picsum.photos/400?random=2",
        },
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: "https://picsum.photos/400?random=3",
        },
      ],
      sampleBlogCards: [
        {
          blogTitles: "Blog Card #1",
          blogCoverPhoto: "https://picsum.photos/400?random=4",
          blogDate: "May 1, 2021",
        },
        {
          blogTitles: "Blog Card #2",
          blogCoverPhoto: "https://picsum.photos/400?random=5",
          blogDate: "May 1, 2021",
        },
        {
          blogTitles: "Blog Card #3",
          blogCoverPhoto: "https://picsum.photos/400?random=6",
          blogDate: "May 1, 2021",
        },
        {
          blogTitles: "Blog Card #4",
          blogCoverPhoto: "https://picsum.photos/400?random=7",
          blogDate: "May 1, 2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog-card-wrap h3 {
  font-weight: 300;
  font-size: 28px;
  margin-bottom: 32px;
}
</style>