"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[59],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return E}});var a=n(7294),l=n(8733),r=n(795),c=n(1322),i=n(6799),m=n(8871);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(c.Z,null,(0,l.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(o,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,l.tZ)(m.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function E(e){let{...t}=e;return a.createElement(u,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),r=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:m=null,canonicalUrl:o=""}=e;const s=(0,r.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:E,siteDescription:d,siteImage:g,author:h,siteLanguage:b}=s,f={title:t?t+" | "+u:p,description:n||d,url:""+E+(c||""),image:""+E+(i||g)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,m)}},1988:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return m}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({p:"p",pre:"pre",code:"code",h2:"h2",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"다음 예시를 볼까요."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"function Fruits() {\n  this.apple = '🍎'\n  this.banana = '🍌'\n}\n\nconst fruits = new Fruits()\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"위 코드는 ",a.createElement(t.code,null,"Fruits()")," 함수의 인스턴스를 생성하는 과정이에요. 여기서 ",a.createElement(t.code,null,"new")," 연산자는 어떤 과정을 통해 ",a.createElement(t.code,null,"Fruits()")," 함수의 인스턴스를 만들까요?"),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"1. 빈 객체를 생성"),"\n",a.createElement(t.p,null,"먼저 ",a.createElement(t.code,null,"new")," 연산자는 ",a.createElement(t.code,null,"Fruits"),"라는 새로운 빈 객체를 만들어요."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"Fruits {}\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"이 때 ",a.createElement(t.code,null,"Fruits()")," 함수 내부에 있는 ",a.createElement(t.code,null,"this"),"는 새로 생성된 빈 객체를 바라보게 돼요."),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"2. 함수 내부의 문(statements)을 빈 객체에 할당"),"\n",a.createElement(t.p,null,"다음으로 ",a.createElement(t.code,null,"Fruits()")," 함수 내부에 있는 문을 ",a.createElement(t.code,null,"Fruits"),"라는 빈 객체의 속성으로 할당해요. 1번에서 에서 언급한 대로 ",a.createElement(t.code,null,"this"),"가 ",a.createElement(t.code,null,"Fruits"),"라는 빈 객체를 바라보기 때문에 가능한 일이에요."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"Fruits {\n  apple: '🍎',\n  banana: '🍌'\n}\n")),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"결론"),"\n",a.createElement(t.p,null,"자바스크립트에서 ",a.createElement(t.code,null,"new")," 연산자를 사용하여 인스턴스를 생성하면 다음과 같은 결과를 얻게 돼요."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"function Fruits() {\n  this.apple = '🍎'\n  this.banana = '🍌'\n}\n\nconst fruits = new Fruits()\n\nconsole.log(fruits) // Fruits { apple: '🍎', banana: '🍌' }\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"new")," 연산자의 동작을 제대로 이해하기 위해서는 더 많은 내용을 알아야 해요. 그러나 기초적인 이해를 위해서는 이 정도만 알아도 꽤 도움이 될 거예요."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"new")," 연산자가 동작하는 내용을 자세히 알고 싶다면 첨부한 참고 자료를 확인해주세요."),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"참고 자료"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new#%EC%84%A4%EB%AA%85"},"new")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4765);function m(e){return a.createElement(i.Z,e,a.createElement(c,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-how-new-operator-works-in-javascript-index-mdx-56ea28b0495392246d88.js.map