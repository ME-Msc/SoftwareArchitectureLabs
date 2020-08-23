<template>
  <div id="app" class="small-container">
    <div id="studentForm" class="form-container">
      <!--<img alt="Vue logo" src="./assets/logo.png" />-->
      <h1>Studnets Managment System</h1>
      <student-form v-on:add:student="addStudent" />
    </div>
    <div id="studentTable" class="table-container">
      <student-table
        v-bind:students="students"
        v-on:edit:student="editStudent"
        v-on:delete:student="deleteStudent"
      />
    </div>
  </div>
</template>

<script>
import StudentForm from "./components/StudentForm.vue";
import StudentTable from "./components/StudentTable.vue";

export default {
  name: "App",
  components: {
    StudentForm,
    StudentTable
  },
  data() {
    return {
      students: [
        {
          number: 171860661,
          name: "Wang Ziyang",
          gender: "Male",
          birthDate: "2000/01/01",
          address: "SuZhou",
          apartment: "Information Management"
        },
        {
          number: 171860663,
          name: "Ma Shaocong",
          gender: "Male",
          birthDate: "1999/07/12",
          address: "NanJing",
          apartment: "Computer Science"
        }
      ]
    };
  },

  mounted() {
    this.getStudentsRest();
  },

  methods: {
    addStudent(newStudent) {
      this.students = [...this.students, newStudent];
      this.addStudentRest(newStudent);
    },
    editStudent(number, updatedStudent) {
      this.students = this.students.map(student =>
        student.number === number ? updatedStudent : student
      );
      this.editStudentRest(number, updatedStudent);
    },
    deleteStudent(number) {
      this.students = this.students.filter(
        student => student.number !== number
      );
      this.deleteStudentRest(number);
    },

    async getStudentsRest() {
      try {
        const response = await fetch("http://localhost:8083/students");
        const data = await response.json();
        this.students = data._embedded.students;
      } catch (error) {
        console.error(error);
      }
    },
    async addStudentRest(student) {
      try {
        const response = await fetch("http://localhost:8083/students", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(student)
        });
        console.log(JSON.stringify(response));
      } catch (error) {
        console.log(error);
      }
    },
    async editStudentRest(number, updatedStudent) {
      try {
        const response = await fetch(
          "http://localhost:8083/students/" + number,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStudent)
          }
        );
        console.log(JSON.stringify(response));
      } catch (error) {
        console.log(error);
      }
    },
    async deleteStudentRest(number) {
      try {
        const response = await fetch(
          "http://localhost:8083/students/" + number,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: null
          }
        );
        console.log(JSON.stringify(response));
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
button {
  background: #009435;
  border: 1px solid #009435;
}
.small-container {
  max-width: 1500px;
}
.form-container {
  margin: 0 auto;
  max-width: 1000px;
}
.table-container {
  max-width: 1500px;
}
</style>
