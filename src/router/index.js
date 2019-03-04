/**
 * 路由配置
 */
import React from 'react';
import NewSong from '@/views/newSong/index';
import RankList from '@/views/rank/index';
import RankSongList from '@/views/rank/info';
import PlistList from '@/views/plist/index';
import PlistSongList from '@/views/plist/info';
import SingerClass from '@/views/singer/index';
import SingerList from '@/views/singer/list';
import SingerSongList from '@/views/singer/info';
import Search from '@/views/search/index';

const navRouter = [
  {
    path: '/',
    name: '新歌',
    component: NewSong,
    model: 1,
    hideTop: false
  },
  {
    path: '/nrank/list',
    name: '排行',
    component: RankList,
    model: 1,
    hideTop: false
  },
  {
    path: '/nplist/index',
    name: '歌单',
    component: PlistList,
    model: 1,
    hideTop: false
  },
  {
    path: '/nsinger/class',
    name: '歌手',
    component: SingerClass,
    model: 1,
    hideTop: false
  }
];

const routeConfig = [
  ...navRouter,
  {
    path: '/nrank/info/:id',
    name: '排行榜',
    component: RankSongList,
    model: 2,
    hideTop: true
  },
  {
    path: '/nplist/list/:id',
    name: '歌单',
    component: PlistSongList,
    model: 2,
    hideTop: true
  },
  {
    path: '/nsinger/list/:id',
    name: '歌手列表',
    component: SingerList,
    model: 2,
    hideTop: false
  },
  {
    path: '/nsinger/info/:id',
    name: '歌手信息',
    component: SingerSongList,
    model: 2,
    hideTop: true
  },
  {
    path: '/nsearch/index',
    name: '搜索',
    component: Search,
    model: 2,
    hideTop: false
  }
];

export { navRouter, routeConfig };
