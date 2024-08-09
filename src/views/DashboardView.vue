<template>
  <div class="home">
    <section class="content-header">
      <div class="row m-1">
        <div class="col-9">
          <h2>Dashboard
            <span style="font-size: 15px;">
              Also available in:
              <span><a href="">SVC</a></span>
              <span><a href="">Excel</a></span>
              <span><a href="">Print</a></span>
            </span>
          </h2>
        </div>
        <div class="col-3 text-right">
          <a href="/Create" class="btn btn-primary"><i class="far fa-plus fa-fw"></i>Add New
          </a>
        </div>
      </div>
      <div class="card card-primary card-outline m-2">
        <div class="row">
          <div class="col-3 m-3">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-3 m-3">
            <div class="form-group">
              <div class="input-group">
                <input type="date" class="form-control" id="fromDate">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-calendar-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 m-3">
            <div class="form-group">
              <div class="input-group">
                <input type="date" class="form-control" id="toDate">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-calendar-alt"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-3 row py-2">
          <div class="col-md-12"><label class="required">Filter</label></div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-4 col-sm-6 text-info">
                <div class="card text-white mb-3 bg-info" style="height: 80%; background: rgb(0, 112, 184) !important;">
                  <div class="card-body" style="display: inherit; position: relative;"><span
                      style="font-size: 18px;"><b>Role Admin</b></span></div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2"><span style="font-size: 24px; font-weight: bold;">2</span></div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 text-primary">
                <div class="card text-white mb-3 bg-success"
                  style="height: 80%; background: rgb(5, 144, 51) !important;">
                  <div class="card-body" style="display: inherit;"><span style="font-size: 18px;"><b>Role
                        User</b></span></div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2"><span style="font-size: 24px; font-weight: bold;">5</span></div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 text-primary">
                <div class="card text-white mb-3 bg-warning"
                  style="height: 80%; background: rgb(240, 184, 0) !important;">
                  <div class="card-body text-white" style="display: inherit;"><span
                      style="font-size: 18px;"><b>Other</b></span></div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2 text-white"><span style="font-size: 24px; font-weight: bold;">0</span></div>
                </div>
              </div>
              <!-- <div class="col-md-4 col-sm-6 text-primary">
                <div class="card text-white mb-3 bg-danger" style="height: 80%;">
                  <div class="card-body" style="display: inherit;"><span style="font-size: 18px;"><b>Absents</b></span>
                  </div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2"><span style="font-size: 24px; font-weight: bold;">0</span></div>
                </div>
              </div> -->
              <!-- <div class="col-md-4 col-sm-6 text-primary">
                <div class="card text-white mb-3" style="height: 80%; background: rgb(40, 167, 69) !important;">
                  <div class="card-body" style="display: inherit;"><span style="font-size: 18px;"><b>Holiday</b></span>
                  </div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2"><span style="font-size: 24px; font-weight: bold;">0</span></div>
                </div>
              </div> -->
              <!-- <div class="col-md-4 col-sm-6 text-primary">
                <div class="card text-white mb-3" style="height: 80%; background: rgb(51, 81, 176) !important;">
                  <div class="card-body" style="display: inherit;"><span style="font-size: 18px;"><b>Dayoff</b></span>
                  </div>
                  <hr style="margin: 0px;">
                  <div class="px-3 p-2"><span style="font-size: 24px; font-weight: bold;">0</span></div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <div class="mb-2 col-12">
          <div class="col-3 float-left">
            <button class="ml-2 btn btn-info btn"><i class="fas fa-filter"></i> Filter</button>
            <button class="ml-2 btn btn-danger btn"><i class="fas fa-sync"></i> Clear</button>
          </div>
        </div>
        <div class="row">
          <div class="col-3 ml-4">
            <div class="card">
            </div>
            <p class="nore">No record found.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>



