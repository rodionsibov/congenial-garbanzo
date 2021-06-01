<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have a account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <h2>Login to FireBlogs</h2>
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
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your password?</router-link
      >
      <button>Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
}

@media (min-width: 900px) {
  .form-wrap {
    width: 100%;
  }
}

.form-wrap .login-register {
  margin-bottom: 32px;
}

.form-wrap .login-register .router-link {
  color: #000;
}

.form-wrap form {
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}

@media (min-width: 900px) {
  .form-wrap form {
    padding: 0 50px;
  }
}

.form-wrap h2 {
  text-align: center;
  font-size: 32px;
  color: #303030;
  margin-bottom: 40px;
}

@media (min-width: 900px) {
  .form-wrap h2 {
    font-size: 40px;
  }
}

.form-wrap .inputs {
  width: 100%;
  max-width: 350px;
}

.form-wrap .inputs .input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.form-wrap .inputs .input input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 4px 4px 4px 30px;
  height: 50px;
}

.form-wrap .inputs .input input:focus {
  outline: none;
}

.form-wrap .inputs .input .icon {
  width: 12px;
  position: absolute;
  left: 6px;
}

.form-wrap .forgot-password {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease all;
}

.form-wrap .forgot-password:hover {
  border-color: #303030;
}

.form-wrap .angle {
  display: none;
  position: absolute;
  background-color: #fff;
  transform: rotateZ(3deg);
  width: 60px;
  right: -30px;
  height: 101vh;
}

@media (min-width: 900px) {
  .form-wrap .angle {
    display: initial;
  }
}

.form-wrap .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('https://picsum.photos/800');
    width: 100%;
    height: 100%;
}

@media (min-width: 900px) {
    .form-wrap .background {
        display: initial;
    }
}
</style>