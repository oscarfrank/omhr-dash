<template>
  <div class="termination">
        
         <terminationheader />
          
         <terminationfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <terminationlistcontent />
              </div>
            </div>
          </div>
                
        <terminationmodal />
        
            
  </div>
</template>

<script>

import terminationFilterVue from './terminationFilter.vue';
import terminationHeaderVue from './terminationHeader.vue';
import terminationListContentVue from './terminationListContent.vue';
import terminationModalVue from './terminationModal.vue';

  export default {
    methods: {

    },
    components: {
      terminationfilter: terminationFilterVue,
      terminationheader: terminationHeaderVue,
      terminationlistcontent: terminationListContentVue,
      terminationmodal: terminationModalVue,
   
    },
    mounted() {

    },
    name: 'terminations'
  }
</script>