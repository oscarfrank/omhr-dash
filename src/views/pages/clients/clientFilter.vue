<template>
    <!-- Search Filter -->
              <div class="row filter-row">
                <div class="col-sm-12 col-md-12 mb-2" v-if="search.searchTerm != ''" >
                  <span>Search Result for : <em>"{{ search.searchTerm }}"</em></span>
                </div>
                <div class="col-sm-12 col-md-6 mt-2">
                  <div class="form-group form-focus">
                    <input type="text" v-model="search.searchTerm" class="form-control floating">
                    <label class="focus-label">Company Name, Client No. or Email</label>
                  </div>
                </div>
                <div class="col-sm-4 col-md-2 mb-2" style="margin-top: 12px">
                  <div class="d-grid">
                    <select v-model="search.sort" class="form-control floating">
                      <option value="createdAt">Sort by Created At</option>
                      <option value="shortName">Sort by ShortName</option>
                      <option value="companyName">Sort by Company Name</option>
                      <option value="number">Number</option>
                    </select>
                  </div>  
                </div>
                <div class="col-sm-2 col-md-1 mb-2" style="margin-top: 12px">
                  <div class="d-grid">
                    <select v-model="search.order" class="form-control floating">
                      <option value="asc">ASC</option>
                      <option value="desc">DESC</option>
                    </select>
                  </div>  
                </div>
                <div class="col-sm-6 col-md-3 my-2">
                  <div class="d-grid">
                    <loading-button color="btn btn-success w-100" :isLoading="search.isLoading" @click="search.setSearch()">Search</loading-button>
                  </div>  
                </div>
                        </div>
              <!-- Search Filter -->
    </template>
    <script>
      import useSearchComp from '../../../composables/useSearchComp';
      export default {
        setup(){
                    
              const { clientSearch: search } = useSearchComp();
              return { search }
    
                },
      }
    </script>