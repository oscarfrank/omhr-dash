<template>
  <div class="login account-page" style="height:100vh !important;">
   <!-- Main Wrapper -->
        <div class="main-wrapper">
      <div class="account-content">
        <div class="container"> 
          <!-- Account Logo -->
          <div class="account-logo">
            <router-link to="/index"><img src="../../../../assets/img/logo2.png" alt="Omini HR"></router-link>
          </div>
          <!-- /Account Logo --> 
          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">Login</h3>
              <p class="account-subtitle">Access to our dashboard</p>    
              <!-- Account Form -->
              <Form class="login" @submit="login" :validation-schema="schema" v-slot="{ errors }">
                <div class="form-group">
                  <label>Email Address</label>
                  <Field name="email" type="text" value="oscarfranky" class="form-control" :class="{ 'is-invalid': errors.email }" />
                  <div class="invalid-feedback">{{errors.email}}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="form-group password-icon">
                  <div class="row">
                    <div class="col">
                      <label>Password</label>
                    </div>
                    <div class="col-auto">
                      <router-link class="text-muted" to="/forgot-password">
                        Forgot password?
                      </router-link>
                    </div>
                  </div>
                  <Field name="password" type="password" value="qqpp1100" class="form-control pass-input" :class="{ 'is-invalid': errors.password }" /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                  <div class="invalid-feedback">{{errors.password}}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="form-group text-center">
                  <button class="btn btn-primary account-btn" type="submit" value="Login" >Login</button>
                </div>
                <div class="account-footer">
                  <p>Don't have an account yet? <router-link to="/register">Register</router-link></p>
                </div>
              </Form>
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
import { ref } from 'vue'
import axios from 'axios';
import { router } from '../../../../router';
import { Form, Field } from 'vee-validate';
import useComp from '../../../../composables/useComp';
import * as Yup from 'yup';


export default {
components: {
        Form,
        Field,
    },
    mounted() {
    if($('.toggle-password').length > 0) {
    $(document).on('click', '.toggle-password', function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  },
setup() {

  /*** Data Composables */
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const isLoading = ref(false);

  /*** Import Composables */

  const {user} = useComp();
    
     const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required'),
                // .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        });


  /*** Methods */

    const onSubmit = () => {

      console.log('Logging in...');
      console.log(this.email);

    };

    const login = async (value) => {
            // this.isLoading = true;
            let userData = {
                            "username": value.email,
                            "password": value.password
                        }

            try {
                    await axios.post('users/login', userData)
                        .then((result) => {
                            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
                            // Set the User store with data
                                try {
                                    axios.get('users/me')
                                    .then((result) => {
                                        user.setUser(result.data);
                                        user.isLoggedIn = true;
                                        console.log('Logged In!');
                                        router.push('dashboard');
                                });

                                }
                                catch (error) {
                                    // alert(error)
                                    console.log(error)
                                }
                        });
                }
                catch (error) {
                    
                    // alert(error)
                    console.log(error)
                }
            };

        return {
            email, password, error, isLoading, // Data Variables
            schema,
            onSubmit,
            login,
            user // Composables
        };

}


}
</script>
<style>
</style>