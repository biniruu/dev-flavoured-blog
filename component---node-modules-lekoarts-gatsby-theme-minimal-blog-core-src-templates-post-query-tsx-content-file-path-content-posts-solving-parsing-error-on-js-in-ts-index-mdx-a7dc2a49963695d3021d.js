"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[856],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return d}});var l=n(7294),a=n(8733),r=n(795),i=n(1322),c=n(6799),o=n(8871);var s=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(l.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(s,{post:t}))};const u=e=>{var t,n,l;let{data:{post:r}}=e;return(0,a.tZ)(o.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function d(e){let{...t}=e;return l.createElement(p,t)}},6799:function(e,t,n){var l=n(8733),a=n(7294),r=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,l.tZ)(a.Fragment,null,t.map(((e,t)=>(0,l.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,l.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var l=n(7294),a=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:s=""}=e;const m=(0,r.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:d,siteDescription:g,siteImage:E,author:f,siteLanguage:b}=m,h={title:t?t+" | "+p:u,description:n||g,url:""+d+(i||""),image:""+d+(c||E)};return l.createElement(l.Fragment,null,l.createElement("html",{lang:b}),l.createElement("title",null,h.title),l.createElement("meta",{name:"description",content:h.description}),l.createElement("meta",{name:"image",content:h.image}),l.createElement("meta",{property:"og:title",content:h.title}),l.createElement("meta",{property:"og:url",content:h.url}),l.createElement("meta",{property:"og:description",content:h.description}),l.createElement("meta",{property:"og:image",content:h.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:h.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:h.title}),l.createElement("meta",{name:"twitter:url",content:h.url}),l.createElement("meta",{name:"twitter:description",content:h.description}),l.createElement("meta",{name:"twitter:image",content:h.image}),l.createElement("meta",{name:"twitter:image:alt",content:h.description}),l.createElement("meta",{name:"twitter:creator",content:f}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),s?l.createElement("link",{rel:"canonical",href:s}):null,o)}},7734:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var l=n(7294),a=n(1151);function r(e){const t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",span:"span",ol:"ol",li:"li",h3:"h3"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h2,null,"사건의 발단"),"\n",l.createElement(t.p,null,"타입스크립트 프로젝트 환경 설정할 때, eslint나 prettier 같은 설정 파일은 확장자명을 ",l.createElement(t.code,null,".ts"),"가 아닌 ",l.createElement(t.code,null,".js"),"를 사용하게 되는데요. 이럴 경우에 .eslintrc.js 파일에서 다음과 같은 에러가 발생하는 경우가 생겨요."),"\n",l.createElement("br"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-text"},"Parsing error: ESLint was configured to run on `<tsconfigRootDir>/.eslintrc.js` using `parserOptions.project`: /users/biniruu/webdev/starter-pack/typescript/ts-backend/tsconfig.json\nHowever, that TSConfig does not include this file. Either:\n- Change ESLint's list of included files to not include this file\n- Change that TSConfig to include this file\n- Create a new TSConfig that includes this file and include it in your parserOptions.project\nSee the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file\n")),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 10%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAIAAADXZGvcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAATklEQVR42mXLQQrAIAxEUS9SEMkkC2mIDUbvf7KChWz6FsNsfnnGWGtFxJzT3XvvRASAmfPkAmit1Vqvo5jZ3vuLzew+VDVj+gEgIsz8ArhkEy5+/YYGAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="parsing error on a javascript file"\n        title=""\n        src="/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/7d769/error.png"\n        srcset="/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/5243c/error.png 240w,\n/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/ab158/error.png 480w,\n/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/7d769/error.png 960w,\n/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/87339/error.png 1440w,\n/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/88b03/error.png 1920w,\n/dev-flavoured-blog/static/40b48abf8cc72d08f924440f87038054/58938/error.png 2816w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"webpack.config.js에서도 발생하는 걸 보니 다른 몇몇 ",l.createElement(t.code,null,".js")," 파일에서도 같은 문제가 발생하는 듯해요."),"\n",l.createElement(t.p,null,"이 에러가 발생하면 eslint가 동작을 하지 못해요. 그렇기 때문에 반드시 해결해야 하죠."),"\n",l.createElement("br"),"\n",l.createElement(t.h2,null,"원인 추측"),"\n",l.createElement(t.p,null,"제 생각에는 다음 조건에서 이 에러가 발생하는 것 같아요. 물론 제 경험에 의한 것이니만큼 얼마든지 다른 환경에서 문제가 발생할 수도 있어요."),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"create-react-app이나 create-next-app처럼 자바스크립트 라이브러리/프레임워크를 사용하는 환경이 아니어야 해요."),"\n",l.createElement(t.li,null,"tsconfig.json에서 ",l.createElement(t.code,null,"allowJS"),"를 ",l.createElement(t.code,null,"false"),"로 설정해야 해요."),"\n",l.createElement(t.li,null,"eslint 설정 파일에서 ",l.createElement(t.code,null,"parser"),"를 ",l.createElement(t.code,null,"@typescript-eslint/parser"),"로 설정해야 해요."),"\n"),"\n",l.createElement("br"),"\n",l.createElement(t.h2,null,"사건 해결"),"\n",l.createElement(t.h3,null,"tsconfig.json에 파일명 추가하기"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"include")," 목록에 eslint 설정 파일을 추가해요."),"\n",l.createElement("br"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'{\n  "include": [".eslintrc.js"]\n}\n')),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"이렇게 하면 에러가 사라져요. eslint도 정상적으로 동작하죠."),"\n",l.createElement(t.p,null,"그렇지만 ",l.createElement(t.code,null,".js")," 파일에서는 발생하면 안 되는(tsconfig.json에서 ",l.createElement(t.code,null,"allowJS: false"),"로 설정했기 때문) 타입 에러가 ",l.createElement(t.code,null,".js")," 파일에서도 발생하는 대참사가 벌어져요. 이 에러는 ",l.createElement(t.code,null,"@ts-ignore"),"나 ",l.createElement(t.code,null,"@ts-nocheck"),"로도 없앨 수가 없기 때문에 에러마다 일일이 ",l.createElement(t.code,null,"eslint-disable")," 주석을 붙여줘야 하죠."),"\n",l.createElement("br"),"\n",l.createElement(t.h3,null,"eslint 설정 파일에서 .js 파일을 override 하기"),"\n",l.createElement(t.p,null,".eslintrc.js 파일에서 ",l.createElement(t.code,null,"overrides")," 옵션에 다음 설정을 추가해요."),"\n",l.createElement("br"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},"module.exports = {\n  overrides: [\n    {\n      extends: ['plugin:@typescript-eslint/disable-type-checked'],\n      files: ['*.js', '*.cjs'],\n    },\n  ],\n}\n")),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"이렇게 하면 아무런 부수효과 없이 문제를 해결할 수 있어요. 제가 추천하는 방법이기도 하면서 이 글을 쓴 이유기도 해요."),"\n",l.createElement(t.p,null,"같은 문제를 만난 분 모두 이 방법으로 어둠의 통로에서 탈출하시기 바라요.🙌🏻"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(4765);function o(e){return l.createElement(c.Z,e,l.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-solving-parsing-error-on-js-in-ts-index-mdx-a7dc2a49963695d3021d.js.map