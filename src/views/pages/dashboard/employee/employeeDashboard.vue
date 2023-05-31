<template>
  <div class="employeedashboard">           

              
             <welcomeheader :user=user />
          <div class="row">
             <today />
             <projects />
          </div>



        
            
  </div>


</template>
<script>
  import { computed } from 'vue';
  import useComp from '../../../../composables/useComp';
  

  import Vue from 'vue'

  export default {
    components: {
   
    },

    setup() {
      const { user: userData } = useComp(); 
                
      const user = computed( ()=> userData.user );


      return {
            user // Composables
        };

    },
    mounted() {
      // console.log(this.user)

    },
    name: 'employeedashboard'
  }
</script>