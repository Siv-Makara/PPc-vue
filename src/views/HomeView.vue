<template>
  <div class="home">
    <div style="background-color: aqua;" class="mb-2 col-12">
      <div class="col-3 mb-4 float-left">
        <button class="ml-2 btn btn-info btn-sm"><i class="fas fa-arrow-left"></i> Back</button>
        <button class="ml-2 btn btn-info btn-sm"><i class="fas fa-filter"></i> Filter</button>
        <button class="ml-2 btn btn-info btn-sm"><i class="fas fa-download"></i> Save</button>
      </div>
      <div style="transform: translatex(-80px)" class="col-3 float-left">Also available in : <span><a href="">SVC</a></span> <span><a href="">Excel</a></span> <span><a href="">Print</a></span></div>
    </div>
    <div class="table-responsive  ">
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
            <td><button class="text-white btn btn-warning btn-sm" @click="editItem(item.id)">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="selectedItem !== null" class="edit-form">
      <h3>Edit Item</h3>
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
          id: 1,
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
          id: 1,
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
          id: 1,
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
          id: 1,
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
          id: 1,
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
          id: 1,
          loginname: 'Sovan',
          displayname: 'Sovan',
          Role: 'Admin',
          access: '---',
          startdate: '---',
          cash: '---',
          passvildty: '01 Jan 2025',
          active: 'No',
        },
        // Add more items as necessary
      ],
      selectedItem: null, // To store the item being edited
    };
  },
  methods: {
    async editItem(id) {
      try {
        const response = await fetch(`/api/items/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch item details');
        }
        const item = await response.json();
        this.selectedItem = { ...item, id };
      } catch (error) {
        console.error(error);
      }
    },
    saveChanges() {
      if (this.selectedItem !== null) {
        const index = this.data.findIndex(item => item.id === this.selectedItem.id);
        if (index !== -1) {
          this.$set(this.data, index, { ...this.selectedItem });
        }
        this.selectedItem = null;
      }
    },
    cancelEdit() {
      this.selectedItem = null;
    }
  }
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
