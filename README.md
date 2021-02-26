# SoftwareArchitectureLabs项目说明
作业要求原址：[https://github.com/njuics/sa-2020/wiki/Homework](https://github.com/njuics/sa-2020/wiki/Homework)

## 2020年3月2日【3-LayerArchitecture】
- 阅读 Three Layer Architecture in C# .NET
- 找一个符合三层架构设计的开源桌面应用工程（平台不限），研究代码并编译运行。请将代码存放在github仓库，并在课程群内发送github仓库url。

## 2020年3月9日【petclinic-spring】
- 参考Petclinic，按照MVC的架构模式开发⼀个学⽣管理应⽤（Spring Boot App），实现学⽣信息（姓名、性别、出⽣年⽉、籍贯、院系、学号）管理（增删改查）
- DDL：2020年3月15日23时59分

## 2020年3月23日【students-front&back-rest-vue】
- 参考 https://spring.io/guides/tutorials/rest/ ，将前一次作业的学⽣管理应⽤改为REST（后端）+ VUE（前端）的实现。
- DDL：2020年4月5日23:59

## 2020年4月13日【appNature-haproxy-gatling】
- 设计开发一个mvc架构的web应用
    - web应用需用户认证后方可访问其主要接口（页面）
    - web应用需存在计算密集接口，使用cache来缓存计算结果，加速请求响应
- 按课程讲解，将改web应用打包为docker容器，并使用haproxy（tcp模式，非session sticky策略）搭建一个水平扩展的集群系统
    - 使用redis（standalone或cluster均可）存储管理web应用的多个实例的会话及缓存数据
- 使用gatling压测工具，对系统进行性能测试，出具在多种配置（不同的web实例个数/有无redis缓存）下系统性能报告
- DDL: 2020年4月19日23:59

## 2020年4月27日【simpleMilimili-vue-handbrake】
- 设计开发一个视频发布系统（可参考Bilibili），至少包含三个部分
    - 一个web应用让用户上传视频文件以及相关描述信息（文件上传可使用上传组件，例如https://www.npmjs.com/package/vue-upload-component）；
    - 一个视频处理（转码）系统，将用户上传的视频文件转为至少两种分辨率（360p，720p，1080p等），转码器可使用最著名的handbrake；
    - 一个web应用让用户查看所上传的视频列表并播放（视频播放可使用播放器组件，例如https://github.com/surmon-china/vue-video-player，允许用户切换不同分辨率。
- 以上三个系统相互独立，在设计实现中请考虑采用spring mvc/spring batch/spring amqp/spring integration等技术
- 请考虑系统的水平可扩展性
- DDL：2020年5月10日23:59

## 课程考核【finalMilimili-rabbitMQ-prometheus】
考核要求原址：[https://github.com/njuics/sa-2020/wiki/%E8%AF%BE%E7%A8%8B%E8%80%83%E6%A0%B8](https://github.com/njuics/sa-2020/wiki/%E8%AF%BE%E7%A8%8B%E8%80%83%E6%A0%B8)
本课程考核采用项目开发与技术研究相结合的形式，包括两个部分（两部分在总评分中各自所占比例将根据各位实际情况进行调整，以最大程度体现出区分度和公平性）：
1. 按要求设计开发一个视频网站；
2. 在此基础之上，撰写技术报告调研报告。

具体要求如下。

### 一、项目开发

#### 功能性要求
项目开发部分要求设计开发一个视频网站，实现以下功能：
1. 实现独立的一个前端应用让用户上传视频文件；
2. 用户上传的原始视频文件保存在独立的存储系统（例如网络文件系统NFS、分布式文件系统glusterfs等）；
3. 存储完成后，创建一个任务，放入消息队列（消息体包含刚保存的原始视频文件信息，消息队列可食用rabbitmq或kafka等）；
4. 实现一个独立的编码子系统，负责从消息队列中取出任务，启动一个编码器（handbreak）执行编码，转为至少两种分辨率（360p，720p，1080p等）；
5. 编码结束后将输出的视频文件保存在存储系统中；
6. 实现独立的一个前端应用让用户播放视频，每次播放连接到视频系统打开文件进行播放；
以上过程对应的系统结构如下图所示。
![](https://camo.githubusercontent.com/ade21ea0c992c2d47954d3278d062d1932d81a7ed24dc1d55695afe88cfb15fd/687474703a2f2f63646e2e6e6a756963732e636e2f7361323032302f70726f6a6563742e706e67)

#### 非功能性要求
系统在非功能性方面的主要要求包括：

1. 为支持用户并发访问，两个前端应用子系统（上传、播放）应可扩展。请在系统中自行加入负载均衡器（如haproxy等）和监控组件（如prometheus等）进行性能指标监控，在指标低于某个阈值时触发警报自动进行子系统扩展，或给出提示信息让管理人员手工进行子系统扩展；
2. 为提高系统响应性，编码子系统应在有限条件下进行水平扩展。因编码任务是计算密集型任务，假设系统资源只够N个编码任务同时运行，因此上述系统中设计了任务队列，用于缓冲待编码任务。如果当前编码任务数小于N，且任务队列中存在等待任务，则直接启动新的编码进程处理任务，否则让任务处于等待。请在编码子系统中设法实现这一扩展规则。

#### 其他要求
1. 请提交所有代码；（要求所提交代码完整、可使用maven等工具自动构建、可运行）
2. 请将系统运行过程进行录屏，证明功能达到要求；（要求视频直观可理解，也可通过文字、语言等方式解释以助理解）
3. 请对系统进行压力测试，给出测试报告，证明系统具有所要求的可扩展性（要求提供原始报告，并对数据进行说明）。

### 二、技术报告
上述视频网站是一个较为典型的互联网视频系统的模拟，请结合你所开发的系统与你对真正的互联网视频网站（例如bilibili）的认知，撰写一份技术报告。

#### 报告要求
要求如下：

1. 请针对项目要求中给出的设计详细分析其优劣点，并针对其中的不良设计给出设计改进；
2. 请调研或想象bilibili这样的视频网站在面向如此大规模的用户场景下，应该如何进行系统设计。

#### 评分规则
报告评分会选取最好与最差两份报告作为基准，为各份报告给出相对分数。