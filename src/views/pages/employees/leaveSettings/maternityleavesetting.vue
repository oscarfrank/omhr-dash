<template>
<!-- Maternity Leave -->
              <div class="card leave-box" id="leave_maternity">
                <div class="card-body">
                  <div class="h3 card-title with-switch">
                    Maternity  <span class="subtitle">Assigned to female only</span>
                    <div class="onoffswitch">
                      <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="switch_maternity" checked>
                      <label class="onoffswitch-label" for="switch_maternity">
                        <span class="onoffswitch-inner"></span>
                        <span class="onoffswitch-switch"></span>
                      </label>
                    </div>
                  </div>
                  <div class="leave-item">
                    <div class="leave-row">
                      <div class="leave-left">
                        <div class="input-box">
                          <div class="form-group">
                            <label>Days</label>
                            <input type="text" class="form-control" disabled>
                          </div>
                        </div>
                      </div>
                      <div class="leave-right">
                        <button class="leave-edit-btn">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Maternity Leave -->
</template>