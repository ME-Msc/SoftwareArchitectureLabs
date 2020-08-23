# Milimili
视频上传、转码、播放的 springMVC 应用demo

## 文件说明
* 视频上传：milimili-vue
* 文件监控及视频转码：milimili-transcoder/milimili-file
* 后端服务处理：milimili-transcoder/milimili-server
* 后端视频数据：milimili-transcoder/data
* 视频播放：milimili-player

## 准备
* 安装HandBrake-cli
* 在`milimili-transcoder\milimili-file\src\main\java\com\example\milimilifile\Transcoder(line 41)`修改HandBrake-cli的绝对路径

## 执行
* milimili-vue(8080) : `npm run serve`
* milimili-transcode / milimili-serve(8083): `mvn spring-boot:run`
* milimili-transcode / milimili-file : 运行main方法
* milimili-player(8081) : `mvn spring-boot:run`

## 思路
### 前端上传视频
* 使用vue-upload-component组件，限制文件类型为mp4

### 后端
* 一开始想仿照 file-copy 用 spring-integration ，但是没找到将message进行视频转码处理的办法，可能需要spirng-batch的过滤？ 感觉过于复杂。
* 然后考虑事件监听，当收到http请求后进行视频转码，但是收到请求和获得完整视频文件有时延，应当在后端获取完整视频文件后再进行转码处理。
* 监听视频文件传输完成，考虑监听文件夹变化并发送事件，收到事件后再进行转码处理。
* 又觉得发送接受事件有些冗余，直接使用watchService监听到文件拷贝事件完成后，立即进行视频转码即可。

### 前端播放视频
* vue-video-player组件无法动态修改视频源，没找到合适的切换不同分辨率的办法
* 使用<video>实现播放
* 通过按钮点击，动态切换视频源的请求，实现切换不同分辨率