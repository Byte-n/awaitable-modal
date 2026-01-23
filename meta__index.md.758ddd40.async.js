(self.webpackChunkasync_modal_render=self.webpackChunkasync_modal_render||[]).push([[783],{18895:function(e,t,n){"use strict";n.r(t),n.d(t,{demos:function(){return C}});var a={};n.r(a),n.d(a,{AsyncModalRenderCancelError:function(){return f.v},AsyncModalRenderContext:function(){return c.vT},AsyncModalRenderProvider:function(){return c.Ov},asyncModalRender:function(){return f.b},useAsyncModalRender:function(){return y.V},useAsyncModalRenderContext:function(){return c.jV}});var l=n(90228),r=n.n(l),o=n(87999),i=n.n(o),p=n(75271),s=n.t(p,2),f=n(62290),c=n(65553),y=n(66631),v=n(34661),C={"src-demo-basic":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,58693))})),asset:{type:"BLOCK",id:"src-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(68273).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.1"},"./Modal.tsx":{type:"FILE",value:n(90818).Z}},entry:"index.tsx"},context:{"./Modal.tsx":v,react:s,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":v},renderOpts:{compile:function(){var u=i()(r()().mark(function M(){var x,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(18).then(n.bind(n,18018));case 2:return d.abrupt("return",(x=d.sent).default.apply(x,I));case 3:case"end":return d.stop()}},M)}));function h(){return u.apply(this,arguments)}return h}()}},"src-demo-useasyncmodal":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,10579))})),asset:{type:"BLOCK",id:"src-demo-useasyncmodal",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(80677).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.1"},"./Modal.tsx":{type:"FILE",value:n(90818).Z}},entry:"index.tsx"},context:{"./Modal.tsx":v,react:s,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":v},renderOpts:{compile:function(){var u=i()(r()().mark(function M(){var x,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(18).then(n.bind(n,18018));case 2:return d.abrupt("return",(x=d.sent).default.apply(x,I));case 3:case"end":return d.stop()}},M)}));function h(){return u.apply(this,arguments)}return h}()}},"src-demo-context":{component:p.memo(p.lazy(function(){return n.e(433).then(n.bind(n,8355))})),asset:{type:"BLOCK",id:"src-demo-context",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(67599).Z},react:{type:"NPM",value:"18.3.1"},"async-modal-render":{type:"NPM",value:"0.0.1"},"./Modal.tsx":{type:"FILE",value:n(90818).Z}},entry:"index.tsx"},context:{"./Modal.tsx":v,react:s,"async-modal-render":a,"/home/runner/work/async-modal-render/async-modal-render/src/demo/Modal.tsx":v},renderOpts:{compile:function(){var u=i()(r()().mark(function M(){var x,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(18).then(n.bind(n,18018));case 2:return d.abrupt("return",(x=d.sent).default.apply(x,I));case 3:case"end":return d.stop()}},M)}));function h(){return u.apply(this,arguments)}return h}()}}}},65553:function(e,t,n){"use strict";n.d(t,{Ov:function(){return i},jV:function(){return p},vT:function(){return o}});var a=n(75271),l=n(66631),r=n(52676),o=a.createContext({render:function(){throw Error("AsyncModalContext must be used within createRoot.")},renderFactory:function(){throw Error("AsyncModalContext must be used within createRoot.")}});function i(s){var f=s.children,c=(0,l.V)(),y=c.render,v=c.renderFactory,C=c.holder,u=(0,a.useMemo)(function(){return{render:y,renderFactory:v}},[]);return(0,r.jsxs)(o.Provider,{value:u,children:[f,C]})}function p(){return(0,a.useContext)(o)}},62290:function(e,t,n){"use strict";n.d(t,{v:function(){return I},b:function(){return m}});var a=n(48305),l=n.n(a),r=n(17069),o=n.n(r),i=n(25298),p=n.n(i),s=n(21742),f=n.n(s),c=n(83136),y=n.n(c),v=n(53318),C=n.n(v),u=n(30967),h=typeof u.createRoot=="function";function M(d,g){if(h){var b=u.createRoot,P=g.__reactCompatRoot,R;return P?R=P:(R=b(g),g.__reactCompatRoot=R),R.render(d),function(){g.__reactCompatRoot===R&&(R.unmount(),delete g.__reactCompatRoot)}}else return u.render(d,g),function(){u.unmountComponentAtNode(g)}}var x=n(96710),I=function(d){f()(b,d);var g=y()(b);function b(){return p()(this,b),g.call(this,"User cancel")}return o()(b)}(C()(Error));function m(d,g,b){var P=(0,x.j)(d,g!=null?g:{},{onClose:function(){return L()}}),R=l()(P,2),j=R[0],F=R[1],T=function(){},S=b;S||(S=document.createElement("div"),document.body.appendChild(S),T=function(){return b.remove()});var D=M(j,S),L=function(){D(),T()};return F}},34661:function(e,t,n){"use strict";n.r(t);var a=n(26068),l=n.n(a),r=n(75271),o=n(52676),i=function(s){var f=s.title,c=f===void 0?"\u63D0\u793A":f,y=s.children,v=s.okText,C=v===void 0?"\u786E\u5B9A":v,u=s.cancelText,h=u===void 0?"\u53D6\u6D88":u,M=s.width,x=M===void 0?520:M,I=s.footer,m=s.closable,d=m===void 0?!0:m,g=s.maskClosable,b=g===void 0?!0:g,P=s.onOk,R=s.onCancel,j=function(A){b&&A.target===A.currentTarget&&(R==null||R())},F=function(){P==null||P()},T=function(){R==null||R()},S={position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1e3,height:"100%",backgroundColor:"rgba(0, 0, 0, 0.45)",display:"flex",alignItems:"center",justifyContent:"center"},D={position:"relative",width:typeof x=="number"?"".concat(x,"px"):x,maxWidth:"calc(100vw - 32px)",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",pointerEvents:"auto",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column"},L={position:"absolute",top:"17px",right:"17px",zIndex:10,padding:0,color:"rgba(0, 0, 0, 0.45)",fontWeight:700,lineHeight:1,textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color 0.3s",fontSize:"16px",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center"},k={padding:"16px 24px",color:"rgba(0, 0, 0, 0.88)",background:"transparent",borderRadius:"8px 8px 0 0",fontSize:"16px",fontWeight:600,lineHeight:1.5,wordWrap:"break-word"},N={padding:"20px 24px",fontSize:"14px",lineHeight:1.5714285714285714,color:"rgba(0, 0, 0, 0.88)",flex:1,overflowY:"auto"},W={padding:"10px 16px",textAlign:"right",background:"transparent",borderTop:"1px solid rgba(5, 5, 5, 0.06)",borderRadius:"0 0 8px 8px"},z={lineHeight:1.5714285714285714,position:"relative",display:"inline-block",fontWeight:400,whiteSpace:"nowrap",textAlign:"center",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",userSelect:"none",touchAction:"manipulation",height:"32px",padding:"4px 15px",fontSize:"14px",borderRadius:"6px",outline:"none",border:"1px solid #d9d9d9",backgroundColor:"#fff",color:"rgba(0, 0, 0, 0.88)"},$=l()(l()({},z),{},{color:"#fff",backgroundColor:"#1677ff",borderColor:"#1677ff",boxShadow:"0 2px 0 rgba(5, 145, 255, 0.1)"}),B=function(){return I===null?null:I!==void 0?(0,o.jsx)("div",{style:W,children:I}):(0,o.jsxs)("div",{style:W,children:[(0,o.jsx)("button",{style:z,onClick:T,onMouseEnter:function(E){E.currentTarget.style.color="#4096ff",E.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(E){E.currentTarget.style.color="rgba(0, 0, 0, 0.88)",E.currentTarget.style.borderColor="#d9d9d9"},children:h}),(0,o.jsx)("button",{style:l()(l()({},$),{},{marginLeft:"8px"}),onClick:F,onMouseEnter:function(E){E.currentTarget.style.backgroundColor="#4096ff",E.currentTarget.style.borderColor="#4096ff"},onMouseLeave:function(E){E.currentTarget.style.backgroundColor="#1677ff",E.currentTarget.style.borderColor="#1677ff"},children:C})]})};return(0,o.jsx)("div",{style:S,onClick:j,children:(0,o.jsxs)("div",{style:D,onClick:function(A){return A.stopPropagation()},children:[d&&(0,o.jsx)("button",{style:L,onClick:T,onMouseEnter:function(A){A.currentTarget.style.color="rgba(0, 0, 0, 0.88)"},onMouseLeave:function(A){A.currentTarget.style.color="rgba(0, 0, 0, 0.45)"},children:(0,o.jsx)("span",{style:{fontSize:"14px"},children:"\u2715"})}),c&&(0,o.jsx)("div",{style:k,children:c}),(0,o.jsx)("div",{style:N,children:y}),B()]})})};t.default=i},66631:function(e,t,n){"use strict";n.d(t,{V:function(){return y}});var a=n(48305),l=n.n(a),r=n(75271),o=n(15558),i=n.n(o),p=n(52676),s=r.memo(r.forwardRef(function(v,C){var u=f(),h=l()(u,2),M=h[0],x=h[1];return r.useImperativeHandle(C,function(){return{patchElement:x}},[]),(0,p.jsx)(p.Fragment,{children:M})})),f=function(){var C=r.useState([]),u=l()(C,2),h=u[0],M=u[1],x=r.useCallback(function(I){return M(function(m){return[].concat(i()(m),[I])}),function(){M(function(m){return m.filter(function(d){return d!==I})})}},[]);return[h,x]},c=n(96710);function y(){var v=r.useRef(null),C=(0,r.useMemo)(function(){return(0,p.jsx)(s,{ref:v},"component-holder")},[]),u=(0,r.useCallback)(function(M,x){var I=(0,c.j)(M,x!=null?x:{},{onClose:function(){return b()}}),m=l()(I,2),d=m[0],g=m[1],b=v.current.patchElement(d);return g},[]),h=(0,r.useCallback)(function(M,x){return function(){return u(M,x)}},[u]);return{render:u,holder:C,renderFactory:h}}},96710:function(e,t,n){"use strict";n.d(t,{j:function(){return p}});var a=n(26068),l=n.n(a),r=n(75271),o=n(62290),i=1;function p(s,f,c){var y=null,v=new Promise(function(C,u){var h=function(I){var m;c.onClose(),C(I),f==null||(m=f.onOk)===null||m===void 0||m.call(f,I)},M=function(I){var m,d=I===void 0?new o.v:I;c.onClose(),u(d),f==null||(m=f.onCancel)===null||m===void 0||m.call(f,d)};y=(0,r.createElement)(s,l()(l()({},f),{},{key:i,onOk:h,onCancel:M}))});return[y,v]}},40769:function(e,t,n){"use strict";n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"\u4EE5 Promise \u7684\u65B9\u5F0F\u4F7F\u7528\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u652F\u6301\u591A\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u7B80\u5316\u5F39\u7A97\u7684\u5F02\u6B65\u4EA4\u4E92\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"asyncModalRender",paraId:1,tocIndex:2},{value:" \u51FD\u6570\u76F4\u63A5\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6\u5230\u6307\u5B9A\u5BB9\u5668\u3002",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:2,tocIndex:3},{value:"useAsyncModalRender",paraId:2,tocIndex:3},{value:" Hook \u5728\u7EC4\u4EF6\u5185\u7BA1\u7406\u5F39\u7A97\u3002",paraId:2,tocIndex:3},{value:"\u4F7F\u7528 ",paraId:3,tocIndex:4},{value:"AsyncModalRenderProvider",paraId:3,tocIndex:4},{value:" \u548C ",paraId:3,tocIndex:4},{value:"useAsyncModalRenderContext",paraId:3,tocIndex:4},{value:" \u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u5F39\u7A97\u6E32\u67D3\u80FD\u529B\u3002",paraId:3,tocIndex:4},{value:"\u76F4\u63A5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u6307\u5B9A\u5BB9\u5668\u5143\u7D20\u4E0B\u3002",paraId:4,tocIndex:6},{value:`function asyncModalRender<D extends AsyncModalProps> (
  Comp: React.ComponentType<D>,
  props: Omit<D, keyof AsyncModalProps> & Pick<D, keyof AsyncModalProps>,
  container?: Element
): Promise<D['onOk'] extends (v: infer R) => void ? R : never>
`,paraId:5,tocIndex:6},{value:"\u53C2\u6570\uFF1A",paraId:6,tocIndex:6},{value:"\u53C2\u6570",paraId:7,tocIndex:6},{value:"\u7C7B\u578B",paraId:7,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:6},{value:"\u8BF4\u660E",paraId:7,tocIndex:6},{value:"Comp",paraId:7,tocIndex:6},{value:"React.ComponentType<D>",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6",paraId:7,tocIndex:6},{value:"props",paraId:7,tocIndex:6},{value:"D",paraId:7,tocIndex:6},{value:"-",paraId:7,tocIndex:6},{value:"\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF08\u5305\u542B onOk \u548C onCancel\uFF09",paraId:7,tocIndex:6},{value:"container",paraId:7,tocIndex:6},{value:"Element",paraId:7,tocIndex:6},{value:"document.body",paraId:7,tocIndex:6},{value:"\u6302\u8F7D\u7684\u5BB9\u5668\u5143\u7D20",paraId:7,tocIndex:6},{value:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528\u7684 Hook\uFF0C\u8FD4\u56DE\u5F39\u7A97\u6E32\u67D3\u76F8\u5173\u7684\u65B9\u6CD5\u548C\u5143\u7D20\u3002",paraId:8,tocIndex:7},{value:`function useAsyncModalRender (): UseAsyncModalReturn

