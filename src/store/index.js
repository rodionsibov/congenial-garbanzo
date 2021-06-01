import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCards: [
      {
        title: "Blog Card #1",
        blogCoverPhoto: "https://picsum.photos/400?random=4",
        blogDate: "May 1, 2021",
      },
      {
        title: "Blog Card #2",
        blogCoverPhoto: "https://picsum.photos/400?random=5",
        blogDate: "May 1, 2021",
      },
      {
        title: "Blog Card #3",
        blogCoverPhoto: "https://picsum.photos/400?random=6",
        blogDate: "May 1, 2021",
      },
      {
        title: "Blog Card #4",
        blogCoverPhoto: "https://picsum.photos/400?random=7",
        blogDate: "May 1, 2021",
      },
    ],
    editPost: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
