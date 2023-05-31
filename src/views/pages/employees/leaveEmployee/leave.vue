<template>
  <div class="leavelist">
        
         <leaveheader />
          
         <leavefilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <leavelistcontent />
              </div>
            </div>
          </div>
                
        <leavemodal />
        
            
  </div>
</template>
<script>

import leaveFilterVue from './leaveFilter.vue';
import leaveHeaderVue from './leaveHeader.vue';
import leaveListContentVue from './leaveListContent.vue';
import leaveModalVue from './leaveModal.vue';

  export default {
    methods: {

    },
    components: {
      leavefilter: leaveFilterVue,
      leaveheader: leaveHeaderVue,
      leavelistcontent: leaveListContentVue,
      leavemodal: leaveModalVue,
   
    },
    mounted() {

    },
    name: 'leave'
  }
</script>