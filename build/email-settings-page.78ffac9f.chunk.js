(self.webpackChunksolid_cms=self.webpackChunksolid_cms||[]).push([[1495],{80117:(Z,L,p)=>{"use strict";Z.exports=p(41706)},41706:function(Z,L,p){(function(u,O){Z.exports=O(p(53547),p(78384))})(this,function(u,O){return function(r){var l={};function t(n){if(l[n])return l[n].exports;var o=l[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=l,t.d=function(n,o,c){t.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:c})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,o){if(1&o&&(n=t(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var s in n)t.d(c,s,function(a){return n[a]}.bind(null,s));return c},t.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},t.p="",t(t.s=110)}({0:function(r,l,t){r.exports=t(19)()},1:function(r,l){r.exports=u},10:function(r,l,t){var n=t(25),o=t(26),c=t(22),s=t(27);r.exports=function(a,m){return n(a)||o(a,m)||c(a,m)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},110:function(r,l,t){"use strict";t.r(l),t.d(l,"Main",function(){return k}),t.d(l,"SkipToContent",function(){return W});var n,o=t(5),c=t.n(o),s=t(4),a=t.n(s),m=t(3),y=t.n(m),v=t(1),C=t.n(v),T=t(0),e=t.n(T),i=t(2),d=t.n(i),j=["labelledBy"],g=d.a.main(n||(n=y()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),k=function(P){var z=P.labelledBy,N=a()(P,j),V=z||"main-content-title";return C.a.createElement(g,c()({"aria-labelledby":V,id:"main-content",tabIndex:-1},N))};k.defaultProps={labelledBy:void 0},k.propTypes={labelledBy:e.a.string};var F,G=t(6),H=d()(G.Box)(F||(F=y()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(P){return P.theme.spaces[3]},function(P){return P.theme.spaces[3]}),W=function(P){var z=P.children;return C.a.createElement(H,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},z)};W.propTypes={children:e.a.node.isRequired}},13:function(r,l){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=t=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),t(n)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,l,t){"use strict";var n=t(20);function o(){}function c(){}c.resetWarningCache=o,r.exports=function(){function s(y,v,C,T,e,i){if(i!==n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function a(){return s}s.isRequired=s;var m={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:a,element:s,elementType:s,instanceOf:a,node:s,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:c,resetWarningCache:o};return m.PropTypes=m,m}},2:function(r,l){r.exports=O},20:function(r,l,t){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,l){r.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,c=new Array(n);o<n;o++)c[o]=t[o];return c},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,l,t){var n=t(21);r.exports=function(o,c){if(o){if(typeof o=="string")return n(o,c);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(o,c):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,l){r.exports=function(t,n){if(t==null)return{};var o,c,s={},a=Object.keys(t);for(c=0;c<a.length;c++)o=a[c],n.indexOf(o)>=0||(s[o]=t[o]);return s},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,l){r.exports=function(t){if(Array.isArray(t))return t},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,l){r.exports=function(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,s,a=[],m=!0,y=!1;try{for(o=o.call(t);!(m=(c=o.next()).done)&&(a.push(c.value),!n||a.length!==n);m=!0);}catch(v){y=!0,s=v}finally{try{m||o.return==null||o.return()}finally{if(y)throw s}}return a}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,l){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,l){r.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,l,t){var n=t(24);r.exports=function(o,c){if(o==null)return{};var s,a,m=n(o,c);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(o);for(a=0;a<y.length;a++)s=y[a],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(o,s)&&(m[s]=o[s])}return m},r.exports.default=r.exports,r.exports.__esModule=!0},5:function(r,l){function t(){return r.exports=t=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(n[s]=c[s])}return n},r.exports.default=r.exports,r.exports.__esModule=!0,t.apply(this,arguments)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,l,t){"use strict";t.r(l),t.d(l,"Box",function(){return T});var n,o=t(3),c=t.n(o),s=t(0),a=t.n(s),m=t(2),y=t.n(m),v=t(7),C={color:!0},T=y.a.div.withConfig({shouldForwardProp:function(e,i){return!C[e]&&i(e)}})(n||(n=c()([`
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
`])),function(e){var i=e.fontSize;return e.theme.fontSizes[i]||i},function(e){var i=e.theme,d=e.background;return i.colors[d]},function(e){var i=e.theme,d=e.color;return i.colors[d]},function(e){var i=e.theme,d=e.padding;return Object(v.a)("padding",d,i)},function(e){var i=e.theme,d=e.paddingTop;return Object(v.a)("padding-top",d,i)},function(e){var i=e.theme,d=e.paddingRight;return Object(v.a)("padding-right",d,i)},function(e){var i=e.theme,d=e.paddingBottom;return Object(v.a)("padding-bottom",d,i)},function(e){var i=e.theme,d=e.paddingLeft;return Object(v.a)("padding-left",d,i)},function(e){var i=e.theme,d=e.marginLeft;return Object(v.a)("margin-left",d,i)},function(e){var i=e.theme,d=e.marginRight;return Object(v.a)("margin-right",d,i)},function(e){var i=e.theme,d=e.marginTop;return Object(v.a)("margin-top",d,i)},function(e){var i=e.theme,d=e.marginBottom;return Object(v.a)("margin-bottom",d,i)},function(e){var i=e.theme;return e.hiddenS?"".concat(i.mediaQueries.tablet," { display: none; }"):void 0},function(e){var i=e.theme;return e.hiddenXS?"".concat(i.mediaQueries.mobile," { display: none; }"):void 0},function(e){var i=e.theme,d=e.hasRadius,j=e.borderRadius;return d?i.borderRadius:j},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var i=e.borderColor;return e.theme.colors[i]},function(e){var i=e.theme,d=e.borderColor,j=e.borderStyle,g=e.borderWidth;if(d&&!j&&!g)return"1px solid ".concat(i.colors[d])},function(e){var i=e.theme,d=e.shadow;return i.shadows[d]},function(e){return e.pointerEvents},function(e){var i=e._hover,d=e.theme;return i?i(d):void 0},function(e){return e.display},function(e){return e.position},function(e){var i=e.left;return e.theme.spaces[i]||i},function(e){var i=e.right;return e.theme.spaces[i]||i},function(e){var i=e.top;return e.theme.spaces[i]||i},function(e){var i=e.bottom;return e.theme.spaces[i]||i},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var i=e.width;return e.theme.spaces[i]||i},function(e){var i=e.maxWidth;return e.theme.spaces[i]||i},function(e){var i=e.minWidth;return e.theme.spaces[i]||i},function(e){var i=e.height;return e.theme.spaces[i]||i},function(e){var i=e.maxHeight;return e.theme.spaces[i]||i},function(e){var i=e.minHeight;return e.theme.spaces[i]||i},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});T.displayName="Box",T.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},T.propTypes={_hover:a.a.func,background:a.a.string,basis:a.a.oneOfType([a.a.string,a.a.string]),borderColor:a.a.string,children:a.a.oneOfType([a.a.node,a.a.string]),color:a.a.string,flex:a.a.oneOfType([a.a.string,a.a.string]),grow:a.a.oneOfType([a.a.string,a.a.string]),hasRadius:a.a.bool,hiddenS:a.a.bool,hiddenXS:a.a.bool,padding:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingBottom:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingLeft:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingRight:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),paddingTop:a.a.oneOfType([a.a.number,a.a.arrayOf(a.a.number)]),shadow:a.a.string,shrink:a.a.oneOfType([a.a.string,a.a.string])}},7:function(r,l,t){"use strict";var n=t(10),o=t.n(n),c=t(13),s=t.n(c);l.a=function(a,m,y){var v=m;if(Array.isArray(m)||s()(m)!=="object"||(v=[m==null?void 0:m.desktop,m==null?void 0:m.tablet,m==null?void 0:m.mobile]),v!==void 0){if(Array.isArray(v)){var C=v,T=o()(C,3),e=T[0],i=T[1],d=T[2],j="".concat(a,": ").concat(y.spaces[e],";");return i!==void 0&&(j+="".concat(y.mediaQueries.tablet,`{
          `).concat(a,": ").concat(y.spaces[i],`;
        }`)),d!==void 0&&(j+="".concat(y.mediaQueries.mobile,`{
          `).concat(a,": ").concat(y.spaces[d],`;
        }`)),j}var g=y.spaces[v]||v;return"".concat(a,": ").concat(g,";")}}}})})},14319:function(Z,L,p){(function(u,O){Z.exports=O(p(53547))})(this,function(u){return function(O){var r={};function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return O[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}return l.m=O,l.c=r,l.d=function(t,n,o){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},l.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var c in t)l.d(o,c,function(s){return t[s]}.bind(null,c));return o},l.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="",l(l.s=67)}({0:function(O,r){O.exports=u},67:function(O,r,l){"use strict";l.r(r);var t=l(0);function n(){return(n=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(o[a]=s[a])}return o}).apply(this,arguments)}r.default=function(o){return t.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),t.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),t.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),t.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},4508:(Z,L,p)=>{"use strict";p.r(L),p.d(L,{default:()=>ie});var u=p(53547),O=p(97132),r=p(96486),l=p(68547),t=p(80117),n=p(35395),o=p(9524),c=p(94117),s=p(39272),a=p(33483),m=p(99136),y=p(64459),v=p(67422),C=p(14319),T=p.n(C),e=p(45697),i=p.n(e),d=p(78384),j=p(2632),g=p(26434);const k=d.default.a`
  color: ${({theme:f})=>f.colors.primary600};
`,F=({config:f})=>{const{formatMessage:b}=(0,O.useIntl)();return u.createElement(o.Stack,{spacing:4},u.createElement(o.Stack,{spacing:1},u.createElement(a.Typography,{variant:"delta",as:"h2"},b({id:(0,g.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),u.createElement(a.Typography,null,b({id:(0,g.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:u.createElement(k,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},"link")}))),u.createElement(s.Grid,{gap:5},u.createElement(s.GridItem,{col:6,s:12},u.createElement(m.TextInput,{name:"shipper-email",label:b({id:(0,g.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:b({id:(0,g.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply <no-reply@strapi.io>"}),disabled:!0,onChange:()=>{},value:f.settings.defaultFrom})),u.createElement(s.GridItem,{col:6,s:12},u.createElement(m.TextInput,{name:"response-email",label:b({id:(0,g.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:b({id:(0,g.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi <example@strapi.io>"}),disabled:!0,onChange:()=>{},value:f.settings.defaultReplyTo})),u.createElement(s.GridItem,{col:6,s:12},u.createElement(j.Select,{name:"email-provider",label:b({id:(0,g.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:f.provider},u.createElement(j.Option,{value:f.provider},f.provider)))))};F.propTypes={config:i().shape({provider:i().string,settings:i().shape({defaultFrom:i().string,defaultReplyTo:i().string})}).isRequired};const G=F;var H=p(63600);const P=H.Ry().shape({email:H.Z_().email(l.translatedErrors.email).required(l.translatedErrors.required)});var z=p(48763),N=p(9669),V=p.n(N),ee=(f,b,x)=>new Promise((S,w)=>{var I=h=>{try{E(x.next(h))}catch(M){w(M)}},R=h=>{try{E(x.throw(h))}catch(M){w(M)}},E=h=>h.done?S(h.value):Promise.resolve(h.value).then(I,R);E((x=x.apply(f,b)).next())});const Q=V().create({baseURL:""});Q.interceptors.request.use(f=>ee(void 0,null,function*(){return f.headers={Authorization:`Bearer ${l.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},f}),f=>{Promise.reject(f)}),Q.interceptors.response.use(f=>f,f=>{var b;throw((b=f.response)==null?void 0:b.status)===401&&(l.auth.clearAppStorage(),window.location.reload()),f});const U=Q;var $=(f,b,x)=>new Promise((S,w)=>{var I=h=>{try{E(x.next(h))}catch(M){w(M)}},R=h=>{try{E(x.throw(h))}catch(M){w(M)}},E=h=>h.done?S(h.value):Promise.resolve(h.value).then(I,R);E((x=x.apply(f,b)).next())});const te=()=>$(void 0,null,function*(){const{data:f}=yield U.get("/email/settings");return f.config}),ne=f=>$(void 0,null,function*(){yield U.post("/email/test",f)}),X=()=>{const{formatMessage:f}=(0,O.useIntl)();return u.createElement(u.Fragment,null,u.createElement(l.SettingsPageTitle,{name:f({id:(0,g.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),u.createElement(n.HeaderLayout,{id:"title",title:f({id:(0,g.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:f({id:(0,g.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))};var re=(f,b,x)=>new Promise((S,w)=>{var I=h=>{try{E(x.next(h))}catch(M){w(M)}},R=h=>{try{E(x.throw(h))}catch(M){w(M)}},E=h=>h.done?S(h.value):Promise.resolve(h.value).then(I,R);E((x=x.apply(f,b)).next())});const oe=()=>u.createElement(l.CheckPagePermissions,{permissions:z.Z.settings},u.createElement(ae,null)),ae=()=>{var f,b;const x=(0,l.useNotification)(),{formatMessage:S}=(0,O.useIntl)(),{lockApp:w,unlockApp:I}=(0,l.useOverlayBlocker)(),{notifyStatus:R}=(0,v.useNotifyAT)();(0,l.useFocusWhenNavigate)();const[E,h]=(0,u.useState)({}),[M,Y]=(0,u.useState)(!1),[J,K]=(0,u.useState)(!1),[A,q]=(0,u.useState)(""),[se,_]=(0,u.useState)(!1),[le,ue]=(0,u.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,u.useEffect)(()=>{Y(!0),te().then(B=>{R(S({id:(0,g.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ue(B);const D=(0,r.get)(B,"settings.testAddress");D&&q(D)}).catch(()=>x({type:"warning",message:S({id:(0,g.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>Y(!1))},[S,x,R]),(0,u.useEffect)(()=>{E.email&&document.querySelector("#test-address-input").focus()},[E]),(0,u.useEffect)(()=>{P.validate({email:A},{abortEarly:!1}).then(()=>_(!0)).catch(()=>_(!1))},[A]);const ce=B=>{q(()=>B.target.value)},de=B=>re(void 0,null,function*(){B.preventDefault();try{yield P.validate({email:A},{abortEarly:!1}),K(!0),w(),ne({to:A}).then(()=>{x({type:"success",message:S({id:(0,g.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:A})})}).catch(()=>{x({type:"warning",message:S({id:(0,g.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:A})})}).finally(()=>{K(!1),I()})}catch(D){h((0,l.getYupInnerErrors)(D))}});return M?u.createElement(t.Main,{labelledBy:"title","aria-busy":"true"},u.createElement(X,null),u.createElement(n.ContentLayout,null,u.createElement(l.LoadingIndicatorPage,null))):u.createElement(t.Main,{labelledBy:"title","aria-busy":J},u.createElement(X,null),u.createElement(n.ContentLayout,null,u.createElement("form",{onSubmit:de},u.createElement(o.Stack,{spacing:7},u.createElement(c.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},u.createElement(G,{config:le})),u.createElement(c.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},u.createElement(o.Stack,{spacing:4},u.createElement(a.Typography,{variant:"delta",as:"h2"},S({id:(0,g.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),u.createElement(s.Grid,{gap:5,alignItems:"end"},u.createElement(s.GridItem,{col:6,s:12},u.createElement(m.TextInput,{id:"test-address-input",name:"test-address",onChange:ce,label:S({id:(0,g.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:A,error:((f=E.email)==null?void 0:f.id)&&S({id:(0,g.Z)(`${(b=E.email)==null?void 0:b.id}`),defaultMessage:"This is an invalid email"}),placeholder:S({id:(0,g.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),u.createElement(s.GridItem,{col:7,s:12},u.createElement(y.Button,{loading:J,disabled:!se,type:"submit",startIcon:u.createElement(T(),null)},S({id:(0,g.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},ie=oe}}]);
