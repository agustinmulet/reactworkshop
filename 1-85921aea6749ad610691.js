(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{198:function(n,e,t){"use strict";var o=t(0),r=t.n(o),a=(t(10),t(8),t(1),t(20),t(195)),i=t(94);function c(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}var l={xs:360,sm:576,md:768,lg:992,xl:1200},s=Object.keys(l).reduce(function(n,e){return n[e]="@media (min-width: "+l[e]+"px)",n},{}),p=(a.c.div.withConfig({displayName:"Framework__Center",componentId:"sc-1kcsy75-0"})(["text-align:center;"]),a.c.div.withConfig({displayName:"Framework__Container",componentId:"sc-1kcsy75-1"})(["position:relative;max-width:940px;padding:0 ","%;margin:0 auto;","{padding:0 25px;}","{padding:0 40px;}","{padding:0 50px;}"],function(n){return n.mobilePadding},s.sm,s.md,s.lg));p.defaultProps={mobilePadding:5},Object(a.c)(function(n){var e=n.children,t=(n.spacing,c(n,["children","spacing"]));return r.a.createElement("div",t,e)}).withConfig({displayName:"Framework__Row",componentId:"sc-1kcsy75-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -","px;"],function(n){return n.spacing}).defaultProps={spacing:15},Object(a.c)(function(n){var e=n.children,t=(n.base,n.xs,n.sm,n.md,n.lg,n.xl,n.spacing,c(n,["children","base","xs","sm","md","lg","xl","spacing"]));return r.a.createElement("div",t,e)}).withConfig({displayName:"Framework__Col",componentId:"sc-1kcsy75-3"})(["flex:1;padding:0 ","px;"," ",";"],function(n){return n.spacing},function(n){return n.base&&Object(a.b)(["flex-basis:","%;"],function(n){return 100*n.base/12})},function(n){return["xs","sm","md","lg","xl"].filter(function(e){return n[e]}).map(function(n){return Object(a.b)(["","{flex-basis:","%;}"],s[n],function(e){return 100*e[n]/12})})}).defaultProps={spacing:15};var d=Object(a.c)(i.Link).attrs(function(n){return{activeStyle:{fontWeight:"bold",background:"linear-gradient(90deg, #9dc6ff , #346CA4)",color:"#324B6D"}}}).withConfig({displayName:"Framework__Link",componentId:"sc-1kcsy75-4"})(["color:inherit;text-decoration:none;transition:color 0.15s;"]),u=a.c.a.attrs(function(n){return{target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"Framework__ExternalLink",componentId:"sc-1kcsy75-5"})(["color:inherit;text-decoration:none;transition:color 0.15s;&:hover{color:#2263e5;}"]),f=a.c.div.withConfig({displayName:"Framework__Flex",componentId:"sc-1kcsy75-6"})(["display:flex;flex-wrap:wrap;justify-content:",";> div{margin-right:15px;margin-bottom:15px;flex:",";}"],function(n){return n.justify},function(n){return"even"===n.type&&1});f.defaultProps={justify:"space-between"};a.c.button.withConfig({displayName:"Framework__Button",componentId:"sc-1kcsy75-7"})(["border:none;background:linear-gradient(135deg,#56c8ff,#6f99fc) no-repeat;color:white;will-change:opacity;box-shadow:0 4px 8px -1px rgba(25,80,137,0.08),0 8px 24px -2px rgba(0,128,255,0.06);font-size:17px;font-weight:600;text-shadow:0 1px 0 rgba(0,0,0,0.1);padding:8px 16px;border-radius:4px;margin-right:8px;margin-bottom:8px;transition:opacity 0.2s;&:hover{opacity:0.8;}"]),a.c.div.withConfig({displayName:"Framework__Demo",componentId:"sc-1kcsy75-8"})(["margin:15px 0;background:#eeeefa;padding:15px 15px 6px;border-radius:8px;"]);var m=t(202),g=t(100),b=t(213),h=t.n(b),x=(t(17),t(125));function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var k=function(n){var e,t;function a(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).scroller=Object(o.createRef)(),e}t=n,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i=a.prototype;return i.componentDidMount=function(){this.instance=Object(x.a)(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){y(n,e,t[e])})}return n}({targets:this.scroller},this.props))},i.componentWillUnmount=function(){this.instance.disable(),this.instance=null},i.render=function(){var n=this;return o.Children.map(this.props.children,function(e){return Object(o.cloneElement)(e,{children:r.a.createElement("div",{"data-elastic-wrapper":!0},e.props.children),ref:function(t){n.scroller=t;var o=e.ref;o&&("function"==typeof o?o(t):o.hasOwnProperty("current")&&(o.current=t))}})})},a}(o.Component);var w=a.c.nav.withConfig({displayName:"Nav__Navbar",componentId:"sc-1ofyja1-0"})(["display:",";position:fixed;top:0;bottom:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:16px 0;background:#346ca4;color:white;overflow-y:auto;z-index:1;transform:",";transition:transform ",",visibility 0.2s;transition-timing-function:",";visibility:",";","{display:block;visibility:visible;transform:none;}"],function(n){return n.isMounted?"block":"none"},function(n){return n.isOpen?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},function(n){return n.isOpen?"0.45s":"0.3s"},function(n){return n.isOpen?"cubic-bezier(.165, .84, .44, 1)":"cubic-bezier(.77, 0, .175, 1)"},function(n){return n.isOpen?"visible":"hidden"},s.lg),v=a.c.ul.withConfig({displayName:"Nav__List",componentId:"sc-1ofyja1-1"})(["list-style:none;padding-left:0;margin:0;"]),E=a.c.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1ofyja1-2"})(["margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:12px 25px;&:hover{border-bottom-color:transparent;}}"]),_=a.c.button.withConfig({displayName:"Nav__XButton",componentId:"sc-1ofyja1-3"})(["position:absolute;right:10px;background:none;border:none;color:inherit;padding:0;","{display:none;}"],s.lg),O=function(n){var e,t;function a(){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))||this).state={isMounted:!1,transitions:!0},e.ref=Object(o.createRef)(),e.handleResize=function(){e.setState({transitions:!1}),clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.setState({transitions:!0})},100)},e.handleClose=function(){e.props.close()},e.handleTransitionEnd=function(){e.props.isOpen&&e.ref.current.focus()},e.handleBlur=function(n){n.currentTarget.contains(n.relatedTarget)||e.props.close()},e}t=n,(e=a).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var c=a.prototype;return c.componentDidMount=function(){this.setState({isMounted:!0}),window.addEventListener("resize",this.handleResize),this.handleResize()},c.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),clearTimeout(this.timeout)},c.render=function(){var n=this.props.isOpen,e=this.state,t=e.isMounted,o=e.transitions;return r.a.createElement(k,null,r.a.createElement(w,{tabIndex:"-1","aria-label":"Menu",ref:this.ref,style:{transition:o?"":"none"},isOpen:n,isMounted:t,onTransitionEnd:this.handleTransitionEnd,onBlur:this.handleBlur},r.a.createElement(_,{"aria-label":"Close Menu",onClick:this.handleClose},r.a.createElement(h.a,{style:{width:36,height:36}})),r.a.createElement(v,null,r.a.createElement(i.StaticQuery,{query:j,render:function(n){return Object(g.a)(n.allMdx.edges).map(function(n){var e=n.node;return r.a.createElement(E,{key:e.frontmatter.path},r.a.createElement(d,{to:e.frontmatter.path},e.frontmatter.title))})},data:m}))))},a}(o.Component),j="4190207198",C=a.c.span.withConfig({displayName:"NavButtons__FadedText",componentId:"ii0ddk-0"})(["position:relative;top:-2px;opacity:0.4;font-size:70%;margin-right:10px;font-weight:bold;display:block;","{display:inline;}"],s.md),N=Object(a.c)(i.Link).withConfig({displayName:"NavButtons__NavButton",componentId:"ii0ddk-1"})(["display:block;padding:40px 25px;border:",";border-radius:4px;background:",";text-decoration:none;color:",";filter:",";font-weight:bold;transition:box-shadow 0.2s;flex:1;margin:0 10px;max-width:500px;font-size:20px;transition:all 0.1s;&:hover{border-color:inherit;border-bottom:",";filter:",";}","{font-size:24px;}"],function(n){return n["data-next"]?"none":"1px solid rgba(0, 16, 64, 0.15)"},function(n){return n["data-next"]?"linear-gradient(90deg,#f3edff,#edf5ff)":"white"},function(n){return n["data-next"]?"#2569d7":"inherit"},function(n){return n["data-next"]&&"saturate(1.15)"},function(n){return n["data-next"]&&"none"},function(n){return n["data-next"]&&"saturate(1.15) brightness(1.02)"},s.md);var z=function(n){var e=n.next;return r.a.createElement(f,{style:{marginTop:40,marginLeft:-10,marginRight:-10}},r.a.createElement(i.StaticQuery,{query:I,render:function(n){var t=Object(g.a)(n.allMdx.edges).map(function(n){return n.node}),o=t[e],a=e>1?t[e-2]:null;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(N,{to:a.frontmatter.path},r.a.createElement(C,null,"ATRÁS")," ",a.frontmatter.title),o&&r.a.createElement(N,{to:o.frontmatter.path,"data-next":!0},r.a.createElement(C,null,"PRÓX")," ",o.frontmatter.title))},data:m}))},I="4190207198",M=t(214),P=t.n(M),S=t(215),F=t.n(S),R=t(216),T=t.n(R);function B(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var L=a.c.header.withConfig({displayName:"Header__HeaderRoot",componentId:"sc-9eu2yh-0"})(["position:relative;background:linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);padding:25px 0 5px 0;text-align:center;margin-bottom:50px;"]),W=a.c.img.withConfig({displayName:"Header__Logo",componentId:"sc-9eu2yh-1"})(["height:60px;margin:0px;"]),D=a.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-9eu2yh-2"})(["font-size:48px;font-weight:600;margin-top:0;margin-bottom:8px;"]),A=Object(a.c)(u).withConfig({displayName:"Header__ButtonLink",componentId:"sc-9eu2yh-3"})(["background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:4px;transition:all 0.15s;color:#4574c0;margin:0 10px 10px;font-weight:500;position:absolute;right:0px;top:0px;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);}"]),H=a.c.button.withConfig({displayName:"Header__MenuButton",componentId:"sc-9eu2yh-4"})(["position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;","{display:none;}"],s.lg),q=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){B(n,e,t[e])})}return n}({},{verticalAlign:-6,marginRight:10},{color:"#333"}),U={width:36,height:36};var J=function(n){var e=n.openNav;return r.a.createElement(L,null,r.a.createElement(p,null,r.a.createElement(H,{"aria-label":"Menu",onClick:e},r.a.createElement(T.a,{style:U})),r.a.createElement(W,{src:P.a,draggable:"false"}),r.a.createElement(D,null,"React Workshop"),r.a.createElement(f,{justify:"center"},r.a.createElement(A,{href:"https://github.com/agustinmulet/reactworkshop"},r.a.createElement(F.a,{style:q}),"Github"))))},Q=a.c.main.withConfig({displayName:"Main",componentId:"sc-7otpyo-0"})(["","{margin-left:250px;}"],s.lg),X=a.c.footer.withConfig({displayName:"Footer",componentId:"sc-1xqajj9-0"})(["text-align:center;padding:25px 0;border-top:1px solid rgba(0,16,64,0.08);margin-top:50px;color:#9dacb6;font-size:85%;background:white;"]),G=t(203);function V(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #324b64;\n    height: 100%;\n    font-size: 17px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #21B7EC;\n    color: white;\n  }\n  &::selection {\n    background: #21B7EC;\n    color: white;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition: border-bottom-color 0.15s;\n\n    &:hover {\n      border-bottom-color: inherit;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    > a {\n      color: inherit;\n      padding-bottom: 0.25rem;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2.074rem;\n    margin-top: 2.074rem;\n    border-bottom: 1px solid rgba(0, 32, 128, 0.1);\n    padding-bottom: 10px;\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 1.728rem;\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n  \n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 90%;\n    color: inherit;\n    padding: 0;\n  }\n\n  table th, table td {\n    padding: 16px;\n    text-align: left;\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid rgba(0, 16, 64, 0.15);\n    margin-top: 5px;\n  }\n\n  .react-tabs {\n    padding: 14px;\n    box-shadow: 0.055rem 0.055rem 1.11rem rgba(20, 20, 20, 0.27);\n    margin-bottom: 24px;\n  }\n"]);return V=function(){return n},n}var Y=Object(a.a)(V());function K(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  code,\n  pre {\n    font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: #cee6ff;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2.25;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #22223f;\n    font-size: 15px;\n    line-height: 2;\n    max-height: 650px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    "," {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    "," {\n      border-radius: 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 24px;\n      font-size: 16px;\n    }\n  }\n\n  code.language-text {\n    background: linear-gradient(90deg, #f3edff, #edf5ff);\n    color: #2569d7;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    font-size: 85%;\n    line-height: inherit;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #bc90ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7692d9;\n  }\n\n  .token.attr-name,\n  .token.selector {\n    color: #ffb07b;\n  }\n\n  .token.boolean {\n    color: #ff81d0;\n  }\n\n  .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #6ed3ff;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #ffc5ff;\n  }\n\n  .token.flow {\n    color: #e99eff;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #ff6c8b;\n  }\n\n  .token.number,\n  .token.symbol,\n  .token.deleted {\n    color: #ff984b;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #4ef2d0;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #61a5ff;\n  }\n\n  .token.method {\n    color: #16c5ff;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffd278;\n  }\n\n  .token.property.definition {\n    color: #b6e992;\n  }\n\n  .token.property.access {\n    color: #8ec1ef;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n"]);return K=function(){return n},n}var Z=Object(a.a)(K(),s.sm,s.md);var $=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null),r.a.createElement(Z,null))};var nn=function(n){var e,t;function o(){for(var e,t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))||this).state={isNavOpen:!1},e.openNav=function(){e.setState({isNavOpen:!0})},e.closeNav=function(){e.setState({isNavOpen:!1})},e}return t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,o.prototype.render=function(){var n=this.state.isNavOpen,e=this.props,t=e.children,o=e.pageContext;return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(G.a,{pageContext:o}),r.a.createElement(O,{isOpen:n,close:this.closeNav}),r.a.createElement(Q,null,r.a.createElement(J,{openNav:this.openNav}),r.a.createElement(p,null,r.a.createElement("h2",null,o.frontmatter.title),t,r.a.createElement(z,{next:o.frontmatter.index+1})),r.a.createElement(X,null,"© ",(new Date).getFullYear()," - MIT License")))},o}(o.Component);e.a=nn},202:function(n){n.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"Index",path:"/",index:0}}},{node:{frontmatter:{title:"Workshop - Paso 2",path:"/paso-02/",index:4}}},{node:{frontmatter:{title:"Workshop - Paso 3",path:"/paso-03/",index:5}}},{node:{frontmatter:{title:"Introducción",path:"/intro",index:1}}},{node:{frontmatter:{title:"Workshop - Paso 1",path:"/paso-01/",index:3}}},{node:{frontmatter:{title:"Props y State",path:"/props-y-state/",index:2}}}]}}}},203:function(n,e,t){"use strict";var o=t(217),r=t(0),a=t.n(r),i=t(218),c=t.n(i),l=t(94);function s(n){var e=n.title,t=n.description,r=n.lang,i=n.meta,s=n.keywords,d=n.pageContext;return a.a.createElement(l.StaticQuery,{query:p,render:function(n){var o=t||n.site.siteMetadata.description,l="Demo"===d.frontmatter.title,p=e||(l?"Tippy.js - Vanilla JS Tooltip and Popover Library":d.frontmatter.title);return a.a.createElement(c.a,{htmlAttributes:{lang:r},title:p,titleTemplate:l?null:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:p},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:o}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:o})}s.defaultProps={lang:"en",meta:[],keywords:[]},e.a=s;var p="1025518380"},214:function(n,e,t){n.exports=t.p+"static/react-84d44aff3af7aab4ce4495c3de9c2e64.png"},217:function(n){n.exports={data:{site:{siteMetadata:{title:"React Workshop",description:"Workshop de React para aprender las bases realizando una app del clima.",author:"@agustinmulet"}}}}}}]);
//# sourceMappingURL=1-85921aea6749ad610691.js.map