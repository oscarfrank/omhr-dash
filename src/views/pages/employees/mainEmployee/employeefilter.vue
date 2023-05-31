<template>
<!-- Search Filter -->
          <div class="row filter-row">
            <div class="col-sm-12 col-md-12 mb-2" v-if="search.searchTerm != ''" >
              <span>Search Result for : <em>"{{ search.searchTerm }}"</em></span>
            </div>
            <div class="col-sm-6 col-md-9">  
              <div class="form-group form-focus">
                <input type="text" v-model="search.searchTerm" class="form-control floating">
                <label class="focus-label">Name, Email or Employee ID</label>
              </div>
            </div>
            <div class="col-sm-6 col-md-3">
              <div class="d-grid">
                <loading-button color="btn btn-success w-100" :isLoading="search.isLoading" @click="search.setSearch()">Search</loading-button>
              </div>  
            </div>
                    </div>
          <!-- Search Filter -->
</template>
<script>
  import useSearchComp from '../../../../composables/useSearchComp';
  export default {
    setup(){
                
          const { userSearch: search } = useSearchComp();
          return { search }

            },
  }
</script>