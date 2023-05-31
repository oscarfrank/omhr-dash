<template>

  <div class="profile">
        
        <profileHeader />

        <profileCardFirst :user="user" />
          
        <profileCardSecond />
          
        <profileContent />
        
        <profileModal :user="user" />


  </div>
  
</template>
<script>
  import profileHeaderVue from './profileHeader.vue';
  import profileCardFirstVue from './profileCardFirst.vue';
  import profileCardSecondVue from './profileCardSecond.vue';
  import profileContentVue from './profileContent.vue';
  import profileModalVue from './profileModal.vue';


  import Vue from 'vue'
  import { computed } from 'vue';
// import axios from 'axios';
import useComp from '../../../composables/useComp';
// import router from '../../../router';
  export default {
    components: {
      profileHeader: profileHeaderVue,
      profileCardFirst: profileCardFirstVue,
      profileCardSecond: profileCardSecondVue,
      profileContent: profileContentVue,
      profileModal: profileModalVue,
   
    },
    setup() {

const { user: userData } = useComp(); 
const user = computed( ()=> userData.user );


        return {
          user
        }

},
    mounted() {


    },
    name: 'profile'
  }
</script>