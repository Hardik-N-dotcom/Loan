import{r as e}from"./router-BYAaaru2.js";let t,r,a,o={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,l=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?l(s,i):i+"{"+l(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=l(s,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=l.p?l.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},d={},c=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+c(e[r]);return t}return e};function p(e){let t=this||{},r=e.call?e(t.p):e;return((e,t,r,a,o)=>{let p=c(e),u=d[p]||(d[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!d[u]){let t=p!==e?e:(e=>{let t,r,a=[{}];for(;t=i.exec(e.replace(s,""));)t[4]?a.shift():t[3]?(r=t[3].replace(n," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(n," ").trim();return a[0]})(e);d[u]=l(o?{["@keyframes "+u]:t}:t,r?"":"."+u)}let m=r&&d.g?d.g:null;return r&&(d.g=d[u]),f=d[u],y=t,g=a,(h=m)?y.data=y.data.replace(h,f):-1===y.data.indexOf(f)&&(y.data=g?f+y.data:y.data+f),u;var f,y,g,h})(r.unshift?r.raw?((e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":l(e,""):!1===e?"":e}return e+a+(null==i?"":i)},""))(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,(a=t.target,"object"==typeof window?((a?a.querySelector("#_goober"):window._goober)||Object.assign((a||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:a||o),t.g,t.o,t.k);var a}p.bind({g:1});let u=p.bind({k:1});function m(e,o){let i=this||{};return function(){let o=arguments;return function s(n,l){let d=Object.assign({},n),c=d.className||s.className;i.p=Object.assign({theme:r&&r()},d),i.o=/ *go\d+/.test(c),d.className=p.apply(i,o)+(c?" "+c:"");let u=e;return e[0]&&(u=d.as||e,delete d.as),a&&u[0]&&a(d),t(u,d)}}}var f=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,y=(()=>{let e=0;return()=>(++e).toString()})(),g=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),h=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return h(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},b=[],v={toasts:[],pausedAt:void 0},x=e=>{v=h(v,e),b.forEach(e=>{e(v)})},w={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},E=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||y()}))(t,e,r);return x({type:2,toast:a}),a.id},$=(e,t)=>E("blank")(e,t);$.error=E("error"),$.success=E("success"),$.loading=E("loading"),$.custom=E("custom"),$.dismiss=e=>{x({type:3,toastId:e})},$.remove=e=>x({type:4,toastId:e}),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?f(t.success,e):void 0;return o?$.success(o,{id:a,...r,...null==r?void 0:r.success}):$.dismiss(a),e}).catch(e=>{let o=t.error?f(t.error,e):void 0;o?$.error(o,{id:a,...r,...null==r?void 0:r.error}):$.dismiss(a)}),e};var k,D,O,j,C=(e,t)=>{x({type:1,toast:{id:e,height:t}})},N=()=>{x({type:5,time:Date.now()})},z=new Map,A=t=>{let{toasts:r,pausedAt:a}=((t={})=>{let[r,a]=e.useState(v),o=e.useRef(v);e.useEffect(()=>(o.current!==v&&a(v),b.push(a),()=>{let e=b.indexOf(a);e>-1&&b.splice(e,1)}),[]);let i=r.toasts.map(e=>{var r,a,o;return{...t,...t[e.type],...e,removeDelay:e.removeDelay||(null==(r=t[e.type])?void 0:r.removeDelay)||(null==t?void 0:t.removeDelay),duration:e.duration||(null==(a=t[e.type])?void 0:a.duration)||(null==t?void 0:t.duration)||w[e.type],style:{...t.style,...null==(o=t[e.type])?void 0:o.style,...e.style}}});return{...r,toasts:i}})(t);e.useEffect(()=>{if(a)return;let e=Date.now(),t=r.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(r<0))return setTimeout(()=>$.dismiss(t.id),r);t.visible&&$.dismiss(t.id)});return()=>{t.forEach(e=>e&&clearTimeout(e))}},[r,a]);let o=e.useCallback(()=>{a&&x({type:6,time:Date.now()})},[a]),i=e.useCallback((e,t)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=t||{},s=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[r]);return e.useEffect(()=>{r.forEach(e=>{if(e.dismissed)((e,t=1e3)=>{if(z.has(e))return;let r=setTimeout(()=>{z.delete(e),x({type:4,toastId:e})},t);z.set(e,r)})(e.id,e.removeDelay);else{let t=z.get(e.id);t&&(clearTimeout(t),z.delete(e.id))}})},[r]),{toasts:r,handlers:{updateHeight:C,startPause:N,endPause:o,calculateOffset:i}}},I=u`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=u`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=u`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=u`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=m("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${F} 1s linear infinite;
`,S=u`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,_=u`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,L=m("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,R=m("div")`
  position: absolute;
`,U=m("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=u`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=m("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:t})=>{let{icon:r,type:a,iconTheme:o}=t;return void 0!==r?"string"==typeof r?e.createElement(B,null,r):r:"blank"===a?null:e.createElement(U,null,e.createElement(H,{...o}),"loading"!==a&&e.createElement(R,null,"error"===a?e.createElement(T,{...o}):e.createElement(L,{...o})))},Y=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Z=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,G=m("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=m("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=e.memo(({toast:t,position:r,style:a,children:o})=>{let i=t.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,o]=g()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Y(r),Z(r)];return{animation:t?`${u(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${u(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||r||"top-center",t.visible):{opacity:0},s=e.createElement(V,{toast:t}),n=e.createElement(J,{...t.ariaProps},f(t.message,t));return e.createElement(G,{className:t.className,style:{...i,...a,...t.style}},"function"==typeof o?o({icon:s,message:n}):e.createElement(e.Fragment,null,s,n))});k=e.createElement,l.p=D,t=k,r=O,a=j;var Q=({id:t,className:r,style:a,onHeightUpdate:o,children:i})=>{let s=e.useCallback(e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;o(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return e.createElement("div",{ref:s,className:r,style:a},i)},W=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,X=({reverseOrder:t,position:r="top-center",toastOptions:a,gutter:o,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=A(a);return e.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||r,n=((e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:g()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...o}})(s,d.calculateOffset(a,{reverseOrder:t,gutter:o,defaultPosition:r}));return e.createElement(Q,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?W:"",style:n},"custom"===a.type?f(a.message,a):i?i(a):e.createElement(K,{toast:a,position:s}))}))},ee=$;export{X as O,ee as V};
