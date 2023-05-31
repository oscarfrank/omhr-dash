<template>
  <div class="client">
        
         <clientheader />
          
         <clientfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <clientlistcontent />
              </div>
            </div>
          </div>
                
        <clientmodal />
        
            
  </div>
</template>

<script>

import clientFilterVue from './clientFilter.vue';
import clientHeaderVue from './clientHeader.vue';
import clientListContentVue from './clientListContent.vue';
import clientModalVue from './clientModal.vue';

  export default {
    methods: {

    },
    components: {
      clientfilter: clientFilterVue,
      clientheader: clientHeaderVue,
      clientlistcontent: clientListContentVue,
      clientmodal: clientModalVue,
   
    },
    mounted() {

    },
    name: 'clients'
  }
</script>