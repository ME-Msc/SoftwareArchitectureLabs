<template>
  <div id="app">
    <h1 class="text-center">Milimili Player</h1>
    <div class="table-container">
      <table :data="files" class="table table-striped table-bordered table-hover table-condensed">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          <tr v-on:click="getIndex(index)" v-for="(file, index) in files" v-bind:key="file.id">
            <td>{{index}}</td>
            <td>
              <div class="filename">{{file}}</div>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                style="margin:5px"
                v-on:click="changeto720(file)"
              >360p</button>
              <button
                type="button"
                class="btn btn-success"
                style="margin:5px"
                v-on:click="changeto720(file)"
              >720p</button>
              <button
                type="button"
                class="btn btn-warning"
                style="margin:5px"
                v-on:click="changeto1080(file)"
              >1080p</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="player" class="player-container">
      <!--
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>-->
      <video ref="videoPlay" :src="videoURL" controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  data() {
    return {
      files: [],
      videoURL:
        "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            //url地址
          }
        ],
        poster: "/assets/logo.png", //你的封面地址
        width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },

  mounted: function() {
    this.getFiles();
  },
  methods: {
    getIndex(index) {
      console.log(index);
    },
    getFiles: function() {
      this.$http.get("http://localhost:8082/files").then(function(res) {
        this.files = res.body;
        console.log(this.files);
      });
    },
    changeto360(name) {
      this.videoURL = "http://localhost:8082/play/360/" + name;
      console.log(this.videoURL);
      this.$nextTick(() => {
        this.$refs.videoPlay.load();
      });
    },
    changeto720(name) {
      this.videoURL = "http://localhost:8082/play/720/" + name;
      console.log(this.videoURL);
      this.$nextTick(() => {
        this.$refs.videoPlay.load();
      });
    },
    changeto1080(name) {
      this.videoURL = "http://localhost:8082/play/1080/" + name;
      console.log(this.videoURL);
      this.$nextTick(() => {
        this.$refs.videoPlay.load();
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table-container {
  margin: auto;
  max-width: 1000px;
}
.player-container {
  margin: auto;
  width: 100%;
}
.video-js .vjs-icon-placeholder {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
