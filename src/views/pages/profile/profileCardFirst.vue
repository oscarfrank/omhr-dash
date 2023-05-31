<template>
<div class="card mb-0">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="profile-view">
                    <div class="profile-img-wrap">
                      <div class="profile-img">
                        <a href="#"><img alt="" src="../../../assets/img/profiles/avatar-02.jpg"></a>
                      </div>
                    </div>
                    <div class="profile-basic">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="profile-info-left">
                            <h3 class="user-name m-t-0 mb-0">{{ user.firstName }} {{ user.lastName }}</h3>
                            <h6 class="text-muted">{{ user.department }}</h6>
                            <small class="text-muted">{{ user.position }}</small>
                            <div class="staff-id">Employee ID : {{ user.employeeNum }}</div>
                            <div class="small doj text-muted">Join Date : 1st Jan 2013</div>
                            <div class="staff-msg"><router-link class="btn btn-custom" to="/chat">Send Message</router-link></div>
                          </div>
                        </div>
                        <div class="col-md-7">
                          <ul class="personal-info">
                            <li>
                              <div class="title">Phone:</div>
                              <div class="text"><a href="">{{ user.phone }}</a></div>
                            </li>
                            <li>
                              <div class="title">Email:</div>
                              <div class="text"><a href="">{{ user.email }}</a></div>
                            </li>
                            <li>
                              <div class="title">Birthday:</div>
                              <div class="text">{{ user.dob }}</div>
                            </li>
                            <li>
                              <div class="title">Address:</div>
                              <div class="text">{{ user.street }}, {{ user.city }}, {{ user.state }}, {{ user.country }}</div>
                            </li>
                            <li>
                              <div class="title">Gender:</div>
                              <div class="text">{{ user.gender }}</div>
                            </li>
                            <li>
                              <div class="title">Reports to:</div>
                              <div class="text">
                                 <div class="avatar-box">
                                  <div class="avatar avatar-xs">
                                   <img src="../../../assets/img/profiles/avatar-16.jpg" alt="">
                                  </div>
                                 </div>
                                 <router-link to="/profile">
                                  Jeffery Lalor
                                </router-link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pro-edit"><a data-bs-target="#profile_info" data-bs-toggle="modal" class="edit-icon" href="#"><i class="fa fa-pencil"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
</template>


<script>

export default {
    props: ['user'],

    methods: {

  },

  };
</script>