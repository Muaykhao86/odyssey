(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.919526e6.png"},33:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(26),o=a.n(r),s=a(27),l=a(16),c=a(5),d=a(6),u=a(8),m=a(7),p=a(9),g=a(47),h=function(e){var t=e.signedIn;return n.a.createElement("nav",{className:"header"},n.a.createElement("header",{className:"header__title"},"Odyssey BJJ Instructors"),!0===t?n.a.createElement("ul",{className:"header__container"},n.a.createElement("li",{className:"header__item"},n.a.createElement(g.a,{to:"/LandingPage",className:"header__link"},"DashBoard")),n.a.createElement("li",{className:"header__item"},n.a.createElement(g.a,{to:"/Library",className:"header__link"},"Library")),n.a.createElement("li",{className:"header__item"},n.a.createElement(g.a,{to:"/QuickTech",className:"header__link"},"QuickTechnique"))):null)},E=function(e){var t=e.selectedVideo,a=1100,i=570;return window.innerWidth>=a?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"720",height:"405",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):window.innerWidth>=i?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"520",height:"300",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):window.innerWidth<i?n.a.createElement("div",{className:"videoPlayer"},n.a.createElement("iframe",{title:"Technique-Video",width:"320",height:"180",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):void 0},b=function(e){var t=e.id,a=e.title,i=e.selectVideo;e.position,e.suit,e.type,e.videoUrl;return n.a.createElement("div",{className:"card",onClick:i,id:t},n.a.createElement("h1",{id:t,className:"card__title"},a))},v=function(e){var t=e.videos,a=e.selectVideo;return console.log("TechList",t),n.a.createElement("div",{className:""},t.map(function(e,i){return n.a.createElement(b,{id:t[i].id,selectVideo:a,key:t[i].id,title:t[i].title,position:t[i].position,suit:t[i].suit,type:t[i].type,videoUrl:t[i].videoUrl})}))},y=function(e){return n.a.createElement("div",{className:"scroll"},e.children)},_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.videos,a=e.selectedVideo,i=e.selectVideo;return console.log({videos:t}),n.a.createElement("div",{className:"techPage"},n.a.createElement(E,{selectedVideo:a}),n.a.createElement(y,null,n.a.createElement(v,{videos:t,selectVideo:i})))}}]),t}(i.Component),f=[{id:0,group:"random",suit:"gi",title:"arm drag sequences",position:"guard",type:"attack",videoUrl:"Cw3f4rdJ4ys"},{id:1,group:"random",title:"over hook sequences",suit:"gi",position:"guard",type:"attack",videoUrl:"bG8yGIEyUkM"},{id:2,group:"random",suit:"no-gi, gi",title:"arm bar stack defence to back take",position:"guard",type:"attack, defense",videoUrl:"MdomfcDnLKU"},{id:3,group:"random",suit:"no-gi, gi",title:"kimura sequences",position:"guard",type:"attack",videoUrl:"b7AOaY7HoJY"},{id:4,group:"random",suit:"no-gi, gi",title:"Leg pick to kimura/armbar",position:"Guard",type:"Attack",videoUrl:"4Z7mtPIKmVo"},{id:5,group:"random",suit:"gi",title:"cross collar and brabo seq from guard",position:"guard",type:"attack",videoUrl:"Gndl7HHX8UE"},{id:6,group:"random",suit:"gi",title:"baseball bat choke and defence",position:"guard",type:"attack, defence",videoUrl:"09a449dtmdU"},{id:7,group:"random",suit:"no-gi, gi",title:"armbar, triangle, omaplata",position:"guard",type:"attack",videoUrl:"DLrg2xaowkQ"},{id:8,group:"spider",suit:"gi",title:"spider guard - sweep",position:"guard",type:"attack",videoUrl:"HR7_InD8i3o"},{id:9,group:"spider",suit:"gi",title:"spider guard - triangle",position:"guard",type:"attack",videoUrl:"ynb4WRjSS70"},{id:10,group:"spider",suit:"gi",title:"spider guard - rolling wing choke",position:"guard",type:"attack",videoUrl:"y_MMfjlqrTc"},{id:11,group:"spider",suit:"gi",title:"spider guard - extra",position:"guard",type:"attack",videoUrl:"fjtsSSFV99E"},{id:12,group:"spider",suit:"gi",title:"spider guard - extra",position:"guard",type:"attack",videoUrl:"Zf3mPJdVa1U"},{id:13,group:"back",suit:"no-gi, gi",title:"basic back escape",position:"back",type:"defense",videoUrl:"Mdr0APySNeY"},{id:14,group:"back",suit:"no-gi, gi",title:"back escape part 2",position:"back",type:"defense",videoUrl:"pW00lpYVXhY"},{id:15,group:"back",suit:"no-gi, gi",title:"back escape extra",position:"back",type:"defense",videoUrl:"ioWcKbVlFWo"}],N=a(28),k=a.n(N),O=function(e){var t=e.title,a=e.link;return n.a.createElement(g.a,{className:"landing__link",to:a},n.a.createElement("div",{className:"landing__card "},n.a.createElement("h1",null,t),n.a.createElement("img",{className:"landing__logo",src:k.a,alt:"logo"})))},w=function(){return n.a.createElement("div",{className:"landing"},n.a.createElement(O,{title:"This Weeks Techniques",link:"/TechniquePage"}),n.a.createElement(O,{title:"Positional notes",link:"/Notes"}),n.a.createElement(O,{title:"Library",link:"/Library"}))},I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.requestSignIn;return n.a.createElement("main",{className:"login"},n.a.createElement("form",{className:"login__form"},n.a.createElement("fieldset",{id:"sign_up",className:"fieldset"},n.a.createElement("h2",{className:"fieldset__title"},"Sign In"),n.a.createElement("div",{className:"components"},n.a.createElement("label",{className:"label",htmlFor:"email-address"},"Email"),n.a.createElement("input",{className:"input-reset hover-bg-black hover-white box",type:"email",name:"email-address",id:"email-address"})),n.a.createElement("div",{className:"components"},n.a.createElement("label",{className:"label",htmlFor:"password"},"Password"),n.a.createElement("input",{className:" input-reset hover-bg-black hover-white box",type:"password",name:"password",id:"password"}))),n.a.createElement("div",{className:"components"},n.a.createElement(g.a,{onClick:e,className:"link dim ",to:"/LandingPage"},"Sign In"))))}}]),t}(n.a.Component),j=a(15),S=a(52),U="",L="",T={isAuthenticated:!1,authenticate:function(e){!0===e?this.isAuthenticated=!0:console.log("email or password incorrect")},signout:function(e){this.isAuthenticated=!1}},q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"library"},n.a.createElement("ul",{className:"library__list"},n.a.createElement("li",{className:"library__item library__link",onClick:this.props.librarySelector},n.a.createElement(g.a,{className:"library__link",to:"/FilteredTech"},"- Gi -")),n.a.createElement("li",{className:"library__item library__link",onClick:this.props.librarySelector},n.a.createElement(g.a,{className:"library__link",to:"/FilteredTech"},"- No-gi -")),n.a.createElement("li",{className:"library__item",onClick:this.props.librarySelector},n.a.createElement(g.a,{className:"library__link",to:"/FilteredTech"},"- Drills -")),n.a.createElement("li",{className:"library__item",onClick:this.props.librarySelector},n.a.createElement(g.a,{className:"library__link",to:"/FilteredTech"},"- Syllibus -"))))}}]),t}(i.Component),C=Object(S.a)(Object(j.b)(function(e){return{filtered:e.videoFilter.filtered}},function(e){return{librarySelector:function(t){return e(function(e){switch(e.target.innerHTML.toLowerCase()){case"- gi -":return{type:"GI_TECH"};case"- no-gi -":return{type:"NO_GI_TECH"};case"- drills -":return{type:"DRILLS"};case"- syllibus -":return{type:"SYLLIBUS"};default:return{type:"GI_TECH"}}}(t))}}})(q)),P=function(){return n.a.createElement("div",{className:"notes"},n.a.createElement("div",{className:"notes__container"},n.a.createElement("h1",{className:"notes__header"},"Positional Notes Example"),n.a.createElement("h1",{className:"notes__header"},"Spider Guard"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga. Odit nisi ipsam quod doloremque laudantium, debitis nihil quis iure corporis impedit maxime provident nemo dolores nesciunt, excepturi architecto vero."),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!"),n.a.createElement("p",{className:"notes__paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit voluptatum doloribus quas molestiae, autem blanditiis tempore explicabo! Fugit, quisquam assumenda! Aliquid soluta in nam sed voluptatem ab, inventore modi!")))},V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Ooooops. That is not good"):this.props.children}}]),t}(i.Component),G=(a(45),a(48)),Q=a(50),D=a(51),F={id:1,selectedVideo:"https://www.youtube.com/embed/HR7_InD8i3o?&origin=https://youtu.be/HR7_InD8i3o"},A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).LibraryList=function(e){var t=[],a=e.toLowerCase();return f.forEach(function(e){return Object.values(e).includes(a)?t.push({title:e.title,url:e.videoUrl,id:e.id}):null}),t},a.selectVideo=function(e){var t=e.target.id,i="https://www.youtube.com/embed/".concat(a.props.videos[t].videoUrl,"?&origin=https://youtu.be/").concat(a.props.videos[t].videoUrl);return a.setState({selectedVideo:i})},a.state=F,a.props.history.listen(function(e,t){a.props.onPageChange()}),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{videos:Object(l.a)(e.LibraryList("spider"))}})}},{key:"render",value:function(){var e=this,t=function(t){var a=t.component,i=Object(s.a)(t,["component"]);return n.a.createElement(G.a,Object.assign({},i,{render:function(t){return!0===e.props.signedIn?n.a.createElement(a,t):n.a.createElement(Q.a,{to:"/"})}}))},a=this.props.filtered;return console.log("wtf",this.LibraryList("Gi")),n.a.createElement("div",{className:"container"},n.a.createElement(V,null,n.a.createElement(h,{signedIn:this.props.signedIn}),n.a.createElement(D.a,null,n.a.createElement(G.a,{exact:!0,path:"/",component:function(t){return n.a.createElement(I,Object.assign({},t,{requestSignIn:e.props.requestSignIn}))}}),n.a.createElement(t,{path:"/Notes",component:P}),n.a.createElement(t,{path:"/Library",component:C}),n.a.createElement(t,{path:"/LandingPage",component:w}),n.a.createElement(t,{path:"/FilteredTech",component:function(t){return n.a.createElement(_,Object.assign({},t,{videos:e.LibraryList(a),selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}),n.a.createElement(t,{path:"/TechniquePage",component:function(t){return n.a.createElement(_,Object.assign({},t,{videos:e.LibraryList("back"),selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}),n.a.createElement(t,{path:"/QuickTech",component:function(t){return n.a.createElement(_,Object.assign({},t,{videos:e.props.videos,selectedVideo:e.state.selectedVideo,selectVideo:e.selectVideo}))}}))))}}]),t}(i.Component),H=Object(S.a)(Object(j.b)(function(e){return{isPending:e.signIn.isPending,signedIn:e.signIn.signedIn,videos:e.changePage.videos,filtered:e.videoFilter.filtered}},function(e){return{requestSignIn:function(t){return function(e){e({type:"REQUEST_SIGNIN_PENDING"});var t=!1;""===U&&""===L&&(t=!0),T.authenticate(t),!0===T.isAuthenticated?e({type:"REQUEST_SIGNIN_SUCCESS",payload:!0}):e({type:"REQUEST_SIGNIN_FAILED",payload:!1})}(e)},onPageChange:function(){return e(function(){switch(window.location.href){case"http://localhost:3000/QuickTech":return{type:"QUICK_TECHNIQUE_PAGE"};case"http://localhost:3000/TechniquePage":return{type:"WEEKLY_TECHNIQUE_PAGE"};case"https://muaykhao86.github.io/odyssey/QuickTech":return{type:"QUICK_TECHNIQUE_PAGE"};case"https://muaykhao86.github.io/odyssey/TechniquePage":default:return{type:"WEEKLY_TECHNIQUE_PAGE"}}}())}}})(A));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(49),R=a(12),W={isPending:!1,signedIn:!1},Y={videos:[]},B={filtered:""},K=a(31),M=a(32),J=Object(K.createLogger)(),X=Object(R.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_SIGNIN_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SIGNIN_SUCCESS":case"REQUEST_SIGNIN_FAILED":return Object.assign({},e,{signedIn:t.payload,isPending:!1});default:return e}},changePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case"QUICK_TECHNIQUE_PAGE":case"WEEKLY_TECHNIQUE_PAGE":return Object.assign({},e,{videos:Object(l.a)(f)});default:return e}},videoFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case"GI_TECH":return Object.assign({},e,{filtered:"gi"});case"NO_GI_TECH":return Object.assign({},e,{filtered:"no-gi, gi"});case"DRILLS":return Object.assign({},e,{filtered:"drills"});case"SYLLIBUS":return Object.assign({},e,{filtered:"syllibus"});default:return Object.assign({},e,{filtered:"guard"})}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,$=Object(R.e)(X,Z(Object(R.a)(M.a,J))),z="pushState"in window.history;o.a.render(n.a.createElement(j.a,{store:$},n.a.createElement(x.a,{basename:"/odyssey",forceRefresh:!z},n.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.07916b1f.chunk.js.map