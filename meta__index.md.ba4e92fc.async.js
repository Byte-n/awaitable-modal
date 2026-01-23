(self.webpackChunkasync_modal_render=self.webpackChunkasync_modal_render||[]).push([[783],{93438:function(e,r,n){"use strict";n.r(r),n.d(r,{demos:function(){return k}});var a={};n.r(a),n.d(a,{AsyncModalRenderCancelError:function(){return E.v},AsyncModalRenderContext:function(){return d.vT},AsyncModalRenderProvider:function(){return d.Ov},asyncModalRender:function(){return p.b},useAsyncModalRender:function(){return i.V},useAsyncModalRenderContext:function(){return d.jV},withAsyncModalPropsMapper:function(){return R}});var l=n(90228),t=n.n(l),o=n(87999),s=n.n(o),u=n(75271),c=n.t(u,2),p=n(71270),d=n(39853),i=n(85031),y=n(26068),x=n.n(y),f=n(48305),h=n.n(f),_=n(67825),M=n.n(_),m=n(52676),I=["onOk","onCancel"];function R(C,S){return function(P){var b=P.onOk,T=P.onCancel,j=M()(P,I),v=j,L=h()(S,2),W=L[0],F=L[1];return v[W]=b,v[F]=T,(0,m.jsx)(C,x()({},v))}}var E=n(33358),O=n(51109),k={"src-demo-basic":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,43117))})),asset:{type:"BLOCK",id:"src-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(7371).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.4"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":O,react:c,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":O},renderOpts:{compile:function(){var C=s()(t()().mark(function P(){var b,T=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(915).then(n.bind(n,54915));case 2:return v.abrupt("return",(b=v.sent).default.apply(b,T));case 3:case"end":return v.stop()}},P)}));function S(){return C.apply(this,arguments)}return S}()}},"src-demo-useasyncmodal":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,72187))})),asset:{type:"BLOCK",id:"src-demo-useasyncmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(56294).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.4"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":O,react:c,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":O},renderOpts:{compile:function(){var C=s()(t()().mark(function P(){var b,T=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(915).then(n.bind(n,54915));case 2:return v.abrupt("return",(b=v.sent).default.apply(b,T));case 3:case"end":return v.stop()}},P)}));function S(){return C.apply(this,arguments)}return S}()}},"src-demo-context":{component:u.memo(u.lazy(function(){return n.e(433).then(n.bind(n,18664))})),asset:{type:"BLOCK",id:"src-demo-context",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(89433).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.4"},"./Modal.tsx":{type:"FILE",value:n(16939).Z}},entry:"index.tsx"},context:{"./Modal.tsx":O,react:c,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":O},renderOpts:{compile:function(){var C=s()(t()().mark(function P(){var b,T=arguments;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(915).then(n.bind(n,54915));case 2:return v.abrupt("return",(b=v.sent).default.apply(b,T));case 3:case"end":return v.stop()}},P)}));function S(){return C.apply(this,arguments)}return S}()}}}},39853:function(e,r,n){"use strict";n.d(r,{Ov:function(){return s},jV:function(){return u},vT:function(){return o}});var a=n(75271),l=n(85031),t=n(52676),o=a.createContext({render:function(){throw Error("AsyncModalContext must be used within createRoot.")},renderFactory:function(){throw Error("AsyncModalContext must be used within createRoot.")}});function s(c){var p=c.children,d=(0,l.V)(),i=d.render,y=d.renderFactory,x=d.holder,f=(0,a.useMemo)(function(){return{render:i,renderFactory:y}},[]);return(0,t.jsxs)(o.Provider,{value:f,children:[p,x]})}function u(){return(0,a.useContext)(o)}},71270:function(e,r,n){"use strict";n.d(r,{b:function(){return p}});var a=n(48305),l=n.n(a),t=n(30967);function o(){if(typeof t.createRoot=="function")return t.createRoot;try{var d=n(38751);if(d&&typeof d.createRoot=="function")return d.createRoot}catch(i){}return null}var s=o();function u(d,i){if(s){var y=i.__reactCompatRoot,x;return y?x=y:(x=s(i),i.__reactCompatRoot=x),x.render(d),function(){i.__reactCompatRoot===x&&(x.unmount(),delete i.__reactCompatRoot)}}else{var f=t.render;if(typeof f=="function")return f(d,i),function(){t.unmountComponentAtNode(i)};throw new Error("\u5F53\u524D React \u7248\u672C\u4E0D\u652F\u6301 render \u6216 createRoot\uFF0C\u8BF7\u68C0\u67E5\u4F9D\u8D56\u3002")}}var c=n(31841);function p(d,i,y){var x=(0,c.j)(d,i!=null?i:{},{onClose:function(){return R()}}),f=l()(x,2),h=f[0],_=f[1],M=function(){},m=y;m||(m=document.createElement("div"),document.body.appendChild(m),M=function(){return m.remove()});var I=u(h,m),R=function(){I(),M()};return _}},51109:function(e,r,n){"use strict";n.r(r);var a=n(26068),l=n.n(a),t=n(75271),o=n(52676),s=function(c){var p=c.title,d=p===void 0?"\u63D0\u793A":p,i=c.children,y=c.okText,x=y===void 0?"\u786E\u5B9A":y,f=c.cancelText,h=f===void 0?"\u53D6\u6D88":f,_=c.width,M=_===void 0?520:_,m=c.footer,I=c.closable,R=I===void 0?!0:I,E=c.maskClosable,O=E===void 0?!0:E,k=c.onOk,C=c.onCancel,S=function(g){O&&g.target===g.currentTarget&&(C==null||C())},P=function(){k==null||k()},b=function(){C==null||C()},T={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1e3,height:"100%",backgroundColor:"rgba(0, 0, 0, 0.45)",display:"flex",alignItems:"center",justifyContent:"center"},j={position:"relative",width:typeof M=="number"?"".concat(M,"px"):M,maxWidth:"calc(100vw - 32px)",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",pointerEvents:"auto",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column"},v={position:"absolute",top:"17px",right:"17px",zIndex:10,padding:0,color:"rgba(0, 0, 0, 0.45)",fontWeight:700,lineHeight:1,textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color 0.3s",fontSize:"16px",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center"},L={padding:"16px 24px",color:"rgba(0, 0, 0, 0.88)",background:"transparent",borderRadius:"8px 8px 0 0",fontSize:"16px",fontWeight:600,lineHeight:1.5,wordWrap:"break-word"},W={padding:"20px 24px",fontSize:"14px",lineHeight:1.5714285714285714,color:"rgba(0, 0, 0, 0.88)",flex:1,overflowY:"auto"},F={padding:"10px 16px",textAlign:"right",background:"transparent",borderTop:"1px solid rgba(5, 5, 5, 0.06)",borderRadius:"0 0 8px 8px"},B={lineHeight:1.5714285714285714,position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",userSelect:"none",touchAction:"manipulation",height:"32px",padding:"4px 15px",fontSize:"14px",borderRadius:"6px",outline:"none",border:"1px solid #d9d9d9",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.88)"},w=l()(l()({},B),{},{color:"#fff",backgroundColor:"#1677ff",borderColor:"#1677ff",boxShadow:"0 2px 0 rgba(5, 145, 255, 0.1)"}),K=function(){return m===null?null:m!==void 0?(0,o.jsx)("div",{style:F,children:m}):(0,o.jsxs)("div",{style:F,children:[(0,o.jsx)("button",{style:B,onClick:b,onMouseEnter:function(A){A.currentTarget.style.color="#4096ff",A.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(A){A.currentTarget.style.color="rgba(0, 0, 0, 0.88)",A.currentTarget.style.borderColor="#d9d9d9"},children:h}),(0,o.jsx)("button",{style:l()(l()({},w),{},{marginLeft:"8px"}),onClick:P,onMouseEnter:function(A){A.currentTarget.style.backgroundColor="#4096ff",A.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(A){A.currentTarget.style.backgroundColor="#1677ff",A.currentTarget.style.borderColor="#1677ff"},children:x})]})};return(0,o.jsx)("div",{style:T,onClick:S,children:(0,o.jsxs)("div",{style:j,onClick:function(g){return g.stopPropagation()},children:[R&&(0,o.jsx)("button",{style:v,onClick:b,onMouseEnter:function(g){g.currentTarget.style.color="rgba(0, 0, 0, 0.88)"},onMouseLeave:function(g){g.currentTarget.style.color="rgba(0, 0, 0, 0.45)"},children:(0,o.jsx)("span",{style:{fontSize:"14px"},children:"\u2715"})}),d&&(0,o.jsx)("div",{style:L,children:d}),(0,o.jsx)("div",{style:W,children:i}),K()]})})};r.default=s},85031:function(e,r,n){"use strict";n.d(r,{V:function(){return i}});var a=n(48305),l=n.n(a),t=n(75271),o=n(15558),s=n.n(o),u=n(52676),c=t.memo(t.forwardRef(function(y,x){var f=p(),h=l()(f,2),_=h[0],M=h[1];return t.useImperativeHandle(x,function(){return{patchElement:M}},[]),(0,u.jsx)(u.Fragment,{children:_})})),p=function(){var x=t.useState([]),f=l()(x,2),h=f[0],_=f[1],M=t.useCallback(function(m){return _(function(I){return[].concat(s()(I),[m])}),function(){_(function(I){return I.filter(function(R){return R!==m})})}},[]);return[h,M]},d=n(31841);function i(){var y=t.useRef(null),x=(0,t.useMemo)(function(){return(0,u.jsx)(c,{ref:y},"component-holder")},[]),f=(0,t.useCallback)(function(_,M){var m=(0,d.j)(_,M!=null?M:{},{onClose:function(){return O()}}),I=l()(m,2),R=I[0],E=I[1],O=y.current.patchElement(R);return E},[]),h=(0,t.useCallback)(function(_,M){return function(){return f(_,M)}},[f]);return{render:f,holder:x,renderFactory:h}}},33358:function(e,r,n){"use strict";n.d(r,{v:function(){return y}});var a=n(17069),l=n.n(a),t=n(25298),o=n.n(t),s=n(21742),u=n.n(s),c=n(83136),p=n.n(c),d=n(53318),i=n.n(d),y=function(x){u()(h,x);var f=p()(h);function h(){return o()(this,h),f.call(this,"User cancel")}return l()(h)}(i()(Error))},31841:function(e,r,n){"use strict";n.d(r,{j:function(){return u}});var a=n(26068),l=n.n(a),t=n(75271),o=n(33358),s=1;function u(c,p,d){var i=null,y=new Promise(function(x,f){var h=function(m){var I;d.onClose(),x(m),p==null||(I=p.onOk)===null||I===void 0||I.call(p,m)},_=function(m){var I,R=m===void 0?new o.v:m;d.onClose(),f(R),p==null||(I=p.onCancel)===null||I===void 0||I.call(p,R)};i=(0,t.createElement)(c,l()(l()({},p),{},{key:s,onOk:h,onCancel:_}))});return[i,y]}},59370:function(e,r,n){"use strict";n.r(r),n.d(r,{texts:function(){return a}});const a=[{value:"\u4EE5 Promise \u7684\u65B9\u5F0F\u4F7F\u7528\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B80\u5316\u5F39\u7A97\u7684\u5F02\u6B65\u4EA4\u4E92\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"asyncModalRender",paraId:1,tocIndex:2},{value:" \u51FD\u6570\u76F4\u63A5\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6\u5230\u6307\u5B9A\u5BB9\u5668\u3002",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"useAsyncModalRender",paraId:2,tocIndex:3},{value:" Hook \u5728\u7EC4\u4EF6\u5185\u7BA1\u7406\u5F39\u7A97\u3002",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:4},{value:"AsyncModalRenderProvider",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"useAsyncModalRenderContext",paraId:3,tocIndex:4},{value:" \u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u5F39\u7A97\u6E32\u67D3\u80FD\u529B\u3002",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u7684\u56DE\u8C03\u51FD\u6570\u662F ",paraId:4,tocIndex:5},{value:"onOk",paraId:4,tocIndex:5},{value:"\u3001",paraId:4,tocIndex:5},{value:"onCancel",paraId:4,tocIndex:5},{value:"\uFF0C\u8FD9\u53EF\u80FD\u4E0E\u73B0\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\u7684\u56DE\u8C03\u4E0D\u4E00\u81F4\u3002\u8FD9\u6709\u4E24\u79CD\u5904\u7406\u65B9\u5F0F\uFF1A",paraId:4,tocIndex:5},{value:"\u5B9A\u4E49 ",paraId:5,tocIndex:5},{value:"props",paraId:5,tocIndex:5},{value:" \u7B26\u5408 ",paraId:5,tocIndex:5},{value:"AsyncModalProps",paraId:5,tocIndex:5},{value:" \u7C7B\u578B\u7684\u5F39\u7A97\uFF0C\u5E76\u5728\u5185\u90E8\u8C03\u7528\u73B0\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\u3002\u76F8\u5BF9\u4E8E\u505A\u4E00\u5C42 ",paraId:5,tocIndex:5},{value:"props",paraId:5,tocIndex:5},{value:" \u952E\u540D\u7684\u8F6C\u6362",paraId:5,tocIndex:5},{value:"\u4F7F\u7528\u5185\u7F6E\u7684\u9AD8\u9636\u51FD\u6570 ",paraId:5,tocIndex:5},{value:"withAsyncModalPropsMapper",paraId:5,tocIndex:5},{value:"\uFF0C\u4E5F\u662F\u505A\u4E86\u4E00\u5C42 ",paraId:5,tocIndex:5},{value:"props",paraId:5,tocIndex:5},{value:" \u952E\u540D\u7684\u8F6C\u6362",paraId:5,tocIndex:5},{value:"\u4E0B\u9762\u662F ",paraId:6,tocIndex:5},{value:"withAsyncModalPropsMapper",paraId:6,tocIndex:5},{value:" \u7684\u4F7F\u7528\uFF1A",paraId:6,tocIndex:5},{value:`import { withAsyncModalPropsMapper, ComputeAsyncModalProps } from 'async-modal-render'

interface BusinessModalProps {
  onClose: VoidFunction;
  onFinished: (num: number) => void;
  text: string;
  num?: number;
}
function BusinessModal(_: BusinessModalProps) {
  return <div />;
}

interface StandardModalProps {
  onCancel: VoidFunction;
  onOk: (num: number) => void;
  text: string;
  num?: number;
}

function StandardModal(_: StandardModalProps) {
  return <div />;
}

async function go() {
  const props: ComputeAsyncModalProps<StandardModalProps> = {
    text: 'string',
    num: 1,
    onOk: (_: number) => void 0,
    onCancel: (_?: unknown) => void 0,
  };

  // \u7C7B\u578B\u6B63\u786E
  const result: number = await asyncModalRender(StandardModal, props);
  console.log('result:', result);

  // \u7C7B\u578B\u6B63\u786E, \u4F7F\u7528 withAsyncModalPropsMapper\uFF0C\u5C06 onFinished \u6620\u5C04\u4E3A onOk, onClose \u6620\u5C04\u4E3A onCancel\uFF0C\u5185\u90E8\u4F1A\u81EA\u52A8\u5904\u7406 \u7C7B\u578B\u6620\u5C04\u3002
  const Comp = withAsyncModalPropsMapper(BusinessModal, ['onFinished', 'onClose']);
  const data: number = await asyncModalRender(Comp, props);
  console.log('data:', data);
}
`,paraId:7,tocIndex:5},{value:"\u76F4\u63A5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u6307\u5B9A\u5BB9\u5668\u5143\u7D20\u4E0B\u3002",paraId:8,tocIndex:7},{value:`interface asyncModalRender {
  <D extends AsyncModalProps> (
    Comp: React.ComponentType<D>,
    props: ASyncModalRenderImpProps<D>,
    container?: Element,
  ): Promise<D['onOk'] extends (v: infer R) => void ? R : never>
}
`,paraId:9,tocIndex:7},{value:"ASyncModalRenderImpProps:",paraId:10,tocIndex:7},{value:`type ASyncModalRenderImpProps<D extends AsyncModalProps> =
  & Pick<D, Exclude<keyof D, keyof AsyncModalProps>>
  & Partial<Pick<D, keyof AsyncModalProps>>;
`,paraId:11,tocIndex:7},{value:"\u53C2\u6570\uFF1A",paraId:12,tocIndex:7},{value:"\u53C2\u6570",paraId:13,tocIndex:7},{value:"\u7C7B\u578B",paraId:13,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:7},{value:"\u8BF4\u660E",paraId:13,tocIndex:7},{value:"Comp",paraId:13,tocIndex:7},{value:"React.ComponentType<D>",paraId:13,tocIndex:7},{value:"-",paraId:13,tocIndex:7},{value:"\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6",paraId:13,tocIndex:7},{value:"props",paraId:13,tocIndex:7},{value:"D",paraId:13,tocIndex:7},{value:"-",paraId:13,tocIndex:7},{value:"\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF08\u5305\u542B onOk \u548C onCancel\uFF09",paraId:13,tocIndex:7},{value:"container",paraId:13,tocIndex:7},{value:"Element",paraId:13,tocIndex:7},{value:"document.body",paraId:13,tocIndex:7},{value:"\u6302\u8F7D\u7684\u5BB9\u5668\u5143\u7D20",paraId:13,tocIndex:7},{value:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528\u7684 Hook\uFF0C\u8FD4\u56DE\u5F39\u7A97\u6E32\u67D3\u76F8\u5173\u7684\u65B9\u6CD5\u548C\u5143\u7D20\u3002",paraId:14,tocIndex:8},{value:`interface useAsyncModalRender {
  (): UseAsyncModalReturn
}

interface UseAsyncModalReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
}
`,paraId:15,tocIndex:8},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:16,tocIndex:8},{value:"\u5C5E\u6027",paraId:17,tocIndex:8},{value:"\u7C7B\u578B",paraId:17,tocIndex:8},{value:"\u8BF4\u660E",paraId:17,tocIndex:8},{value:"render",paraId:17,tocIndex:8},{value:"AsyncModalRender",paraId:17,tocIndex:8},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6",paraId:17,tocIndex:8},{value:"holder",paraId:17,tocIndex:8},{value:"React.ReactElement",paraId:17,tocIndex:8},{value:"\u5F39\u7A97\u5BB9\u5668\u5143\u7D20\uFF0C\u9700\u8981\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:17,tocIndex:8},{value:"renderFactory",paraId:17,tocIndex:8},{value:"AsyncModalRenderFactory",paraId:17,tocIndex:8},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA render \u51FD\u6570",paraId:17,tocIndex:8},{value:"\u63D0\u4F9B asyncModalRender \u4E0A\u4E0B\u6587\u7684 Provider \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u5F39\u7A97\u6E32\u67D3\u80FD\u529B\u3002",paraId:18,tocIndex:9},{value:`interface AsyncModalRenderProvider {
  ({ children }: { children: React.ReactNode }): React.ReactElement
}
`,paraId:19,tocIndex:9},{value:"\u83B7\u53D6 AsyncModalContext \u4E0A\u4E0B\u6587\u7684 Hook\uFF0C\u5FC5\u987B\u5728 AsyncModalRenderProvider \u5185\u90E8\u4F7F\u7528\u3002",paraId:20,tocIndex:10},{value:`interface useAsyncModalRenderContext {
  (): AsyncModalContext
}

interface AsyncModalContext {
  render: AsyncModalRender;
  renderFactory: AsyncModalRenderFactory;
}
`,paraId:21,tocIndex:10},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:22,tocIndex:10},{value:"\u5C5E\u6027",paraId:23,tocIndex:10},{value:"\u7C7B\u578B",paraId:23,tocIndex:10},{value:"\u8BF4\u660E",paraId:23,tocIndex:10},{value:"render",paraId:23,tocIndex:10},{value:"AsyncModalRender",paraId:23,tocIndex:10},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6",paraId:23,tocIndex:10},{value:"renderFactory",paraId:23,tocIndex:10},{value:"AsyncModalRenderFactory",paraId:23,tocIndex:10},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA render \u51FD\u6570",paraId:23,tocIndex:10},{value:"\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u7EE7\u627F\u7684\u57FA\u7840\u5C5E\u6027\u63A5\u53E3\u3002",paraId:24,tocIndex:11},{value:`interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
`,paraId:25,tocIndex:11},{value:"\u5C5E\u6027\uFF1A",paraId:26,tocIndex:11},{value:"\u5C5E\u6027",paraId:27,tocIndex:11},{value:"\u7C7B\u578B",paraId:27,tocIndex:11},{value:"\u8BF4\u660E",paraId:27,tocIndex:11},{value:"onOk",paraId:27,tocIndex:11},{value:"(...args: any[]) => void",paraId:27,tocIndex:11},{value:"\u70B9\u51FB\u786E\u5B9A\u7684\u56DE\u8C03\u51FD\u6570",paraId:27,tocIndex:11},{value:"onCancel",paraId:27,tocIndex:11},{value:"(error?: any) => void",paraId:27,tocIndex:11},{value:"\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03\u51FD\u6570",paraId:27,tocIndex:11},{value:"\u7528\u6237\u53D6\u6D88\u64CD\u4F5C\u65F6\u629B\u51FA\u7684\u9519\u8BEF\u7C7B\u3002",paraId:28,tocIndex:12},{value:`interface AsyncModalRenderCancelError extends Error {
  constructor ();
}
`,paraId:29,tocIndex:12},{value:"\u5F53\u7528\u6237\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u4E14 ",paraId:30,tocIndex:12},{value:"onCancel",paraId:30,tocIndex:12},{value:" \u88AB\u8C03\u7528\u65F6\u6CA1\u6709\u4F20\u5165\u9519\u8BEF\u53C2\u6570\uFF0CPromise \u4F1A reject \u4E00\u4E2A ",paraId:30,tocIndex:12},{value:"AsyncModalRenderCancelError",paraId:30,tocIndex:12},{value:" \u5B9E\u4F8B\u3002",paraId:30,tocIndex:12},{value:`interface withAsyncModalPropsMapper {
  <
    A extends object,
    OnOk extends keyof A,
    OnCancel extends keyof A
  >
  (
    Comp: ComponentType<A>,
    keys: [OnOk, OnCancel],
  ): ComponentType<
    Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }
  >
}
`,paraId:31,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u7EC4\u4EF6\u5FC5\u987B\u7EE7\u627F ",paraId:32,tocIndex:14},{value:"AsyncModalProps",paraId:32,tocIndex:14},{value:" \u63A5\u53E3",paraId:32,tocIndex:14},{value:"\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u5728\u9002\u5F53\u7684\u65F6\u673A\u8C03\u7528 ",paraId:32,tocIndex:14},{value:"onOk",paraId:32,tocIndex:14},{value:" \u6216 ",paraId:32,tocIndex:14},{value:"onCancel",paraId:32,tocIndex:14},{value:" \u65B9\u6CD5",paraId:32,tocIndex:14},{value:"\u4F7F\u7528 ",paraId:32,tocIndex:14},{value:"useAsyncModalRender",paraId:32,tocIndex:14},{value:" \u65F6\uFF0C\u5FC5\u987B\u5C06 ",paraId:32,tocIndex:14},{value:"holder",paraId:32,tocIndex:14},{value:" \u5143\u7D20\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:32,tocIndex:14},{value:"\u4F7F\u7528 ",paraId:32,tocIndex:14},{value:"useAsyncModalRenderContext",paraId:32,tocIndex:14},{value:" \u65F6\uFF0C\u5FC5\u987B\u786E\u4FDD\u7EC4\u4EF6\u5728 ",paraId:32,tocIndex:14},{value:"AsyncModalRenderProvider",paraId:32,tocIndex:14},{value:" \u5185\u90E8",paraId:32,tocIndex:14},{value:"\u53EA\u5141\u8BB8\u4ECE\u516C\u5F00\u7684\u6A21\u5757\u58F0\u660E\u4E2D\u5BFC\u5165\uFF0C\u4F8B\u5982\uFF1A",paraId:32,tocIndex:14},{value:"import { asyncModalRender } from 'async-modal-render'",paraId:32,tocIndex:14}]},16939:function(e,r){"use strict";r.Z=`import React from 'react';
import { AsyncModalProps } from 'async-modal-render';

export interface ModalProps extends AsyncModalProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title = '\u63D0\u793A',
  children,
  okText = '\u786E\u5B9A',
  cancelText = '\u53D6\u6D88',
  width = 520,
  footer,
  closable = true,
  maskClosable = true,
  onOk,
  onCancel,
}) => {
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel?.();
    }
  };

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // \u906E\u7F69\u5C42\u6837\u5F0F
  const maskStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // \u5F39\u7A97\u5BB9\u5668\u6837\u5F0F
  const modalStyle: React.CSSProperties = {
    position: 'relative',
    width: typeof width === 'number' ? \`\${width}px\` : width,
    maxWidth: 'calc(100vw - 32px)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    pointerEvents: 'auto',
    maxHeight: 'calc(100vh - 32px)',
    display: 'flex',
    flexDirection: 'column',
  };

  // \u5173\u95ED\u6309\u94AE\u6837\u5F0F
  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '17px',
    right: '17px',
    zIndex: 10,
    padding: 0,
    color: 'rgba(0, 0, 0, 0.45)',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    background: 'transparent',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: 'color 0.3s',
    fontSize: '16px',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // \u6807\u9898\u6837\u5F0F
  const headerStyle: React.CSSProperties = {
    padding: '16px 24px',
    color: 'rgba(0, 0, 0, 0.88)',
    background: 'transparent',
    borderRadius: '8px 8px 0 0',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.5,
    wordWrap: 'break-word',
  };

  // \u5185\u5BB9\u6837\u5F0F
  const bodyStyle: React.CSSProperties = {
    padding: '20px 24px',
    fontSize: '14px',
    lineHeight: 1.5714285714285714,
    color: 'rgba(0, 0, 0, 0.88)',
    flex: 1,
    overflowY: 'auto',
  };

  // \u5E95\u90E8\u6309\u94AE\u533A\u6837\u5F0F
  const footerStyle: React.CSSProperties = {
    padding: '10px 16px',
    textAlign: 'right',
    background: 'transparent',
    borderTop: '1px solid rgba(5, 5, 5, 0.06)',
    borderRadius: '0 0 8px 8px',
  };

  // \u6309\u94AE\u6837\u5F0F
  const buttonStyle: React.CSSProperties = {
    lineHeight: 1.5714285714285714,
    position: 'relative',
    display: 'inline-block',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
    userSelect: 'none',
    touchAction: 'manipulation',
    height: '32px',
    padding: '4px 15px',
    fontSize: '14px',
    borderRadius: '6px',
    outline: 'none',
    border: '1px solid #d9d9d9',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.88)',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    color: '#fff',
    backgroundColor: '#1677ff',
    borderColor: '#1677ff',
    boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
  };

  const renderFooter = () => {
    if (footer === null) {
      return null;
    }

    if (footer !== undefined) {
      return <div style={footerStyle}>{footer}</div>;
    }

    return (
      <div style={footerStyle}>
        <button
          style={buttonStyle}
          onClick={handleCancel}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            e.currentTarget.style.borderColor = '#d9d9d9';
          }}
        >
          {cancelText}
        </button>
        <button
          style={{ ...primaryButtonStyle, marginLeft: '8px' }}
          onClick={handleOk}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1677ff';
            e.currentTarget.style.borderColor = '#1677ff';
          }}
        >
          {okText}
        </button>
      </div>
    );
  };

  return (
    <div style={maskStyle} onClick={handleMaskClick}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {closable && (
          <button
            style={closeStyle}
            onClick={handleCancel}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.45)';
            }}
          >
            <span style={{ fontSize: '14px' }}>\u2715</span>
          </button>
        )}
        {title && <div style={headerStyle}>{title}</div>}
        <div style={bodyStyle}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default Modal;
`},7371:function(e,r){"use strict";r.Z=`import React, { useState } from 'react';
import { asyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

export default () => {
  const [result, setResult] = useState<string>('');

  const handleClick = async () => {
    try {
      const res = await asyncModalRender(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 asyncModalRender \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
    </div>
  );
};
`},89433:function(e,r){"use strict";r.Z=`import React, { useState } from 'react';
import { AsyncModalRenderProvider, useAsyncModalRenderContext, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

const ChildComponent = () => {
  const [result, setResult] = useState<string>('');
  const { render } = useAsyncModalRenderContext();

  const handleClick = async () => {
    try {
      const res = await render(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 AsyncModalRenderProvider \u548C useAsyncModalRenderContext \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
    </div>
  );
};

export default () => {
  return (
    <AsyncModalRenderProvider>
      <ChildComponent />
    </AsyncModalRenderProvider>
  );
};
`},56294:function(e,r){"use strict";r.Z=`import React, { useState } from 'react';
import { useAsyncModalRender, AsyncModalProps } from 'async-modal-render';
import Modal from './Modal';

interface ExampleModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ExampleModal: React.FC<ExampleModalProps> = ({ title, content, onOk, onCancel }) => {
  return (
    <Modal title={title} onOk={() => onOk?.('confirmed')} onCancel={onCancel}>
      <p>{content}</p>
    </Modal>
  );
};

export default () => {
  const [result, setResult] = useState<string>('');
  const { render, holder } = useAsyncModalRender();

  const handleClick = async () => {
    try {
      const res = await render(ExampleModal, {
        title: '\u63D0\u793A',
        content: '\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528 useAsyncModalRender \u7684\u793A\u4F8B',
      });
      setResult(\`\u7528\u6237\u70B9\u51FB\u4E86\u786E\u5B9A: \${res}\`);
    } catch (error) {
      setResult('\u7528\u6237\u70B9\u51FB\u4E86\u53D6\u6D88');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</button>
      {result && <div style={{ marginTop: 16 }}>\u7ED3\u679C: {result}</div>}
      {holder}
    </div>
  );
};
`},38498:function(e,r,n){var a=n(78770);function l(t){if(Array.isArray(t))return a(t)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},62657:function(e){function r(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},44279:function(e,r,n){var a=n(80038),l=n(68919);function t(o,s,u){return l()?(e.exports=t=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=t=function(p,d,i){var y=[null];y.push.apply(y,d);var x=Function.bind.apply(p,y),f=new x;return i&&a(f,i.prototype),f},e.exports.__esModule=!0,e.exports.default=e.exports),t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},83136:function(e,r,n){var a=n(38836),l=n(68919),t=n(75254);function o(s){var u=l();return function(){var p=a(s),d;if(u){var i=a(this).constructor;d=Reflect.construct(p,arguments,i)}else d=p.apply(this,arguments);return t(this,d)}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},38836:function(e){function r(n){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},e.exports.__esModule=!0,e.exports.default=e.exports,r(n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},21742:function(e,r,n){var a=n(80038);function l(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&a(t,o)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},18724:function(e){function r(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch(a){return typeof n=="function"}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},68919:function(e){function r(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},20698:function(e){function r(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},91162:function(e){function r(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},67825:function(e,r,n){var a=n(64382);function l(t,o){if(t==null)return{};var s=a(t,o),u,c;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(c=0;c<p.length;c++)u=p[c],!(o.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(t,u)&&(s[u]=t[u])}return s}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},64382:function(e){function r(n,a){if(n==null)return{};var l={},t=Object.keys(n),o,s;for(s=0;s<t.length;s++)o=t[s],!(a.indexOf(o)>=0)&&(l[o]=n[o]);return l}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},75254:function(e,r,n){var a=n(31759).default,l=n(62657);function t(o,s){if(s&&(a(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l(o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},80038:function(e){function r(n,a){return e.exports=r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},e.exports.__esModule=!0,e.exports.default=e.exports,r(n,a)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},15558:function(e,r,n){var a=n(38498),l=n(20698),t=n(31479),o=n(91162);function s(u){return a(u)||l(u)||t(u)||o()}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},53318:function(e,r,n){var a=n(38836),l=n(80038),t=n(18724),o=n(44279);function s(u){var c=typeof Map=="function"?new Map:void 0;return e.exports=s=function(d){if(d===null||!t(d))return d;if(typeof d!="function")throw new TypeError("Super expression must either be null or a function");if(typeof c!="undefined"){if(c.has(d))return c.get(d);c.set(d,i)}function i(){return o(d,arguments,a(this).constructor)}return i.prototype=Object.create(d.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l(i,d)},e.exports.__esModule=!0,e.exports.default=e.exports,s(u)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
