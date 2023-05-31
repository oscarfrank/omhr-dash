<template>
  <div class="resignation">
        
         <resignationheader />
          
         <resignationfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <resignationlistcontent />
              </div>
            </div>
          </div>
                
        <resignationmodal />
        
            
  </div>
</template>

<script>

import resignationFilterVue from './resignationFilter.vue';
import resignationHeaderVue from './resignationHeader.vue';
import resignationListContentVue from './resignationListContent.vue';
import resignationModalVue from './resignationModal.vue';

  export default {
    methods: {

    },
    components: {
      resignationfilter: resignationFilterVue,
      resignationheader: resignationHeaderVue,
      resignationlistcontent: resignationListContentVue,
      resignationmodal: resignationModalVue,
   
    },
    mounted() {

    },
    name: 'resignations'
  }
</script>