interface UseAsyncModalReturn {
  render: AsyncModalRender;
  holder: React.ReactElement;
  renderFactory: AsyncModalRenderFactory;
}
`,paraId:9,tocIndex:7},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:10,tocIndex:7},{value:"\u5C5E\u6027",paraId:11,tocIndex:7},{value:"\u7C7B\u578B",paraId:11,tocIndex:7},{value:"\u8BF4\u660E",paraId:11,tocIndex:7},{value:"render",paraId:11,tocIndex:7},{value:"AsyncModalRender",paraId:11,tocIndex:7},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6",paraId:11,tocIndex:7},{value:"holder",paraId:11,tocIndex:7},{value:"React.ReactElement",paraId:11,tocIndex:7},{value:"\u5F39\u7A97\u5BB9\u5668\u5143\u7D20\uFF0C\u9700\u8981\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:11,tocIndex:7},{value:"renderFactory",paraId:11,tocIndex:7},{value:"AsyncModalRenderFactory",paraId:11,tocIndex:7},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA render \u51FD\u6570",paraId:11,tocIndex:7},{value:"\u63D0\u4F9B asyncModalRender \u4E0A\u4E0B\u6587\u7684 Provider \u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5728\u5E94\u7528\u4E2D\u5171\u4EAB\u5F39\u7A97\u6E32\u67D3\u80FD\u529B\u3002",paraId:12,tocIndex:8},{value:`function AsyncModalRenderProvider ({ children }: { children: React.ReactNode }): React.ReactElement
`,paraId:13,tocIndex:8},{value:"\u83B7\u53D6 AsyncModalContext \u4E0A\u4E0B\u6587\u7684 Hook\uFF0C\u5FC5\u987B\u5728 AsyncModalRenderProvider \u5185\u90E8\u4F7F\u7528\u3002",paraId:14,tocIndex:9},{value:`function useAsyncModalRenderContext (): AsyncModalContextType

