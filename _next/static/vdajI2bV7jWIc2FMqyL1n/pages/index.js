(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2wwy":function(e,t,n){e.exports=n("nhzr")},"6DQo":function(e,t,n){"use strict";e.exports=function(){}},BGzO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n("q1tI")),a=n("TOwV"),o=s(n("pvIh"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(function(e,t,n,o,s){var l=e[t];return r.default.isValidElement(l)?new Error("Invalid "+o+" `"+s+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,a.isValidElementType)(l)?null:new Error("Invalid "+o+" `"+s+"` of value `"+l+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")}),e.exports=t.default},E8gZ:function(e,t,n){var r=n("jmDH"),a=n("w6GO"),o=n("NsO/"),s=n("NV0k").f;e.exports=function(e){return function(t){for(var n,l=o(t),i=a(l),c=i.length,u=0,p=[];c>u;)n=i[u++],r&&!s.call(l,n)||p.push(e?[n,l[n]]:l[n]);return p}}},"LR/J":function(e,t,n){e.exports=n("tgZa")},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,s,l){if(!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,s,l],u=0;(i=new Error(t.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),s=n("a7VT"),l=n("Tit0"),i=n("q1tI"),c=n.n(i),u=n("2wwy"),p=n.n(u),f=n("UXZV"),m=n.n(f);function d(){return(d=m.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=n("pLtp"),v=n.n(h);function y(e,t){if(null==e)return{};var n,r,a={},o=v()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var b=n("SqZg"),E=n.n(b);function g(e,t){e.prototype=E()(t.prototype),e.prototype.constructor=e,e.__proto__=t}var C=n("TSYQ"),S=n.n(C),N=n("17x9"),w=n.n(N),k=n("LR/J"),O=n.n(k),x=n("QLaP"),T=n.n(x),j="large",P="small",I="xsmall",_={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"},R=["lg","md","sm","xs"],D={SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"},M="default",A="primary",L="link";function z(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return"function"===typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function $(e,t){var n=(e.bsClass||"").trim();return null==n&&T()(!1),n+(t?"-"+t:"")}var V=z(function(e,t){var n=t.propTypes||(t.propTypes={}),r=t.defaultProps||(t.defaultProps={});return n.bsClass=w.a.string,r.bsClass=e,t}),F=z(function(e,t,n){"string"!==typeof t&&(n=t,t=void 0);var r=n.STYLES||[],a=n.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var o=w.a.oneOf(r);(n.STYLES=r,o._values=r,n.propTypes=d({},a,{bsStyle:o}),void 0!==t)&&((n.defaultProps||(n.defaultProps={})).bsStyle=t);return n}),q=z(function(e,t,n){"string"!==typeof t&&(n=t,t=void 0);var r=n.SIZES||[],a=n.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var o=[];r.forEach(function(e){var t=_[e];t&&t!==e&&o.push(t),o.push(e)});var s=w.a.oneOf(o);return s._values=o,n.SIZES=r,n.propTypes=d({},a,{bsSize:s}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n});function G(e){var t,n=((t={})[$(e)]=!0,t);e.bsSize&&(n[$(e,_[e.bsSize]||e.bsSize)]=!0);return e.bsStyle&&(n[$(e,e.bsStyle)]=!0),n}function H(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function K(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function U(e){var t={};return O()(e).forEach(function(e){var n=e[0],r=e[1];K(n)||(t[n]=r)}),[H(e),t]}var Y={active:w.a.any,disabled:w.a.any,header:w.a.node,listItem:w.a.bool,onClick:w.a.func,href:w.a.string,type:w.a.string},Z=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.renderHeader=function(e,t){return c.a.isValidElement(e)?Object(i.cloneElement)(e,{className:S()(e.props.className,t)}):c.a.createElement("h4",{className:t},e)},n.render=function(){var e,t=this.props,n=t.active,r=t.disabled,a=t.className,o=t.header,s=t.listItem,l=t.children,i=U(y(t,["active","disabled","className","header","listItem","children"])),u=i[0],p=i[1],f=d({},G(u),{active:n,disabled:r});return p.href?e="a":p.onClick?(e="button",p.type=p.type||"button"):e=s?"li":"span",p.className=S()(a,f),o?c.a.createElement(e,p,this.renderHeader(o,$(u,"heading")),c.a.createElement("p",{className:$(u,"text")},l)):c.a.createElement(e,p,l)},t}(c.a.Component);Z.propTypes=Y,Z.defaultProps={listItem:!1};var W=V("list-group-item",F(p()(D),Z)),B=n("BGzO"),J=n.n(B),Q={componentClass:J.a},X=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=U(y(e,["componentClass","className"])),a=r[0],o=r[1],s=G(a);return c.a.createElement(t,d({},o,{className:S()(n,s)}))},t}(c.a.Component);X.propTypes=Q,X.defaultProps={componentClass:"div"};var ee=V("jumbotron",X),te={componentClass:J.a},ne=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=U(y(e,["componentClass","className"])),a=r[0],o=r[1],s=G(a);return c.a.createElement(t,d({},o,{className:S()(n,s)}))},t}(c.a.Component);ne.propTypes=te,ne.defaultProps={componentClass:"div"};var re=V("row",ne),ae={componentClass:J.a,xs:w.a.number,sm:w.a.number,md:w.a.number,lg:w.a.number,xsHidden:w.a.bool,smHidden:w.a.bool,mdHidden:w.a.bool,lgHidden:w.a.bool,xsOffset:w.a.number,smOffset:w.a.number,mdOffset:w.a.number,lgOffset:w.a.number,xsPush:w.a.number,smPush:w.a.number,mdPush:w.a.number,lgPush:w.a.number,xsPull:w.a.number,smPull:w.a.number,mdPull:w.a.number,lgPull:w.a.number},oe=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=U(y(e,["componentClass","className"])),a=r[0],o=r[1],s=[];return R.forEach(function(e){function t(t,n){var r=""+e+t,l=o[r];null!=l&&s.push($(a,""+e+n+"-"+l)),delete o[r]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var n=e+"Hidden";o[n]&&s.push("hidden-"+e),delete o[n]}),c.a.createElement(t,d({},o,{className:S()(n,s)}))},t}(c.a.Component);oe.propTypes=ae,oe.defaultProps={componentClass:"div"};var se=V("col",oe),le=V("well",q([j,P],function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=U(y(e,["className"])),r=n[0],a=n[1],o=G(r);return c.a.createElement("div",d({},a,{className:S()(t,o)}))},t}(c.a.Component))),ie=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.hasContent=function(e){var t=!1;return c.a.Children.forEach(e,function(e){t||(e||0===e)&&(t=!0)}),t},n.render=function(){var e=this.props,t=e.className,n=e.children,r=U(y(e,["className","children"])),a=r[0],o=r[1],s=d({},G(a),{hidden:!this.hasContent(n)});return c.a.createElement("span",d({},o,{className:S()(t,s)}),n)},t}(c.a.Component),ce=V("label",F(p()(D).concat([M,A]),M,ie)),ue={horizontal:w.a.bool,inline:w.a.bool,componentClass:J.a},pe=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.horizontal,n=e.inline,r=e.componentClass,a=e.className,o=U(y(e,["horizontal","inline","componentClass","className"])),s=o[0],l=o[1],i=[];return t&&i.push($(s,"horizontal")),n&&i.push($(s,"inline")),c.a.createElement(r,d({},l,{className:S()(a,i)}))},t}(c.a.Component);pe.propTypes=ue,pe.defaultProps={horizontal:!1,inline:!1,componentClass:"form"};var fe=V("form",pe);var me={map:function(e,t,n){var r=0;return c.a.Children.map(e,function(e){return c.a.isValidElement(e)?t.call(n,e,r++):e})},forEach:function(e,t,n){var r=0;c.a.Children.forEach(e,function(e){c.a.isValidElement(e)&&t.call(n,e,r++)})},count:function(e){var t=0;return c.a.Children.forEach(e,function(e){c.a.isValidElement(e)&&++t}),t},find:function(e,t,n){var r,a=0;return c.a.Children.forEach(e,function(e){r||c.a.isValidElement(e)&&t.call(n,e,a++)&&(r=e)}),r},filter:function(e,t,n){var r=0,a=[];return c.a.Children.forEach(e,function(e){c.a.isValidElement(e)&&t.call(n,e,r++)&&a.push(e)}),a},every:function(e,t,n){var r=0,a=!0;return c.a.Children.forEach(e,function(e){a&&c.a.isValidElement(e)&&(t.call(n,e,r++)||(a=!1))}),a},some:function(e,t,n){var r=0,a=!1;return c.a.Children.forEach(e,function(e){a||c.a.isValidElement(e)&&t.call(n,e,r++)&&(a=!0)}),a},toArray:function(e){var t=[];return c.a.Children.forEach(e,function(e){c.a.isValidElement(e)&&t.push(e)}),t}},de={controlId:w.a.string,validationState:w.a.oneOf(["success","warning","error",null])},he={$bs_formGroup:w.a.object.isRequired},ve=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},n.hasFeedback=function(e){var t=this;return me.some(e,function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)})},n.render=function(){var e=this.props,t=e.validationState,n=e.className,r=e.children,a=function(e,t){var n={};t.forEach(function(e){n[e]=!0});var r={};return O()(e).forEach(function(e){var t=e[0],a=e[1];K(t)||n[t]||(r[t]=a)}),[H(e),r]}(y(e,["validationState","className","children"]),["controlId"]),o=a[0],s=a[1],l=d({},G(o),{"has-feedback":this.hasFeedback(r)});return t&&(l["has-"+t]=!0),c.a.createElement("div",d({},s,{className:S()(n,l)}),r)},t}(c.a.Component);ve.propTypes=de,ve.childContextTypes=he;var ye=V("form-group",q([j,P],ve)),be=V("input-group-addon",function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=U(y(e,["className"])),r=n[0],a=n[1],o=G(r);return c.a.createElement("span",d({},a,{className:S()(t,o)}))},t}(c.a.Component)),Ee=V("input-group-btn",function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=U(y(e,["className"])),r=n[0],a=n[1],o=G(r);return c.a.createElement("span",d({},a,{className:S()(t,o)}))},t}(c.a.Component)),ge=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=U(y(e,["className"])),r=n[0],a=n[1],o=G(r);return c.a.createElement("span",d({},a,{className:S()(t,o)}))},t}(c.a.Component);ge.Addon=be,ge.Button=Ee;var Ce=V("input-group",q([j,P],ge)),Se=(n("6DQo"),{glyph:w.a.string.isRequired}),Ne=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,r=t.className,a=U(y(t,["glyph","className"])),o=a[0],s=a[1],l=d({},G(o),((e={})[$(o,n)]=!0,e));return c.a.createElement("span",d({},s,{className:S()(r,l)}))},t}(c.a.Component);Ne.propTypes=Se;var we=V("glyphicon",Ne),ke={$bs_formGroup:w.a.object},Oe=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},n.renderDefaultFeedback=function(e,t,n,r){var a=this.getGlyph(e&&e.validationState);return a?c.a.createElement(we,d({},r,{glyph:a,className:S()(t,n)})):null},n.render=function(){var e=this.props,t=e.className,n=e.children,r=U(y(e,["className","children"])),a=r[0],o=r[1],s=G(a);if(!n)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,s,o);var l=c.a.Children.only(n);return c.a.cloneElement(l,d({},o,{className:S()(l.props.className,t,s)}))},t}(c.a.Component);Oe.defaultProps={bsRole:"feedback"},Oe.contextTypes=ke;var xe=V("form-control-feedback",Oe),Te={componentClass:J.a},je=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=U(y(e,["componentClass","className"])),a=r[0],o=r[1],s=G(a);return c.a.createElement(t,d({},o,{className:S()(n,s)}))},t}(c.a.Component);je.propTypes=Te,je.defaultProps={componentClass:"p"};var Pe=V("form-control-static",je),Ie={componentClass:J.a,type:w.a.string,id:w.a.string,inputRef:w.a.func},_e={$bs_formGroup:w.a.object},Re=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,n=t&&t.controlId,r=this.props,a=r.componentClass,o=r.type,s=r.id,l=void 0===s?n:s,i=r.inputRef,u=r.className,p=r.bsSize,f=U(y(r,["componentClass","type","id","inputRef","className","bsSize"])),m=f[0],h=f[1];("file"!==o&&(e=G(m)),p)&&(e[$({bsClass:"input"},_[p]||p)]=!0);return c.a.createElement(a,d({},h,{type:o,id:l,ref:i,className:S()(u,e)}))},t}(c.a.Component);Re.propTypes=Ie,Re.defaultProps={componentClass:"input"},Re.contextTypes=_e,Re.Feedback=xe,Re.Static=Pe;var De=V("form-control",q([P,j],Re)),Me=n("AT/M");var Ae=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)},Le={href:w.a.string,onClick:w.a.func,onKeyDown:w.a.func,disabled:w.a.bool,role:w.a.string,tabIndex:w.a.oneOfType([w.a.number,w.a.string]),componentClass:J.a};function ze(e){return!e||"#"===e.trim()}var $e=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).handleClick=r.handleClick.bind(Object(Me.default)(Object(Me.default)(r))),r.handleKeyDown=r.handleKeyDown.bind(Object(Me.default)(Object(Me.default)(r))),r}g(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this.props,n=t.disabled,r=t.href,a=t.onClick;(n||ze(r))&&e.preventDefault(),n?e.stopPropagation():a&&a(e)},n.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},n.render=function(){var e=this.props,t=e.componentClass,n=e.disabled,r=e.onKeyDown,a=y(e,["componentClass","disabled","onKeyDown"]);return ze(a.href)&&(a.role=a.role||"button",a.href=a.href||"#"),n&&(a.tabIndex=-1,a.style=d({pointerEvents:"none"},a.style)),c.a.createElement(t,d({},a,{onClick:this.handleClick,onKeyDown:Ae(this.handleKeyDown,r)}))},t}(c.a.Component);$e.propTypes=Le,$e.defaultProps={componentClass:"a"};var Ve=$e,Fe={active:w.a.bool,disabled:w.a.bool,block:w.a.bool,onClick:w.a.func,componentClass:J.a,href:w.a.string,type:w.a.oneOf(["button","reset","submit"])},qe=function(e){function t(){return e.apply(this,arguments)||this}g(t,e);var n=t.prototype;return n.renderAnchor=function(e,t){return c.a.createElement(Ve,d({},e,{className:S()(t,e.disabled&&"disabled")}))},n.renderButton=function(e,t){var n=e.componentClass,r=y(e,["componentClass"]),a=n||"button";return c.a.createElement(a,d({},r,{type:r.type||"button",className:t}))},n.render=function(){var e,t=this.props,n=t.active,r=t.block,a=t.className,o=U(y(t,["active","block","className"])),s=o[0],l=o[1],i=d({},G(s),((e={active:n})[$(s,"block")]=r,e)),c=S()(a,i);return l.href?this.renderAnchor(l,c):this.renderButton(l,c)},t}(c.a.Component);qe.propTypes=Fe,qe.defaultProps={active:!1,block:!1,disabled:!1};var Ge=V("btn",q([j,P,I],F(p()(D).concat([M,A,L]),M,qe))),He={componentClass:J.a};var Ke=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.componentClass,r=void 0===n?function(e){return e?me.some(e,function(e){return e.type!==W||e.props.href||e.props.onClick})?"div":"ul":"div"}(t):n,a=e.className,o=U(y(e,["children","componentClass","className"])),s=o[0],l=o[1],u=G(s),p="ul"===r&&me.every(t,function(e){return e.type===W});return c.a.createElement(r,d({},l,{className:S()(a,u)}),p?me.map(t,function(e){return Object(i.cloneElement)(e,{listItem:!0})}):t)},t}(c.a.Component);Ke.propTypes=He;var Ue=V("list-group",Ke),Ye={fluid:w.a.bool,componentClass:J.a},Ze=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.fluid,n=e.componentClass,r=e.className,a=U(y(e,["fluid","componentClass","className"])),o=a[0],s=a[1],l=$(o,t&&"fluid");return c.a.createElement(n,d({},s,{className:S()(r,l)}))},t}(c.a.Component);Ze.propTypes=Ye,Ze.defaultProps={componentClass:"div",fluid:!1};var We=V("container",Ze),Be=n("m/Pd"),Je=n.n(Be),Qe=function(e){function t(){var e;return Object(r.default)(this,t),(e=Object(o.default)(this,Object(s.default)(t).call(this))).state={date:new Date},e}return Object(l.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,c.a.createElement(re,null,c.a.createElement(se,{md:12},c.a.createElement("hr",null),c.a.createElement("p",null,"\xa9 ActionHero & Delicious Hat, ",this.state.date.getFullYear()))))}}]),t}(c.a.Component),Xe=n("YFqc"),et=n.n(Xe),tt={label:w.a.string.isRequired,onClick:w.a.func},nt=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=e.label,n=e.onClick;return c.a.createElement("button",{type:"button",className:"close",onClick:n},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"),c.a.createElement("span",{className:"sr-only"},t))},t}(c.a.Component);nt.propTypes=tt,nt.defaultProps={label:"Close"};var rt=nt,at={onDismiss:w.a.func,closeLabel:w.a.string},ot=function(e){function t(){return e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e,t=this.props,n=t.onDismiss,r=t.closeLabel,a=t.className,o=t.children,s=U(y(t,["onDismiss","closeLabel","className","children"])),l=s[0],i=s[1],u=!!n,p=d({},G(l),((e={})[$(l,"dismissable")]=u,e));return c.a.createElement("div",d({},i,{role:"alert",className:S()(a,p)}),u&&c.a.createElement(rt,{onClick:n,label:r}),o)},t}(c.a.Component);ot.propTypes=at,ot.defaultProps={closeLabel:"Close alert"};var st=F(p()(D),D.INFO,V("alert",ot)),lt=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){var e=this.props.message;return e?("Please log in to continue"===e&&(e=c.a.createElement(et.a,{href:"/sign-in"},c.a.createElement("a",null,e))),c.a.createElement(re,null,c.a.createElement(se,{md:12},c.a.createElement(st,{bsStyle:"danger"}," ",e," ")))):null}}]),t}(c.a.Component),it=function(e){function t(){return Object(r.default)(this,t),Object(o.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(a.default)(t,[{key:"globalStyle",value:function(){return{fontFamily:"Open Sans"}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Je.a,null,c.a.createElement("meta",{name:"viewport",content:"width=device-width"}),c.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/bootstrap.min.css"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800",rel:"stylesheet"}),c.a.createElement("title",null,"ActionHero React Next Chat"),c.a.createElement("script",{src:"//demo.actionherojs.com/public/javascript/ActionheroWebsocketClient.min.js"})),c.a.createElement(We,{style:this.globalStyle()},c.a.createElement(re,null,c.a.createElement(se,{md:12},c.a.createElement(lt,{message:this.props.error}))),this.props.children?this.props.children:this.props.error?null:c.a.createElement("em",null,"Loading..."),c.a.createElement(Qe,null)))}}]),t}(c.a.Component);n.d(t,"default",function(){return ct});var ct=function(e){function t(){var e;return Object(r.default)(this,t),(e=Object(o.default)(this,Object(s.default)(t).call(this))).state={url:"https://demo.actionherojs.com",state:"connecting",room:"defaultRoom",id:null,messages:[],error:null,message:""},e}return Object(l.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=new ActionheroWebsocketClient({url:this.state.url});this.setState({client:t},function(){return e.connect()})}},{key:"connect",value:function(){var e=this,t=this.state.client;t.on("connected",function(){e.setState({state:"connected",id:t.id})}),t.on("disconnected",function(){e.setState({state:"disconnected"})}),t.on("error",function(t){e.setState({error:t})}),t.on("reconnect",function(){e.setState({state:"reconnect"})}),t.on("reconnecting",function(){e.setState({state:"reconnecting"})}),t.on("alert",function(e){console.warn(e)}),t.on("api",function(e){console.warn(e)}),t.on("welcome",function(t){e.appendMessage(t)}),t.on("say",function(t){e.appendMessage(t)}),t.connect(function(n,r){if(n)return e.setState({error:n});t.action("createChatRoom",{name:e.state.room},function(){t.roomAdd(e.state.room)})})}},{key:"appendMessage",value:function(e){var t=this.state.messages;t.unshift(e),this.setState({messages:t})}},{key:"formatMessage",value:function(e){var t=(new Date).getTime()+Math.random();return e.welcome?c.a.createElement(W,{key:t},c.a.createElement("strong",null,"*** ".concat(e.welcome," ***"))):c.a.createElement(W,{key:t,header:c.a.createElement("div",null,c.a.createElement("span",{style:{color:this.getColor(e.from)}},e.from)," @ ",this.formatTime(e.sentAt))},e.message)}},{key:"formatTime",value:function(e){return new Date(e).toLocaleTimeString()}},{key:"getColor",value:function(e){if(!e)return"black";for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);var r=(t>>24&255).toString(16)+(t>>16&255).toString(16)+(t>>8&255).toString(16)+(255&n).toString(16);return"#".concat(r.substring(0,6))}},{key:"handleChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"submit",value:function(e){e.preventDefault(),this.state.client.say(this.state.room,this.state.message),this.setState({message:""})}},{key:"render",value:function(){var e=this;return c.a.createElement(it,{error:this.state.error},c.a.createElement("br",null),c.a.createElement(ee,null,c.a.createElement(re,null,c.a.createElement(se,{md:4},c.a.createElement("img",{src:"//demo.actionherojs.com/public/logo/actionhero.png",style:{maxWidth:200}})),c.a.createElement(se,{md:8},c.a.createElement("h1",null,"ActionHero"),c.a.createElement("h2",null,"Testing React + Next.js + Chat"),c.a.createElement("p",null,"Learn more at ",c.a.createElement("a",{href:"https://github.com/actionhero/actionhero-react-next-chat"},"https://github.com/actionhero/actionhero-react-next-chat"))))),c.a.createElement(re,null,c.a.createElement(se,{md:4},c.a.createElement(le,null,c.a.createElement("p",null,c.a.createElement(ce,null,"State: ",this.state.state)),c.a.createElement("p",null,this.state.id?c.a.createElement(ce,{bsStyle:"primary"},"You are ",c.a.createElement("span",{style:{color:this.getColor(this.state.id)}},this.state.id)):null),c.a.createElement(fe,{onSubmit:this.submit.bind(this)},c.a.createElement(ye,{controlId:"message"},c.a.createElement(Ce,null,c.a.createElement(De,{type:"text",onChange:this.handleChange.bind(this),value:this.state.message,placeholder:"message"}),c.a.createElement(Ce.Addon,null,c.a.createElement(we,{glyph:"send"})))),c.a.createElement(ye,null,c.a.createElement(Ge,{type:"submit"},"Send"))))),c.a.createElement(se,{md:8},c.a.createElement("h2",null,"Messages"),c.a.createElement(Ue,null,this.state.messages.map(function(t){return e.formatMessage(t)})))))}}]),t}(c.a.Component)},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),o=r(n("sLSF")),s=r(n("MI3g")),l=r(n("a7VT")),i=r(n("Tit0")),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var p,f=u(n("LX0d")),m=n("CxY0"),d=c(n("q1tI")),h=(u(n("17x9")),u(n("nOHt"))),v=(n("KA3u"),n("Bu4q"));function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new f.default,E=window.IntersectionObserver;function g(){return p||(E?p=new E(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var C=function(e){function t(){var e;return(0,a.default)(this,t),(e=(0,s.default)(this,(0,l.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var s=e(a,o);return t=a,n=o,r=s,s}}(function(e,t){return{href:y(e),as:t?y(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),s=o.href,l=o.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var i=window.location.pathname;s=(0,m.resolve)(i,s),l=l?(0,m.resolve)(i,l):s,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](s,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,i.default)(t,e),(0,o.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&E&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),b.set(e,t),function(){n.unobserve(e),b.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||r),d.default.cloneElement(o,s)}}]),t}(d.Component);C.propTypes=void 0,C.defaultProps={prefetch:!0};var S=C;t.default=S},fW1p:function(e,t,n){var r=n("Y7ZC"),a=n("E8gZ")(!1);r(r.S,"Object",{values:function(e){return a(e)}})},nGDx:function(e,t,n){var r=n("Y7ZC"),a=n("E8gZ")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},nhzr:function(e,t,n){n("fW1p"),e.exports=n("WEpk").Object.values},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,s){var l=a||"<<anonymous>>",i=s||r;if(null==n[r])return t?new Error("Required "+o+" `"+i+"` was not specified in `"+l+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),p=6;p<c;p++)u[p-6]=arguments[p];return e.apply(void 0,[n,r,l,o,i].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},qT12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116;function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case p:case f:case s:case i:case l:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case c:return e;default:return t}}case v:case h:case o:return t}}}function b(e){return y(e)===f}t.typeOf=y,t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=c,t.Element=a,t.ForwardRef=m,t.Fragment=s,t.Lazy=v,t.Memo=h,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=d,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===s||e===f||e===i||e===l||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===m)},t.isAsyncMode=function(e){return b(e)||y(e)===p},t.isConcurrentMode=b,t.isContextConsumer=function(e){return y(e)===u},t.isContextProvider=function(e){return y(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return y(e)===m},t.isFragment=function(e){return y(e)===s},t.isLazy=function(e){return y(e)===v},t.isMemo=function(e){return y(e)===h},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===i},t.isStrictMode=function(e){return y(e)===l},t.isSuspense=function(e){return y(e)===d}},tgZa:function(e,t,n){n("nGDx"),e.exports=n("WEpk").Object.entries},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0]]]);