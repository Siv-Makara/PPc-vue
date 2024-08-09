<template>
  <div class="role">
    <div class="col-10 m-2">
      <h2>Role and Right</h2>
    </div>
    <div class="col-3 float-left"></div>
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
          <button class="ml-2 btn btn-primary btn"><i class="fas fa-arrow-left"></i> Back</button>
          <button class="ml-2 btn btn-info btn"><i class="fas fa-filter"></i> Filter</button>
          <button class="ml-2 btn btn-danger btn"><i class="fas fa-sync"></i> Clear</button>
        </div>
      </div>
      <div class="m-4">
        <div class="table-responsive">
          <table class="table table-bordered table-striped table-hover text-nowrap">
            <thead>
              <tr class="text-center">
                <th>ID</th>
                <th>LoginName</th>
                <th>DisplayName</th>
                <th>Role</th>
                <th>AccessBranch</th>
                <th>StartDate</th>
                <th>CashAccount</th>
                <th>PassValidity</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data" :key="index" class="text-center">
                <td>{{ index + 1 }}</td>
                <td>{{ item.loginname }}</td>
                <td>{{ item.displayname }}</td>
                <td>{{ item.Role }}</td>
                <td>{{ item.access }}</td>
                <td>{{ item.startdate }}</td>
                <td>{{ item.cash }}</td>
                <td>{{ item.passvildty }}</td>
                <td>{{ item.active }}</td>
                <td><button class="text-white btn btn-warning btn-sm" @click="editItem(index)" data-toggle="modal"
                    data-target="#exampleModalLong">Edit</button>
                  <button class="text-white btn btn-danger btn-sm ml-2"><i class="bi bi-trash"></i>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-if="selectedItem !== null" class="edit-form">
        <!-- Modal -->
        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
          aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit Form</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="saveChanges">
                  <div class="form-group">
                    <label for="loginname">Login Name</label>
                    <input type="text" v-model="selectedItem.loginname" class="form-control" id="loginname">
                  </div>
                  <div class="form-group">
                    <label for="displayname">Display Name</label>
                    <input type="text" v-model="selectedItem.displayname" class="form-control" id="displayname">
                  </div>
                  <div class="form-group">
                    <label for="role">Role</label>
                    <input type="text" v-model="selectedItem.Role" class="form-control" id="role">
                  </div>
                  <div class="form-group">
                    <label for="access">Access Branch</label>
                    <input type="text" v-model="selectedItem.access" class="form-control" id="access">
                  </div>
                  <div class="form-group">
                    <label for="startdate">Start Date</label>
                    <input type="text" v-model="selectedItem.startdate" class="form-control" id="startdate">
                  </div>
                  <div class="form-group">
                    <label for="cash">Cash Account</label>
                    <input type="text" v-model="selectedItem.cash" class="form-control" id="cash">
                  </div>
                  <div class="form-group">
                    <label for="passvildty">Pass Validity</label>
                    <input type="text" v-model="selectedItem.passvildty" class="form-control" id="passvildty">
                  </div>
                  <div class="form-group">
                    <label for="active">Active</label>
                    <input type="text" v-model="selectedItem.active" class="form-control" id="active">
                  </div>
                  <button type="submit" class="btn btn-success">Save</button>
                  <button type="button" class="btn btn-secondary" @click="cancelEdit">Cancel</button>
                </form>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      data: [
        {
          id: 1,
          loginname: 'bobo',
          displayname: 'bobo',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'yes',
        },
        {
          id: 2,
          loginname: 'ty bora',
          displayname: 'ty bora',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        {
          id: 3,
          loginname: 'Daa',
          displayname: 'daa',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        {
          id: 4,
          loginname: 'Long',
          displayname: 'Long',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        {
          id: 5,
          loginname: 'Veasna',
          displayname: 'Veasna',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        {
          id: 6,
          loginname: 'Dav lidoch',
          displayname: 'Dav lidoch',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        {
          id: 7,
          loginname: 'Sovan',
          displayname: 'Sovan',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
      ],
      selectedItem: null,
    };
  },
  methods: {
    editItem(index) {
      this.selectedItem = { ...this.data[index], index };
    },
    // saveChanges() {
    //   if (this.selectedItem !== null) {
    //     this.$set(this.data, this.selectedItem.index, { ...this.selectedItem });
    //     this.selectedItem = null;
    //   }
    // },
    // cancelEdit() {
    //   this.selectedItem = null;
    // },
  },
}
</script>

<style scoped>
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.edit-form {
  margin-top: 20px;
}
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
