<template>
  <div class="home">
    <section class="content-header">
          <div class="col-sm-12">
            <h2>Dashboard</h2>
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