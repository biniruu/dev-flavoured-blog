"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[436],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),c=n(1322),o=n(6799),i=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(i.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),c=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,c.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:o="",children:i=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:f,siteLanguage:h}=s,v={title:t?t+" | "+u:p,description:n||d,url:""+g+(c||""),image:""+g+(o||E)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:h}),r.createElement("title",null,v.title),r.createElement("meta",{name:"description",content:v.description}),r.createElement("meta",{name:"image",content:v.image}),r.createElement("meta",{property:"og:title",content:v.title}),r.createElement("meta",{property:"og:url",content:v.url}),r.createElement("meta",{property:"og:description",content:v.description}),r.createElement("meta",{property:"og:image",content:v.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:v.title}),r.createElement("meta",{name:"twitter:url",content:v.url}),r.createElement("meta",{name:"twitter:description",content:v.description}),r.createElement("meta",{name:"twitter:image",content:v.image}),r.createElement("meta",{name:"twitter:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,i)}},4087:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return i}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({p:"p",pre:"pre",code:"code",h2:"h2",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"숫자 4 하나만으로 길이가 4인 배열을 만들고 싶다면 어떻게 해야 할까요? 아마 가장 먼저 떠오르는 방법은 for문을 사용하는 것일 텐데요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"const num = 4\nconst arr = []\n\nfor (let i = 0; i < num; i++) {\n  arr.push(i)\n}\n\nconsole.log(arr) // [0, 1, 2, 3]\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"만일 for문을 사용하기 싫다면 어떻게 해야 할까요?"),"\n",r.createElement(t.p,null,"이럴 땐 ",r.createElement(t.code,null,"Array.from()"),"을 사용해서 만들어 보세요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"const num = 4\nconst arr = Array.from({ length: num }, (v, i) => i)\n\nconsole.log(arr) // [0, 1, 2, 3]\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"반복문 안에서 연산을 한 후에 값을 반환해야 한다면 다음과 같이 할 수도 있겠죠."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"const num = 4\nconst arr = Array.from({ length: num }, (v, i) => `기호 ${i + 1}번`)\n\nconsole.log(arr) // ['기호 1번', '기호 2번', '기호 3번', '기호 4번']\n")),"\n",r.createElement(t.p,null,"참고로 매개변수 ",r.createElement(t.code,null,"v"),"는 ",r.createElement(t.code,null,"undefined")," 값을 가지고 있으니 신경쓰지 않아도 괜찮아요.😇"),"\n",r.createElement("br"),"\n",r.createElement(t.h2,null,"참고 자료"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from"},"Using arrow functions and Array.from()")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(4765);function i(e){return r.createElement(o.Z,e,r.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-use-digit-of-number-as-array-index-mdx-68dc921678494dd9dd57.js.map