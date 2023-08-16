"use strict";(self.webpackChunkdev_flavoured_blog=self.webpackChunkdev_flavoured_blog||[]).push([[960],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return d}});var r=n(7294),l=n(8733),a=n(795),c=n(1322),i=n(6799),m=n(8871);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(c.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(o,{post:t}))};const p=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(m.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function d(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),c=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:m}=(0,c.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+m+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:i="",children:m=null,canonicalUrl:o=""}=e;const s=(0,a.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:d,siteDescription:E,siteImage:g,author:h,siteLanguage:f}=s,v={title:t?t+" | "+u:p,description:n||E,url:""+d+(c||""),image:""+d+(i||g)};return r.createElement(r.Fragment,null,r.createElement("html",{lang:f}),r.createElement("title",null,v.title),r.createElement("meta",{name:"description",content:v.description}),r.createElement("meta",{name:"image",content:v.image}),r.createElement("meta",{property:"og:title",content:v.title}),r.createElement("meta",{property:"og:url",content:v.url}),r.createElement("meta",{property:"og:description",content:v.description}),r.createElement("meta",{property:"og:image",content:v.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:v.title}),r.createElement("meta",{name:"twitter:url",content:v.url}),r.createElement("meta",{name:"twitter:description",content:v.description}),r.createElement("meta",{name:"twitter:image",content:v.image}),r.createElement("meta",{name:"twitter:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),o?r.createElement("link",{rel:"canonical",href:o}):null,m)}},113:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return m}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",h3:"h3"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"SWR은 설정과 사용 방법이 간단하기 때문에 비교적 쉽게 배워서 사용할 수 있는 라이브러리예요. 이 글에서는 기본적인 SWR 사용법을 간략하게 소개해드릴게요."),"\n",r.createElement(t.h2,null,"설치"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"SWR")," 패키지 외에 특별히 설치해야 할 것은 없어요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"yarn add swr\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"eslint 설정을 위해 SWR에서 공식적으로 내놓은 ",r.createElement(t.a,{href:"https://www.npmjs.com/package/@swrlab/eslint-plugin-swr"},"@swrlab/eslint-plugin-swr"),"도 있지만, 저는 ",r.createElement(t.code,null,"@typescript-eslint")," 관련 패키지와 충돌이 생겨 결국 사용하지 않기로 했어요."),"\n",r.createElement("br"),"\n",r.createElement(t.h2,null,"useSWR"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"useSWR"),"은 SWR 사용에서 가장 기본이 되는 훅이에요. 리액트 훅으로 만들어졌기 때문에 사용 방식도 리액트 훅과 동일하게 맞춰야 해요."),"\n",r.createElement(t.p,null,"먼저 ",r.createElement(t.code,null,"useSWR")," 훅을 불러와 첫 번째 인자에 api 호출 주소를 입력해주세요. SWR에서는 이것을 ",r.createElement(t.code,null,"key"),"로 인식해요. 동일한 ",r.createElement(t.code,null,"key"),"를 가진 ",r.createElement(t.code,null,"useSWR"),"은 동일한 데이터를 반환하게 돼요."),"\n",r.createElement(t.p,null,"두 번째 인자에는 데이터를 받아 오는 fetcher 함수를 만들어주세요. fetcher 함수는 Fetch api, Axios, GraphQL 등으로 만들 수 있어요. fetcher 함수는 항상 Promise를 반환해야 한다는 점에 유의해 주세요."),"\n",r.createElement(t.p,null,"다음은 fetcher 함수를 만드는 예시예요."),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"const fetcher = (url: string) => fetch(url).then(res => res.json())")),"\n",r.createElement(t.p,null,"이제 실제 코드를 보면서 감을 잡아 보세요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-typescript"},"import useSWR from 'swr'\n\ninterface Users {\n  ...\n}\n\nconst fetcher = (url: string) => fetch(url).then(res => res.json())\n\nexport default function SWR() {\n  const { data } = useSWR<Users>('https://reqres.in/api/users/2', fetcher)\n\n  return (\n    <div>\n      <p>{data?.support.text}</p>\n    </div>\n  )\n}\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"이제 서버에서 받아온 데이터는 캐싱이 된 상태로 ",r.createElement(t.code,null,"data")," 변수에 담겼어요."),"\n",r.createElement("br"),"\n",r.createElement(t.h2,null,"Automatic Revalidation"),"\n",r.createElement(t.p,null,"SWR은 기본적으로 브라우저 화면이 다시 포커싱 될 때마다, 그러니까 현재 브라우저 화면에서 다른 탭 또는 다른 앱으로 이동했다가 돌아오면 SWR이 직전에 받아온 데이터를 자동으로 서버에 있는 최신 데이터로 업데이트 해 줘요."),"\n",r.createElement(t.p,null,"이 기능은 기본으로 설정되어 있기 때문에 추가로 설정해야 할 필요가 없어요. 물론 옵션 설정을 변경해서 기능을 비활성화 할 수도 있어요."),"\n",r.createElement(t.p,null,"이외에도 다양한 Revalidation 방식이 있지만, 여기서는 아주 기본적인 ",r.createElement(t.code,null,"refreshInterval"),"만 알아볼게요."),"\n",r.createElement(t.h3,null,"refreshInterval"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"useSWR")," 옵션 중 ",r.createElement(t.code,null,"refreshInterval"),"이라는 옵션이 있어요. 특정 시간을 지정해주면 해당 시간마다 반복해서 데이터를 갱신해 줘요. 물론 서버로부터 신선한 데이터를 받아와 갱신해 주죠."),"\n",r.createElement(t.p,null,"시간 단위는 밀리초(ms)예요. 3000으로 설정하면 3초마다 데이터를 갱신할 수 있어요."),"\n",r.createElement("br"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-typescript"},"import useSWR from 'swr'\n\ninterface Users {\n  ...\n}\n\n<br />\n\nconst fetcher = (url: string) => fetch(url).then(res => res.json())\n\nexport default function SWR() {\n  const { data } = useSWR<Users>('https://reqres.in/api/users/2', fetcher, { refreshInterval: 3000 })\n\n  return (\n    <div>\n      <p>{data?.support.text}</p>\n    </div>\n  )\n}\n")),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"SWR에는 이외에도 개발을 편리하게 만들어 주는 기능이 더 있어요. 기회가 되면 다음 글에서 몇 가지 소개해볼게요."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(4765);function m(e){return r.createElement(i.Z,e,r.createElement(c,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-how-to-use-swr-index-mdx-ed072a01a22679a50495.js.map