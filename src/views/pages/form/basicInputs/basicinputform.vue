<template>
   <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Basic Inputs</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Text Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Password</label>
                      <div class="col-md-10">
                        <input type="password" class="form-control">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Disabled Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control" disabled="disabled">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Readonly Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control" value="readonly" readonly="readonly">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Placeholder</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control" placeholder="Placeholder">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">File Input</label>
                      <div class="col-md-10">
                        <input class="form-control" type="file">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Default Select</label>
                      <div class="col-md-10">
                      <vue-select :options="defaultselect" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Radio</label>
                      <div class="col-md-10">
                        <div class="radio">
                          <label>
                            <input type="radio" name="radio"> Option 1
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="radio"> Option 2
                          </label>
                        </div>
                        <div class="radio">
                          <label>
                            <input type="radio" name="radio"> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Checkbox</label>
                      <div class="col-md-10">
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox"> Option 1
                          </label>
                        </div>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox"> Option 2
                          </label>
                        </div>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="checkbox"> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Textarea</label>
                      <div class="col-md-10">
                        <textarea rows="5" cols="5" class="form-control" placeholder="Enter text here"></textarea>
                      </div>
                    </div>
                    <div class="form-group mb-0 row">
                      <label class="col-form-label col-md-2">Input Addons</label>
                      <div class="col-md-10">
                        <div class="input-group">
                          <span class="input-group-text">$</span>
                          <input class="form-control" type="text">
                          <button class="btn btn-primary" type="button">Button</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card mb-0">
                <div class="card-header">
                  <h4 class="card-title mb-0">Input Sizes</h4>
                </div>
                <div class="card-body">
                  <form action="#">
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Large Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control form-control-lg" placeholder=".form-control-lg">
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">Default Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control" placeholder=".form-control">
                      </div>
                    </div>
                    <div class="form-group mb-0 row">
                      <label class="col-form-label col-md-2">Small Input</label>
                      <div class="col-md-10">
                        <input type="text" class="form-control form-control-sm" placeholder=".form-control-sm">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
</template>
<script>
  import Vue from 'vue'
  export default {
     data() {
    return {
      defaultselect: ["-- Select --", "Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]

    }
    },
    components: {
   
    },
    mounted() {
    }
  }
</script>