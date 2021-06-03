<template>
  <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <button>Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: { Modal, Loading },
  data() {
    return {
      email: null,
      modalActive: null,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style scroped>
.reset-password {
  position: relative;
}

.reset-password .form-wrap .reset h2 {
  margin-bottom: 8px;
}

.reset-password .form-wrap .reset p {
  text-align: center;
  margin-bottom: 32px;
}
</style>