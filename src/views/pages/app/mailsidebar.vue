<template>
    <div>
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner">
            <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
                <div class="sidebar-menu">
                    <ul>
                    
                        <li> 
                            <router-link to="/inbox"><i class="la la-home"></i> <span>Back to Inbox</span></router-link>
                        </li>
                        <li class="inbox"> 
                            <router-link to="/inbox">Inbox<span class="mail-count">(21)</span></router-link>
                        </li>
                        <li> 
                            <a href="#">Starred</a>
                        </li>
                        <li> 
                            <a href="#">Sent Mail</a>
                        </li>
                        <li> 
                            <a href="#">Draft <span class="mail-count">(8)</span></a>
                        </li>
                        <li> 
                            <a href="#">Trash</a>
                        </li>
                       
                        <li class="menu-title">Label <a href="#"><i class="fa fa-plus"></i></a></li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-success mail-label"></i> Work</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-danger mail-label"></i> Office</a>
                        </li>
                        <li> 
                            <a href="#"><i class="fa fa-circle text-warning mail-label"></i> Personal</a>
                        </li>
                    </ul>
                </div>
            </perfect-scrollbar>
            </div>
        </div>
    </div>
</template>
<script>  
 import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
    components: {
    PerfectScrollbar ,
    },
      computed: {
        currentPath() {
          return this.$route.path;
        },
      },
     data() {
       return {
                settings: {
                    suppressScrollX: true,
                },
                activeClass: 'active',
            };
              //  isactive : true
    },
     methods: {
    scrollHanle(evt) {
      
    }
  },
          }
         
          </script>
<style> 
 .scroll-area {
            position: relative;
            margin: auto;
            height: calc(100vh - 60px);
            background-color: transparent !important;
        }
    </style> 