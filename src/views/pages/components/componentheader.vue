<template>
  <div>
    <header>
      <!-- Header -->
      <div class="header">
      
       <header-logo />
        
       
        
        <!-- Header Title -->
                <div class="page-title-box">
          <h3>Omini HR</h3>
                </div>
        <!-- /Header Title -->
        
        <a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
        
        <!-- Header Menu -->
        <ul class="nav user-menu">
        

          <search />
        
          <flag />
        
          <notifications />
          
          <messagenotifications />
        
          <headerend :user="user" @logout="logout" />

          </ul>
          <div class="dropdown mobile-user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="/profile">My Profile</router-link>
            <router-link class="dropdown-item" to="/Settings">Settings</router-link>
            <p @click="logout">Logout</p>
          </div>
        </div>
            </div>
      <!-- /Header -->
    </header>
  </div>
</template>
<script>
import { computed } from 'vue';
import axios from 'axios';

import useComp from '../../../composables/useComp';
import router from '../../../router';

  export default {
    setup() {

        const { user: userData } = useComp(); 
        const user = computed( ()=> userData.user );

        const logout = async () => {
                                try {
                            axios.get('users/logout')
                            .then((result) => {
                                if(result.data.success){ console.log('Logged Out!'); }
                                userData.setLogout(); // Set Logged In to False
                                router.push('/login');
                        });
                        }
                        catch (error) {
                            // alert(error)
                            console.log(error)
                        }
        }


        return {
          user,
          logout
        }

},
    mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');

      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
    $('#task_window').removeClass('opened');
    });


      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
      $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
      });
      
    }
  };
</script>