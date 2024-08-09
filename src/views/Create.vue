<template>
    <div class="role">
      <div class="col-10 m-2">
        <h2>Create User</h2>
      </div>
      <div class="col-3 float-left"></div>
      <div class="card card-primary card-outline m-2">
        <div class="container m-4 center">
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="Name">Name</label>
                  <input type="text" v-model="form.Name" class="form-control" id="Name">
                </div>
                <div class="form-group">
                  <label for="UserName">UserName</label>
                  <input type="text" v-model="form.UserName" class="form-control" id="UserName">
                </div>
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input type="email" v-model="form.Email" class="form-control" id="Email">
                </div>
                <div class="form-group">
                  <label for="PhoneNumber">PhoneNumber</label>
                  <input type="text" v-model="form.PhoneNumber" class="form-control" id="PhoneNumber">
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <div class="input-group">
                    <input :type="showPassword ? 'text' : 'password'" v-model="form.Password" class="form-control" id="Password">
                    <div class="input-group-append">
                      <button type="button" class="btn btn-outline-secondary" @click="togglePasswordVisibility">
                        <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                      </button>
                    </div>
                  </div>
                </div> 
                <div class="form-group">
                  <label for="Name">User Title</label>
                  <input type="text" v-model="form.Name" class="form-control" id="User_Title">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="Name">FullName khmer</label>
                  <input type="text" v-model="form.Name" class="form-control" id="FullName_kh">
                </div>
                <div class="form-group">
                  <label for="UserName">FullName English</label>
                  <input type="text" v-model="form.UserName" class="form-control" id="FullName_en">
                </div> 
                <div class="form-group">
                  <label for="Name">User level</label>
                  <input type="text" v-model="form.Name" class="form-control" id="User-level">
                </div>
                <div class="form-group">
                  <label for="Name">Telegram ChatID</label>
                  <input type="text" v-model="form.Name" class="form-control" id="Telegram_Chatid">
                </div>
                <div class="form-group">
                  <label for="Name">Add By</label>
                  <input type="text" v-model="form.Name" class="form-control" id="Add_by">
                </div>
                <div class="form-group">
                  <label for="Name">Upload by</label>
                  <input type="text" v-model="form.Name" class="form-control" id="Upload_by">
                </div>  
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          ID: '',
          Name: '',
          UserName: '',
          Email: '',
          PhoneNumber: '',
          Password: '',
          FullName_kh: '',
          FullName_en: '',
        },
        showPassword: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      submitForm() {
        // Handle form submission
        console.log(this.form);
        // You can make an API call here to submit the form data
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  @import "~@fortawesome/fontawesome-free/css/all.css";
  </style>
  