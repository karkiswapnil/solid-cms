(self.webpackChunksolid_cms=self.webpackChunksolid_cms||[]).push([[9789],{80117:(j,M,f)=>{"use strict";j.exports=f(41706)},41706:function(j,M,f){(function(l,b){j.exports=b(f(53547),f(78384))})(this,function(l,b){return function(n){var u={};function t(r){if(u[r])return u[r].exports;var o=u[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=u,t.d=function(r,o,c){t.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:c})},t.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,o){if(1&o&&(r=t(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var s in r)t.d(c,s,function(i){return r[i]}.bind(null,s));return c},t.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(o,"a",o),o},t.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},t.p="",t(t.s=110)}({0:function(n,u,t){n.exports=t(19)()},1:function(n,u){n.exports=l},10:function(n,u,t){var r=t(25),o=t(26),c=t(22),s=t(27);n.exports=function(i,p){return r(i)||o(i,p)||c(i,p)||s()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,u,t){"use strict";t.r(u),t.d(u,"Main",function(){return S}),t.d(u,"SkipToContent",function(){return L});var r,o=t(5),c=t.n(o),s=t(4),i=t.n(s),p=t(3),g=t.n(p),m=t(1),P=t.n(m),T=t(0),e=t.n(T),a=t(2),d=t.n(a),y=["labelledBy"],x=d.a.main(r||(r=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),S=function(C){var A=C.labelledBy,W=i()(C,y),Z=A||"main-content-title";return P.a.createElement(x,c()({"aria-labelledby":Z,id:"main-content",tabIndex:-1},W))};S.defaultProps={labelledBy:void 0},S.propTypes={labelledBy:e.a.string};var R,z=t(6),Q=d()(z.Box)(R||(R=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(C){return C.theme.spaces[3]},function(C){return C.theme.spaces[3]}),L=function(C){var A=C.children;return P.a.createElement(Q,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},A)};L.propTypes={children:e.a.node.isRequired}},13:function(n,u){function t(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(r)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,u,t){"use strict";var r=t(20);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function s(g,m,P,T,e,a){if(a!==r){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function i(){return s}s.isRequired=s;var p={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:i,element:s,elementType:s,instanceOf:i,node:s,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:c,resetWarningCache:o};return p.PropTypes=p,p}},2:function(n,u){n.exports=b},20:function(n,u,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,u){n.exports=function(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,c=new Array(r);o<r;o++)c[o]=t[o];return c},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,u,t){var r=t(21);n.exports=function(o,c){if(o){if(typeof o=="string")return r(o,c);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(o,c):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,u){n.exports=function(t,r){if(t==null)return{};var o,c,s={},i=Object.keys(t);for(c=0;c<i.length;c++)o=i[c],r.indexOf(o)>=0||(s[o]=t[o]);return s},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,u){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,u){n.exports=function(t,r){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,s,i=[],p=!0,g=!1;try{for(o=o.call(t);!(p=(c=o.next()).done)&&(i.push(c.value),!r||i.length!==r);p=!0);}catch(m){g=!0,s=m}finally{try{p||o.return==null||o.return()}finally{if(g)throw s}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,u){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,u){n.exports=function(t,r){return r||(r=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(r)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,u,t){var r=t(24);n.exports=function(o,c){if(o==null)return{};var s,i,p=r(o,c);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);for(i=0;i<g.length;i++)s=g[i],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(o,s)&&(p[s]=o[s])}return p},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,u){function t(){return n.exports=t=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(r[s]=c[s])}return r},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,u,t){"use strict";t.r(u),t.d(u,"Box",function(){return T});var r,o=t(3),c=t.n(o),s=t(0),i=t.n(s),p=t(2),g=t.n(p),m=t(7),P={color:!0},T=g.a.div.withConfig({shouldForwardProp:function(e,a){return!P[e]&&a(e)}})(r||(r=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,d=e.background;return a.colors[d]},function(e){var a=e.theme,d=e.color;return a.colors[d]},function(e){var a=e.theme,d=e.padding;return Object(m.a)("padding",d,a)},function(e){var a=e.theme,d=e.paddingTop;return Object(m.a)("padding-top",d,a)},function(e){var a=e.theme,d=e.paddingRight;return Object(m.a)("padding-right",d,a)},function(e){var a=e.theme,d=e.paddingBottom;return Object(m.a)("padding-bottom",d,a)},function(e){var a=e.theme,d=e.paddingLeft;return Object(m.a)("padding-left",d,a)},function(e){var a=e.theme,d=e.marginLeft;return Object(m.a)("margin-left",d,a)},function(e){var a=e.theme,d=e.marginRight;return Object(m.a)("margin-right",d,a)},function(e){var a=e.theme,d=e.marginTop;return Object(m.a)("margin-top",d,a)},function(e){var a=e.theme,d=e.marginBottom;return Object(m.a)("margin-bottom",d,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,d=e.hasRadius,y=e.borderRadius;return d?a.borderRadius:y},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,d=e.borderColor,y=e.borderStyle,x=e.borderWidth;if(d&&!y&&!x)return"1px solid ".concat(a.colors[d])},function(e){var a=e.theme,d=e.shadow;return a.shadows[d]},function(e){return e.pointerEvents},function(e){var a=e._hover,d=e.theme;return a?a(d):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});T.displayName="Box",T.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},T.propTypes={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])}},7:function(n,u,t){"use strict";var r=t(10),o=t.n(r),c=t(13),s=t.n(c);u.a=function(i,p,g){var m=p;if(Array.isArray(p)||s()(p)!=="object"||(m=[p==null?void 0:p.desktop,p==null?void 0:p.tablet,p==null?void 0:p.mobile]),m!==void 0){if(Array.isArray(m)){var P=m,T=o()(P,3),e=T[0],a=T[1],d=T[2],y="".concat(i,": ").concat(g.spaces[e],";");return a!==void 0&&(y+="".concat(g.mediaQueries.tablet,`{
          `).concat(i,": ").concat(g.spaces[a],`;
        }`)),d!==void 0&&(y+="".concat(g.mediaQueries.mobile,`{
          `).concat(i,": ").concat(g.spaces[d],`;
        }`)),y}var x=g.spaces[m]||m;return"".concat(i,": ").concat(x,";")}}}})})},79274:function(j,M,f){(function(l,b){j.exports=b(f(53547))})(this,function(l){return function(b){var n={};function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return b[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}return u.m=b,u.c=n,u.d=function(t,r,o){u.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},u.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,r){if(1&r&&(t=u(t)),8&r||4&r&&typeof t=="object"&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&typeof t!="string")for(var c in t)u.d(o,c,function(s){return t[s]}.bind(null,c));return o},u.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(r,"a",r),r},u.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},u.p="",u(u.s=154)}({0:function(b,n){b.exports=l},154:function(b,n,u){"use strict";u.r(n);var t=u(0);function r(){return(r=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(o[i]=s[i])}return o}).apply(this,arguments)}n.default=function(o){return t.createElement("svg",r({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})})},39172:(j,M,f)=>{"use strict";f.r(M),f.d(M,{default:()=>k});var l=f(53547),b=f(97132),n=f(76458),u=f(15482),t=f(64459),r=f(35395),o=f(80117),c=f(49549),s=f(33483),i=f(40264),p=f(43546),g=f(62982),m=f.n(g),P=f(31023),T=f.n(P),e=f(79274),a=f.n(e),d=f(77904),y=f(10104),x=f(96486);const R=O=>{const h=(()=>(0,x.startsWith)(O,"/")?`${strapi.backendURL}${O}`:(0,x.startsWith)(O,"https")||(0,x.startsWith)(O,"http")?O:`${strapi.backendURL}/${O}`)();return window.open(h,"_blank"),window.focus()};var z=f(17829),Q=Object.defineProperty,L=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,W=(O,h,v)=>h in O?Q(O,h,{enumerable:!0,configurable:!0,writable:!0,value:v}):O[h]=v,Z=(O,h)=>{for(var v in h||(h={}))C.call(h,v)&&W(O,v,h[v]);if(L)for(var v of L(h))A.call(h,v)&&W(O,v,h[v]);return O},F=(O,h,v)=>new Promise(($,V)=>{var H=w=>{try{D(v.next(w))}catch(I){V(I)}},B=w=>{try{D(v.throw(w))}catch(I){V(I)}},D=w=>w.done?$(w.value):Promise.resolve(w.value).then(H,B);D((v=v.apply(O,h)).next())});const k=()=>{var O;(0,n.useFocusWhenNavigate)();const{formatMessage:h}=(0,b.useIntl)(),{data:v,isLoading:$,deleteMutation:V,regenerateDocMutation:H}=(0,z.Z)(),[B,D]=(0,l.useState)(!1),[w,I]=(0,l.useState)(!1),[X,K]=(0,l.useState)(),G=4,Y=(((O=v==null?void 0:v.docVersions)==null?void 0:O.length)||0)+1,N=()=>{const E=v!=null&&v.prefix.startsWith("/")?"":"/";R(`${E}${v==null?void 0:v.prefix}/v${v==null?void 0:v.currentVersion}`)},J=E=>{H.mutate({version:E,prefix:v==null?void 0:v.prefix})},_=()=>{D(!B)},q=()=>F(void 0,null,function*(){I(!0),yield V.mutateAsync({prefix:v==null?void 0:v.prefix,version:X}),D(!B),I(!1)}),ee=E=>{K(E),D(!B)},U=h({id:(0,y.O)("plugin.name"),defaultMessage:"Documentation"});return l.createElement(r.Layout,null,l.createElement(u.Helmet,{title:U}),l.createElement(o.Main,{"aria-busy":$},l.createElement(r.HeaderLayout,{title:U,subtitle:h({id:(0,y.O)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:l.createElement(n.CheckPermissions,{permissions:d.Z.open},l.createElement(t.Button,{onClick:N,startIcon:l.createElement(T(),null)},h({id:(0,y.O)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),l.createElement(r.ContentLayout,null,$&&l.createElement(n.LoadingIndicatorPage,null,"Plugin is loading"),v!=null&&v.docVersions.length?l.createElement(p.Table,{colCount:G,rowCount:Y},l.createElement(p.Thead,null,l.createElement(p.Tr,null,l.createElement(p.Th,null,l.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},h({id:(0,y.O)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),l.createElement(p.Th,null,l.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},h({id:(0,y.O)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),l.createElement(p.Tbody,null,v.docVersions.sort((E,te)=>E.generatedDate<te.generatedDate?1:-1).map(E=>l.createElement(p.Tr,{key:E.version},l.createElement(p.Td,{width:"50%"},l.createElement(s.Typography,null,E.version)),l.createElement(p.Td,{width:"50%"},l.createElement(s.Typography,null,E.generatedDate)),l.createElement(p.Td,null,l.createElement(i.Flex,Z({justifyContent:"end"},n.stopPropagation),l.createElement(c.IconButton,{onClick:N,noBorder:!0,icon:l.createElement(T(),null),label:h({id:(0,y.O)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:`${E.version}`})}),l.createElement(n.CheckPermissions,{permissions:d.Z.regenerate},l.createElement(c.IconButton,{onClick:()=>J(E.version),noBorder:!0,icon:l.createElement(a(),null),label:h({id:(0,y.O)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:`${E.version}`})})),l.createElement(n.CheckPermissions,{permissions:d.Z.update},E.version!==v.currentVersion&&l.createElement(c.IconButton,{onClick:()=>ee(E.version),noBorder:!0,icon:l.createElement(m(),null),label:h({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${E.version}`})})))))))):l.createElement(n.EmptyStateLayout,null)),l.createElement(n.ConfirmDialog,{isConfirmButtonLoading:w,onConfirm:q,onToggleDialog:_,isOpen:B})))}},17829:(j,M,f)=>{"use strict";f.d(M,{Z:()=>p});var l=f(23724),b=f(76458),n=f(52809),u=(g,m,P)=>new Promise((T,e)=>{var a=x=>{try{y(P.next(x))}catch(S){e(S)}},d=x=>{try{y(P.throw(x))}catch(S){e(S)}},y=x=>x.done?T(x.value):Promise.resolve(x.value).then(a,d);y((P=P.apply(g,m)).next())});const t=({prefix:g,version:m})=>(0,b.request)(`${g}/deleteDoc/${m}`,{method:"DELETE"}),r=g=>u(void 0,null,function*(){try{return yield(0,b.request)(`/${n.Z}/getInfos`,{method:"GET"})}catch(m){return g({type:"warning",message:{id:"notification.error"}}),null}}),o=({prefix:g,version:m})=>(0,b.request)(`${g}/regenerateDoc`,{method:"POST",body:{version:m}}),c=({prefix:g,body:m})=>(0,b.request)(`${g}/updateSettings`,{method:"PUT",body:m});var s=f(35326);const p=()=>{const g=(0,l.useQueryClient)(),m=(0,b.useNotification)(),{isLoading:P,data:T}=(0,l.useQuery)("get-documentation",()=>r(m)),e=S=>{m({type:"warning",message:S.response.payload.message})},a=(S,R)=>{g.invalidateQueries("get-documentation"),m({type:S,message:{id:(0,s.Z)(R)}})},d=(0,l.useMutation)(t,{onSuccess:()=>a("info","notification.delete.success"),onError:S=>e(S)}),y=(0,l.useMutation)(c,{onSuccess:()=>a("success","notification.update.success"),onError:e}),x=(0,l.useMutation)(o,{onSuccess:()=>a("info","notification.generate.success"),onError:S=>e(S)});return{data:T,isLoading:P,deleteMutation:d,submitMutation:y,regenerateDocMutation:x}}},35326:(j,M,f)=>{"use strict";f.d(M,{Z:()=>n});var l=f(52809);const n=u=>`${l.Z}.${u}`},10104:(j,M,f)=>{"use strict";f.d(M,{O:()=>l.Z});var l=f(35326)}}]);
