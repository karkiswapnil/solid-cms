(self.webpackChunksolid_cms=self.webpackChunksolid_cms||[]).push([[8503],{80117:(M,T,c)=>{"use strict";M.exports=c(41706)},41706:function(M,T,c){(function(p,S){M.exports=S(c(53547),c(78384))})(this,function(p,S){return function(n){var l={};function t(s){if(l[s])return l[s].exports;var a=l[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=n,t.c=l,t.d=function(s,a,d){t.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:d})},t.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,a){if(1&a&&(s=t(s)),8&a||4&a&&typeof s=="object"&&s&&s.__esModule)return s;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:s}),2&a&&typeof s!="string")for(var i in s)t.d(d,i,function(o){return s[o]}.bind(null,i));return d},t.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(a,"a",a),a},t.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},t.p="",t(t.s=110)}({0:function(n,l,t){n.exports=t(19)()},1:function(n,l){n.exports=p},10:function(n,l,t){var s=t(25),a=t(26),d=t(22),i=t(27);n.exports=function(o,g){return s(o)||a(o,g)||d(o,g)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,l,t){"use strict";t.r(l),t.d(l,"Main",function(){return h}),t.d(l,"SkipToContent",function(){return B});var s,a=t(5),d=t.n(a),i=t(4),o=t.n(i),g=t(3),m=t.n(g),f=t(1),x=t.n(f),v=t(0),e=t.n(v),r=t(2),u=t.n(r),y=["labelledBy"],b=u.a.main(s||(s=m()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),h=function(E){var P=E.labelledBy,F=o()(E,y),L=P||"main-content-title";return x.a.createElement(b,d()({"aria-labelledby":L,id:"main-content",tabIndex:-1},F))};h.defaultProps={labelledBy:void 0},h.propTypes={labelledBy:e.a.string};var w,R=t(6),I=u()(R.Box)(w||(w=m()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(E){return E.theme.spaces[3]},function(E){return E.theme.spaces[3]}),B=function(E){var P=E.children;return x.a.createElement(I,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},P)};B.propTypes={children:e.a.node.isRequired}},13:function(n,l){function t(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),t(s)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,l,t){"use strict";var s=t(20);function a(){}function d(){}d.resetWarningCache=a,n.exports=function(){function i(m,f,x,v,e,r){if(r!==s){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function o(){return i}i.isRequired=i;var g={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:o,element:i,elementType:i,instanceOf:o,node:i,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:d,resetWarningCache:a};return g.PropTypes=g,g}},2:function(n,l){n.exports=S},20:function(n,l,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,l){n.exports=function(t,s){(s==null||s>t.length)&&(s=t.length);for(var a=0,d=new Array(s);a<s;a++)d[a]=t[a];return d},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,l,t){var s=t(21);n.exports=function(a,d){if(a){if(typeof a=="string")return s(a,d);var i=Object.prototype.toString.call(a).slice(8,-1);return i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set"?Array.from(a):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(a,d):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,l){n.exports=function(t,s){if(t==null)return{};var a,d,i={},o=Object.keys(t);for(d=0;d<o.length;d++)a=o[d],s.indexOf(a)>=0||(i[a]=t[a]);return i},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,l){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,l){n.exports=function(t,s){var a=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var d,i,o=[],g=!0,m=!1;try{for(a=a.call(t);!(g=(d=a.next()).done)&&(o.push(d.value),!s||o.length!==s);g=!0);}catch(f){m=!0,i=f}finally{try{g||a.return==null||a.return()}finally{if(m)throw i}}return o}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,l){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,l){n.exports=function(t,s){return s||(s=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(s)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,l,t){var s=t(24);n.exports=function(a,d){if(a==null)return{};var i,o,g=s(a,d);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(o=0;o<m.length;o++)i=m[o],d.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(a,i)&&(g[i]=a[i])}return g},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,l){function t(){return n.exports=t=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(s[i]=d[i])}return s},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,l,t){"use strict";t.r(l),t.d(l,"Box",function(){return v});var s,a=t(3),d=t.n(a),i=t(0),o=t.n(i),g=t(2),m=t.n(g),f=t(7),x={color:!0},v=m.a.div.withConfig({shouldForwardProp:function(e,r){return!x[e]&&r(e)}})(s||(s=d()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,u=e.background;return r.colors[u]},function(e){var r=e.theme,u=e.color;return r.colors[u]},function(e){var r=e.theme,u=e.padding;return Object(f.a)("padding",u,r)},function(e){var r=e.theme,u=e.paddingTop;return Object(f.a)("padding-top",u,r)},function(e){var r=e.theme,u=e.paddingRight;return Object(f.a)("padding-right",u,r)},function(e){var r=e.theme,u=e.paddingBottom;return Object(f.a)("padding-bottom",u,r)},function(e){var r=e.theme,u=e.paddingLeft;return Object(f.a)("padding-left",u,r)},function(e){var r=e.theme,u=e.marginLeft;return Object(f.a)("margin-left",u,r)},function(e){var r=e.theme,u=e.marginRight;return Object(f.a)("margin-right",u,r)},function(e){var r=e.theme,u=e.marginTop;return Object(f.a)("margin-top",u,r)},function(e){var r=e.theme,u=e.marginBottom;return Object(f.a)("margin-bottom",u,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,u=e.hasRadius,y=e.borderRadius;return u?r.borderRadius:y},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,u=e.borderColor,y=e.borderStyle,b=e.borderWidth;if(u&&!y&&!b)return"1px solid ".concat(r.colors[u])},function(e){var r=e.theme,u=e.shadow;return r.shadows[u]},function(e){return e.pointerEvents},function(e){var r=e._hover,u=e.theme;return r?r(u):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});v.displayName="Box",v.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},v.propTypes={_hover:o.a.func,background:o.a.string,basis:o.a.oneOfType([o.a.string,o.a.string]),borderColor:o.a.string,children:o.a.oneOfType([o.a.node,o.a.string]),color:o.a.string,flex:o.a.oneOfType([o.a.string,o.a.string]),grow:o.a.oneOfType([o.a.string,o.a.string]),hasRadius:o.a.bool,hiddenS:o.a.bool,hiddenXS:o.a.bool,padding:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingBottom:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingLeft:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingRight:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),paddingTop:o.a.oneOfType([o.a.number,o.a.arrayOf(o.a.number)]),shadow:o.a.string,shrink:o.a.oneOfType([o.a.string,o.a.string])}},7:function(n,l,t){"use strict";var s=t(10),a=t.n(s),d=t(13),i=t.n(d);l.a=function(o,g,m){var f=g;if(Array.isArray(g)||i()(g)!=="object"||(f=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),f!==void 0){if(Array.isArray(f)){var x=f,v=a()(x,3),e=v[0],r=v[1],u=v[2],y="".concat(o,": ").concat(m.spaces[e],";");return r!==void 0&&(y+="".concat(m.mediaQueries.tablet,`{
          `).concat(o,": ").concat(m.spaces[r],`;
        }`)),u!==void 0&&(y+="".concat(m.mediaQueries.mobile,`{
          `).concat(o,": ").concat(m.spaces[u],`;
        }`)),y}var b=m.spaces[f]||f;return"".concat(o,": ").concat(b,";")}}}})})},68539:(M,T,c)=>{"use strict";c.r(T),c.d(T,{default:()=>Z});var p=c(53547),S=c(97132),n=c(80831),l=c(76458),t=c(35395),s=c(80117),a=c(64459),d=c(94117),i=c(9524),o=c(33483),g=c(53575),m=c(99136),f=c(39272),x=c(31023),v=c.n(x),e=c(52973),r=c.n(e),u=c(22754),y=c.n(u),b=c(77904),h=c(10104),w=c(17829),R=c(78384),I=c(16572);const E=(0,R.default)(I.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:O})=>O.colors.neutral600};
    }
  }
`;var P=c(63600);const L=P.Ry().shape({restrictedAccess:P.O7(),password:P.Z_().when("restrictedAccess",(O,j)=>O?j.required(l.translatedErrors.required):j)}),Z=()=>{(0,l.useFocusWhenNavigate)();const{formatMessage:O}=(0,S.useIntl)(),{submitMutation:j,data:C,isLoading:$}=(0,w.Z)(),[D,U]=(0,p.useState)(!1),H=W=>{j.mutate({prefix:C==null?void 0:C.prefix,body:W})};return p.createElement(s.Main,null,$?p.createElement(l.LoadingIndicatorPage,null,"Plugin settings are loading"):p.createElement(n.Formik,{initialValues:{restrictedAccess:(C==null?void 0:C.documentationAccess.restrictedAccess)||!1,password:""},onSubmit:H,validationSchema:L},({handleSubmit:W,values:A,handleChange:G,errors:Q,setFieldTouched:N,setFieldValue:z})=>p.createElement(l.Form,{noValidate:!0,onSubmit:W},p.createElement(t.HeaderLayout,{title:O({id:(0,h.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:O({id:(0,h.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:p.createElement(l.CheckPermissions,{permissions:b.Z.update},p.createElement(a.Button,{type:"submit",startIcon:p.createElement(y(),null)},O({id:(0,h.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),p.createElement(t.ContentLayout,null,p.createElement(d.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},p.createElement(i.Stack,{spacing:4},p.createElement(o.Typography,{variant:"delta",as:"h2"},O({id:"global.settings",defaultMessage:"Settings"})),p.createElement(f.Grid,{gap:4},p.createElement(f.GridItem,{col:6,s:12},p.createElement(g.ToggleInput,{name:"restrictedAccess",label:O({id:(0,h.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:O({id:(0,h.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:A.restrictedAccess,onChange:()=>{A.restrictedAccess===!0&&(z("password","",!1),N("password",!1,!1)),z("restrictedAccess",!A.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),A.restrictedAccess&&p.createElement(f.GridItem,{col:6,s:12},p.createElement(m.TextInput,{label:O({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:D?"text":"password",value:A.password,onChange:G,error:Q.password?O({id:Q.password,defaultMessage:"Invalid value"}):null,endAction:p.createElement(E,{onClick:k=>{k.stopPropagation(),U(X=>!X)},label:O(D?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},D?p.createElement(v(),null):p.createElement(r(),null))})))))))))}},17829:(M,T,c)=>{"use strict";c.d(T,{Z:()=>g});var p=c(23724),S=c(76458),n=c(52809),l=(m,f,x)=>new Promise((v,e)=>{var r=b=>{try{y(x.next(b))}catch(h){e(h)}},u=b=>{try{y(x.throw(b))}catch(h){e(h)}},y=b=>b.done?v(b.value):Promise.resolve(b.value).then(r,u);y((x=x.apply(m,f)).next())});const t=({prefix:m,version:f})=>(0,S.request)(`${m}/deleteDoc/${f}`,{method:"DELETE"}),s=m=>l(void 0,null,function*(){try{return yield(0,S.request)(`/${n.Z}/getInfos`,{method:"GET"})}catch(f){return m({type:"warning",message:{id:"notification.error"}}),null}}),a=({prefix:m,version:f})=>(0,S.request)(`${m}/regenerateDoc`,{method:"POST",body:{version:f}}),d=({prefix:m,body:f})=>(0,S.request)(`${m}/updateSettings`,{method:"PUT",body:f});var i=c(35326);const g=()=>{const m=(0,p.useQueryClient)(),f=(0,S.useNotification)(),{isLoading:x,data:v}=(0,p.useQuery)("get-documentation",()=>s(f)),e=h=>{f({type:"warning",message:h.response.payload.message})},r=(h,w)=>{m.invalidateQueries("get-documentation"),f({type:h,message:{id:(0,i.Z)(w)}})},u=(0,p.useMutation)(t,{onSuccess:()=>r("info","notification.delete.success"),onError:h=>e(h)}),y=(0,p.useMutation)(d,{onSuccess:()=>r("success","notification.update.success"),onError:e}),b=(0,p.useMutation)(a,{onSuccess:()=>r("info","notification.generate.success"),onError:h=>e(h)});return{data:v,isLoading:x,deleteMutation:u,submitMutation:y,regenerateDocMutation:b}}},35326:(M,T,c)=>{"use strict";c.d(T,{Z:()=>n});var p=c(52809);const n=l=>`${p.Z}.${l}`},10104:(M,T,c)=>{"use strict";c.d(T,{O:()=>p.Z});var p=c(35326)}}]);
