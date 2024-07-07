"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[231],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return E}});var l=n(7294),r=n(8733),a=n(795),c=n(1322),o=n(6799),m=n(8871);var i=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(l.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(i,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function E(e){let{...t}=e;return l.createElement(s,t)}},6799:function(e,t,n){var l=n(8733),r=n(7294),a=n(1883),c=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.Z)();return(0,l.tZ)(r.Fragment,null,t.map(((e,t)=>(0,l.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),r=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:o="",children:m=null,canonicalUrl:i=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:E,siteDescription:d,siteImage:g,author:b,siteLanguage:h}=u,f={title:t?t+" | "+s:p,description:n||d,url:""+E+(c||""),image:""+E+(o||g)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:h}),l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:b}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),i?l.createElement("link",{rel:"canonical",href:i}):null,m)}},7014:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return m}});var l=n(7294),r=n(1151);function a(e){const t=Object.assign({p:"p",ol:"ol",li:"li",code:"code",h2:"h2",pre:"pre",ul:"ul"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"다음 중 에러를 발생시키는 코드는 무엇일까요?"),"\n",l.createElement("br"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"consolo.log({ apple: '🍎', ...{} });")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"consolo.log({ apple: '🍎', ...null });")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"consolo.log({ apple: '🍎', ...false });")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"console.log(['🍎', ...[]]);")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"console.log(['🍎', ...null]);")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"console.log(['🍎', ...false]);")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"정답은 5번과 6번이에요."),"\n",l.createElement(t.p,null,"그런데 이상하죠? 객체에서는 ",l.createElement(t.code,null,"null"),"과 ",l.createElement(t.code,null,"false"),"를 destructuring 해도 괜찮은데, 배열에서만 문제가 생겨요. 왜 그럴까요?"),"\n",l.createElement("br"),"\n",l.createElement(t.h2,null,"자바스크립트가 객체 destructuring과 배열 destructuring을 다루는 방법"),"\n",l.createElement(t.p,null,"자바스크립트에서는 객체 destructuring을 다룰 때 ",l.createElement(t.code,null,"null"),"과 ",l.createElement(t.code,null,"false"),"를 빈 객체로 취급해요. 따라서 ",l.createElement(t.code,null,"...null"),"과 ",l.createElement(t.code,null,"...false"),"는 ",l.createElement(t.code,null,"...{}"),"와 동일한 결과가 발생하지요."),"\n",l.createElement(t.p,null,"그렇기에 다음과 같은 코드는 에러를 발생시키지 않아요."),"\n",l.createElement("br"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},"const bool = false\nconst obj = {\n  apple: '🍎',\n  ...null,\n  ...(bool && { banana: '🍌' }),\n  ...(bool ? { cherries: '🍒' } : {}),\n}\n\nconsole.log(obj) // { apple: '🍎' }\n")),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"그렇지만 배열 destructuring은 달라요. 배열 destructuring은 ",l.createElement(t.code,null,"null"),"과 ",l.createElement(t.code,null,"false"),"를 빈 배열로 취급하지 않아요. 왜냐 하면 배열 안에서 전개 구문을 사용할 때는 destructure 하는 대상은 ",l.createElement(t.code,null,"Symbol.iterator")," 타입을 가지고 있어야 하거든요."),"\n",l.createElement(t.p,null,"브라우저의 console 창에 배열의 로그를 찍어보면 ",l.createElement(t.code,null,"prototype"),"에 다음 속성을 가지고 있음을 확인할 수 있어요."),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"Symbol(Symbol.iterator)")),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"그렇지만 ",l.createElement(t.code,null,"null"),"이나 ",l.createElement(t.code,null,"false"),"는 ",l.createElement(t.code,null,"Symbol(Symbol.iterator)")," 속성이 없기 때문에 destructure 할 수 없어요."),"\n",l.createElement(t.p,null,"이런 이유로 다음과 같은 코드는 객체 destructuring과 달리 에러를 발생시켜요."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},"const bool = false\nconst banana = ['🍌']\n\nconst arr1 = ['🍎', ...(bool && banana)]\nconsole.log(arr1) // TypeError: (bool && banana) is not iterable ...\n\nconst arr2 = ['🍎', ...null]\nconsole.log(arr2) // TypeError: null is not iterable ...\n")),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"타입스크립트에서는 ",l.createElement(t.code,null,"arr1"),"과 ",l.createElement(t.code,null,"arr2"),"에 대해 각각 다음과 같은 에러를 발생시켜요."),"\n",l.createElement("br"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"arr1: ",l.createElement(t.code,null,"TS2488: Type 'false | string[]' must have a '[Symbol.iterator]()' method that returns an iterator.")),"\n",l.createElement(t.li,null,"arr2: ",l.createElement(t.code,null,"TS2488: Type 'null' must have a '[Symbol.iterator]()' method that returns an iterator.")),"\n"),"\n",l.createElement("br"),"\n",l.createElement(t.h2,null,"결론"),"\n",l.createElement(t.p,null,"알고 보면 별것 아니지만, 모를 때는 객체와 배열 destructuring이 동작하는 방식을 동일하게 생각했다가 예상 못한 에러를 만날 수 있어요."),"\n",l.createElement(t.p,null,"다행히 어려운 문제가 아니라 금방 해결할 수는 있겠지만, 알아두면 시간을 아낄 수 있겠죠?"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(4765);function m(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-how-js-treats-object-and-array-destructuring-index-mdx-33b38eb8c273c6dbe2d7.js.map