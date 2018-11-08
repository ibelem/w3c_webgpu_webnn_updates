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

// Require CSS
require('normalize.css');

const images = {
  pg: require('../src/assets/performancegap.png'),
  pg2: require('../src/assets/performancegap2.png'),
  jsf: require('../src/assets/jsf.png'),
  proposal: require('../src/assets/proposal.png'),
  apistack: require('../src/assets/apistack.png'),
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Web Neural Network API
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} bold>
          技术进展及社区组状态更新
          </Text>
          <Text margin="60px 0 0" textColor="secondary" textSize="0.6em">
          Hu Ningxin ningxin.hu@intel.com
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.6em">
          Zhang Min belem.zhang@intel.com
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.8em">
          英特尔开源技术中心
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="0.8em">
          2018.11.17
          </Text>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="secondary">
          <Heading caps fit textColor='primary' margin="0px 0 20px">
          JavaScript 机器学习/深度学习框架
          </Heading>
          <Layout>
            <Fill>
              <Heading
                size={6}
                caps
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
                caps
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
          <Heading size={5} textColor="primary" caps>
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
          bgDarken={0.0}>   
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" bgImage={images.pg2.replace('/', '')} bgRepeat='no-repeat' bgPosition='center' bgSize='100% 100%'
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
          <Heading size={5} textColor="primary" caps>
          提议: Web Neural Network API
          </Heading>
         
          <Image src={images.proposal.replace('/', '')} margin="40px auto 0px" height="70vh" />

          <List textColor="gray">
              <Appear>
                <ListItem textSize="0.8em">用于深度神经网络推理的基于标准的 Web API</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="0.8em">与文本、多媒体、传感器和 XR 等其他 Web API 集成</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="0.8em">利用硬件加速，且将 Web 深度学习运算交由系统 API 完成</ListItem>
              </Appear>
            </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
          Web API 分层架构
          </Heading>
          <Text textSize="1em" textColor="primary">
          机器学习/深度学习
          </Text>
         
          <Image src={images.apistack.replace('/', '')} margin="40px auto 0px" height="70vh" />

          <List textColor="gray">
              <Appear>
                <ListItem textSize="0.8em">Usage API：内置模型，易于集成⇒W3C形状检测API</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="0.8em">Model API：模型预先训练，格式存在碎片化问题 ⇒ 未来的工作</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="0.8em">Acceleration API：神经网络底层 API，接近硬件优化，灵活适配 JS 框架 ⇒ 起点</ListItem>
              </Appear>
            </List>
        </Slide>       
        <Slide
          onActive={slideIndex => {
            console.info(`Viewing slide index: ${slideIndex}.`); // eslint-disable-line no-console
          }}
          id="wait-what"
          goTo={4}
          transition={[
            'fade',
            (transitioning, forward) => {
              const angle = forward ? -180 : 180;
              return {
                transform: `
                  translate3d(0%, ${transitioning ? 100 : 0}%, 0)
                  rotate(${transitioning ? angle : 0}deg)
                `,
                backgroundColor: transitioning ? '#26afff' : '#000'
              };
            }
          ]}
          bgColor="white"
          notes="You can even put notes on your slide. How awesome is that?"
        >
          {/* <Image src={images.kat.replace('/', '')} margin="0px auto 40px" /> */}
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
