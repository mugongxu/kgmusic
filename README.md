This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

1、搭建项目

    利用脚手架：
    $ npx create-react-app react-app  // 创建项目
    $ cd react-app  // 打开项目目录
    $ npm start  // 运行项目
    $ npm run eject  // 加载webpack配置文件

2、配置端口

    // 配置端口 scripts/start.js
    // Tools like Cloud9 rely on this.
    const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8008;
    const HOST = process.env.HOST || '0.0.0.0';   

3、配置服务器部署位置

 ``````json  
    // 配置服务器部署路径 package.json
    "name": "react-app",
    "version": "0.1.0",
    "private": true,
    // "homepage": "/newui", // 实现二级目录部署
    "dependencies": {....
``````

项目启动：

  	npm install /cnpm install
  	npm run start

该项目是借助酷狗音乐接口实现的移动端音乐播放前端项目

技术栈：

 	react react-router webpack eslint nodeJS

接口代理：
1、由nodeJS写后端接口（即对酷狗接口进行自己封装）=》接口服务可查看kgmusic-server项目；

``````json
// 前端配置：package.json
"proxy": {
 	"/km": {
        	"target": "http://127.0.0.1:13770",
         	 	"changeOrigin": true
        }
},
``````
	
 2、或者不使用node接口处理，直接使用前端webpack代理(已废弃，新处理为kgmusic-crawl项目爬取数据，kgmusic-server项目提供接口)
 
 ``````json
  // 已废弃
  "proxy": {
    "/banner": {
      "target": "http://m.kugou.com/?json=true",
      "changeOrigin": true
    },
    "/km": {
      "target": "http://127.0.0.1:13770",
      "changeOrigin": true
    },
    "/plist": {
      "target": "http://m.kugou.com",
      "changeOrigin": true
    },
    "/rank": {
      "target": "http://m.kugou.com",
      "changeOrigin": true
    },
    "/singer": {
      "target": "http://m.kugou.com",
      "changeOrigin": true
    },
    "/app": {
      "target": "http://m.kugou.com",
      "changeOrigin": true
    },
    "/yy": {
      "target": "http://www.kugou.com",
      "changeOrigin": true
    },
    "/api": {
      "target": "http://mobilecdn.kugou.com",
      "changeOrigin": true
    }
  },
``````

3、kgmusic-server提供接口目录：
``````js
// 需要请求的API
const proxy = '/km';
const api = {
  // 音乐新歌榜
  banner: { url: proxy + '/banner', method: 'GET' },
  // 音乐歌单
  plistIndex: { url: proxy + '/plist/index', method: 'GET' },
  // 歌单下音乐列表
  plistList: { url: proxy + '/plist/list', method: 'GET' },
  // 音乐排行榜
  rankIndex: { url: proxy + '/rank/list', method: 'GET' },
  // 排行榜歌曲列表
  rankInfo: { url: proxy + '/rank/info', method: 'GET' },
  // 歌手分类
  singerClass: { url: proxy + '/singer/class', method: 'GET' },
  // 歌手列表
  singerList: { url: proxy + '/singer/list', method: 'GET' },
  // 歌手信息
  singerInfo: { url: proxy + '/singer/info', method: 'GET' },
  // 歌曲详情
  songInfo: { url: proxy + '/song/info', method: 'GET' },
  // 歌曲详情 - 带歌词
  songDetail: { url: proxy + '/song/detail', method: 'GET' },
  // 热门搜索列表
  hotSearch: { url: proxy + '/search/hot', method: 'GET' },
  // 音乐搜索
  search: { url: proxy + '/search/song', method: 'GET' }
};
``````
 
 
 注意：由于酷狗接口后台对接口请求域名做了权限验证，`kgmusic-crawl`项目爬取数据，`kgmusic-server`提供后端接口处理，`kgmusic`前端处理 [线上查看](http://m.xuguoqian.com/)
 
 最终效果：
![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105013.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105043.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105056.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105109.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105150.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105204.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105223.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105230.jpg)

![ad](https://github.com/mugongxu/kgmusic/blob/master/20190306105239.jpg)

