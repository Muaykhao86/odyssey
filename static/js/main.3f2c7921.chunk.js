(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.919526e6.png"},33:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(26),o=a.n(r),s=a(27),l=a(10),c=a(11),d=a(14),m=a(12),u=a(15),p=a(16),h=a(47),E=function(e){var t=e.signedIn;return n.a.createElement("nav",{className:"header"},n.a.createElement("header",{className:"header__title"},"Odyssey BJJ Instructors"),!0===t?n.a.createElement("ul",{className:"header__container"},n.a.createElement("li",{className:"header__item"},n.a.createElement(h.a,{to:"/LandingPage",className:"header__link"},"DashBoard")),n.a.createElement("li",{className:"header__item"},n.a.createElement(h.a,{to:"/Library",className:"header__link"},"Library")),n.a.createElement("li",{className:"header__item"},n.a.createElement(h.a,{to:"/QuickTech",className:"header__link"},"QuickTechnique"))):null)},g=function(e){var t=e.selectedVideo,a=1100,i=570;return window.innerWidth>=a?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"720",height:"405",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):window.innerWidth>=i?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"520",height:"300",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):window.innerWidth<i?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"320",height:"180",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):void 0},v=function(e){var t=e.id,a=e.title,i=e.selectVideo;return n.a.createElement("div",{className:"card",onClick:i,id:t},n.a.createElement("h1",{id:t,className:"card__title"},a))},b=function(e){var t=e.selectVideo,a=e.videos;return n.a.createElement("div",{className:"techList"},a.map(function(e,i){return n.a.createElement(v,{selectVideo:t,key:a[i].id,id:a[i].id,title:a[i].title,position:a[i].position})}))},_=function(e){return n.a.createElement("div",{className:"scroll"},e.children)},N=function(e){var t=e.selectVideo,a=e.selectedVideo,i=e.videos;return n.a.createElement("div",{className:"techPage"},n.a.createElement(g,{selectedVideo:a}),n.a.createElement(_,null,n.a.createElement(b,{videos:i,selectVideo:t})))},f=[{id:1,title:"Arm Drag sequences",position:"Guard",videoUrl:"Cw3f4rdJ4ys"},{id:2,title:"Over Hook Sequences",position:"Guard",videoUrl:"bG8yGIEyUkM"},{id:3,title:"Arm bar Stack defence to back take",position:"Guard",videoUrl:"MdomfcDnLKU"},{id:4,title:"Kimura sequences",position:"Guard",videoUrl:"b7AOaY7HoJY"},{id:5,title:"Leg pick to kimura/armbar",position:"Guard",videoUrl:"4Z7mtPIKmVo"},{id:6,title:"Cross collar and brabo seq from guard",position:"Guard",videoUrl:"Gndl7HHX8UE"},{id:7,title:"Baseball bat choke and defence",position:"Guard",videoUrl:"09a449dtmdU"},{id:8,title:"Armbar, triangle, omaplata",position:"Guard",videoUrl:"DLrg2xaowkQ"}],y=[{id:1,title:"Spider Guard - Sweep",position:"Guard",videoUrl:"HR7_InD8i3o"},{id:2,title:"Spider Guard - Triangle",position:"Guard",videoUrl:"ynb4WRjSS70"},{id:3,title:"Spider Guard - Rolling Wing Choke",position:"Guard",videoUrl:"y_MMfjlqrTc"},{id:4,title:"Spider Guard - Extra",position:"Guard",videoUrl:"fjtsSSFV99E"},{id:5,title:"Spider Guard - Extra",position:"Guard",videoUrl:"Zf3mPJdVa1U"}],I=a(28),w=a.n(I),S=function(e){var t=e.title,a=e.link;return n.a.createElement(h.a,{className:"landing__link",to:a},n.a.createElement("div",{className:"landing__card "},n.a.createElement("h1",null,t),n.a.createElement("img",{className:"landing__logo",src:w.a,alt:"logo"})))},O=function(){return n.a.createElement("div",{className:"landing"},n.a.createElement(S,{title:"This Weeks Techniques",link:"/TechniquePage"}),n.a.createElement(S,{title:"Positional notes",link:"/Notes"}),n.a.createElement(S,{title:"Library",link:"/Library"}))},P=a(13),k=a(52),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.state={signInEmail:" ",signInPassword:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.requestSignIn;return n.a.createElement("main",{className:"login"},n.a.createElement("form",{className:"login__form"},n.a.createElement("fieldset",{id:"sign_up",className:"fieldset"},n.a.createElement("h2",{className:"fieldset__title"},"Sign In"),n.a.createElement("div",{className:"components"},n.a.createElement("label",{className:"label",htmlFor:"email-address"},"Email"),n.a.createElement("input",{onChange:this.onEmailChange,className:"input-reset hover-bg-black hover-white box",type:"email",name:"email-address",id:"email-address"})),n.a.createElement("div",{className:"components"},n.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),n.a.createElement("input",{onChange:this.onPasswordChange,className:" input-reset hover-bg-black hover-white box",type:"password",name:"password",id:"password"}))),n.a.createElement("div",{className:"components"},n.a.createElement(h.a,{onClick:e,className:"link dim ",to:"/LandingPage"},"Sign In"))))}}]),t}(n.a.Component),U=Object(k.a)(Object(P.b)(function(e){return{isPending:e.signIn.isPending,signedIn:e.signIn.signedIn,videos:e.changePage.videos}})(j)),q=function(){return n.a.createElement("div",{className:"library"},n.a.createElement("ul",{className:"library__list"},n.a.createElement("li",{className:"library__item"},n.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Gi -")),n.a.createElement("li",{className:"library__item"},n.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- No-gi -")),n.a.createElement("li",{className:"library__item"},n.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Drills -")),n.a.createElement("li",{className:"library__item"},n.a.createElement(h.a,{className:"library__link",to:"/VideoPlayer"},"- Syllibus -"))))},G=function(){return n.a.createElement("div",{className:"notes"},n.a.createElement("div",{className:"notes__container"},n.a.createElement("h1",{className:"notes__header"},"Positional Notes Example"),n.a.createElement("h1",{className:"notes__header"},"Spider Guard"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga. Odit nisi ipsam quod doloremque laudantium, debitis nihil quis iure corporis impedit maxime provident nemo dolores nesciunt, excepturi architecto vero."),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!")))},C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(i.Component),T=(a(45),a(48)),V=a(50),Q=a(51),L={isAuthenticated:!1,authenticate:function(e){console.log(e),this.isAuthenticated=!0},signout:function(e){this.isAuthenticated=!1}},A={id:1,videos:Object(p.a)(y),selectedVideo:"https://www.youtube.com/embed/HR7_InD8i3o?&origin=https://youtu.be/HR7_InD8i3o"},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).selectVideo=function(e){var t=e.target.id,i="https://www.youtube.com/embed/".concat(a.props.videos[t-1].videoUrl,"?&origin=https://youtu.be/").concat(a.props.videos[t-1].videoUrl);return a.setState({selectedVideo:i})},a.state=A,a.props.history.listen(function(e,t){a.props.onPageChange()}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.signInEmail);var t=function(t){var a=t.component,i=Object(s.a)(t,["component"]);return n.a.createElement(T.a,Object.assign({},i,{render:function(t){return!0===e.props.signedIn?n.a.createElement(a,t):n.a.createElement(V.a,{to:"/"})}}))};return n.a.createElement("div",{className:"container"},n.a.createElement(C,null,n.a.createElement(E,{signedIn:this.props.signedIn}),n.a.createElement(Q.a,null,n.a.createElement(T.a,{exact:!0,path:"/",component:function(t){return n.a.createElement(U,Object.assign({},t,{requestSignIn:e.props.requestSignIn}))}}),n.a.createElement(t,{path:"/Notes",component:G}),n.a.createElement(t,{path:"/Library",component:q}),n.a.createElement(t,{path:"/LandingPage",component:O}),n.a.createElement(t,{path:"/TechniquePage",component:function(t){return n.a.createElement(N,Object.assign({},t,{videos:e.props.videos,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}),n.a.createElement(t,{path:"/QuickTech",component:function(t){return n.a.createElement(N,Object.assign({},t,{videos:e.props.videos,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}))))}}]),t}(i.Component),x=Object(k.a)(Object(P.b)(function(e){return{isPending:e.signIn.isPending,signedIn:e.signIn.signedIn,videos:e.changePage.videos}},function(e){return{requestSignIn:function(){return(t=!0,function(e){e({type:"REQUEST_SIGNIN_PENDING"}),L.authenticate(t),!0===L.isAuthenticated?e({type:"REQUEST_SIGNIN_SUCCESS",payload:!0}):e({type:"REQUEST_SIGNIN_FAILED",payload:!1})})(e);var t},onPageChange:function(){return e(function(){switch(window.location.href){case"http://localhost:3000/QuickTech":return{type:"QUICK_TECHNIQUE_PAGE"};case"http://localhost:3000/TechniquePage":return{type:"TECHNIQUE_PAGE"};case"https://muaykhao86.github.io/odyssey/QuickTech":return{type:"QUICK_TECHNIQUE_PAGE"};case"https://muaykhao86.github.io/odyssey/TechniquePage":default:return{type:"TECHNIQUE_PAGE"}}}())}}})(D));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(49),R=a(7),F={isPending:!1,signedIn:!1},B={videos:Object(p.a)(y)},W=a(31),J=a(32),K=Object(W.createLogger)(),M=Object(R.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_SIGNIN_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SIGNIN_SUCCESS":case"REQUEST_SIGNIN_FAILED":return Object.assign({},e,{signedIn:t.payload,isPending:!1});default:return e}},changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case"QUICK_TECHNIQUE_PAGE":return Object.assign({},e,{videos:Object(p.a)(f)});case"TECHNIQUE_PAGE":return Object.assign({},e,{videos:Object(p.a)(y)});default:return e}}}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,Y=Object(R.e)(M,X(Object(R.a)(J.a,K))),Z="pushState"in window.history;o.a.render(n.a.createElement(P.a,{store:Y},n.a.createElement(H.a,{basename:"/odyssey",forceRefresh:!Z},n.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.3f2c7921.chunk.js.map