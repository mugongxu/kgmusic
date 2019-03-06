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

    // 配置服务器部署路径 package.json
    "name": "react-app",
    "version": "0.1.0",
    "private": true,
    // "homepage": "/newui", // 实现二级目录部署
    "dependencies": {....

项目启动：

  	npm install /cnpm install
  	npm run start

该项目是借助酷狗音乐接口实现的移动端音乐播放前端项目
技术栈：react react-router webpack eslint nodeJS

接口代理：
1、由nodeJS写后端接口（即对酷狗接口进行自己封装）=》接口服务可查看kgmusic-server项目；
	
	前端配置：package.json
     	"proxy": {
           	"/km": {
          		"target": "http://127.0.0.1:13770",
         	 	"changeOrigin": true
        	}
      	},
	
 2、或者不使用node接口处理，直接使用前端webpack代理
 
 
 最终效果：
