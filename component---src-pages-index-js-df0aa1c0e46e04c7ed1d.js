(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(145),a(150)),i=(a(153),a(165)),l=a.n(i);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Hi, I'm Dylan! I live in Wellington, New Zealand, and am currently a fourth year Software Engineering Student at Victoria University."),r.a.createElement("p",null,"In my spare time I like to read, play piano, or dance Salsa or Batchata."),r.a.createElement("p",null,"I also spend my spare time programming and learning about new technologies or tools; or simply going to a local Hackathon or Conference. Some events I've been especially proud of attending were ",r.a.createElement("a",{href:"http://www.scaleconf.co.nz/2018/"},"ScaleConf 2018")," and ",r.a.createElement("a",{href:"https://data.govt.nz/events/dataland-2018/"},"Dataland 2018"),"; where we won third place overall with a prize for best presentation engagement. "),r.a.createElement("p",null,"I spend a lot of my spare time reading. One of my goals for 2019 was to read 32 books. I'm about 5 books through so far! Some of my favourites so far include ",r.a.createElement("a",{href:"https://forestsangha.org/teachings/books/treasures-of-the-buddha-s-teaching?language=English"},"Treatures of the Buddha's Teachings"),", ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Mr._Mercedes"},"Mr. Mercedes by Stephen King"),", and ",r.a.createElement("a",{href:"https://www.goodreads.com/book/show/34684622-leonardo-da-vinci"},"Leonardo da Vinci by Walter Issacson"),"."),r.a.createElement("p",null,"I like composing music in my spare time. Check out a few of the songs on my ",r.a.createElement("a",{href:"https://soundcloud.com/dylan-kumar"},"Soundcloud")),r.a.createElement("h2",null,"Get in Touch"),r.a.createElement("p",null,"I love meeting new people! Feel free to ",r.a.createElement("a",{href:"mailto:dylan.kumar@icloud.com"},"email me")," at dylan.kumar@icloud.com if you want to chat, work together or just hang out."),r.a.createElement("p",null,"You can also check out my ",r.a.createElement("a",{href:"https://github.com/dknz2008"},"Github")," or ",r.a.createElement("a",{href:"https://www.linkedin.com/in/dylan-kumar-326a4455/"},"LinkedIn"),"."),r.a.createElement("img",{src:l.a,alt:"Dylan-img1",className:""})))}},144:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(151)),o=n(a(152)),i=n(a(7)),l=n(a(51)),s=n(a(52)),u=n(a(4)),c=n(a(0)),d=a(16),p=a(145);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/personal_website/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(a);return c.default.createElement(d.Link,(0,o.default)({to:g,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:u,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var g=h;t.default=g;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(144),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(146),c=a.n(u);a.d(t,"PageRenderer",function(){return c.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Dylan Kumar"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(53),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(147),r=a(0),o=a.n(r),i=a(4),l=a.n(i),s=a(145),u=a(144),c=a.n(u),d=function(){return o.a.createElement("div",{style:{background:"#f4f4f4",paddingTop:"10px"}},o.a.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly"}},o.a.createElement("li",null,o.a.createElement(c.a,{to:"/"},"About")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/previousWork"},"Work Experience")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/projects"},"Projects")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/skills"},"Skills"))))},p=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"black",marginBottom:"0"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none",fontFamily:"Helvetica Neue, sans-serif"}},t))))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var f=p,m=(a(149),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(d,null),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Dylan Kumar")))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},152:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},153:function(e,t,a){},165:function(e,t,a){e.exports=a.p+"static/dylan1-7171fc4447ae34f401e484128b5baacb.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-df0aa1c0e46e04c7ed1d.js.map