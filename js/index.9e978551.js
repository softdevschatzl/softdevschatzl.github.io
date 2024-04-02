(function(){"use strict";var e={5743:function(e,t,n){var a=n(9242),i=n(3396);const s=(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1),o={id:"app"},l={class:"header-home"},r={class:"head-navbar top"},c={class:"home-page",id:"top"},d={class:"head-navbar bottom"},u={class:"body"},p={class:"about-page",id:"about"},v={class:"projects-page",id:"projects"},m={class:"service-page",id:"services"},h={class:"contact-page",id:"contact"};function g(e,t,n,a,g,A){const w=(0,i.up)("HeadNavbar"),b=(0,i.up)("HomePage"),f=(0,i.up)("AboutPage"),_=(0,i.up)("ProjectsPage"),k=(0,i.up)("ServicePage"),C=(0,i.up)("ContactPage");return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,(0,i._)("div",o,[(0,i._)("div",l,[(0,i._)("div",r,[(0,i.Wm)(w)]),(0,i._)("div",c,[(0,i.Wm)(b)]),(0,i._)("div",d,[(0,i.Wm)(w)])]),(0,i._)("div",u,[(0,i._)("div",p,[(0,i.Wm)(f)]),(0,i._)("div",v,[(0,i.Wm)(_)]),(0,i._)("div",m,[(0,i.Wm)(k)]),(0,i._)("div",h,[(0,i.Wm)(C)])])])],64)}var A=n(7139);const w=e=>((0,i.dD)("data-v-54f12e4c"),e=e(),(0,i.Cn)(),e),b=w((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1))),f={class:"head-navbar"},_={class:"hamburger"},k={class:"slide-in-left-5"},C=w((()=>(0,i._)("a",{href:"#about"},"About",-1))),y=[C],O=w((()=>(0,i._)("a",{href:"#projects"},"Projects",-1))),D=[O],M=w((()=>(0,i._)("a",{href:"#services"},"Services",-1))),I=[M],S=w((()=>(0,i._)("a",{href:"#contact"},"Contact",-1))),j=[S];function E(e,t,n,a,s,o){const l=(0,i.up)("HamBurger");return(0,i.wg)(),(0,i.iD)(i.HY,null,[b,(0,i._)("div",f,[(0,i._)("nav",null,[(0,i._)("div",_,[(0,i.Wm)(l)]),(0,i._)("ul",k,[(0,i._)("li",{class:(0,A.C_)({active:"about"===s.activeSection})},y,2),(0,i._)("li",{class:(0,A.C_)({active:"projects"===s.activeSection})},D,2),(0,i._)("li",{class:(0,A.C_)({active:"services"===s.activeSection})},I,2),(0,i._)("li",{class:(0,A.C_)({active:"contact"===s.activeSection})},j,2)])])])],64)}const Y=e=>((0,i.dD)("data-v-50c1cb3a"),e=e(),(0,i.Cn)(),e),H=Y((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1))),L={id:"sidemenu"},z=Y((()=>(0,i._)("span",{class:"top"},null,-1))),P=Y((()=>(0,i._)("span",{class:"mid"},null,-1))),R=Y((()=>(0,i._)("span",{class:"bottom"},null,-1))),W=[z,P,R],U={key:0},x={class:"sidemenu__wrapper"},B={class:"sidemenu__list"},J={class:"sidemenu__item"},T={class:"sidemenu__item"},K={class:"sidemenu__item"},V={class:"sidemenu__item"},X={class:"sidemenu__item"};function N(e,t,n,s,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[H,(0,i._)("div",L,[(0,i._)("button",{class:(0,A.C_)(["sidemenu__btn",{active:o.navOpen}]),onClick:t[0]||(t[0]=e=>o.navOpen=!o.navOpen)},W,2),(0,i.Wm)(a.uT,{name:"translateX"},{default:(0,i.w5)((()=>[o.navOpen?((0,i.wg)(),(0,i.iD)("nav",U,[(0,i._)("div",x,[(0,i._)("ul",B,[(0,i._)("li",J,[(0,i._)("a",{href:"#top",onClick:t[1]||(t[1]=(0,a.iM)((e=>l.navigateAndClose("#top")),["prevent"]))},"Top")]),(0,i._)("li",T,[(0,i._)("a",{href:"#about",onClick:t[2]||(t[2]=(0,a.iM)((e=>l.navigateAndClose("#about")),["prevent"]))},"About")]),(0,i._)("li",K,[(0,i._)("a",{href:"#projects",onClick:t[3]||(t[3]=(0,a.iM)((e=>l.navigateAndClose("#projects")),["prevent"]))},"Projects")]),(0,i._)("li",V,[(0,i._)("a",{href:"#services",onClick:t[4]||(t[4]=(0,a.iM)((e=>l.navigateAndClose("#services")),["prevent"]))},"Services")]),(0,i._)("li",X,[(0,i._)("a",{href:"#contact",onClick:t[5]||(t[5]=(0,a.iM)((e=>l.navigateAndClose("#contact")),["prevent"]))},"Contact")])])])])):(0,i.kq)("",!0)])),_:1})])],64)}var Q={name:"HamBurger",data(){return{navOpen:!1}},methods:{navigateAndClose(e){const t=document.querySelector(e);if(t){const e=t.getBoundingClientRect().top,n=75,a=window.scrollY+e-n;window.scrollTo({top:a,behavior:"smooth"})}this.navOpen=!1}}},Z=n(89);const q=(0,Z.Z)(Q,[["render",N],["__scopeId","data-v-50c1cb3a"]]);var G=q,F={name:"HeadNavbar",data(){return{navOpen:!1,activeSection:null}},mounted(){window.addEventListener("scroll",this.onScroll)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){const e=["about","projects","services","contact"];let t=null;e.forEach((e=>{const n=document.getElementById(e),a=n.getBoundingClientRect();a.top<=window.innerHeight/2&&a.bottom>=window.innerHeight/2&&(t=e)})),this.activeSection=t}},components:{HamBurger:G}};const $=(0,Z.Z)(F,[["render",E],["__scopeId","data-v-54f12e4c"]]);var ee=$,te=n.p+"img/github.1cec78fd.svg",ne=n.p+"img/linkedin.9cd000ab.svg";const ae=e=>((0,i.dD)("data-v-1bb038eb"),e=e(),(0,i.Cn)(),e),ie=ae((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1))),se={class:"home double-color-background"},oe={class:"slide-in-left-5"},le=(0,i.uE)('<div class="socials slide-in-left-5" data-v-1bb038eb><a class="social" href="https://github.com/softdevschatzl" target="_blank" data-v-1bb038eb><span data-v-1bb038eb><img src="'+te+'" data-v-1bb038eb></span></a><a class="social" href="https://www.linkedin.com/in/john-schatzl" target="_blank" data-v-1bb038eb><span data-v-1bb038eb><img src="'+ne+'" data-v-1bb038eb></span></a></div>',1),re={class:"title-container slide-in-left-5"};function ce(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[ie,(0,i._)("div",se,[(0,i._)("h1",oe,[(0,i._)("span",null,(0,A.zw)(s.name),1)]),le,(0,i._)("div",re,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.titles,((e,t)=>((0,i.wg)(),(0,i.iD)("p",{class:"title",key:t},[(0,i._)("span",null,(0,A.zw)(e),1)])))),128))])])],64)}var de={name:"HomePage",data(){return{name:"John Schatzl",titles:["Full Stack Developer"]}}};const ue=(0,Z.Z)(de,[["render",ce],["__scopeId","data-v-1bb038eb"]]);var pe=ue;const ve=e=>((0,i.dD)("data-v-2b434cb2"),e=e(),(0,i.Cn)(),e),me=ve((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1))),he={class:"about double-color-background"},ge=["data-v-scroll"],Ae={class:"container"},we=["src"],be=["src"],fe=ve((()=>(0,i._)("p",{class:"header-p"},"I am a full-stack web and application developer. I enjoy creating immersive applications as well as bulletproof, reliable back-end services. ",-1))),_e={class:"dialogue-menu fade-in"};function ke(e,t,a,s,o,l){const r=(0,i.up)("DialogueMenu"),c=(0,i.up)("DialogueMenuSkills");return(0,i.wg)(),(0,i.iD)(i.HY,null,[me,(0,i._)("div",he,[(0,i._)("div",{class:(0,A.C_)(l.isMobile?"":"fade-in-2"),"data-v-scroll":l.isMobile?"fade-in-2":void 0},[(0,i._)("h1",null,(0,A.zw)(o.title),1),(0,i._)("div",Ae,[(0,i._)("img",{src:n(4254),alt:"Profile picture",class:"profile-picture front-image"},null,8,we),(0,i._)("img",{src:n(6959),alt:"Profile picture",class:"profile-picture back-image"},null,8,be)]),fe,(0,i._)("h2",null,(0,A.zw)(o.title2),1)],10,ge),(0,i._)("div",_e,[(0,i.Wm)(r,{class:"pwrapper",title:"More Professional",paragraph:"I am a student at Southern \r\n                    New Hampshire University studying Computer Science. I am also a\r\n                    freelance web developer and application developer, and have been\r\n                    also working as a Full-Stack Software Developer specializing in cloud applications\r\n                    using Microsoft Azure and the ASP.NET Core and Framework. Starting to program around the\r\n                    end of high school, I started with Java and later moved on to\r\n                    C, JavaScript, HTML/CSS and Python for almost anything I can imagine creating. Seeing\r\n                    my work come to life with these tools has sparked a passion in me\r\n                    to develop my skills and see what kinds of things I can make.\r\n                    I have a plethora of experience working efficiently in teams \r\n                    to produce substantial progress, and have no trouble working\r\n                    with peers and clients alike. I am a great addition\r\n                    to any environment, and look forward to seeing the impact\r\n                    I have in this field."}),(0,i.Wm)(r,{class:"pwrapper",title:"More Personal",paragraph:"When I'm not getting work done, you can usually find me watching\r\n                    movies, playing video games and reading. I also enjoy snowboarding,\r\n                    occasionally making trips up to the mountains when the weather\r\n                    calls for it, and fishing when it doesn't. I also enjoy traveling,\r\n                    having just gotten my passport last year, I am always looking to\r\n                    add some miles and stamps to it. I also enjoy both listening to and\r\n                    playing music, playing guitar since I was young and also trying to\r\n                    learn piano."}),(0,i.Wm)(c,{class:"pwrapper",title:"Professional Skills"})])])],64)}const Ce=e=>((0,i.dD)("data-v-0428e694"),e=e(),(0,i.Cn)(),e),ye={class:"click-text"},Oe=Ce((()=>(0,i._)("span",{class:"arrow"},null,-1)));function De(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,A.C_)(["wrapper",{active:s.isActive}]),ref:"menuWrapper",onClick:t[0]||(t[0]=(...e)=>o.toggleActive&&o.toggleActive(...e))},[(0,i._)("p",ye,[(0,i.Uk)((0,A.zw)(n.title)+" ",1),Oe]),(0,i._)("div",{class:(0,A.C_)(["content",{active:s.isActive}])},[(0,i._)("p",null,(0,A.zw)(n.paragraph),1)],2)],2)}var Me={name:"DialogueMenu",props:{title:{type:String,required:!0},paragraph:{type:String,required:!0}},data(){return{isActive:!1}},methods:{toggleActive(){this.isActive=!this.isActive,event.stopPropagation()},handleOutsideClick(){!this.$refs.menuWrapper.contains(event.target)&&this.isActive&&(this.isActive=!1)}},mounted(){window.addEventListener("click",this.handleOutsideClick)},beforeUnmount(){window.removeEventListener("click",this.handleOutsideClick)}};const Ie=(0,Z.Z)(Me,[["render",De],["__scopeId","data-v-0428e694"]]);var Se=Ie;const je=e=>((0,i.dD)("data-v-6eea36e8"),e=e(),(0,i.Cn)(),e),Ee={class:"click-text"},Ye=je((()=>(0,i._)("span",{class:"arrow"},null,-1))),He={class:"skills-lists"},Le={class:"skill-list"},ze=je((()=>(0,i._)("h3",null,"Front-End",-1))),Pe={class:"skill-list"},Re=je((()=>(0,i._)("h3",null,"Back-End",-1))),We={class:"skill-list"},Ue=je((()=>(0,i._)("h3",null,"Languages",-1)));function xe(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,A.C_)(["wrapper",{active:s.isActive}]),ref:"menuWrapper",onClick:t[0]||(t[0]=(...e)=>o.toggleActive&&o.toggleActive(...e))},[(0,i._)("p",Ee,[(0,i.Uk)((0,A.zw)(n.title)+" ",1),Ye]),(0,i._)("div",{class:(0,A.C_)(["content",{active:s.isActive}])},[(0,i._)("div",He,[(0,i._)("ul",Le,[ze,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.frontEndItems,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e},(0,A.zw)(e),1)))),128))]),(0,i._)("ul",Pe,[Re,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.backEndItems,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e},(0,A.zw)(e),1)))),128))]),(0,i._)("ul",We,[Ue,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.languages,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e},(0,A.zw)(e),1)))),128))])])],2)],2)}var Be={name:"DialogueMenu",props:{title:{type:String,required:!0}},data(){return{isActive:!1,frontEndItems:["Vue.js","React","Tailwind","CSS/HTML"],backEndItems:["MySQL","MongoDB","Node.js","Express.js"],languages:["Javascript","C#/C++","Java","Python","Typescript"]}},methods:{toggleActive(e){this.isActive=!this.isActive,e.stopPropagation()},handleOutsideClick(e){!this.$refs.menuWrapper.contains(e.target)&&this.isActive&&(this.isActive=!1)}},mounted(){window.addEventListener("click",this.handleOutsideClick)},beforeUnmount(){window.removeEventListener("click",this.handleOutsideClick)}};const Je=(0,Z.Z)(Be,[["render",xe],["__scopeId","data-v-6eea36e8"]]);var Te=Je,Ke={name:"AboutPage",components:{DialogueMenu:Se,DialogueMenuSkills:Te},data(){return{name:"John Schatzl",title:"About Me",title2:"More About Me"}},computed:{isMobile(){return window.innerWidth<=767}},mounted(){window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.innerWidth<=767}}};const Ve=(0,Z.Z)(Ke,[["render",ke],["__scopeId","data-v-2b434cb2"]]);var Xe=Ve;const Ne=e=>((0,i.dD)("data-v-1a5858fd"),e=e(),(0,i.Cn)(),e),Qe=Ne((()=>(0,i._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1))),Ze={class:"projects double-color-background"},qe=Ne((()=>(0,i._)("h1",{"data-v-scroll":"fade-in"},"What I'm Working On",-1))),Ge={class:"carousel","data-v-scroll":"slide-in-bottom"};function Fe(e,t,n,a,s,o){const l=(0,i.up)("ProjectCarousel");return(0,i.wg)(),(0,i.iD)(i.HY,null,[Qe,(0,i._)("div",Ze,[qe,(0,i._)("div",Ge,[(0,i.Wm)(l)])])],64)}const $e={id:"slider"},et={class:"projectimages"},tt=["href"],nt=["src"];function at(e,t,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",$e,[(0,i.Wm)(a.uT,{tag:"div",name:o.transitionName,class:"slides-group"},{default:(0,i.w5)((()=>[o.show?((0,i.wg)(),(0,i.iD)("div",{key:o.current,class:(0,A.C_)(["slide",o.slides[o.current].className])},[(0,i._)("h2",null,(0,A.zw)(o.slides[o.current].title),1),(0,i._)("p",null,(0,A.zw)(o.slides[o.current].description),1),(0,i._)("div",et,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.slides[o.current].images,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:(0,A.C_)(["image-wrapper"])},[(0,i._)("a",{href:o.slides[o.current].imageLinks[t],target:"_blank",rel:"noopener noreferrer"},[(0,i._)("img",{class:"projectimage",src:e,alt:"Slide Image"},null,8,nt)],8,tt)])))),128))])],2)):(0,i.kq)("",!0)])),_:1},8,["name"]),(0,i._)("div",{class:(0,A.C_)(["btn btn-prev",`slide-${o.current}`]),"aria-label":"Previous slide",onClick:t[0]||(t[0]=e=>l.slide(-1,e))}," ❮ ",2),(0,i._)("div",{class:(0,A.C_)(["btn btn-next",`slide-${o.current}`]),"aria-label":"Next slide",onClick:t[1]||(t[1]=e=>l.slide(1,e))}," ❯ ",2)])}var it=n.p+"img/availablechromewebstore.9ae5737d.png",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO2b34tNURTHP6YUyq88IQlh5AFNeOAJpTF3JmZ4kRdpXA9+vJGUwpMXL0jmH1Dy4mEepCgpJeXHoNSUFA9+KzN+NNMcLa1bp9s5Z+/Llr3P2Z9a3XP2Wnfd873n3H323mddiEQiDjgA1KkQ48AYFSJRqwxJGQR3A13/QHCX5vaOUWDCsjP6AXy3iKtrzhE85KAenFi/IXYb0GmI6U/lk9xeclgP8KuDXF80l+T0mh1Ar4M8PZorEomYmQocBwaBm4HbANBWJHY28Dw1GAjd5P4+s0jwgAY+AvqALYHbYtPl/EkFL6PcXAOulmYgb0HS0BkFl5QknmEDa4DJ2DM3p30aMC/HNwlYmOObA2zO6ZnXuT7D2zXmDHbs1fg9Gb4bwDdgQYbviL5vd4bvnuH+2+1S8H6NuYwdpzT+ZIbvivqOZvieqi9rrjysvrsZo6vrOV+gF4J71PewqX21tr/L+ek0BC/hz0j+l2AR80H9K1PtZ7XtYk7OYAWnh7OnU53VS23bSAkFb1L/sIrdoPuvdL9IcMNeA/MJRHAb8EZj1gMXdFsuaywFfy64hXknWDinMeeBt7q9inyCvqSFtRozpq/PKCZ4wcKL1OefwEPB74EHKbufs+huK7gRN2EhpCF4qOkYxG4Bi1wKrhUM6WRinfX8V3z7DHmXAj+B25i5YxhadrqeLa0AOjJMFgCbkVtLO3bImZ1uETcj5/M79NhwLTh0kii45CSVPcMfdWM55aVdNcos7fdgQnYeAzs9WEh3bbuAJ6rxkgielVppKLMNpR/BTAGOleRhWrMN6nKSaIxEImZ69bHr39LnqDgmmLKlEd/Llg61UJhWsyhT9L4wbbTF0kMx29JDKVLzjpqWFNrQyvhdcm4lcJKKTFiqK3i8an8BqFv05JFIBCO/AFZvE38/IKEKAAAAAElFTkSuQmCC",ot=n.p+"img/githubdark.5772a8ca.svg",lt={el:"#slider",data(){return{current:0,direction:1,transitionName:"fade",show:!1,slides:[{className:"slide1",title:"Alexander's Rentals",description:"A website I made to simplify the process of finding a rental in the Boston area, used by a local brokerage and hundreds of clients. More features to come.",images:[st,ot],imageLinks:["https://alexandersrentals.com","https://github.com/softdevschatzl/alexanders-rentals"]},{className:"slide2",title:"JumpCut",description:"A Chrome extension that makes Google search querying an experience you never knew you needed.",images:[it,ot],imageLinks:["https://chrome.google.com/webstore/detail/jumpcut/fdipgkkflkdlimaeojpkpkhbemlikkbm","https://github.com/theschatzinator/JumpCut"]},{className:"slide3",title:"React Website",description:"A website I made for a local music producer to showcase skills with React and general front-end development.",images:[st,ot],imageLinks:["https://softdevschatzl.github.io/WTFIBWebsite/","https://github.com/theschatzinator/WTFIBWebsite"]}]}},computed:{prevCurrent(){var e=this.slides.length;return(this.current+-1%e+e)%e},postCurrent(){var e=this.slides.length;return(this.current+1%e+e)%e}},methods:{slide(e){event.preventDefault(),this.direction=e,this.transitionName=1===e?"slide-next":"slide-prev";var t=this.slides.length;this.current=(this.current+e%t+t)%t}},mounted(){this.show=!0}};const rt=(0,Z.Z)(lt,[["render",at],["__scopeId","data-v-107942e7"]]);var ct=rt,dt={name:"ProjectsPage",components:{ProjectCarousel:ct},data(){return{name:"John Schatzl",title:"Projects"}}};const ut=(0,Z.Z)(dt,[["render",Fe],["__scopeId","data-v-1a5858fd"]]);var pt=ut;const vt=e=>((0,i.dD)("data-v-19a444d5"),e=e(),(0,i.Cn)(),e),mt={class:"services-section double-color-background"},ht=vt((()=>(0,i._)("h2",{"data-v-scroll":"fade-in"},"My Services",-1))),gt=vt((()=>(0,i._)("p",{class:"section-p","data-v-scroll":"fade-in"},"Discover a range of services tailored to elevate your business and personal presence online and on mobile devices, all created from scratch for the most versatility and personalization.",-1))),At={class:"services-list"},wt=["data-v-scroll"],bt={class:"service-icon"},ft=["src","alt"],_t={class:"service-content"};function kt(e,t,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",mt,[ht,gt,(0,i._)("div",At,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.services,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"service-item",key:e.id,"data-v-scroll":o.getAnimationClass(t)},[(0,i._)("div",bt,[(0,i._)("img",{src:e.icon,alt:e.title},null,8,ft)]),(0,i._)("div",_t,[(0,i._)("h3",null,(0,A.zw)(e.title),1),(0,i._)("p",null,(0,A.zw)(e.description),1)])],8,wt)))),128))])])}var Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxUlEQVR4nO2VUQrCMBBE3wG8gXpwew6pB9Dr2CtsCdQft5SkRLKp82B+QmhnMgsLQgjRKydgACbAgmsCbotnxxDAoBUqhXG8AxizQiXPDutUju8Ld+AMXIAx43z1o5WxPUGS0Q/XjHMF+XUj4/L66dUfGedhG7FO5GhtSEEO24iIhnUqR2tDCvJ3jdRm7z9MQVAjm2i06GCP5GAKghoh5GjVRkFQI2i0tjj0HrGay9Q6laO1IQU5bCOvAKasUM+1IEIIQXhmeiCwxBkJ8/8AAAAASUVORK5CYII=",yt=n.p+"img/application-icon1.becc200d.svg",Ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLElEQVR4nO2ZW4iVVRTHf85Ylk12o3Kgwq4zGWZlzYthkWExD5klStndyJqplyG6QSVBGl2gjCJ76EL14CXMbgYZCVkZdsHsSqJTMVpqOoyjk40zJxb8dyx2+5yxw3fON5J/2Jxz9v72/vZae+21/msd2I//D8YB24CCWg8wg30Qs50QoS1mEKMOeACYEPUv0uZn6HTs+5romROBWVojVxwKfKRN9gFzgQOAYcBP6h8LHK7v3UCt5l4DdKl/pdbKBcOdEJuBXn1fC/zu7oUJhetbD7ztzK3bCVOXhyCXawN7gNOA8UC7Ox3bbLN7frIE73MCzAROcsLckocgZgobtAG72MiEWoDRJeadDTwMNOj3TK1hZmZ3JhdMkIbNrM4tY36DOw27M7lioTZiWva4ElihjZq2lwOXRM/M0Vwzw1xxCLBJ98Sb01OJGGKtH7jbPdek/nbnzaoGM4GlwDp3cT9w49c6j9UGHAvUK9b0SpgL3fOf6nljAeYMngMmVUOQP52G/1KQ8xtbU8IDzU6YknmzLdHJ7aiCHP+8bLSCXxxbwmnEY+hkbHxrkbGL3foVR3jR1cBZLuChgGZjO4GhiblHa3x7YuwY4KJqCuIZbdC+D3w/qn96Ym5b4k6dD3TkYVrnyNYXOT71jhu/3Wl9uk7mQOBWCV3QvQhYoL5O4GNgfrUuu8cw8aw+535r3OaCme12v59080+QcNvlynODXeivtcFW118jqvKDE+BL3SuPVo19rjm5Ya4LaMazUjgYOKjI2EjHiu9iEPAsY77IvOYokSqGJingdP1uVpA087P7V3Xc73KRU4F7XLDs18WdHNH+EMWt7ZJjsMi/MWLRVafxK7WBXifA647eW8QO2OLMcGnkau3zG8UZ8hbmZ+c27eL+of56F9G3OXJ4hRNurQJirhguExoR9Yc0eKJaQX0e9YovRzGIMT9B443Z7nOY5Ow/3IWqR+wYQ0TVXwC+VyQONv8t8DIwtQjjHSjVtVP6ThH+V2CeYlJNwlzLxpEieoEIDtTWRblJKScxT5llap0Njpwa5X9ebvo/4zxpf5dbvF1p6hmumHaYtHoT8IWe252gIh5TpPmQmD2j91kK8HSCBYfvpsz3tI/VwA3FXlCjgsEnbrJF7mXAZXuRU9dKy2HeHVGuMgp4y61twfFMjTUCH7qx5cp1UIpczAJuTt0BH3XtOB8FTh5g86l1HnHrWCx5TWvtdHS9RYozDvaQYwS/ubKQMeN33VpGTq9TMbBFfWYF/8JnOr7WDCj1Vc7UUq1P5tXhfpu7PkLKuM3VhbeqoGH93jxt7CuqhEYp5hVglTiVt/vQjGgaTlEtLPQvTFzyS3WqBQXTXGFmdRzwoDZkJ3Oncy4bpXWPOt3BUIJ6NTql3BGf0IsyMY+JquIHT3dvpYRYrQTJWO198nKNJZKtWhWs/b9a5lbjkuoIxZB+l0kGT1cReI9XTns28UdPM/CLxnt0CqkSU+aw5Op61X3fV5TvLOG1OhQvpiTYxEtRvAnZZCa4QLxogfLrSiRBUxVLCoo7bVkWt+v1b2ys1R6VdkZm9I4lbu0VcsWZ4UbHdLuUp08D3nBu0DT3RJkZ3hDRjPCOTv3Lm6lHanAaMo50fDQ+RicVPEq3qMjemtwYlyZbe1OxJXMMlXu03LoUxuqEgkA7VO4plr6ad3pc8SAEv1SdODeMi9htlyLxeAk1SmnAJo3vkYfLLHnKGk0Ra021VXkV48qBJWCPadObVS5aokLdoOJI+0EF8Dc5wQYl3//rNwAAAABJRU5ErkJggg==",Dt={data(){return{services:[{id:1,title:"Web Development",description:"Modern, responsive, and tailored websites to showcase your business or personal brand.",icon:Ct},{id:2,title:"Application Development",description:"Custom applications built for both mobile and desktop to meet your specific needs.",icon:[yt]},{id:3,title:"Maintenance & Support",description:"Ongoing support and updates for your web or application projects as well as many general tech needs.",icon:Ot}]}},methods:{getAnimationClass(e){const t=["slide-in-left","slide-in-left-7","slide-in-left-5"];return t[e%t.length]}}};const Mt=(0,Z.Z)(Dt,[["render",kt],["__scopeId","data-v-19a444d5"]]);var It=Mt;const St=e=>((0,i.dD)("data-v-f559c7fc"),e=e(),(0,i.Cn)(),e),jt={class:"contact-section double-color-background"},Et=St((()=>(0,i._)("h2",{"data-v-scroll":"fade-in"},"Contact Me",-1))),Yt=St((()=>(0,i._)("p",{"data-v-scroll":"fade-in"},"Feel free to reach out or connect with me on social media.",-1))),Ht={class:"socials","data-v-scroll":"fade-in"},Lt=["href"],zt=["src","alt"],Pt={class:"contact-form","data-v-scroll":"fade-in"},Rt=St((()=>(0,i._)("h3",null,"Send me a message!",-1))),Wt={class:"name-box"},Ut=St((()=>(0,i._)("label",{for:"name"},"Name:",-1))),xt={class:"email-box"},Bt=St((()=>(0,i._)("label",{for:"email"},"Email:",-1))),Jt={class:"message-box"},Tt=St((()=>(0,i._)("label",{for:"message"},"Message:",-1))),Kt=St((()=>(0,i._)("button",{type:"submit",class:"send-button"},"Send",-1))),Vt={class:"resume-download","data-v-scroll":"fade-in"},Xt=St((()=>(0,i._)("p",null,"Interested in my work? Download my resume:",-1))),Nt={href:"/schatzl-resume-dev-2024.pdf",target:"_blank"},Qt=["src"];function Zt(e,t,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",jt,[Et,Yt,(0,i._)("div",Ht,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.socialMediaLinks,(e=>((0,i.wg)(),(0,i.iD)("a",{key:e.name,href:e.url,target:"_blank",rel:"noopener noreferrer"},[(0,i._)("img",{src:e.icon,alt:`Connect on ${e.name}`},null,8,zt)],8,Lt)))),128))]),(0,i._)("div",Pt,[Rt,(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>l.sendMessage&&l.sendMessage(...e)),["prevent"]))},[(0,i._)("div",Wt,[Ut,(0,i.wy)((0,i._)("input",{class:"name","onUpdate:modelValue":t[0]||(t[0]=e=>o.contact.name=e),id:"name",type:"text",required:""},null,512),[[a.nr,o.contact.name]])]),(0,i._)("div",xt,[Bt,(0,i.wy)((0,i._)("input",{class:"email","onUpdate:modelValue":t[1]||(t[1]=e=>o.contact.email=e),id:"email",type:"email",required:""},null,512),[[a.nr,o.contact.email]])]),(0,i._)("div",Jt,[Tt,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.contact.message=e),id:"message",required:""},null,512),[[a.nr,o.contact.message]])]),Kt],32)]),(0,i._)("div",Vt,[Xt,(0,i._)("a",Nt,[(0,i._)("img",{src:o.downloadIcon,class:"download-image"},null,8,Qt)])])])}var qt=n.p+"img/leetcode.cb673787.svg",Gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADwSURBVGhD7dhhC4JAEIRhDer//+Ny6A5MC/d259yu5vlSQsS8WSJNIjFzeaS5L8rTt+ZFeUpxKY8Mt6PxUF5zfR7F0T4Ny/g11pmgvEnr+IoRwfwKpVBANgVkU0A2BWRTQLbhA8w3U94bNi/rjZ7pRWePrywR/3EGqrMirOOhKQB6R7SMh+YA6BXROh5cAcCO8IwHdwCwIrzjIRQA0YjIeAgHgDciOh4oAdAawRgPtACwRrDGAzUAjiKY44EeAJ8i2OOhSwBsI3qM7w4RUA5FpIPdleHbf3Tbq9nLwShXjHWE/hfK9nt/bI32IxYJmaYH93pkMXfzY9AAAAAASUVORK5CYII=",Ft={data(){return{contact:{name:"",email:"",message:""},socialMediaLinks:[{name:"LinkedIn",url:"https://www.linkedin.com/in/john-schatzl/",icon:ne},{name:"GitHub",url:"https://github.com/softdevschatzl",icon:te},{name:"Leetcode",url:"https://leetcode.com/theschatzinator/",icon:qt}],downloadIcon:Gt}},methods:{async sendMessage(){try{const e=await fetch("https://formspree.io/f/mpzgrzdj",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.contact)});e.ok?(window.alert("Message sent successfully!"),this.contact.name="",this.contact.email="",this.contact.message=""):console.error("Failed to send message.")}catch(e){console.error("An error occurred while sending the message:",e)}}}};const $t=(0,Z.Z)(Ft,[["render",Zt],["__scopeId","data-v-f559c7fc"]]);var en=$t,tn={name:"App",components:{HeadNavbar:ee,HomePage:pe,AboutPage:Xe,ProjectsPage:pt,ServicePage:It,ContactPage:en},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=document.querySelectorAll("[data-v-scroll]");e.forEach((e=>{const t=e.getBoundingClientRect(),n=t.top+.7*t.height<=window.innerHeight&&t.bottom-.7*t.height>=0,a=e.getAttribute("data-v-scroll");n&&a&&(e.style.opacity="1",e.classList.add(a))}))}}};const nn=(0,Z.Z)(tn,[["render",g]]);var an=nn;const sn=(0,a.ri)(an);sn.mount("#app")},4254:function(e,t,n){e.exports=n.p+"img/profile.1f5748d4.png"},6959:function(e,t,n){e.exports=n.p+"img/snowboard.69bf7e2f.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],s=e[d][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,s<o&&(o=s));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,s,o=a[0],l=a[1],r=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var d=r(n)}for(t&&t(a);c<o.length;c++)s=o[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunknewsoftdevschatz"]=self["webpackChunknewsoftdevschatz"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5743)}));a=n.O(a)})();
//# sourceMappingURL=index.9e978551.js.map