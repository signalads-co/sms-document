"use strict";(self.webpackChunksms_document=self.webpackChunksms_document||[]).push([[671],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},355:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return y}});var r=t(7462),l=t(3366),a=t(7294),o=t(3905),u=t(2389),i=t(9548),c=t(6010),s="tabItem_LplD";function p(e){var n,t,l,o=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),g=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,a.useState)(y),O=w[0],E=w[1],N=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=g[m];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&E(x)}var j=function(e){var n=e.currentTarget,t=N.indexOf(n),r=b[t].value;r!==O&&(P(n),E(r),null!=m&&T(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var l=N.indexOf(e.currentTarget)-1;t=N[l]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,u.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}var m=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)},f=["components"],v={sidebar_position:1,id:"my-home-doc",slug:"/"},b="\u0634\u0631\u0648\u0639",h={unversionedId:"my-home-doc",id:"my-home-doc",title:"\u0634\u0631\u0648\u0639",description:"\u0627\u06cc\u0646 \u0631\u0627\u0647\u0646\u0645\u0627 \u062c\u0647\u062a \u0633\u0647\u0648\u0644\u062a \u06a9\u0627\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u0627\u0646\u06cc \u06a9\u0647 \u0642\u0635\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u062f\u0627\u0631\u0646\u062f \u062a\u0647\u06cc\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 REST \u062e\u062f\u0645\u0627\u062a\u06cc \u0645\u0627\u0646\u0646\u062f \u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645\u060c \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u06cc\u0627\u0645\u060c \u06af\u0632\u0627\u0631\u0634 \u0627\u0631\u0633\u0627\u0644 \u0648 .... \u0631\u0627 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc \u06a9\u0646\u062f.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"my-home-doc",slug:"/"},sidebar:"defaultSidebar",next:{title:"\u0627\u0631\u0633\u0627\u0644 \u062a\u06a9\u06cc",permalink:"/send/send-one"}},y=[{value:"\u0627\u0631\u0633\u0627\u0644 \u062a\u06a9\u06cc",id:"\u0627\u0631\u0633\u0627\u0644-\u062a\u06a9\u06cc",children:[],level:3},{value:"\u0627\u0631\u0633\u0627\u0644 \u0686\u0646\u062f\u062a\u0627\u06cc\u06cc",id:"\u0627\u0631\u0633\u0627\u0644-\u0686\u0646\u062f\u062a\u0627\u06cc\u06cc",children:[],level:3},{value:"\u0627\u0631\u0633\u0627\u0644 \u0646\u0638\u06cc\u0631 \u0628\u0647 \u0646\u0638\u06cc\u0631",id:"\u0627\u0631\u0633\u0627\u0644-\u0646\u0638\u06cc\u0631-\u0628\u0647-\u0646\u0638\u06cc\u0631",children:[],level:3},{value:"\u0627\u0631\u0633\u0627\u0644 \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u0632 \u067e\u06cc\u0634 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647",id:"\u0627\u0631\u0633\u0627\u0644-\u0628\u0627-\u0633\u0627\u062e\u062a\u0627\u0631-\u0627\u0632-\u067e\u06cc\u0634-\u062a\u0639\u0631\u06cc\u0641-\u0634\u062f\u0647",children:[],level:3}],k={toc:y};function g(e){var n=e.components,t=(0,l.Z)(e,f);return(0,o.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0634\u0631\u0648\u0639"},"\u0634\u0631\u0648\u0639"),(0,o.kt)("p",null,"\u0627\u06cc\u0646 \u0631\u0627\u0647\u0646\u0645\u0627 \u062c\u0647\u062a \u0633\u0647\u0648\u0644\u062a \u06a9\u0627\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u0627\u0646\u06cc \u06a9\u0647 \u0642\u0635\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u062f\u0627\u0631\u0646\u062f \u062a\u0647\u06cc\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 REST \u062e\u062f\u0645\u0627\u062a\u06cc \u0645\u0627\u0646\u0646\u062f \u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645\u060c \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u06cc\u0627\u0645\u060c \u06af\u0632\u0627\u0631\u0634 \u0627\u0631\u0633\u0627\u0644 \u0648 .... \u0631\u0627 \u0641\u0631\u0627\u0647\u0645 \u0645\u06cc \u06a9\u0646\u062f."),(0,o.kt)("p",null,"\u0622\u062f\u0631\u0633 \u0648\u0628 \u0633\u0631\u0648\u06cc\u0633 \u0627\u0632 \u0645\u0633\u06cc\u0631 \u0632\u06cc\u0631 \u0642\u0627\u0628\u0644 \u062f\u0633\u062a\u0631\u0633\u06cc \u0627\u0633\u062a."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://example.com/v1/APIKEY/METHOD\n")),(0,o.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 REST API \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06cc\u06a9 API-KEY \u062f\u0627\u0631\u06cc\u062f \u06a9\u0647 \u0627\u0632 \u067e\u0646\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0642\u0627\u0628\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0633\u062a."),(0,o.kt)("p",null,"\u0645\u062a\u062f \u0647\u0627 \u0634\u0627\u0645\u0644 :"),(0,o.kt)("h3",{id:"\u0627\u0631\u0633\u0627\u0644-\u062a\u06a9\u06cc"},"\u0627\u0631\u0633\u0627\u0644 \u062a\u06a9\u06cc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"send")),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(m,{value:"php",label:"PHP ",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$colors = array("red", "green", "blue", "yellow");\n\nforeach ($colors as $value) {\n  echo "$value <br>";\n}\n'))),(0,o.kt)(m,{value:"javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function helloWorld() {\n  console.log('Hello, world!');\n}\n"))),(0,o.kt)(m,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def hello_world():\n  print 'Hello, world!'\n")))),"````",(0,o.kt)("h3",{id:"\u0627\u0631\u0633\u0627\u0644-\u0686\u0646\u062f\u062a\u0627\u06cc\u06cc"},"\u0627\u0631\u0633\u0627\u0644 \u0686\u0646\u062f\u062a\u0627\u06cc\u06cc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sendArray")),(0,o.kt)("h3",{id:"\u0627\u0631\u0633\u0627\u0644-\u0646\u0638\u06cc\u0631-\u0628\u0647-\u0646\u0638\u06cc\u0631"},"\u0627\u0631\u0633\u0627\u0644 \u0646\u0638\u06cc\u0631 \u0628\u0647 \u0646\u0638\u06cc\u0631"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sendPair")),(0,o.kt)("h3",{id:"\u0627\u0631\u0633\u0627\u0644-\u0628\u0627-\u0633\u0627\u062e\u062a\u0627\u0631-\u0627\u0632-\u067e\u06cc\u0634-\u062a\u0639\u0631\u06cc\u0641-\u0634\u062f\u0647"},"\u0627\u0631\u0633\u0627\u0644 \u0628\u0627 \u0633\u0627\u062e\u062a\u0627\u0631 \u0627\u0632 \u067e\u06cc\u0634 \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sendPattern")))}g.isMDXComponent=!0}}]);