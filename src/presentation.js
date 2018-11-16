// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  GoToAction
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import listItem from 'spectacle/lib/components/list-item';

// Require CSS
require('normalize.css');

const images = {
  webglstack: require('../src/assets/webglstack.png'),
  gpucgqr: require('../src/assets/gpucgqr.png'),
  glversion: require('../src/assets/glversion.png'),
  gltogpu: require('../src/assets/webgltogpu.png'),

  pg: require('../src/assets/performancegap.png'),
  pg2: require('../src/assets/performancegap2.png'),
  jsf: require('../src/assets/jsf.png'),
  proposal: require('../src/assets/proposal.png'),
  apistack: require('../src/assets/apistack.png'),
  apipoc: require('../src/assets/apipoc.png'),
  perf1: require('../src/assets/perf1.png'),
  perf2: require('../src/assets/perf2.png'),
  cgqr: require('../src/assets/cgqr.png'),
  nnspec: require('../src/assets/nnspec.png'),
  pqr: require('../src/assets/pqr.png'),
  demo1: require('../src/assets/demo1.png'),
  demo2: require('../src/assets/demo2.png'),
  cooperation1: require('../src/assets/cooperation1.png'),
};

const theme = createTheme(
  {
    primary: '#0071c5',
    secondary: 'white',
    tertiary: '#00aeef',
    quartenary: '#f3d54e',
    gray: '#333333'
  },
  {
    // primary: 'Montserrat',
    primary: 'Microsoft Yahei',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
          WebGPU 技术进展及社区组状态更新
          </Heading>
          <Text margin="80px 0 0" textColor="secondary" textSize="0.6em">
          邵嘉炜 jiawei.shao@intel.com
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.6em">
          何云超 yunchao.he@intel.com
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.6em">
          张敏 belem.zhang@intel.com
          </Text>
          <Text margin="30px 0 0" textColor="secondary" textSize="0.8em">
          英特尔开源技术中心
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.8em">
          2018.11.17
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" bgImage={images.webglstack.replace('/', '')} bgRepeat='no-repeat' bgPosition='center' bgSize='80% 100%'
          bgDarken={0}>
          <Heading textSize="1.6em" lineHeight={1} textColor="primary" margin="-340px 0px 0px 0px" >
          WebGL 架构
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" bgImage={images.glversion.replace('/', '')} bgRepeat='no-repeat' bgPosition='center' bgSize='80% 100%'
          bgDarken={0}>
          <Heading textSize="1.6em" lineHeight={1} textColor="primary" margin="-340px 0px 0px 0px" >
          WebGL 版本演进
          </Heading>
        </Slide>

       <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          WebGL 及 WebGPU 的对比
          </Heading>
          <Image src={images.gltogpu.replace('/', '')} margin="40px auto 0px" height="42vh" />
          <List textColor="gray">
                <ListItem textSize="0.65em">WWDC 2018: Apple 不赞成在 macOS 10.14 和 iOS 12 中使用 OpenGL 并鼓励过渡到 Metal</ListItem>
                <ListItem textSize="0.65em">使用 OpenGL ES 构建的应用程序将继续在 iOS 12 中运行，但不再推荐使用 OpenGL ES</ListItem>
                <ListItem textSize="0.65em">2018-06-01: <Link href='https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/dxqWTSvyhDg'>[blink-dev] Intent to Implement: WebGPU (Google)</Link></ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          WebGPU 概要
          </Heading>
          <List textColor="gray">
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">动机</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">Web 应用对可编程 3D 图形，图像处理和 GPU 访问需求持续增强</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">WebGL 和 WebGL 2 满足这些需求，但与现代本机图形 API 的功能或性能不匹配</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">在 Web 中引入 GPU 加速提升科学计算性能</ListItem>   
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">下一代 Web 的 3D 图形 API 标准</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">更低的驱动开销, 更好地支持多线程, 更可预测的性能</ListItem>                
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">在所有主流的操作系统上支持 GPU 通用计算</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">Vulkan: Windows 7/8, Linux, Chrome OS, Android and Android WebView</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">Metal: Mac, iOS</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">Direct3D 12: Windows 10</ListItem>             
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">由 W3C GPU for the Web 社区组开发</ListItem>
          </List>
        </Slide>

       <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          W3C GPU for the Web 社区组
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray">
                <ListItem textSize="0.65em" margin="60px 0px 0px 0px">2017-02-10: W3C WebGPU 社区组成立</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">2017-03-29: <Link href='https://gpuweb.github.io/admin/cg-charter.html'>GPU for the Web CG 章程</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">设计一个新的 Web API，以高效，强大和安全的方式公开这些现代技术</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">在拥有现代3D图形和计算功能的原生系统和 Web 平台之间提供接口</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Direct3D 12 (Microsoft)</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Vulkan (Khronos Group)</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Metal (Apple)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">研究着色器语言以生成跨平台解决方案</ListItem>
            </List>
            </Fill>
            <Fill>
              <Image src={images.gpucgqr.replace('/', '')} margin="40px auto 0px" height="60vh" />
            </Fill>
          </Layout>
        </Slide>

       <Slide transition={['spin']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          W3C GPU for the Web 社区组
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray">
                <ListItem textSize="0.65em" margin="60px 0px 0px 0px">主席: Dean Jackson (Apple), Corentin Wallez (Google)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">社区组参与者</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Apple, Google, Microsoft, Mozilla</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Intel, AMD, Huawei, Samsung, LG</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Adobe, Autodesk, Yandex, Unity, Netflix </ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Alibaba, iQiyi</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">...</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">邀请浏览器引擎开发人员, GPU 硬件供应商, 3D 软件工程师等的广泛参与</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px"><Link href='https://drive.google.com/drive/folders/0B6yb23j9HAmDSDNTcWM0a0lxRU0'>WebGPU 每周会议纪要</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px"><Link href='https://lists.w3.org/Archives/Public/public-gpu/'>邮件列表: public-gpu@w3.org</Link></ListItem>
            </List>
            </Fill>
            <Fill>
              <Image src={images.gpucgqr.replace('/', '')} margin="40px auto 0px" height="60vh" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          WebGPU 规范, 实现进展
          </Heading>
          <List textColor="gray">
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebIDL 规范: <Link href='https://github.com/gpuweb/gpuweb/blob/master/design/sketch.webidl'>gpuweb/blob/master/design/sketch.webidl</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU 提案</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px"><Link href='https://github.com/google/nxt-standalone'>Dawn</Link> (Google)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px"><Link href='https://github.com/KhronosGroup/WebGLNext-Proposals/tree/master/Obsidian-Mozilla'>Obsidian</Link> (Mozilla)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px"><Link href='https://github.com/gpuweb/proposals/tree/master/WebGPU-Apple'>WebMetal</Link> (Apple)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU MVP (Minimum Viable Product) <Link href='https://github.com/gpuweb/gpuweb/wiki/Roadmap'>路线图</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU 目前正在积极开发中，当前的开发计划</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">2019 年初完成 WebGPU 的 MVP (Minimum Viable Product) 版本</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">2019 年内完成 WebGPU 1.0 版本的开发</ListItem>
          </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          近期 Intel 在 WebGL 的工作
          </Heading>
          <List textColor="gray">
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">在 WebGL 2.0 Compute 中实现 GLES31 的功能</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WEBGL_video_texture 的实现以改进 WebXR 360 video 的性能</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">Parallel Shader Compilation 的实现, 达到双线程下 1.4x~1.8x 的性能提升</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">移植 WebGL benchmark 到原生应用以测试和改进 WebGL 性能</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">...</ListItem>
          </List>
        </Slide>

        <Slide transition={['spin']} bgColor="secondary">
          <Heading textSize="1.6em" lineHeight={1} textColor="primary">
          近期 Intel 在 WebGPU 的工作
          </Heading>
          <List textColor="gray">
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">与 Chromium GPU team 紧密合作, 每两周开会讨论 WebGPU 的最新进展</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU CG 主席 Corentin Wallez 将于明年早些时候到访 Intel Web Team</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU API 的调研和设计</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">基于 Google 维护的开源项目 <Link href='https://dawn.googlesource.com/dawn'>Dawn</Link> 在 Chromium 中实现 WebGPU API</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">WebGPU MVP 功能开发</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">push constants</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">texture view</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">render pipeline descriptorization</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">MSAA</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">......</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Quote textColor="secondary">
            谢谢!
          </Quote>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
          Web Neural Network API
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
          技术进展及社区组状态更新
          </Text>
          <Text margin="60px 0 0" textColor="secondary" textSize="0.6em">
          胡宁馨 ningxin.hu@intel.com
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.6em">
          张敏 belem.zhang@intel.com
          </Text>
          <Text margin="30px 0 0" textColor="secondary" textSize="0.8em">
          英特尔开源技术中心
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.8em">
          2018.11.17
          </Text>
        </Slide>

        <Slide transition={['zoom', 'fade']} bgColor="secondary">
          <Heading fit textColor='primary' margin="0px 0 20px">
          JavaScript 机器学习/深度学习框架
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={6}
                
                textColor="secondary"
                bgColor="#f3d54e"
                margin={20}
                padding={10}
              >
                应用场景
              </Heading>
              <Text margin="20px 0 0" textColor="#f3d54e" textSize="1em">
              情感分析 目标检测
              </Text>
              <Text margin="20px 0 0" textColor="#f3d54e" textSize="1em">
              手写识别 面部识别
              </Text>
              <Text margin="20px 0 0" textColor="#f3d54e" textSize="1em">
              图像分类 姿态识别
              </Text>
              <Text margin="20px 0 0" textColor="#f3d54e" textSize="1em">
              风格迁移 对象识别
              </Text>  
              <Text margin="20px 0 0" textColor="#f3d54e" textSize="1em">
              ......
              </Text>             
            </Fill>
            <Fill>
              <Heading
                size={6}
                
                textColor="secondary"
                bgColor="#f3d54e"
                margin={20}
                padding={10}
              >
              JS 框架
              </Heading>
              <Image src={images.jsf.replace('/', '')} margin="20px auto 0px" />
            </Fill>
          </Layout>
          <Appear fid="1">
            <Heading textSize="1.5em" textColor="#00aeef">
            执行时间?
            </Heading>
          </Appear>
        </Slide>
 
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          JavaScript 框架的性能问题
          </Heading>
          <Text textSize="1em" textColor="primary">
          机器学习/深度学习
          </Text>
         
          <Image src={images.pg.replace('/', '')} margin="20px auto 0px" height="60vh" />
          <Text textSize="0.5em" textColor="primary" margin="10px 0 0" >
          ResNet50 图像分类 运行时间 (ms)
          </Text>
          <Text textSize="0.3em" textColor="gray" margin="10px 0 0">
          MacBook Pro (13-inch, 2016) / Mac OS 10.13 / SkyLake Core i5 2.9GHz / HD 550
          </Text>
          <Text textSize="0.3em" textColor="gray" margin="2px 0 0">
          ResNet50, trained by ImageNet, inference, batch size 1, warm up 1, iteration 10 / Jan 2018
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" bgImage={images.pg.replace('/', '')} bgRepeat='no-repeat' bgPosition='center' bgSize='100% 100%'
          bgDarken={0.85}>
          <Appear fid="1">
            <Heading margin={10} textSize="1.5em" textColor="#00aeef">
            云端 vs 原生: 17x~21x
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading margin={10} textSize="1.5em" textColor="#00aeef">
            WASM vs 原生: 24x
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading margin={10} textSize="1.5em" textColor="#00aeef">
            WebGL2 vs 原生: 3.9x~7.4x
            </Heading>
          </Appear>     
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          提议: Web Neural Network API
          </Heading>
         
          <Image src={images.proposal.replace('/', '')} margin="40px auto 0px" height="46vh" />

          <List textColor="gray">
                <ListItem textSize="0.8em">用于深度神经网络推理的基于标准的 Web API</ListItem>
                <ListItem textSize="0.8em">与文本、多媒体、传感器和 XR 等其他 Web API 集成</ListItem>
                <ListItem textSize="0.8em">利用硬件加速，且将 Web 深度学习运算交由系统 API 完成</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          Web API 分层架构
          </Heading>
          <Text textSize="1em" textColor="primary">
          机器学习/深度学习
          </Text>
         
          <Image src={images.apistack.replace('/', '')} margin="40px auto 0px" height="40vh" />

          <List textColor="gray">
                <ListItem textSize="0.8em">Usage API: 内置模型，易于集成 ⇒ W3C 形状检测 API</ListItem>
                <ListItem textSize="0.8em">Model API: 模型预先训练，格式存在碎片化问题 ⇒ 未来的工作</ListItem>
                <ListItem textSize="0.8em">Acceleration API: NN 底层 API，接近硬件优化，灵活适配 JS 框架 ⇒ 起点</ListItem>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          Web Neural Network API POC
          </Heading>

          <List textColor="gray" margin="40px auto 0px">
                <ListItem textSize="0.8em">从 <Link href='https://developer.android.com/ndk/guides/neuralnetworks/'>Android NN API</Link> 实现 <Link href='https://github.com/intel/webml-polyfill/blob/master/docs/api.md'>JavaScript API</Link> 的概念验证</ListItem>
                <ListItem textSize="0.8em">作为 Web NN API 提案的起点，评估性能并探索跨平台能力</ListItem>
            </List>
            <Appear>
            <Image src={images.apipoc.replace('/', '')} height="36vh" margin="40px auto 0px" />
            </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          Web NN API POC 的实现
          </Heading>
         
          <Image src={images.proposal.replace('/', '')} margin="40px auto 0px" height="46vh" />

          <List textColor="gray">
                <ListItem textSize="0.8em">WebAssembly 以及 WebGL 后端的 <Link href="https://github.com/intel/webml-polyfill">Polyfill</Link> 实现</ListItem>
                <ListItem textSize="0.8em">Chromium prototype 实现</ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Mac OS: MPS/BNNS API</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Android: NN API</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Windows/Linux: clDNN</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Windows: DirectML API</ListItem>
                  </List>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" >
          Web NN API POC 功能
          </Heading>

          <List textColor="gray" margin="60px auto 0px">
                <ListItem textSize="0.8em">运算支持</ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">ADD, AVERAGE_POOL_2D, CONCATENATION, CONV_2D, DEPTHWISE_CONV_2D, MAX_POOL_2D, MUL, RESHAPE, SOFTMAX, FULLY_CONNECTED
</ListItem>
                  </List>
            </List>
            <List textColor="gray">
                <ListItem textSize="0.8em">模型支持</ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="10px 0px 0px 40px">TFLite 模型: MobileNet V1/V2, SqueezeNet, Inception V3, SSD MobileNet
                    </ListItem>
                    <ListItem textSize="0.65em" margin="10px 0px 0px 40px">
                    TF.js 模型: MobileNet, PoseNet
                    </ListItem>
                    <ListItem textSize="0.65em" margin="10px 0px 0px 40px">
                    ONNX 模型: MobileNet V2, SqueezeNet
                    </ListItem>
                  </List>
            </List>
            <List textColor="gray">
                <ListItem textSize="0.8em">原生 API 映射</ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="10px 0px 0px 40px">MPS/BNNS, NNAPI and clDNN

</ListItem>
                  </List>
            </List>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading fit textColor='primary' margin="0px 0 20px">
          Web NN API POC 示例及基准测试
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray" margin="40px auto 0px">
                <ListItem textSize="0.8em"><Link href='https://github.com/intel/webml-polyfill/tree/master/examples'>示例</Link></ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">图像分类: MobileNet, SqueezeNet, Inception V3</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">目标检测: SSD MobileNet</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">姿态识别: PoseNet</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">静态图像和摄像头支持</ListItem>
                  </List>
            </List>   
            <List textColor="gray" margin="20px auto 0px">
                <ListItem textSize="0.8em"><Link href='https://github.com/intel/webml-polyfill/tree/master/test'>测试</Link></ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">转换 NN API CTS C++ 测试用例到 JavaScript</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">500+ 测试用例</ListItem>
                  </List>
            </List>  
            <List textColor="gray" margin="20px auto 0px">
                <ListItem textSize="0.8em"><Link href='https://github.com/intel/webml-polyfill/tree/master/benchmark'>基准测试</Link></ListItem>
                  <List>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">覆盖全部支持的模型</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Polyfill (WebGL + WASM) 性能测试</ListItem>
                    <ListItem textSize="0.65em" margin="5px 0px 0px 40px">Web NN API 性能测试</ListItem>
                  </List>
            </List> 
            </Fill>
            <Fill>
              

            <Anim
            onAnim={(forwards, animIndex) => {
              /* eslint-disable */
              console.log('forwards ', forwards);
              console.log('animIndex ', animIndex);
              /* eslint-enable */
            }}
            fromStyle={{
              opacity: 0,
              transform: 'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
            }}
            toStyle={[
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale(1) rotate(0deg)'
              },
              {
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale(0) rotate(0deg)'
              }
            ]}
            easing={'bounceOut'}
            transitionDuration={500}
          >
            <div>
              <Image src={images.demo1.replace('/', '')} margin="20px auto 0px" height="60vh" />
            </div>
          </Anim>
          <Appear>
            <Image src={images.demo2.replace('/', '')} margin="-500px auto 0px" height="60vh" />
          </Appear>
            </Fill>
          </Layout>            
        </Slide>
        
        <Slide transition={['fade']} bgColor="secondary">
          <Heading fit textColor='primary' margin="0px 0 20px">
          Web NN API POC 性能数据 (Win/Mac/Android)
          </Heading>
          <Image src={images.perf1.replace('/', '')} margin="20px auto 0px" height="30vh" />
          <Image src={images.perf2.replace('/', '')} margin="20px auto 20px" height="30vh" />
          <List textColor="gray">
                <ListItem textSize="0.8em">和 WebGL polyfill 相比有显著性能提升</ListItem>
                <ListItem textSize="0.8em">为 Web 应用带来接近原生的性能</ListItem>
                <ListItem textSize="0.8em">为 Web 应用带来原生硬件和软件的优化</ListItem>
            </List>
        </Slide>

        <Slide transition={['spin']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
          Web Neural Network API 合作与支持
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray">
                <ListItem textSize="0.65em" margin="60px 0px 0px 0px">WebML 项目得到谷歌、微软等的广泛支持</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Google TensorFlowLite/TensorFlow.js 团队, Chrome 团队</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Microsoft WinML 及 Edge 团队</ListItem>
                <ListItem textSize="0.55em" margin="10px 0px 0px 40px">Mozilla 团队</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">W3C TPAC 2018: 英特尔主导的 WebML 是最受欢迎的分组会议之一，吸引了包括所有浏览器供应商及 W3C TAG 成员的参与</ListItem>
            </List>
            </Fill>
            <Fill>
              <Image src={images.cooperation1.replace('/', '')} margin="60px auto 0px" height="40vh" />
            </Fill>
          </Layout>
          <Appear>
            <BlockQuote  margin="40px 0px 0px 20px">
              <Quote textSize="0.8em">W3C CEO Jeff Jaffe 在 TPAC 2018 主题演讲中强调英特尔主导的 ML for Web 是 W3C 的一项关键的进一步创新</Quote>
            </BlockQuote>
          </Appear>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
          Web Neural Network API 标准规范
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray">
                <ListItem textSize="0.65em" margin="80px 0px 0px 0px">2018-11-02: <Link href='https://webmachinelearning.github.io/webnn/'>社区组报告草案 (Draft Community Group Report)</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">在 W3C Web ML 社区组 (WebML CG) 起草</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">用于神经网络推理硬件加速的专用 API</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">CG 召开了第一次会议，成员们同意将重点放在使用用例来定义规范工作</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">高级用例: 构建在预训练的深度神经网络模型之上, 例如人物检测、骨架检测及随机图像生成等</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 40px">API 级用例: ML 框架将引用 WebML API，以便应用开发人员通过框架使用这些功能，例如构建自定义层、性能加速等</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">2018 年晚些时候推进规范开发</ListItem>
            </List>
            </Fill>
            <Fill>
              <Image src={images.nnspec.replace('/', '')} margin="40px auto 0px" height="60vh" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
          W3C Machine Learning for the Web 社区组
          </Heading>
          <Layout>
            <Fill>
            <List textColor="gray">
                <ListItem textSize="0.65em" margin="60px 0px 0px 0px">2018-10-03: W3C Web ML 社区组成立</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">CG 主席: Anssi Kostiainen (Intel)</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">2018-10-11: <Link href='https://webmachinelearning.github.io/charter/'>WebML CG 章程</Link></ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">章程范围: 通过在浏览器中孵化和开发用于机器学习推理的专用低级 Web API，使机器学习成为 Web 的一等公民</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">当前参与者: 英特尔, 华为, 微软, Mozilla 基金会, KDDI 等等</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">微软承诺在即将举行的 We Are Developers AI 大会 (2018 年 12 月 4 日至 5 日, 维也纳) 上进一步推广新建立的 WebML CG</ListItem>
                <ListItem textSize="0.65em" margin="10px 0px 0px 0px">小组邀请浏览器引擎开发人员，硬件供应商，Web 应用程序开发人员以及对机器学习感兴趣的更广泛的 Web 社区参与</ListItem>
            </List>
            </Fill>
            <Fill>
              <Image src={images.cgqr.replace('/', '')} margin="40px auto 0px" height="60vh" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading textSize="2.0em" lineHeight={1} textColor="primary">
          欢迎关注
          </Heading>

          <Image src={images.pqr.replace('/', '')} margin="20px auto 0px" height="50vh" />

          <List textColor="gray">
            <ListItem textSize="0.65em" margin="10px auto 0px"><Link href='https://github.com/intel/webml-polyfill'>https://github.com/intel/webml-polyfill</Link></ListItem>
            <ListItem textSize="0.65em" margin="10px auto 0px"><Link href='https://webmachinelearning.github.io/'>https://webmachinelearning.github.io</Link></ListItem>
            <ListItem textSize="0.65em" margin="10px auto 0px"><Link href='https://www.w3.org/community/webmachinelearning/'>https://www.w3.org/community/webmachinelearning/</Link></ListItem>
          </List>

        </Slide>
 
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Quote textColor="secondary">
            谢谢!
          </Quote>
        </Slide>
      </Deck>
    );
  }
}
