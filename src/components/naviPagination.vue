<template>
                  <div class="row">
                        <div class="col-sm-12 col-md-5">
                          <div class="dataTables_info" id="usertable_info" role="status" aria-live="polite">Showing {{ entryStart }} to {{ currentPageSize }} of {{ data.totalItems }} entries</div> 
                        </div>
                        <div class="col-sm-12 col-md-7">
                          <div class="dataTables_paginate paging_simple_numbers" id="usertable_paginate">
                            <ul class="pagination">

                              <!-- <li class="paginate_button page-item previous" id="usertable_previous" :class="{ disabled: isInFirstPage, active: isInFirstPage  }">
                                <a href="#" aria-controls="usertable" data-dt-idx="0" tabindex="0" class="page-link" @click.prevent="onClickFirstPage">First</a>
                              </li> -->

                              <li class="paginate_button page-item previous" id="usertable_previous" :class="{ disabled: isInFirstPage }">
                                <a href="#" aria-controls="usertable" data-dt-idx="0" tabindex="0" class="page-link" @click.prevent="onClickPreviousPage">Previous</a>
                              </li>

                              <li class="paginate_button page-item" v-for="page in pages" :key="page.name" :class="{ disabled: page.isDisabled, active: page.isDisabled }">
                                <a href="#" aria-controls="usertable" data-dt-idx="1" tabindex="0" class="page-link" @click.prevent="onClickPage(page.name)">{{ page.name }}</a>
                              </li>


                              <li class="paginate_button page-item next" id="usertable_next" :class="{ disabled: isInLastPage }">
                                <a href="#" aria-controls="usertable" data-dt-idx="2" tabindex="0" class="page-link" @click.prevent="onClickNextPage">Next</a>
                              </li>

                              <!-- <li class="paginate_button page-item next" id="usertable_next" :class="{ disabled: isInLastPage, active: isInLastPage  }">
                                <a href="#" aria-controls="usertable" data-dt-idx="2" tabindex="0" class="page-link" @click.prevent="onClickLastPage">Last</a>
                              </li> -->


                            </ul>



                          </div>
                        </div>
                </div>  
</template>
<script>

export default {
  setup() {
      
  },
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    data: { type: Array }
  },
  data () {
      return{

      }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.data.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.data.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.data.totalPages);
    }
  },
  computed: {

    entryStart(){

      let fig = ((this.data.currentPage - 1)*this.data.perPage) + 1;
      return fig;
    },

    currentPageSize(){
      let fig = (((this.data.currentPage - 1)*this.data.perPage) + 1) + (this.data.currentPageSize - 1);
      return fig;
    },

    startPage() {
      // When on the first page
      if (this.data.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.data.currentPage === this.totalPages) {
        return this.data.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.data.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.data.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.data.currentPage
        });
      }

      return range;
    },

    isInFirstPage() {
      return this.data.currentPage === 1;
    },
    isInLastPage() {
      return this.data.currentPage === this.data.totalPages;
    },


  },
  name: 'NaviPagination',
  mounted(){
  }
}
</script>
<style scoped>
.page-item.active .page-link {
    color: #FFFFFF;
    }
</style>