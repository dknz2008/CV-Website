(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145),o=a(150),l=a(154);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(144),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(146),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Dylan Kumar"}}}}},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},149:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(145),u=a(144),s=a.n(u),d=function(){return i.a.createElement("div",{style:{background:"#303030",paddingTop:"10px",margin:"0 auto"}},i.a.createElement("ul",{style:{listStyle:"none",display:"flex",justifyContent:"space-evenly"}},i.a.createElement("li",null,i.a.createElement(s.a,{to:"/",className:"menu-link"},"About")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/previousWork",className:"menu-link"},"Work Experience")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/projects",className:"menu-link"},"Projects")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"/skills",className:"menu-link"},"Skills"))))},m=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#1c1c1c",marginBottom:"0"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none",fontFamily:"Helvetica Neue, sans-serif"}},t))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,y=(a(149),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(d,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("hr",null),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Dylan Kumar, ",i.a.createElement("a",{href:"mailto:dylan.kumar@icloud.com"},"Dylan.Kumar@icloud.com"),", ",i.a.createElement("a",{href:"https://github.com/dknz2008"},"Github"),", ",i.a.createElement("a",{href:"https://www.linkedin.com/in/dylan-kumar-326a4455/"},"LinkedIn"))))},data:n})});y.propTypes={children:l.a.node.isRequired};t.a=y},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(156),u=a.n(c),s=a(145);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Dylan Kumar",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-4055e717871155986014.js.map