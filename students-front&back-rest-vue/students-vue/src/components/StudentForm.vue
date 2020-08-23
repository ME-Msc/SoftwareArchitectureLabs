<template>
  <div id="student-form">
    <form v-on:submit.prevent="handleSubmitStudentForm">
      <input
        type="text"
        placeholder="Student Number (ONLY number)"
        oninput="value=value.replace(/[^\d]/g,'')"
        v-bind:class="{'has-error':submitting && invalidNumber}"
        v-model="student.number"
        v-on:focus="clearStatus"
        v-on:keypress="clearStatus"
      />
      <input
        type="text"
        placeholder="Student Name"
        v-bind:class="{'has-error':submitting && invalidName}"
        v-model="student.name"
        v-on:focus="clearStatus"
        v-on:keypress="clearStatus"
      />
      <div id="genderRadio" style="height:44.4px; padding:6px">
        <input
          type="radio"
          value="male"
          style="margin-left:5px"
          v-bind:class="{'has-error':submitting && invalidGender}"
          v-model="student.gender"
          v-on:focus="clearStatus"
          v-on:keypress="clearStatus"
        /> Male
        <input
          type="radio"
          value="female"
          style="margin-left:25px"
          v-bind:class="{'has-error':submitting && invalidGender}"
          v-model="student.gender"
          v-on:focus="clearStatus"
          v-on:keypress="clearStatus"
        /> Female
      </div>
      <input
        type="text"
        placeholder="Student Birth Date"
        onfocus="(this.type='date')"
        v-bind:class="{'has-error':submitting && invalidBirthDate}"
        v-model="student.birthDate"
        v-on:focus="clearStatus"
        v-on:keypress="clearStatus"
      />
      <input
        type="text"
        placeholder="Student Address"
        v-bind:class="{'has-error':submitting && invalidAddress}"
        v-model="student.address"
        v-on:focus="clearStatus"
        v-on:keypress="clearStatus"
      />
      <input
        type="text"
        placeholder="Student Apartment"
        v-bind:class="{'has-error':submitting && invalidApartment}"
        v-model="student.apartment"
        v-on:focus="clearStatus"
        v-on:keypress="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">❗ Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Student successfully added</p>
      <button>Add Student</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "StudentForm",
  computed: {
    invalidNumber() {
      return this.student.number === "";
    },
    invalidName() {
      return this.student.name === "";
    },
    invalidGender() {
      return this.student.gender === "";
    },
    invalidBirthDate() {
      return this.student.birthDate === "";
    },
    invalidAddress() {
      return this.student.address === "";
    },
    invalidApartment() {
      return this.student.apartment === "";
    }
  },
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      student: {
        number: "",
        name: "",
        gender: "",
        birthDate: "",
        address: "",
        apartment: ""
      }
    };
  },
  methods: {
    handleSubmitStudentForm() {
      this.submitting = true;
      this.clearStatus();

      if (
        this.invalidNumber ||
        this.invalidName ||
        this.invalidGender ||
        this.invalidBirthDate ||
        this.invalidAddress ||
        this.invalidApartment
      ) {
        this.error = true;
        return;
      }

      this.$emit("add:student", this.student);
      this.student = {
        number: "",
        name: "",
        gender: "",
        birthDate: "",
        address: "",
        apartment: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>>