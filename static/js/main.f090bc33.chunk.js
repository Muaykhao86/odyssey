(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},39:function(e,t,a){e.exports=a.p+"static/media/img.4d378368.jpg"},40:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),l=a.n(i),c=a(26),s=a(10),o=a(11),m=a(18),d=a(13),u=a(19),E=a(31),h=a(47),p=function(e){var t=e.signedIn;return r.a.createElement("nav",{className:"header"},r.a.createElement("header",{className:"header__title"},"Odyssey BJJ Instructors"),!0===t?r.a.createElement("ul",{className:"header__container"},r.a.createElement("li",{className:"header__item"},r.a.createElement(h.a,{to:"/LandingPage",className:"header__link"},"DashBoard")),r.a.createElement("li",{className:"header__item"},r.a.createElement(h.a,{to:"/Library",className:"header__link"},"Sections")),r.a.createElement("li",{className:"header__item"},r.a.createElement(h.a,{to:"/TechniquePage",className:"header__link"},"QuickTechnique")),r.a.createElement("li",{className:"header__item"},r.a.createElement(h.a,{to:"/",className:"header__link"},"Technique notes")),r.a.createElement("li",{className:"header__item"},r.a.createElement(h.a,{to:"/",className:"header__link"},"Login/Logout"))):null)},_=function(e){var t=e.selectedVideo;return r.a.createElement("div",{className:"videoPlayer"},r.a.createElement("iframe",{title:"Technique-Video",width:"720",height:"405",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},g=function(e){var t=e.id,n=e.title,i=e.selectVideo;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card__img",src:a(39),alt:"Img"}),r.a.createElement("h1",{className:"card__title"},n),r.a.createElement("h2",{className:"card__title"},"Position"),r.a.createElement("h2",{className:"card__title"},"Attack/defence"),r.a.createElement("h2",{className:"card__title"},t),r.a.createElement("button",{className:"card__btn",onClick:i},"Select"))},N=[{id:1,title:"Spider Guard - Sweep",position:"Guard",videoUrl:"HR7_InD8i3o"},{id:2,title:"Spider Guard - Triangle",position:"Guard",videoUrl:"y_MMfjlqrTc"},{id:3,title:"Spider Guard - Rolling Wing Choke",position:"Guard",videoUrl:"ynb4WRjSS70"}],b=function(e){var t=e.selectVideo;return r.a.createElement("div",{className:"techGrid"},N.map(function(e,a){return r.a.createElement(g,{selectVideo:t,key:N[a].id,id:N[a].id,title:N[a].title})}))},v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"none",height:"500px",padding:"2rem"}},e.children)},f=function(e){var t=e.selectVideo,a=e.selectedVideo;return r.a.createElement("div",{className:"techPage"},r.a.createElement(_,{selectedVideo:a}),r.a.createElement(v,null,r.a.createElement(b,{selectVideo:t})))},y=function(){return r.a.createElement("div",{className:"landing__card "},r.a.createElement("h1",null,"Card Section"),r.a.createElement("h2",null," Tecnique of the Week"),r.a.createElement("h2",null,"Library"),r.a.createElement(h.a,{to:"/LandingPage"},"X"))},S=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(y,null),r.a.createElement(y,null),r.a.createElement(y,null))},I=function(e){var t=e.requestSignIn;return r.a.createElement("main",{className:"login"},r.a.createElement("form",{className:"login__form"},r.a.createElement("fieldset",{id:"sign_up",className:"fieldset"},r.a.createElement("h2",{className:"fieldset__title"},"Sign In"),r.a.createElement("div",{className:"components"},r.a.createElement("label",{className:"label",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"input-reset hover-bg-black hover-white box",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"components"},r.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),r.a.createElement("input",{className:" input-reset hover-bg-black hover-white box",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"components"},r.a.createElement("input",{className:"input-reset grow pointer btn",onClick:t,type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"components"},r.a.createElement(h.a,{onClick:t,className:"link dim ",to:"/"},"Sign In"))))},w=function(){return r.a.createElement("div",{className:"library"},r.a.createElement("h1",{className:"library__title"},"Library"),r.a.createElement("ul",{className:"library__list"},r.a.createElement("li",{className:"library__item"},r.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Gi -")),r.a.createElement("li",{className:"library__item"},r.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- No-gi -")),r.a.createElement("li",{className:"library__item"},r.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Drills -"))))},k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this))).state={hasError:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(n.Component),j=(a(40),a(48)),O=a(50),P=a(52),V=a(51),T=a(17),G={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},L={id:1,videos:Object(E.a)(N),selectedVideo:"http://www.youtube.com/embed/HR7_InD8i3o?&origin=https://youtu.be/HR7_InD8i3o"},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).selectVideo=function(e){var t=e.target.parentElement.children[4].innerHTML,n="http://www.youtube.com/embed/".concat(a.state.videos[t-1].videoUrl,"?&origin=https://youtu.be/").concat(a.state.videos[t-1].videoUrl);return a.setState({selectedVideo:n})},a.state=L,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=function(t){var a=t.component,n=Object(c.a)(t,["component"]);return r.a.createElement(j.a,Object.assign({},n,{render:function(t){return!0===e.props.signedIn?r.a.createElement(a,t):r.a.createElement(O.a,{to:"/"})}}))};return r.a.createElement("div",{className:"container"},r.a.createElement(k,null,r.a.createElement(p,{signedIn:this.props.signedIn}),r.a.createElement(P.a,null,r.a.createElement(j.a,{exact:!0,path:"/",component:function(t){return r.a.createElement(I,Object.assign({},t,{requestSignIn:e.props.requestSignIn}))}}),r.a.createElement(t,{path:"/Library",component:w}),r.a.createElement(t,{path:"/LandingPage",component:S}),r.a.createElement(t,{path:"/TechniquePage",component:function(t){return r.a.createElement(f,Object.assign({},t,{selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}))))}}]),t}(n.Component),C=Object(V.a)(Object(T.b)(function(e){return{isPending:e.isPending,signedIn:e.signedIn}},function(e){return{requestSignIn:function(){return e(function(e){e({type:"REQUEST_SIGNIN_PENDING"}),G.authenticate(),!0===G.isAuthenticated?e({type:"REQUEST_SIGNIN_SUCCESS",payload:!0}):e({type:"REQUEST_SIGNIN_FAILED",payload:!1})})}}})(U));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(49),R=a(9),D={isPending:!1,signedIn:!1},A=a(29),Q=a(30),x=Object(A.createLogger)(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_SIGNIN_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SIGNIN_SUCCESS":case"REQUEST_SIGNIN_FAILED":return Object.assign({},e,{signedIn:t.payload,isPending:!1});default:return e}},F=Object(R.c)(B,Object(R.a)(Q.a,x));l.a.render(r.a.createElement(T.a,{store:F},r.a.createElement(q.a,null,r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.f090bc33.chunk.js.map