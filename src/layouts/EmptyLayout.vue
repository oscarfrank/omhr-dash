<template>
  <div class="error-pages">
          
                     <!--Start Router Content declaration-->
                      <router-view :key="$route.path" />
                    <!--End Router Content declaration-->
  </div>
</template>
<script>

  export default {
    components: {
   
    },
    mounted() {
    },
    methods: {
    },
    name: 'EmptyLayout'
  }
</script>