(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(26),l=a.n(r),c=a(27),s=a(11),o=a(12),d=a(20),m=a(14),u=a(19),E=a(9),h=a(46),p=function(e){var t=e.signedIn;return i.a.createElement("nav",{className:"header"},i.a.createElement("header",{className:"header__title"},"Odyssey BJJ Instructors"),!0===t?i.a.createElement("ul",{className:"header__container"},i.a.createElement("li",{className:"header__item"},i.a.createElement(h.a,{to:"/LandingPage",className:"header__link"},"DashBoard")),i.a.createElement("li",{className:"header__item"},i.a.createElement(h.a,{to:"/Library",className:"header__link"},"Sections")),i.a.createElement("li",{className:"header__item"},i.a.createElement(h.a,{to:"/TechniquePage",className:"header__link"},"Technique Lesson")),i.a.createElement("li",{className:"header__item"},i.a.createElement(h.a,{to:"/QuickTech",className:"header__link"},"QuickTechnique"))):null)},g=function(e){var t=e.selectedVideo;return i.a.createElement("div",{className:"videoPlayer"},i.a.createElement("iframe",{title:"Technique-Video",width:"720",height:"405",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},_=function(e){var t=e.id,a=e.title,n=e.selectVideo;return i.a.createElement("div",{className:"card"},i.a.createElement("h1",{className:"card__title"},a),i.a.createElement("button",{className:"card__btn",onClick:n},i.a.createElement("h1",{className:"card__id"},t)))},b=function(e){var t=e.selectVideo,a=e.videos;return i.a.createElement("div",{className:"techList"},a.map(function(e,n){return i.a.createElement(_,{selectVideo:t,key:a[n].id,id:a[n].id,title:a[n].title,position:a[n].position})}))},v=function(e){return i.a.createElement("div",{style:{overflow:"scroll",border:"none",height:"500px",padding:"2rem"}},e.children)},N=function(e){var t=e.selectVideo,a=e.selectedVideo,n=e.videos;return i.a.createElement("div",{className:"techPage"},i.a.createElement(g,{selectedVideo:a}),i.a.createElement(v,null,i.a.createElement(b,{videos:n,selectVideo:t})))},y=[{id:1,title:"Arm Drag sequences",position:"Guard",videoUrl:"Cw3f4rdJ4ys"},{id:2,title:"Over Hook Sequences",position:"Guard",videoUrl:"bG8yGIEyUkM"},{id:3,title:"Arm bar Stack defence to back take",position:"Guard",videoUrl:"MdomfcDnLKU"},{id:4,title:"Kimura sequences",position:"Guard",videoUrl:"b7AOaY7HoJY"},{id:5,title:"Leg pick to kimura/armbar",position:"Guard",videoUrl:"4Z7mtPIKmVo"},{id:6,title:"Cross collar and brabo seq from guard",position:"Guard",videoUrl:"Gndl7HHX8UE"},{id:7,title:"Baseball bat choke and defence",position:"Guard",videoUrl:"09a449dtmdU"},{id:8,title:"Armbar, triangle, omaplata",position:"Guard",videoUrl:"DLrg2xaowkQ"}],f=[{id:1,title:"Spider Guard - Sweep",position:"Guard",videoUrl:"HR7_InD8i3o"},{id:2,title:"Spider Guard - Triangle",position:"Guard",videoUrl:"y_MMfjlqrTc"},{id:3,title:"Spider Guard - Rolling Wing Choke",position:"Guard",videoUrl:"ynb4WRjSS70"},{id:4,title:"Spider Guard - Extra",position:"Guard",videoUrl:"fjtsSSFV99E"},{id:5,title:"Spider Guard - Extra",position:"Guard",videoUrl:"Zf3mPJdVa1U"}],I=function(e){var t=e.title,a=e.link;return i.a.createElement("div",{className:"landing__card "},i.a.createElement("h1",null,t),i.a.createElement(h.a,{className:"landing__link",to:a},i.a.createElement("span",{role:"img","aria-label":"Rocket "},"\ud83d\ude80")))},S=function(){return i.a.createElement("div",{className:"landing"},i.a.createElement(I,{title:"This Weeks Techniques",link:"/TechniquePage"}),i.a.createElement(I,{title:"In depth positional notes",link:"/TechniquePage"}),i.a.createElement(I,{title:"Library",link:"/Library"}))},k=function(e){var t=e.requestSignIn;return i.a.createElement("main",{className:"login"},i.a.createElement("form",{className:"login__form"},i.a.createElement("fieldset",{id:"sign_up",className:"fieldset"},i.a.createElement("h2",{className:"fieldset__title"},"Sign In"),i.a.createElement("div",{className:"components"},i.a.createElement("label",{className:"label",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"input-reset hover-bg-black hover-white box",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"components"},i.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),i.a.createElement("input",{className:" input-reset hover-bg-black hover-white box",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:"components"},i.a.createElement(h.a,{onClick:t,className:"link dim ",to:"/LandingPage"},"Sign In"))))},w=function(){return i.a.createElement("div",{className:"library"},i.a.createElement("ul",{className:"library__list"},i.a.createElement("li",{className:"library__item"},i.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Gi -")),i.a.createElement("li",{className:"library__item"},i.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- No-gi -")),i.a.createElement("li",{className:"library__item"},i.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Drills -")),i.a.createElement("li",{className:"library__item"},i.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Syllibus -"))))},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(n.Component),U=(a(39),a(47)),G=a(49),j=a(51),P=a(50),T=a(18),V={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},C={id:1,videos:Object(E.a)(f),selectedVideo:"https://www.youtube.com/embed/HR7_InD8i3o?&origin=https://youtu.be/HR7_InD8i3o"},q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).selectVideo=function(e){var t=e.target.children[0].innerHTML,n="https://www.youtube.com/embed/".concat(a.props.videos[t-1].videoUrl,"?&origin=https://youtu.be/").concat(a.props.videos[t-1].videoUrl);return a.setState({selectedVideo:n})},a.state=C,a.props.history.listen(function(e,t){a.props.onPageChange()}),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=function(t){var a=t.component,n=Object(c.a)(t,["component"]);return i.a.createElement(U.a,Object.assign({},n,{render:function(t){return!0===e.props.signedIn?i.a.createElement(a,t):i.a.createElement(G.a,{to:"/"})}}))};return i.a.createElement("div",{className:"container"},i.a.createElement(O,null,i.a.createElement(p,{signedIn:this.props.signedIn}),i.a.createElement(j.a,null,i.a.createElement(U.a,{exact:!0,path:"/",component:function(t){return i.a.createElement(k,Object.assign({},t,{requestSignIn:e.props.requestSignIn}))}}),i.a.createElement(t,{path:"/Library",component:w}),i.a.createElement(t,{path:"/LandingPage",component:S}),i.a.createElement(t,{path:"/TechniquePage",component:function(t){return i.a.createElement(N,Object.assign({},t,{videos:e.props.videos,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}),i.a.createElement(t,{path:"/QuickTech",component:function(t){return i.a.createElement(N,Object.assign({},t,{videos:e.props.videos,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}))))}}]),t}(n.Component),L=Object(P.a)(Object(T.b)(function(e){return{isPending:e.signIn.isPending,signedIn:e.signIn.signedIn,videos:e.changePage.videos}},function(e){return{requestSignIn:function(){return e(function(e){e({type:"REQUEST_SIGNIN_PENDING"}),V.authenticate(),!0===V.isAuthenticated?e({type:"REQUEST_SIGNIN_SUCCESS",payload:!0}):e({type:"REQUEST_SIGNIN_FAILED",payload:!1})})},onPageChange:function(){return e("https://muaykhao86.github.io/odyssey/QuickTech"===window.location.href?{type:"QUICK_TECHNIQUE_PAGE"}:{type:"TECHNIQUE_PAGE"})}}})(q));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(48),D=a(7),A={isPending:!1,signedIn:!1},R={videos:Object(E.a)(f)},H=a(30),x=a(31),J=Object(H.createLogger)(),B=Object(D.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_SIGNIN_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SIGNIN_SUCCESS":case"REQUEST_SIGNIN_FAILED":return Object.assign({},e,{signedIn:t.payload,isPending:!1});default:return e}},changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case"QUICK_TECHNIQUE_PAGE":return Object.assign({},e,{videos:Object(E.a)(y)});case"TECHNIQUE_PAGE":return Object.assign({},e,{videos:Object(E.a)(f)});default:return e}}}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,M=Object(D.e)(B,F(Object(D.a)(x.a,J)));l.a.render(i.a.createElement(T.a,{store:M},i.a.createElement(Q.a,{basename:"/odyssey"},i.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.330ef596.chunk.js.map