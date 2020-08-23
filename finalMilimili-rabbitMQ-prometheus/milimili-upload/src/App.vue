<template>
  <div id="app" class="example-drag">
    <h1 class="text-center">Milimili Upload</h1>
    <table class="table table-striped table-bordered table-hover table-condensed">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Size</th>
          <th>Progress</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!files.length">
          <td colspan="7">
            <div class="text-center p-5">
              <h4>
                Drop files anywhere to upload
                <br />or
              </h4>
              <label for="file" class="btn btn-lg btn-primary">Select Files</label>
            </div>
          </td>
        </tr>
        <tr v-on:click="getIndex(index)" v-for="(file, index) in files" :key="file.id">
          <!-- <td>{{file.name}}</td> -->
          <td>{{index}}</td>
          <td>
            <div class="filename">{{file.name}}</div>
          </td>
          <td>{{file.size | formatSize}}</td>
          <td>
            <div class="progress" v-if="file.active || file.progress !== '0.00'">
              <div
                :class="{'progress-bar': true, 'progress-bar-striped': true, 'bg-danger': file.error, 'progress-bar-animated': file.active}"
                role="progressbar"
                :style="{width: file.progress + '%'}"
              >{{file.progress}}%</div>
            </div>
          </td>
          <td v-if="file.error">{{file.error}}</td>
          <td v-else-if="file.success">success</td>
          <td v-else-if="file.active">active</td>
          <td v-else></td>
          <td>
            <button
              type="button"
              class="btn btn-warning"
              href="#"
              v-if="file.error && file.error !== 'compressing' && $refs.upload.features.html5"
              @click.prevent="$refs.upload.update(file, {active: true, error: '', progress: '0.00'})"
            >Retry upload</button>
            <button
              type="button"
              class="btn btn-danger"
              href="#"
              @click.prevent="$refs.upload.remove(file)"
            >Remove</button>
          </td>
        </tr>

        <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
          <h3>Drop files to upload</h3>
        </div>
      </tbody>
    </table>
    <div class="example-btn text-center">
      <file-upload
        class="btn btn-lg btn-primary"
        style="margin:50px"
        post-action="http://localhost:8082/upload"
        :multiple="true"
        :drop="true"
        :drop-directory="true"
        v-model="files"
        ref="upload"
      >
        <i class="fa fa-plus"></i>
        Select files
      </file-upload>
      <button
        type="button"
        class="btn btn-lg btn-success"
        style="margin:50px"
        v-if="!$refs.upload || !$refs.upload.active"
        @click.prevent="$refs.upload.active = true"
      >
        <!--v-on:upload:files="uploadFiles"-->
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
        Start Upload
      </button>
      <button
        type="button"
        class="btn btn-lg btn-danger"
        style="margin:50px"
        v-else
        @click.prevent="$refs.upload.active = false"
      >
        <i class="fa fa-stop" aria-hidden="true"></i>
        Stop Upload
      </button>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  margin-top: 100px;
  max-width: 1300px;
}

.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}

.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}

.example-drag .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>

<script>
import FileUpload from "vue-upload-component";
export default {
  components: {
    FileUpload
  },
  methods: {
    getIndex(index) {
      console.log(index);
    } /*,
    async uploadFiles(files) {
      try {
        const response = await fetch("http://localhost:8083", {
          method: "POST",
          headers: {
            Accept: "*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(files)
        });
        console.log(JSON.stringify(response));
      } catch (error) {
        console.log(error);
      }
    }*/
  },
  data() {
    return {
      files: []
    };
  }
};
</script>
