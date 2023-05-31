<template>
  <div class="userlist">
        
         <userheader />
          
         <userfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <userlistcontent />
              </div>
            </div>
          </div>
                
        <usermodal />
        
            
  </div>
</template>
<script>

import userFilterVue from './userFilter.vue';
import userHeaderVue from './userHeader.vue';
import userListContentVue from './userListContent.vue';
import userModalVue from './userModal.vue';

  export default {
    methods: {

    },
    components: {
      userfilter: userFilterVue,
      userheader: userHeaderVue,
      userlistcontent: userListContentVue,
      usermodal: userModalVue,
   
    },
    mounted() {

    },
    name: 'users'
  }
</script>