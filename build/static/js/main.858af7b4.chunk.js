(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){},130:function(e,t,a){},241:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(32),i=a.n(r),c=(a(97),a(99),a(3)),l=a.n(c),o=a(9),u=a(4),m=a(5),p=a(7),d=a(6),h=a(8),f=(a(103),a(246)),g=a(244),v=a(10),b=a(14),E=a(13),y=a(88),k=a.n(y).a.create({timeout:1e4});k.interceptors.request.use(function(e){return Object(b.a)({},e)}),k.interceptors.response.use(function(e){return 200!==e.status&&Promise.reject("Http \u72b6\u6001\u5f02\u5e38 ".concat(e.status)),e},function(e){throw Promise.reject(e),e});var j=k,O=function(e){if(e=Number(e.toFixed(0))){var t=Math.floor(e/60),a=e-60*t;return(t>9?t:"0"+t)+":"+(a>9?a:"0"+a)}return"00:00"},N=(a(124),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hash:"",songInfo:{},songsList:[],authors:{},index:0,pause:!1,currentTime:0,currentTimeStr:"00:00",duration:0,durationStr:"00:00",lyricsList:[]},a.ftPlayer=s.a.createRef(),a.panelPlay=s.a.createRef(),a.panelPlayLrc=s.a.createRef(),a.songTimer=null,a.currentIndex=0,a.pauseSong=a.pauseSong.bind(Object(E.a)(Object(E.a)(a))),a.nextSong=a.nextSong.bind(Object(E.a)(Object(E.a)(a))),a.prevSong=a.prevSong.bind(Object(E.a)(Object(E.a)(a))),a.downloadSong=a.downloadSong.bind(Object(E.a)(Object(E.a)(a))),a.showPanelPlay=a.showPanelPlay.bind(Object(E.a)(Object(E.a)(a))),a.goBack=a.goBack.bind(Object(E.a)(Object(E.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.listenSongPlayEnd(),this.listenSongOnPlay()}},{key:"showFtPlayer",value:function(e,t){var a=this;this.setState({songsList:e,index:t},function(){a.getSongInfo()})}},{key:"getSongInfo",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r,i,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.currentIndex=0,t=this.state.songsList[this.state.index],this.ftPlayer.current.style.display="block",a=t.hash,this.setState({hash:a}),e.next=7,j.get("/yy/index.php",{params:{r:"play/getdata",hash:a}});case 7:if(n=e.sent,(s=n.data.data).play_url){e.next=12;break}return this.nextSong(),e.abrupt("return");case 12:this.setState({songInfo:Object(b.a)({},s),authors:Object(b.a)({},s.authors[0]),pause:!1}),(r=document.getElementById("kumao")).src=s.play_url,r.play(),i=s.lyrics.split(/\n/),c=[],i.forEach(function(e){if(e){var t=e.split("]"),a=(t[0]||"").replace("[","").split(":"),n=(60*Number(a[0]||0)+Number(a[1]||0)).toFixed(2);c.push({timestamp:Number(n),lyrics:t[1]||""})}}),this.setState({lyricsList:c});case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pauseSong",value:function(){var e=document.getElementById("kumao"),t=this.state.pause;t?e.play():e.pause(),this.setState({pause:!t})}},{key:"nextSong",value:function(){var e=this,t=this.state.index;t=t<this.state.songsList.length-1?t+1:0,this.setState({index:t},function(){e.getSongInfo()})}},{key:"prevSong",value:function(){var e=this,t=this.state.index,a=this.state.songsList.length;t=t?t-1:a-1,this.setState({index:t},function(){e.getSongInfo()})}},{key:"downloadSong",value:function(){}},{key:"listenSongPlayEnd",value:function(){var e=this;document.getElementById("kumao").addEventListener("ended",function(){e.nextSong()},!1)}},{key:"listenSongOnPlay",value:function(){var e=this,t=document.getElementById("kumao");t.addEventListener("timeupdate",function(){var a=Number(t.currentTime.toFixed(2)),n=t.duration;e.setState({currentTime:a,duration:n,currentTimeStr:O(a),durationStr:O(n)},function(){e.panelPlayLrc.current.scrollTop=e.currentIndex?1.7857*(e.currentIndex-1)*16:0})})}},{key:"showPanelPlay",value:function(){this.panelPlay.current.style.display="block"}},{key:"goBack",value:function(){this.panelPlay.current.style.display="none"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"songs-play-wrapper"},s.a.createElement("div",{className:"ft-player",ref:this.ftPlayer},s.a.createElement("div",{className:"ft-go-info",onClick:this.showPanelPlay},s.a.createElement("div",{className:"ft-left"},s.a.createElement("img",{src:this.state.authors.avatar,onError:function(){return e.src=e.state.songInfo.img},alt:""})),s.a.createElement("div",{className:"ft-center"},s.a.createElement("p",{className:"ft-desc"},this.state.songInfo.song_name),s.a.createElement("p",{className:"ft-sub-desc"},this.state.songInfo.author_name))),s.a.createElement("div",{className:"ft-right"},s.a.createElement("i",{className:this.state.pause?"btn-play":"btn-pause",onClick:this.pauseSong}),s.a.createElement("i",{className:"btn-next",onClick:this.nextSong}),s.a.createElement("i",{className:"ft-icon-download",onClick:this.downloadSong}))),s.a.createElement("div",{className:"panel-play",ref:this.panelPlay},s.a.createElement("div",{className:"bg-overlay",style:{backgroundImage:'url("'.concat(this.state.authors.avatar,'")')}}),s.a.createElement("div",{className:"play-overlay"}),s.a.createElement("div",{className:"top-fixes"},s.a.createElement("p",{className:"title",id:"title"},this.state.songInfo.song_name),s.a.createElement("div",{className:"goback",onClick:this.goBack},s.a.createElement("i",null))),s.a.createElement("div",{className:"panel-play-bd"},s.a.createElement("div",{className:"panel-play-img-box"},s.a.createElement("img",{src:this.state.authors.avatar,onError:function(){return e.src=e.state.songInfo.img},alt:""})),s.a.createElement("div",{className:"panel-play-lrc-box"},s.a.createElement("div",{className:"panel-play-lrc",ref:this.panelPlayLrc},this.state.lyricsList.map(function(t,a){var n="",r=t.timestamp,i=e.state.currentTime,c=e.state.lyricsList[a+1]?e.state.lyricsList[a+1].timestamp:e.state.duration;return i>=r&&i<c&&(n="current",e.currentIndex=a),s.a.createElement("p",{key:a,className:n},t.lyrics)}))),s.a.createElement("div",{className:"time-wrap"},s.a.createElement("div",{className:"timeshow"},this.state.currentTimeStr),s.a.createElement("div",{className:"progress-wrap"},s.a.createElement("div",{className:"progress-bar"},s.a.createElement("div",{className:"preview-progress"}),s.a.createElement("div",{className:"progress",style:{width:"".concat(this.state.currentTime/this.state.duration*100,"%")}},s.a.createElement("span",null)))),s.a.createElement("div",{className:"time"},this.state.durationStr)),s.a.createElement("div",{className:"play-operate"},s.a.createElement("i",{className:"btn-prev",onClick:this.prevSong}),s.a.createElement("i",{className:this.state.pause?"btn-play":"btn-pause",onClick:this.pauseSong}),s.a.createElement("i",{className:"btn-next",onClick:this.nextSong})))),s.a.createElement("div",{id:"player",className:"player"},s.a.createElement("audio",{id:"kumao",width:"100%",height:"100%",controls:!0})))}}]),t}(n.Component)),w=(a(126),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={rank:e.rank},a.playBox=s.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"playSongs",value:function(e,t){this.playBox.current.showFtPlayer(this.props.songsList,e)}},{key:"render",value:function(){var e=this,t=["one","two","three"];return s.a.createElement("div",null,s.a.createElement("ul",{className:this.state.rank?"songslist rank-songsList":"songslist"},this.props.songsList.map(function(a,n){return s.a.createElement("li",{key:n,className:"songslist-item",onClick:e.playSongs.bind(e,n)},s.a.createElement("div",{className:"songs-item-name"},s.a.createElement("span",null,a.filename)),s.a.createElement("div",{className:"songs-item-download"},s.a.createElement("i",null)),e.state.rank?s.a.createElement("span",{className:t[n]?"songs-item-num "+t[n]:"songs-item-num"},n+1):"")})),s.a.createElement(N,{ref:this.playBox}))}}]),t}(n.Component)),S=a(26),x=a.n(S),L=a(89),C=a.n(L),P=a(27);a(128);var T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).renderContent=a.renderContent.bind(Object(E.a)(Object(E.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.buildSwiper()}},{key:"componentDidUpdate",value:function(){if("undefined"!==typeof this.swiper){var e=this.props,t=e.rebuildOnUpdate,a=e.shouldSwiperUpdate,n=e.activeSlideKey;if(t)this.rebuildSwiper();else if(a){this.updateSwiper();var r=this.swiper.slides.length;if(r<=this.swiper.activeIndex){var i=Math.max(r-1,0);this.swiper.slideTo(i)}}if(n){var c=null,l=0;s.a.Children.forEach(this.props.children,function(e){e&&(e.key===n&&(c=l),l+=1)}),null!==c&&this.swiper.slideTo(c)}}}},{key:"componentWillUnmount",value:function(){"undefined"!==typeof this.swiper&&this.swiper.destroy(!0,!0),delete this.swiper}},{key:"buildSwiper",value:function(){this.swiper=new C.a(i.a.findDOMNode(this),x()({},this.props))}},{key:"rebuildSwiper",value:function(){this.swiper.destroy(!0,!0),this.buildSwiper()}},{key:"updateSwiper",value:function(){"undefined"!==typeof this.swiper&&this.swiper.update()}},{key:"renderContent",value:function(e){if(!e)return!1;var t=this.props,a=t.slideClass,n=t.noSwiping,r=[a,e.props.className];return n&&r.push("swiper-no-swiping"),s.a.cloneElement(e,Object(b.a)({},e.props,{className:r.join(" ").trim()}))}},{key:"render",value:function(){var e=this.props,t=e.ContainerEl,a=e.WrapperEl,n=e.containerClass,r=e.wrapperClass,i=e.children,c=e.rtl,l=e.scrollbar,o=e.renderScrollbar,u=e.pagination,m=e.renderPagination,p=e.navigation,d=e.renderPrevButton,h=e.renderNextButton;return s.a.createElement(t,{className:n,dir:c&&"rtl"},s.a.createElement(a,{className:r},s.a.Children.map(i,this.renderContent)),u&&u.el&&m(this.props),l&&l.el&&o(this.props),p&&p.nextEl&&h(this.props),p&&p.prevEl&&d(this.props))}}]),t}(n.Component);T.defaultProps={containerClass:"swiper-container",wrapperClass:"swiper-wrapper",slideClass:"swiper-slide",ContainerEl:"div",WrapperEl:"div",renderScrollbar:function(e){var t=e.scrollbar;return s.a.createElement("div",{className:Object(P.a)(t.el)})},renderPagination:function(e){var t=e.pagination;return s.a.createElement("div",{className:Object(P.a)(t.el)})},renderPrevButton:function(e){var t=e.navigation;return s.a.createElement("div",{className:Object(P.a)(t.prevEl)})},renderNextButton:function(e){var t=e.navigation;return s.a.createElement("div",{className:Object(P.a)(t.nextEl)})}};a(130);var I=function(e){var t=e.bannerList;return 0!==t.length?s.a.createElement(T,{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},t.map(function(e,t){return s.a.createElement("div",{className:"item",key:t},s.a.createElement("img",{src:e.imgurl,alt:e.title,width:"100%",height:"auto"}))})):""},M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={dataInfo:"",bannerList:[],recommend:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/banner");case 2:t=e.sent,a=t.data,this.setState({bannerList:Object(v.a)(a.banner),recommend:Object(v.a)(a.data)});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"new-songs-wrapper"},s.a.createElement("div",{className:"card-swipe"},s.a.createElement(I,{bannerList:this.state.bannerList})),s.a.createElement(w,{songsList:this.state.recommend}))}}]),t}(n.Component),B=(a(51),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={rankList:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/rank/list&json=true");case 2:t=e.sent,a=t.data,n=(n=a.rank.list||[]).map(function(e){return e.imgurl=e.imgurl.replace("{size}","400"),e}),this.setState({rankList:Object(v.a)(n)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"rank-list-wrapper"},s.a.createElement("ul",{className:"rank-img-list"},this.state.rankList.map(function(e){return s.a.createElement("li",{key:e.rankid},s.a.createElement(f.a,{to:{pathname:"/nrank/info/".concat(e.rankid),title:e.rankname,hideTop:!0}},s.a.createElement("div",{className:"rank-img-left"},s.a.createElement("img",{src:e.imgurl,alt:""})),s.a.createElement("div",{className:"rank-img-content"},s.a.createElement("p",null,e.rankname)),s.a.createElement("div",{className:"rank-img-right"},s.a.createElement("i",{className:"rank-img-arrow"}))))})))}}]),t}(n.Component)),D=a(91),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={rankid:e.match.params.id,bannerurl:"",songList:[],timestamp:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/rank/info/",{params:{rankid:this.state.rankid,page:1,json:!0}});case 2:t=e.sent,a=t.data,n=a.songs.list||[],s=a.songs.timestamp||0,r=(r=a.info.banner7url).replace("{size}","400"),this.setState({bannerurl:r,songList:Object(v.a)(n),timestamp:s});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"rank-info-wrapper"},s.a.createElement("div",{className:"rank-info-hd"},s.a.createElement("img",{src:this.state.bannerurl,alt:""}),s.a.createElement("div",{className:"rank-info-time"},s.a.createElement("span",null,"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4\uff1a",Object(D.format)(1e3*this.state.timestamp,"YYYY-MM-DD")))),s.a.createElement(w,{rank:!0,songsList:this.state.songList}))}}]),t}(n.Component),H=(a(87),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={plistList:[],page:1,total:0,pagesize:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getPlistList(),document.addEventListener("scroll",this.onscroll.bind(this),!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.onscroll.bind(this),!0)}},{key:"getPlistList",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/plist/index&json=true",{params:{page:this.state.page}});case 2:t=e.sent,a=t.data,n=a.plist,s=(s=n.list.info||[]).map(function(e){return e.imgurl=e.imgurl.replace("{size}","400"),e}),r=Object(v.a)(this.state.plistList).concat(Object(v.a)(s)),this.setState({plistList:Object(v.a)(r),total:n.list.total,pagesize:n.pagesize});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onscroll",value:function(){var e=this;if((document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)===(document.documentElement.scrollHeight||document.body.scrollHeight)){var t=this.state.page,a=t+1;if(t*this.state.pagesize>=this.state.total)return;this.setState({page:a},function(){e.getPlistList()})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"plist-list-wrapper"},s.a.createElement("ul",{className:"plist-img-list"},this.state.plistList.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(f.a,{to:{pathname:"/nplist/list/".concat(e.specialid),title:e.specialname}},s.a.createElement("div",{className:"plist-img-left"},s.a.createElement("img",{src:e.imgurl,alt:""})),s.a.createElement("div",{className:"plist-img-content"},s.a.createElement("p",{className:"plist-img-content-first"},e.specialname),s.a.createElement("p",{className:"plist-img-content-sub"},s.a.createElement("i",{className:"icon-music"}),e.playcount)),s.a.createElement("div",{className:"plist-img-right"},s.a.createElement("i",{className:"plist-img-arrow"}))))})))}}]),t}(n.Component)),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={specialid:e.match.params.id,bannerurl:"",songList:[],plistInfo:{}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/plist/list/".concat(this.state.specialid),{params:{specialid:this.state.specialid,json:!0}});case 2:t=e.sent,a=t.data,n=a.list.list.info||[],s=a.info.list||{},r=(r=s.imgurl).replace("{size}","400"),this.setState({bannerurl:r,songList:Object(v.a)(n),plistInfo:Object(b.a)({},s)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"rank-info-wrapper"},s.a.createElement("div",{className:"rank-info-hd"},s.a.createElement("img",{src:this.state.bannerurl,alt:""})),s.a.createElement(w,{rank:!0,songsList:this.state.songList}))}}]),t}(n.Component),U=(a(45),function(e){return s.a.createElement("ul",{className:"singer-class-list"},e.classList.map(function(e){return s.a.createElement("li",{key:e.classid},s.a.createElement(f.a,{to:{pathname:"/nsinger/list/".concat(e.classid),title:e.classname}},s.a.createElement("i",{className:"singer-list-arrow"}),e.classname))}))}),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={classList:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r,i,c,o,u,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/singer/class&json=true");case 2:for(t=e.sent,a=t.data,n=a.list,(s=[]).push([n[0]]),n.splice(0,1),r=n.length,i=Math.ceil(n.length/3),c=0;c<i;c++){for(o=[],u=3*c,m=0;m<3;m++)u+m<r&&o.push(n[u+m]);s.push(o)}this.setState({classList:s.concat()});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"singer-class-list-wrapper"},this.state.classList.map(function(e,t){return s.a.createElement(U,{key:t,classList:e})}))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={classid:e.match.params.id,singerList:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/singer/list/".concat(this.state.classid),{params:{classid:this.state.classid,json:!0}});case 2:t=e.sent,a=t.data,n=(n=a.singers.list.info||[]).map(function(e){return e.imgurl=e.imgurl.replace("{size}","400"),e}),this.setState({singerList:Object(v.a)(n)});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"singer-list-wrapper"},s.a.createElement("ul",{className:"singer-img-list"},this.state.singerList.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(f.a,{to:{pathname:"/nsinger/info/".concat(e.singerid),title:e.singername,hideTop:!0}},s.a.createElement("div",{className:"singer-img-left"},s.a.createElement("img",{src:e.imgurl,alt:""})),s.a.createElement("div",{className:"singer-img-content"},s.a.createElement("p",null,e.singername)),s.a.createElement("div",{className:"singer-img-right"},s.a.createElement("i",{className:"singer-img-arrow"}))))})))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={singerid:e.match.params.id,bannerurl:"",songList:[],singerInfo:{},page:1,total:0,pagesize:0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getSongsList(),document.addEventListener("scroll",this.onscroll.bind(this),!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.onscroll.bind(this),!0)}},{key:"getSongsList",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n,s,r,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/singer/info/".concat(this.state.singerid),{params:{singerid:this.state.singerid,json:!0,page:this.state.page}});case 2:t=e.sent,a=t.data,n=a.songs.list||[],s=a.info||{},r=(r=s.imgurl).replace("{size}","400"),i=Object(v.a)(this.state.songList).concat(Object(v.a)(n)),this.setState({bannerurl:r,songList:Object(v.a)(i),singerInfo:Object(b.a)({},s),total:a.songs.total,pagesize:a.songs.pagesize});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onscroll",value:function(){var e=this;if((document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)===(document.documentElement.scrollHeight||document.body.scrollHeight)){var t=this.state.page,a=t+1;if(t*this.state.pagesize>=this.state.total)return;this.setState({page:a},function(){e.getSongsList()})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"singer-info-wrapper"},s.a.createElement("div",{className:"singer-info-hd"},s.a.createElement("img",{src:this.state.bannerurl,alt:""})),s.a.createElement(w,{songsList:this.state.songList}))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hotSearchList:[],searchResultList:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/api/v3/search/hot",{params:{format:"json",plat:0,count:30}});case 2:t=e.sent,a=t.data.data||{},n=a.info||[],this.setState({hotSearchList:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"search-wrapper"},s.a.createElement("div",{className:"search-box"},s.a.createElement("div",{className:"search-form-box"},s.a.createElement("form",{name:"searchForm",className:"search-form"},s.a.createElement("span",{className:"search-icon"}),s.a.createElement("input",{type:"text",className:"search-keyword",placeholder:"\u6b4c\u624b/\u6b4c\u540d/\u62fc\u97f3"}),s.a.createElement("input",{type:"button",className:"search-btn search-disabled-btn",value:"\u641c\u7d22"})))),s.a.createElement("div",{className:"hot-search"},s.a.createElement("div",{className:"hot-search-hd"},"\u6700\u8fd1\u70ed\u95e8"),s.a.createElement("ul",{className:"hot-search-list"},this.state.hotSearchList.map(function(e,t){return s.a.createElement("li",{key:t},e.keyword)}))),s.a.createElement("div",{className:"search-result"}))}}]),t}(n.Component),J=[{path:"/",name:"\u65b0\u6b4c",component:M,model:1,hideTop:!1},{path:"/nrank/list",name:"\u6392\u884c",component:B,model:1,hideTop:!1},{path:"/nplist/index",name:"\u6b4c\u5355",component:H,model:1,hideTop:!1},{path:"/nsinger/class",name:"\u6b4c\u624b",component:R,model:1,hideTop:!1}],q=J.concat([{path:"/nrank/info/:id",name:"\u6392\u884c\u699c",component:z,model:2,hideTop:!0},{path:"/nplist/list/:id",name:"\u6b4c\u5355",component:F,model:2,hideTop:!0},{path:"/nsinger/list/:id",name:"\u6b4c\u624b\u5217\u8868",component:W,model:2,hideTop:!1},{path:"/nsinger/info/:id",name:"\u6b4c\u624b\u4fe1\u606f",component:_,model:2,hideTop:!0},{path:"/nsearch/index",name:"\u641c\u7d22",component:Y,model:2,hideTop:!1}]),A=(a(241),function(){return s.a.createElement("div",{className:"header-nav"},s.a.createElement("ul",null,J.map(function(e){return s.a.createElement("li",{key:e.path},s.a.createElement(f.a,{exact:!0,to:e.path,activeClassName:"cur"},e.name))})))}),K=function(e){console.log(e);var t=e.match.path,a=!1,n="";q.forEach(function(e){e.path===t&&(n=e.name,a=e.hideTop)});var r=a?"header-goback":"header-goback header-doback-bg";return s.a.createElement("div",{className:r},s.a.createElement("p",{className:"page-title",id:"page-title"},e.location.title||n),s.a.createElement("div",{className:"goback",onClick:function(){e.history.goBack()}},s.a.createElement("i",null)))},G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header-fixed"},s.a.createElement("div",{className:"top-hd"},s.a.createElement(f.a,{to:"/",className:"logo"},s.a.createElement("i",null,"\u9177\u732b\u97f3\u4e50")),s.a.createElement("div",null),s.a.createElement(f.a,{to:"/nsearch/index",className:"btn-search"})),q.map(function(e){return 1===e.model?s.a.createElement(g.a,{exact:!0,key:e.path,path:e.path,component:A}):s.a.createElement(g.a,{key:e.path,path:e.path,component:K})}))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state=Object(b.a)({},e),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-container-wrapper"},q.map(function(e){var t=e.component,a={marginTop:e.hideTop?"3.4286rem":"6.67rem"};return s.a.createElement(g.a,{exact:!0,key:e.path,path:e.path,render:function(e){return s.a.createElement("div",{style:a},s.a.createElement(t,e))}})}))}}]),t}(n.Component),V=a(245),X=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(V.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(G,null),s.a.createElement(Q,null)))}}]),t}(n.Component);i.a.render(s.a.createElement(X,null),document.getElementById("root"))},45:function(e,t,a){},51:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){e.exports=a(243)},97:function(e,t,a){},99:function(e,t,a){}},[[92,2,1]]]);
//# sourceMappingURL=main.858af7b4.chunk.js.map