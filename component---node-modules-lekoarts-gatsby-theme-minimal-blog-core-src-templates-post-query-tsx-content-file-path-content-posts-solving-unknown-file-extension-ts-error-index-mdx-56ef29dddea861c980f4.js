"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[625],{4765:function(e,t,n){n.d(t,{F:function(){return g},Z:function(){return u}});var a=n(7294),r=n(8733),l=n(795),i=n(1322),c=n(6799),o=n(8871);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(s,{post:t}))};const g=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function u(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:s=""}=e;const m=(0,l.Z)(),{siteTitle:p,siteTitleAlt:g,siteUrl:u,siteDescription:d,siteImage:E,author:f,siteLanguage:b}=m,h={title:t?t+" | "+p:g,description:n||d,url:""+u+(i||""),image:""+u+(c||E)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,h.title),a.createElement("meta",{name:"description",content:h.description}),a.createElement("meta",{name:"image",content:h.image}),a.createElement("meta",{property:"og:title",content:h.title}),a.createElement("meta",{property:"og:url",content:h.url}),a.createElement("meta",{property:"og:description",content:h.description}),a.createElement("meta",{property:"og:image",content:h.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:h.title}),a.createElement("meta",{name:"twitter:url",content:h.url}),a.createElement("meta",{name:"twitter:description",content:h.description}),a.createElement("meta",{name:"twitter:image",content:h.image}),a.createElement("meta",{name:"twitter:image:alt",content:h.description}),a.createElement("meta",{name:"twitter:creator",content:f}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),s?a.createElement("link",{rel:"canonical",href:s}):null,o)}},5118:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",code:"code",span:"span",pre:"pre"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"사건의 발단"),"\n",a.createElement(t.p,null,"index.ts 파일 실행을 위해 ",a.createElement(t.code,null,"npx ts-node index.ts"),"를 실행하니 다음과 같은 에러가 발생했다."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAIAAABR8BlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR42jXBgQnAMAgEwOy/ZKIoEWneqgsECr0b5zm8fZIYka9pzOamqiLS3ZkZv/cDICIAVNUFgJ83HN7SwRwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="타입스크립트 에러"\n        title=""\n        src="/static/e5acaf78c3f537b845e2751547bf2808/7d769/error.png"\n        srcset="/static/e5acaf78c3f537b845e2751547bf2808/5243c/error.png 240w,\n/static/e5acaf78c3f537b845e2751547bf2808/ab158/error.png 480w,\n/static/e5acaf78c3f537b845e2751547bf2808/7d769/error.png 960w,\n/static/e5acaf78c3f537b845e2751547bf2808/d128f/error.png 1158w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h2,null,"사건 해결"),"\n",a.createElement(t.p,null,"tsconfig.json에서 ",a.createElement(t.code,null,"compilerOptions.esModuleInterop")," 옵션을 ",a.createElement(t.code,null,"true")," 로 설정한다."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json",title:"package.json"},'{\n  "compilerOptions": {\n    "esModuleInterop": true\n  }\n}\n')),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"이제 ts-node 명령어에 ",a.createElement(t.code,null,"--esm")," 옵션을 붙여서 실행하면 문제 없이 실행된다."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"npx ts-node --esm index.ts\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(4765);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-solving-unknown-file-extension-ts-error-index-mdx-56ef29dddea861c980f4.js.map