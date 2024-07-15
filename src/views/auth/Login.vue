<template>
  <section class="vh-100">
    <div class="container-fluidx">
      <div class="row h-100 no-gutters">
        <div class="col-8 d-flex align-items-center justify-content-center p-0 m-0">
          <img src="../../assets/test.jpeg" class="img-fluid" alt="Sample image">
        </div>
        <div class="col-4 d-flex flex-column align-items-center justify-content-center p-0 mb-0" style="background-color: black;">
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
              <a href="/home" class="btn btn-primary btn-block">Sign In</a>
              <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button>
              <a class="text-muted" href="#!" style="font-size: 20px; font-weight: 600;">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
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
