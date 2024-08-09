<template>
  <section class="vh-100">
    <div class="container-fluidx">
      <div class="row h-100 no-gutters">
        <div class="col-8 d-flex align-items-center justify-content-center p-0 m-0">
          <img src="../../assets/ខេត្ត.png" class="img-fluid" alt="Sample image">
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center p-0 mb-0" style="background-color: black;">
          <div v-if="showLoginForm">
            <form>
              <div class="text-center mb-4">
                <i class="fa fa-user-circle" aria-hidden="true" style="font-size: 100px; color: white;"></i>
                <h4 style="color: white;">Admin</h4>
              </div>
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control form-control-lg" placeholder="Enter Username" />
              </div>
              <div class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Enter password" />
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                <a href="/dashbord" class="btn btn-primary btn-block">Sign In</a>
                <!-- <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" @click="toggleForm">Register</button> -->
                <!-- <a class="text-muted" href="#!" style="font-size: 20px; font-weight: 600;">Forgot password?</a> -->
              </div>
            </form>
          </div>
          <div v-else>
            <form>
              <div class="text-center mb-4">
                <i class="fa fa-user-circle" aria-hidden="true" style="font-size: 100px; color: white;"></i>
                <h4 style="color: white;">Register</h4>
              </div>
              <div class="form-outline mb-4">
                <input type="text" id="form3Example1" class="form-control form-control-lg" placeholder="Enter Name" />
              </div>
              <div class="form-outline mb-4">
                <input type="email" id="form3Example2" class="form-control form-control-lg" placeholder="Enter Email" />
              </div>
              <div class="form-outline mb-4">
                <input type="password" id="form3Example3" class="form-control form-control-lg" placeholder="Enter Password" />
              </div>
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Confirm Password" />
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button>
                <button class="btn btn-primary btn-block" type="button" @click="toggleForm">Back to Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showLoginForm: true
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.vh-100 {
  height: 100vh;
}
.h-100 {
  height: 100%;
}
.p-0 {
  padding: 0 !important;
}
.m-0 {
  margin: 0 !important;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
</style>
