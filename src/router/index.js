/**
 * 路由配置
 */
const navRouter = [
  {
    path: '/',
    name: '新歌',
    component: ''
  },
  {
    path: '/rank/list',
    name: '排行',
    component: ''
  },
  {
    path: '/plist/index',
    name: '歌单',
    component: ''
  },
  {
    path: '/singer/class',
    name: '歌手',
    component: ''
  }
];

const RouteConfig = [
  {
    path: '/',
    name: '首页',
    component: '',
    routes: [
      {
        path: '/index',
        name: '歌手',
        component: '',
        routes: [...navRouter]
      },
      {
        path: '/rank/info/:id',
        name: '排行榜',
        component: ''
      },
      {
        path: '/rank/info/:id',
        name: '排行榜',
        component: ''
      },
      {
        path: '/plist/list/:id',
        name: '歌单',
        component: ''
      },
      {
        path: '/singer/list/:id',
        name: '歌手列表',
        component: ''
      },
      {
        path: '/singer/info/:id',
        name: '歌手信息',
        component: ''
      },
      {
        path: '/search/index',
        name: '搜索',
        component: ''
      }
    ]
  }
];

export { navRouter, RouteConfig };
