"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[303],{5656:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return d}});var a=n(7294),r=n(8733),l=n(795),i=n(1883),o=n(7373),s=n(4372),c=n(3494),m=n(9706),g=n(8871);var u=e=>{let{posts:t}=e;const{tagsPath:n,basePath:a}=(0,c.Z)();return(0,r.tZ)(o.Z,null,(0,r.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1",sx:{marginY:2}},"Blog"),(0,r.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,variant:"links.secondary",marginY:2}},to:(0,m.Z)("/"+a+"/"+n)},"View all tags")),(0,r.tZ)(s.Z,{posts:t,sx:{mt:[4,5]}}))};const p=()=>(0,r.tZ)(g.Z,{title:"Blog"});var d=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(u,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},4372:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(8733),r=n(7294),l=n(795),i=n(1883),o=n(6799);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(l.xu,{mb:4},(0,a.tZ)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(s,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.Z)(),{siteTitle:g,siteTitleAlt:u,siteUrl:p,siteDescription:d,siteImage:Z,author:h,siteLanguage:f}=m,v={title:t?t+" | "+g:u,description:n||d,url:""+p+(i||""),image:""+p+(o||Z)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,v.title),a.createElement("meta",{name:"description",content:v.description}),a.createElement("meta",{name:"image",content:v.image}),a.createElement("meta",{property:"og:title",content:v.title}),a.createElement("meta",{property:"og:url",content:v.url}),a.createElement("meta",{property:"og:description",content:v.description}),a.createElement("meta",{property:"og:image",content:v.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:v.title}),a.createElement("meta",{name:"twitter:url",content:v.url}),a.createElement("meta",{name:"twitter:description",content:v.description}),a.createElement("meta",{name:"twitter:image",content:v.image}),a.createElement("meta",{name:"twitter:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-blog-query-tsx-44e70d652dc8e0b78b02.js.map