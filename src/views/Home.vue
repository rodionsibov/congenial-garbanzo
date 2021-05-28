<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    />
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen: true,
        photo: 'https://picsum.photos/400?random=1',
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: 'https://picsum.photos/400?random=2',
        },
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a filter blog post title!",
          blogCoverPhoto: 'https://picsum.photos/400?random=3',
        },
      ],
    };
  },
};
</script>
