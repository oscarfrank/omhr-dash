<template>
  <div class="forgotpassword account-page" style="height: 100vh;">
    <!-- Main Wrapper -->
        <div class="main-wrapper">
    
      <div class="account-content">
        <router-link to="/job-list" class="btn btn-primary apply-btn">Apply Job</router-link>
        <div class="container">
        
          <!-- Account Logo -->
          <div class="account-logo">
            <router-link to="/index"><img src="../../../assets/img/logo2.png" alt="Omini HR"></router-link>
          </div>
          <!-- /Account Logo -->
          
          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">Forgot Password?</h3>
              <p class="account-subtitle">Enter your email to get a password reset link</p>
              
              <!-- Account Form -->
              <form>
                <div class="form-group">
                  <label>Email Address</label>
                  <input class="form-control" type="text">
                </div>
                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit">Reset Password</button>
                </div>
                <div class="account-footer">
                  <p>Remember your password? <router-link to="/login">Login</router-link></p>
                </div>
              </form>
              <!-- /Account Form -->
              
            </div>
          </div>
        </div>
      </div>
        </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {
    },
    name: 'forgotpassword'
  }
</script>