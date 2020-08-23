<template>
  <div id="student-table">
    <table>
      <thead>
        <tr>
          <th width="400px">Number</th>
          <th width="600px">Name</th>
          <th width="800px">Gender</th>
          <th width="1000px">Birth Date</th>
          <th width="1000px">Address</th>
          <th width="1000px">Apartment</th>
          <th width="1000px">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" v-bind:key="student.number">
          <td>{{student.number}}</td>

          <td v-if="editing===student.number">
            <input type="text" v-model="student.name" />
          </td>
          <td v-else>{{student.name}}</td>

          <td v-if="editing===student.number">
            <input type="radio" value="Male" style="margin-left:5px" v-model="student.gender" /> Male
            <input
              type="radio"
              value="Female"
              style="margin-left:25px"
              v-model="student.gender"
            /> Female
          </td>
          <td v-else>{{student.gender}}</td>

          <td v-if="editing === student.number">
            <input type="text" onfocus="(this.type='date')" v-model="student.birthDate" />
          </td>
          <td v-else>{{student.birthDate}}</td>

          <td v-if="editing === student.number">
            <input type="text" v-model="student.address" />
          </td>
          <td v-else>{{student.address}}</td>

          <td v-if="editing === student.number">
            <input type="text" v-model="student.apartment" />
          </td>
          <td v-else>{{student.apartment}}</td>

          <td v-if="editing === student.number">
            <button v-on:click="editStudent(student)">Save</button>
            <button class="muted-button" v-on:click="cancelEdit(student)">Cancel</button>
          </td>
          <td v-else>
            <button v-on:click="editMode(student)">Edit</button>
            <button v-on:click="$emit('delete:student', student.number)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "student-table",
  props: {
    students: Array
  },
  data() {
    return {
      editing: null
    };
  },
  methods: {
    editMode(student) {
      this.cachedStudent = Object.assign({}, student);
      this.editing = student.number;
    },
    cancelEdit(student) {
      Object.assign(student, this.cachedStudent);
      this.editing = null;
    },

    editStudent(student) {
      if (
        student.name === "" ||
        student.gender === "" ||
        student.birthDate === "" ||
        student.address === "" ||
        student.apartment === ""
      )
        return;
      this.$emit("edit:student", student.number, student);
      this.editing = null;
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  margin: 0 1rem 0 0;
}
</style>>