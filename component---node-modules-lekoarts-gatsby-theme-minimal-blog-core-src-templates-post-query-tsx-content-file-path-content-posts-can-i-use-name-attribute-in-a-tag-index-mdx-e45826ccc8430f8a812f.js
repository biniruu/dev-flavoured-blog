"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[500],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var a=n(7294),l=n(8733),r=n(795),i=n(1322),c=n(6799),m=n(8871);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(o,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,l.tZ)(m.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(u,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),r=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,i.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:m=null,canonicalUrl:o=""}=e;const s=(0,r.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:h,siteLanguage:f}=s,b={title:t?t+" | "+u:p,description:n||E,url:""+g+(i||""),image:""+g+(c||d)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,m)}},6367:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return m}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({p:"p",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li",h2:"h2",a:"a",br:"br"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"a 태그에 ",a.createElement(t.code,null,"name")," 속성을 사용한다면?"),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<h2>\n  <a name="a1-run-only-for-browser-users" href="#a1-run-only-for-browser-users" class=""></a>\n  A.1 - Run Only for browser users\n</h2>\n')),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"사이트 운영에 문제는 없어요. 근데 표준에는 맞지 않아요. w3schools에서 다음 태그에서만 ",a.createElement(t.code,null,"name")," 속성을 사용하도록 지정하고 있기 때문이에요."),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"name 태그를 사용할 수 있는 태그 목록")),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"button"),"\n",a.createElement(t.li,null,"fieldset"),"\n",a.createElement(t.li,null,"form"),"\n",a.createElement(t.li,null,"iframe"),"\n",a.createElement(t.li,null,"input"),"\n",a.createElement(t.li,null,"map"),"\n",a.createElement(t.li,null,"meta"),"\n",a.createElement(t.li,null,"object"),"\n",a.createElement(t.li,null,"output"),"\n",a.createElement(t.li,null,"param"),"\n",a.createElement(t.li,null,"select"),"\n",a.createElement(t.li,null,"textarea"),"\n"),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"참고 자료"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.w3schools.com/tags/att_name.asp"},"HTML name Attribute"),a.createElement(t.br),"\n",a.createElement(t.a,{href:"https://html.com/attributes/a-name/"},'<a name=""> HTML Attribute')))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(4765);function m(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-can-i-use-name-attribute-in-a-tag-index-mdx-e45826ccc8430f8a812f.js.map