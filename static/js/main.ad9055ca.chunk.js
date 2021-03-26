(this.webpackJsonptemplate1=this.webpackJsonptemplate1||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__EO7lp"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__1yBC-",grid:"video_item_grid__2ue_l",list:"video_item_list__1GL9Q",video:"video_item_video__TxIXv",thumbnail:"video_item_thumbnail__1mGai",metadata:"video_item_metadata__1C7lX",title:"video_item_title__22AIf",channel:"video_item_channel__3DHSk"}},4:function(e,t,a){e.exports={header:"search_header_header__2H-Cg",logo:"search_header_logo__2-fSB",input:"search_header_input__1HePJ",button:"search_header_button__23UPg",buttonImg:"search_header_buttonImg__2h8we"}},5:function(e,t,a){e.exports={app:"app_app__tb6rL",content:"app_content__33xCK",detail:"app_detail__1If_6",list:"app_list__3yHpY"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(4),l=a.n(o),u=a(0),d=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e),a.current.value=""};return Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsxs)("div",{className:l.a.logo,children:[Object(u.jsx)("img",{className:l.a.img,src:"./images/logo.png",alt:"logo"}),Object(u.jsx)("h1",{className:l.a.title,children:"YouTube"})]}),Object(u.jsx)("input",{ref:a,className:l.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(u.jsx)("button",{className:l.a.button,type:"submit",onClick:function(){i()},children:Object(u.jsx)("img",{className:l.a.buttonImg,src:"./images/search.png",alt:"search"})})]})})),p=a(3),h=a.n(p),m=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?h.a.list:h.a.grid;return Object(u.jsx)("li",{className:"".concat(h.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(u.jsxs)("div",{className:h.a.video,children:[Object(u.jsx)("img",{className:h.a.thumbnail,src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(u.jsxs)("div",{className:h.a.metadata,children:[Object(u.jsx)("p",{className:h.a.title,children:a.title}),Object(u.jsx)("p",{className:h.a.channel,children:a.channelTitle})]})]})})})),_=a(21),b=a.n(_),j=Object(n.memo)((function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(u.jsx)("ul",{className:b.a.videos,children:t.map((function(e){return Object(u.jsx)(m,{video:e,onVideoClick:a,display:n},e.id)}))})})),v=a(5),O=a.n(v),f=a(7),x=a.n(f),g=function(e){var t=e.video;return Object(u.jsxs)("section",{className:x.a.detail,children:[Object(u.jsx)("iframe",{className:x.a.video,type:"text/html",title:"youtube",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(u.jsx)("h2",{children:t.snippet.title}),Object(u.jsx)("h2",{children:t.snippet.channelTitle}),Object(u.jsx)("pre",{className:x.a.description,children:t.snippet.description})]})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),l=Object(r.a)(o,2),p=l[0],h=l[1],m=Object(n.useCallback)((function(e){h(e)})),_=Object(n.useCallback)((function(e){h(null),t.search(e).then((function(e){return s(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(u.jsxs)("div",{className:O.a.app,children:[Object(u.jsx)(d,{onSearch:_}),Object(u.jsxs)("section",{className:O.a.content,children:[p&&Object(u.jsx)("div",{className:O.a.detail,children:Object(u.jsx)(g,{video:p})}),Object(u.jsx)("div",{className:O.a.list,children:Object(u.jsx)(j,{videos:c,onVideoClick:m,display:p?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),C=a(9),S=a(22),I=a(23),P=function(){function e(t){Object(S.a)(this,e),this.youtube=t}return Object(I.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,q:t,type:"video"}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=a(24),H=new P(a.n(B).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyB5KXzG9_12MArgsiWARPYJz3DF6cNfhHo"}}));s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{youtube:H})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__1rf6g",description:"video_detail_description__MlN05"}}},[[50,1,2]]]);
//# sourceMappingURL=main.ad9055ca.chunk.js.map