interface AsyncModalContextType {
  render: AsyncModalRender;
  renderFactory: AsyncModalRenderFactory;
}
`,paraId:15,tocIndex:9},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:16,tocIndex:9},{value:"\u5C5E\u6027",paraId:17,tocIndex:9},{value:"\u7C7B\u578B",paraId:17,tocIndex:9},{value:"\u8BF4\u660E",paraId:17,tocIndex:9},{value:"render",paraId:17,tocIndex:9},{value:"AsyncModalRender",paraId:17,tocIndex:9},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6",paraId:17,tocIndex:9},{value:"renderFactory",paraId:17,tocIndex:9},{value:"AsyncModalRenderFactory",paraId:17,tocIndex:9},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA render \u51FD\u6570",paraId:17,tocIndex:9},{value:"\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u7EE7\u627F\u7684\u57FA\u7840\u5C5E\u6027\u63A5\u53E3\u3002",paraId:18,tocIndex:10},{value:`interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
`,paraId:19,tocIndex:10},{value:"\u5C5E\u6027\uFF1A",paraId:20,tocIndex:10},{value:"\u5C5E\u6027",paraId:21,tocIndex:10},{value:"\u7C7B\u578B",paraId:21,tocIndex:10},{value:"\u8BF4\u660E",paraId:21,tocIndex:10},{value:"onOk",paraId:21,tocIndex:10},{value:"(...args: any[]) => void",paraId:21,tocIndex:10},{value:"\u70B9\u51FB\u786E\u5B9A\u7684\u56DE\u8C03\u51FD\u6570",paraId:21,tocIndex:10},{value:"onCancel",paraId:21,tocIndex:10},{value:"(error?: any) => void",paraId:21,tocIndex:10},{value:"\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03\u51FD\u6570",paraId:21,tocIndex:10},{value:"\u7528\u6237\u53D6\u6D88\u64CD\u4F5C\u65F6\u629B\u51FA\u7684\u9519\u8BEF\u7C7B\u3002",paraId:22,tocIndex:11},{value:`interface AsyncModalRenderCancelError extends Error {
  constructor ();
}
`,paraId:23,tocIndex:11},{value:"\u5F53\u7528\u6237\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u4E14 ",paraId:24,tocIndex:11},{value:"onCancel",paraId:24,tocIndex:11},{value:" \u88AB\u8C03\u7528\u65F6\u6CA1\u6709\u4F20\u5165\u9519\u8BEF\u53C2\u6570\uFF0CPromise \u4F1A reject \u4E00\u4E2A ",paraId:24,tocIndex:11},{value:"AsyncModalRenderCancelError",paraId:24,tocIndex:11},{value:" \u5B9E\u4F8B\u3002",paraId:24,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u7EC4\u4EF6\u5FC5\u987B\u7EE7\u627F ",paraId:25,tocIndex:12},{value:"AsyncModalProps",paraId:25,tocIndex:12},{value:" \u63A5\u53E3",paraId:25,tocIndex:12},{value:"\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u5728\u9002\u5F53\u7684\u65F6\u673A\u8C03\u7528 ",paraId:25,tocIndex:12},{value:"onOk",paraId:25,tocIndex:12},{value:" \u6216 ",paraId:25,tocIndex:12},{value:"onCancel",paraId:25,tocIndex:12},{value:" \u65B9\u6CD5",paraId:25,tocIndex:12},{value:"\u4F7F\u7528 ",paraId:25,tocIndex:12},{value:"useAsyncModalRender",paraId:25,tocIndex:12},{value:" \u65F6\uFF0C\u5FC5\u987B\u5C06 ",paraId:25,tocIndex:12},{value:"holder",paraId:25,tocIndex:12},{value:" \u5143\u7D20\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:25,tocIndex:12},{value:"\u4F7F\u7528 ",paraId:25,tocIndex:12},{value:"useAsyncModalRenderContext",paraId:25,tocIndex:12},{value:" \u65F6\uFF0C\u5FC5\u987B\u786E\u4FDD\u7EC4\u4EF6\u5728 ",paraId:25,tocIndex:12},{value:"AsyncModalRenderProvider",paraId:25,tocIndex:12},{value:" \u5185\u90E8",paraId:25,tocIndex:12},{value:"\u53EA\u5141\u8BB8\u4ECE\u516C\u5F00\u7684\u6A21\u5757\u58F0\u660E\u4E2D\u5BFC\u5165\uFF0C\u4F8B\u5982\uFF1A",paraId:25,tocIndex:12},{value:"import { asyncModalRender } from 'async-modal-render'",paraId:25,tocIndex:12}]},90818:function(e,t){"use strict";t.Z=`import React from 'react';
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
`},68273:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},67599:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},80677:function(e,t){"use strict";t.Z=`import React, { useState } from 'react';
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
`},38498:function(e,t,n){var a=n(78770);function l(r){if(Array.isArray(r))return a(r)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},62657:function(e){function t(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},44279:function(e,t,n){var a=n(80038),l=n(68919);function r(o,i,p){return l()?(e.exports=r=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=r=function(f,c,y){var v=[null];v.push.apply(v,c);var C=Function.bind.apply(f,v),u=new C;return y&&a(u,y.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),r.apply(null,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},83136:function(e,t,n){var a=n(38836),l=n(68919),r=n(75254);function o(i){var p=l();return function(){var f=a(i),c;if(p){var y=a(this).constructor;c=Reflect.construct(f,arguments,y)}else c=f.apply(this,arguments);return r(this,c)}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},38836:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},21742:function(e,t,n){var a=n(80038);function l(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),o&&a(r,o)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},18724:function(e){function t(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch(a){return typeof n=="function"}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},68919:function(e){function t(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},20698:function(e){function t(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},91162:function(e){function t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},75254:function(e,t,n){var a=n(31759).default,l=n(62657);function r(o,i){if(i&&(a(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l(o)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},80038:function(e){function t(n,a){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,a)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},15558:function(e,t,n){var a=n(38498),l=n(20698),r=n(31479),o=n(91162);function i(p){return a(p)||l(p)||r(p)||o()}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},53318:function(e,t,n){var a=n(38836),l=n(80038),r=n(18724),o=n(44279);function i(p){var s=typeof Map=="function"?new Map:void 0;return e.exports=i=function(c){if(c===null||!r(c))return c;if(typeof c!="function")throw new TypeError("Super expression must either be null or a function");if(typeof s!="undefined"){if(s.has(c))return s.get(c);s.set(c,y)}function y(){return o(c,arguments,a(this).constructor)}return y.prototype=Object.create(c.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),l(y,c)},e.exports.__esModule=!0,e.exports.default=e.exports,i(p)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
