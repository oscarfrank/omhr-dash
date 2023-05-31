<template>

  <div class="performancesetting">

      <headerperformancesetting />

      <div class="row">

      <div class="col-md-12">

      <div class="card-box">

      <p><b>Click the tabs below for more information on each Performance Management module. Only one Performance module can be activated at a time.</b></p>

      <tabperformancesetting />

      <div class="tab-content">

      <okrperformancesetting />

      <competencyperformancesetting />

      <performancesettinggoal />

      </div>

      </div>

      </div>

      </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    components: {
   
    },
    mounted() {

    },
    name: 'performanceSetting'
  }
</script>