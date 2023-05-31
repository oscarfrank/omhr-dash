<template>
  <div class="asset">
        
         <assetheader />
          
         <assetfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <assetlistcontent />
              </div>
            </div>
          </div>
                
        <assetmodal />
        
            
  </div>
</template>

<script>

import assetFilterVue from './assetFilter.vue';
import assetHeaderVue from './assetHeader.vue';
import assetListContentVue from './assetListContent.vue';
import assetModalVue from './assetModal.vue';

  export default {
    methods: {

    },
    components: {
      assetfilter: assetFilterVue,
      assetheader: assetHeaderVue,
      assetlistcontent: assetListContentVue,
      assetmodal: assetModalVue,
   
    },
    mounted() {

    },
    name: 'assets'
  }
</script>