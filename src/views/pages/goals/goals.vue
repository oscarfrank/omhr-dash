<template>
  <div class="goallist">
        
         <goalheader />
          
         <goalfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <goallistcontent />
              </div>
            </div>
          </div>
                
        <goalmodal />
        
            
  </div>
</template>
<script>

import goalFilterVue from './goalFilter.vue';
import goalHeaderVue from './goalHeader.vue';
import goalListContentVue from './goalListContent.vue';
import goalModalVue from './goalModal.vue';

  export default {
    methods: {

    },
    components: {
      goalfilter: goalFilterVue,
      goalheader: goalHeaderVue,
      goallistcontent: goalListContentVue,
      goalmodal: goalModalVue,
   
    },
    mounted() {

    },
    name: 'goals'
  }
</script>