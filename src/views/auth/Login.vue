<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a href="../../index2.html" class="h1"><b>Admin</b>Page</a>
        </div>
        
        <img src="@/assets/test.jpeg" alt="Login Image">
    
        <div class="card-body">
          <form action="../../index3.html" method="post">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="UserName">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <!-- flot -->
              </div>
  
              <div class="col-4">
               
                <a href="/home"type="submit" class="btn btn-primary btn-block">Sign In </a>
              </div>
  
            </div>
          </form>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>