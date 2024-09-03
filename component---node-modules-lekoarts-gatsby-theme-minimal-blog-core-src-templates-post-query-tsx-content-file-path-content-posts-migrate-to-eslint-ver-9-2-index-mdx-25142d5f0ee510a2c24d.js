"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[267],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),l=n(8733),a=n(795),i=n(1322),c=n(6799),o=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(o.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,a.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:E,siteImage:d,author:f,siteLanguage:h}=s,b={title:t?t+" | "+u:p,description:n||E,url:""+g+(i||""),image:""+g+(c||d)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:h}),r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}},7033:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h2:"h2",p:"p",blockquote:"blockquote",a:"a",strong:"strong",pre:"pre",code:"code"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"사건의 발단"),"\n",r.createElement(t.p,null,"비상!🚨 ESLint 팀에서 공식 발표한 내용이에요! 2024년 10월 5일 이후로 버전 8 이하인 ESLint에 대해서는 손을 떼겠다고 해요."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"ESLint v8.x end-of-life is 2024-10-05 and will not be maintained after that. ",r.createElement(t.a,{href:"https://eslint.org/docs/latest/use/migrate-to-9.0.0"},"Upgrade")," or consider ",r.createElement(t.a,{href:"https://eslint.org/version-support/"},"long-term support options")),"\n"),"\n",r.createElement(t.p,null,"이제는 버전 9 이후로 도입된 ",r.createElement(t.strong,null,"flat config")," 방식으로 ESLint 설정 파일을 변경해야 해요."),"\n",r.createElement(t.p,null,"그런데 ESLint 설정을 해보지 않았다면 또는 설정파일 구조에 익숙하지 않다면 공식문서에 있는 설정 방법을 보더라도 어렵게 느껴질 수 있어요. 기존 방식과 많이 다르기도 하고, 새로운 설정 방식을 아직 지원하지 않는 플러그인도 있거든요."),"\n",r.createElement(t.p,null,"여기서는 제가 직접 새로운 방식으로 설정파일을 만들면서 알게 된 점을 알려드릴 거에요. 혹시라도 설정 과정에서 어려운 점이 있을 때 보면 도움이 될 거라고 생각해요.☺️"),"\n",r.createElement("br"),"\n",r.createElement(t.h2,null,"새 설정파일 만들기"),"\n",r.createElement(t.p,null,"먼저 파일명이 바뀌었어요. 파일명은 ",r.createElement(t.strong,null,"eslint.config.js"),"나 ",r.createElement(t.strong,null,"eslint.config.ts"),"처럼 ",r.createElement(t.strong,null,"eslint.config.*")," 방식으로 지어야 해요. 자세한 내용은 ",r.createElement(t.a,{href:"https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file"},"Configuration File"),"에서 확인할 수 있어요."),"\n",r.createElement(t.p,null,"이제 파일을 만들어볼 거예요. 공식 문서에 나온 대로 최소한의 rule을 가진 파일을 만들어볼게요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"export default [\n  {\n    rules: {\n      semi: 'error',\n      'prefer-const': 'error',\n    },\n  },\n]\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"축하합니다.👏🏻 이제 여러분은 새로운 설정 파일을 사용해서 프로젝트에 ESLint를 반영할 수 있게 됐어요. 어때요? 참 쉽죠?"),"\n",r.createElement(t.p,null,"여기서 이전 설정 방식과 달라진 점이 하나 있어요. 파일이 배열을 내보낸다는 것이에요. 이전에는 객체를 내보냈었어요. 참고로 알아두면 좋지만, 만일 이전에 ESLint 설정을 해본 적이 없다면 신경쓰지 않아도 괜찮아요."),"\n",r.createElement("br"),"\n",r.createElement(t.h2,null,"ESLint 추천 rule 추가하기"),"\n",r.createElement(t.p,null,"다음은 가장 기초적인 작업이에요. ESLint에서 공식적으로 제공하는 추천 rule을 추가해볼 거에요."),"\n",r.createElement(t.p,null,"먼저 패키지를 설치해야 해요. 여기서는 Yarn을 사용해서 추가할게요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"yarn add -D @eslint/js\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"이제 설정파일에 추천 rule을 추가할게요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-javascript"},"import js from '@eslint/js'\n\nexport default [\n  {\n    rules: {\n      ...js.configs.recommended.rules,\n      semi: 'error',\n      'prefer-const': 'error',\n    },\n  },\n]\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"이렇게 하면 ESLint 팀에서 추천하는 rule을 활성화 시킬 수 있어요. 만일 그 아래로 추가하는 rule 중에 추천 rule과 동일한 rule이 있다면 추천 rule을 덮어쓰게 되고요."),"\n",r.createElement(t.p,null,"다음 편에서는 ",r.createElement(t.strong,null,"eslint-plugin-import"),"를 추가하는 방법을 알려드릴게요. 아직 ",r.createElement(t.strong,null,"eslint-plugin-import"),"가 ",r.createElement(t.strong,null,"flat config"),"를 지원하지 않아서 ",r.createElement(t.strong,null,"eslint-plugin-import"),"를 추가하기 위해서는 몇 가지 추가 작업이 필요해요. 이 작업을 다음 편에서 설명해드릴 거예요."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(4765);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-migrate-to-eslint-ver-9-2-index-mdx-25142d5f0ee510a2c24d.js.map