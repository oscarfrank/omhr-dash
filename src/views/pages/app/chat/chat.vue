<template>
  <div class="chat" style="min-height: 750px;">

      
        <!-- Chat Main Row -->
        <div class="chat-main-row">
        
          <!-- Chat Main Wrapper -->
          <div class="chat-main-wrapper">
          
          <chatmiddle />
            
          <chatend />
            
          </div>
          
        </div>
        
        <chatmodal />
        

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
     data() {
    return {
      
    }
  },
    mounted() {

    },
    name: 'chat'
  }
</script>