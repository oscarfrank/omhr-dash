<template>
  <div class="promotion">

        <promotionheader />
          
         <promotionfilter />
          
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <promotionlistcontent />
              </div>
            </div>
          </div>
                
        <promotionmodal />
      
  </div>
</template>
<script>
  import promotionFilterVue from './promotionFilter.vue';
  import promotionHeaderVue from './promotionHeader.vue';
  import promotionListContentVue from './promotionListContent.vue';
  import promotionModalVue from './promotionModal.vue';
  import { ref } from 'vue'
  const currentDate = ref(new Date())
  const currentDate1 = ref(new Date())
  export default {
      data() {
    return {
      addpromotion: ["Web Developer", "Web Designer", "SEO Analyst"],
      editpromotion: ["Web Developer", "Web Designer", "SEO Analyst"],
      startdate: currentDate,
      enddate: currentDate1,
    }
    },
    components: {
      promotionfilter: promotionFilterVue,
      promotionheader: promotionHeaderVue,
      promotionlistcontent: promotionListContentVue,
      promotionmodal: promotionModalVue,
   
    },
    mounted() {
    },
    name: 'promotion'
  }
</script>