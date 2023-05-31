<template>
  <div class="contacts" style="min-height: 755px;">
        <!-- Contact Main Row -->
        <div class="chat-main-row">
        
          <!-- Contact Wrapper -->
          <div class="chat-main-wrapper">
            <div class="col-lg-12 message-view">
              <div class="chat-window">
                <contactheader />
                <div class="chat-contents">
                  <div class="chat-content-wrap">
                    <div class="chat-wrap-inner">
                      <div class="contact-box">
                      <div class="row">
                        <contactsidebar />
                        <contactcontent />
                        <div class="contact-alphapets">
                          <div class="alphapets-inner">
                            <a href="#">A</a>
                            <a href="#">B</a>
                            <a href="#">C</a>
                            <a href="#">D</a>
                            <a href="#">E</a>
                            <a href="#">F</a>
                            <a href="#">G</a>
                            <a href="#">H</a>
                            <a href="#">I</a>
                            <a href="#">J</a>
                            <a href="#">K</a>
                            <a href="#">L</a>
                            <a href="#">M</a>
                            <a href="#">N</a>
                            <a href="#">O</a>
                            <a href="#">P</a>
                            <a href="#">Q</a>
                            <a href="#">R</a>
                            <a href="#">S</a>
                            <a href="#">T</a>
                            <a href="#">U</a>
                            <a href="#">V</a>
                            <a href="#">W</a>
                            <a href="#">X</a>
                            <a href="#">Y</a>
                            <a href="#">Z</a>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Contact Wrapper -->
          
        </div>
        <!-- /Contact Main Row -->
        
        <contactmodal />
        
      
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {


    },
    name: 'contacts'
  }
</script>