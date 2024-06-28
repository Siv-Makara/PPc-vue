<template>
  <section class="vh-100%">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center " style="margin-top: 5%; padding: 10px;">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="../../assets/test.jpeg"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="text-center"> 
            <i class="fa fa-user-circle" aria-hidden="true" style="font-size: 100px;"></i>
            <h4>Admin</h4>
          </div>
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter Username" />
          </div>
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>
          <!-- <div class="text-center text-lg-start mt-4 pt-2">
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
          </div> -->
          <div class="text-center text-lg-start mt-4 pt-2">
            <!-- <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3  " type="button" >Log in</button> -->
            <a href="/home"type="submit" class="btn btn-primary btn-block">Sign In </a> 
            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button>                       
            <a class="text-muted" href="#!" style="font-size: 20px; font-weight: 600;">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

