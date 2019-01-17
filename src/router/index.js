/**
 * 路由配置
 */
import React from 'react';
import NewSong from '@/views/newSong/index';
import RankList from '@/views/rank/index';

const HelloWorld = () => {
  return <div>HelloWorld</div>
};

const navRouter = [
  {
    path: '/',
    name: '新歌',
    component: NewSong,
    model: 1
  },
  {
    path: '/nrank/list',
    name: '排行',
    component: RankList,
    model: 1
  },
  {
    path: '/nplist/index',
    name: '歌单',
    component: HelloWorld,
    model: 1
  },
  {
    path: '/nsinger/class',
    name: '歌手',
    component: HelloWorld,
    model: 1
  }
];

const routeConfig = [
  ...navRouter,
  {
    path: '/nrank/info/:id',
    name: '排行榜',
    component: HelloWorld,
    model: 2
  },
  {
    path: '/nplist/list/:id',
    name: '歌单',
    component: HelloWorld,
    model: 2
  },
  {
    path: '/nsinger/list/:id',
    name: '歌手列表',
    component: HelloWorld,
    model: 2
  },
  {
    path: '/nsinger/info/:id',
    name: '歌手信息',
    component: HelloWorld,
    model: 2
  },
  {
    path: '/nsearch/index',
    name: '搜索',
    component: HelloWorld,
    model: 2
  }
];

export { navRouter, routeConfig };
