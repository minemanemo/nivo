(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{NNTJ:function(e,t,r){"use strict";r.d(t,"a",(function(){return B})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return I})),r.d(t,"d",(function(){return K}));r("UKgA");var o=r("mXGw"),l=r("5QYd"),i=r("ySTC"),n=r("56Mt"),a=r("W0B4"),c=r.n(a),u=r("llhf"),d=r("CZaE"),s=r("OQCi"),b=r("g4kd"),f=r("oYCi");function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}p(p({},{data:c.a.arrayOf(c.a.object).isRequired,indexBy:c.a.oneOfType([c.a.string,c.a.func]).isRequired,keys:c.a.arrayOf(c.a.string).isRequired,minValue:c.a.oneOfType([c.a.oneOf(["auto"]),c.a.number]).isRequired,maxValue:c.a.oneOfType([c.a.oneOf(["auto"]),c.a.number]).isRequired,forceSquare:c.a.bool.isRequired,sizeVariation:c.a.number.isRequired,padding:c.a.number.isRequired,cellShape:c.a.oneOfType([c.a.oneOf(["rect","circle"]),c.a.func]).isRequired,cellOpacity:c.a.number.isRequired,cellBorderWidth:c.a.number.isRequired,cellBorderColor:u.k.isRequired,axisTop:i.d,axisRight:i.d,axisBottom:i.d,axisLeft:i.d,enableGridX:c.a.bool.isRequired,enableGridY:c.a.bool.isRequired,enableLabels:c.a.bool.isRequired,label:c.a.func.isRequired,labelTextColor:u.k.isRequired,colors:l.Z.isRequired,nanColor:c.a.string,isInteractive:c.a.bool,onClick:c.a.func.isRequired,hoverTarget:c.a.oneOf(["cell","row","column","rowColumn"]).isRequired,cellHoverOpacity:c.a.number.isRequired,cellHoverOthersOpacity:c.a.number.isRequired,tooltipFormat:c.a.oneOfType([c.a.func,c.a.string]),tooltip:c.a.func,pixelRatio:c.a.number.isRequired}),{},{role:c.a.string.isRequired});var m={indexBy:"id",minValue:"auto",maxValue:"auto",forceSquare:!1,sizeVariation:0,padding:0,cellShape:"rect",cellOpacity:.85,cellBorderWidth:0,cellBorderColor:{from:"color"},axisTop:{},axisLeft:{},enableGridX:!1,enableGridY:!1,enableLabels:!0,label:function(e,t){return e[t]},labelTextColor:{from:"color",modifiers:[["darker",1.4]]},colors:"nivo",nanColor:"#000000",isInteractive:!0,onClick:l.U,hoverTarget:"rowColumn",cellHoverOpacity:1,cellHoverOthersOpacity:.35,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1},O=p(p({},m),{},{role:"img"});function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function g(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function v(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,l=!1,i=void 0;try{for(var n,a=e[Symbol.iterator]();!(o=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==a.return||a.return()}finally{if(l)throw i}}return r}}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C={cell:function(e,t){return e.xKey===t.xKey&&e.yKey===t.yKey},row:function(e,t){return e.yKey===t.yKey},column:function(e,t){return e.xKey===t.xKey},rowColumn:function(e,t){return e.xKey===t.xKey||e.yKey===t.yKey}},w=function(e){var t=e.data,r=e.keys,i=e.indexBy,n=e.minValue,a=void 0===n?"auto":n,c=e.maxValue,b=void 0===c?"auto":c,f=e.width,h=e.height,y=e.padding,m=e.forceSquare,O=e.sizeVariation,x=e.colors,g=e.nanColor,w=e.cellOpacity,S=e.cellBorderColor,T=e.label,k=e.labelTextColor,M=e.hoverTarget,R=e.cellHoverOpacity,q=e.cellHoverOthersOpacity,L=j(Object(o.useState)(null),2),B=L[0],H=L[1],W=Object(l.rb)(i),V=Object(o.useMemo)((function(){return t.map(W)}),[t,W]),I=Object(o.useMemo)((function(){return Object(l.I)(T)}),[T]),K=Object(o.useMemo)((function(){var e=r.length,o=t.length,l=Math.max((f-y*(e+1))/e,0),i=Math.max((h-y*(o+1))/o,0),n=0,a=0;if(!0===m){var c=Math.min(l,i);n=(f-(((l=c)+y)*e+y))/2,a=(h-(((i=c)+y)*o+y))/2}return{cellWidth:l,cellHeight:i,offsetX:n,offsetY:a}}),[t,r,f,h,y,m]),A=Object(o.useMemo)((function(){return{x:Object(d.a)(r.map((function(e,t){return function(e,t,r){return e*t+.5*t+r*e+r}(t,K.cellWidth,y)}))).domain(r),y:Object(d.a)(V.map((function(e,t){return function(e,t,r){return e*t+.5*t+r*e+r}(t,K.cellHeight,y)}))).domain(V)}}),[V,r,K,y]),E=Object(o.useMemo)((function(){var e=a,o=b;if("auto"===e||"auto"===o){var l=t.reduce((function(e,t){return e.concat(r.map((function(e){return t[e]})))}),[]);"auto"===e&&(e=Math.min.apply(Math,v(l))),"auto"===o&&(o=Math.max.apply(Math,v(l)))}return{min:Math.min(e,o),max:Math.max(o,e)}}),[t,r,a,b]),P=Object(o.useMemo)((function(){if(O>0)return Object(s.a)().range([1-O,1]).domain([E.min,E.max])}),[O,E]),z=Object(o.useMemo)((function(){return Object(l.M)(x).domain([E.min,E.max])}),[x,E]),Y=Object(l.sb)(),F=Object(u.r)(S,Y),G=Object(u.r)(k,Y),X=Object(o.useMemo)((function(){return function(e){var t=e.data,r=e.keys,o=e.getIndex,l=e.xScale,i=e.yScale,n=e.sizeScale,a=e.cellOpacity,c=e.cellWidth,u=e.cellHeight,d=e.colorScale,s=e.nanColor,b=e.getLabel,f=e.getLabelTextColor,h=[];return t.forEach((function(e){r.forEach((function(t){var r=e[t],y=b(e,t),p=o(e),m=n?n(r):1,O=m*c,x=m*u,g={id:"".concat(t,".").concat(p),xKey:t,yKey:p,x:l(t),y:i(p),width:O,height:x,value:r,label:y,color:isNaN(r)?s:d(r),opacity:a};g.labelTextColor=f(g),h.push(g)}))})),h}({data:t,keys:r,getIndex:W,xScale:A.x,yScale:A.y,sizeScale:P,cellOpacity:w,cellWidth:K.cellWidth,cellHeight:K.cellHeight,colorScale:z,nanColor:g,getLabel:I,getLabelTextColor:G})}),[t,r,W,A,P,w,K,z,g,I,G]),N=Object(o.useMemo)((function(){if(null===B)return X;var e=C[M],t=X.find((function(e){return e.id===B}));return X.map((function(r){var o=e(r,t)?R:q;return o===r.opacity?r:p(p({},r),{},{opacity:o})}))}),[X,B,M,R,q]);return p(p({cells:N,getIndex:W,xScale:A.x,yScale:A.y},K),{},{sizeScale:P,currentCellId:B,setCurrentCellId:H,colorScale:z,getCellBorderColor:F,getLabelTextColor:G})},S=function(e){var t=e.cells,r=e.cellComponent,l=e.cellBorderWidth,i=e.getCellBorderColor,n=e.enableLabels,a=e.getLabelTextColor,c=e.handleCellHover,u=e.handleCellLeave,d=e.onClick;return t.map((function(e){return Object(o.createElement)(r,{key:e.id,data:e,label:e.label,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:e.opacity,borderWidth:l,borderColor:i(e),enableLabel:n,textColor:a(e),onHover:c?function(t){return c(e,t)}:void 0,onLeave:u,onClick:d})}))};S.propTypes={};var T=function(e){var t=e.data,r=e.label,o=e.x,i=e.y,n=e.width,a=e.height,c=e.color,u=e.opacity,d=e.borderWidth,s=e.borderColor,h=e.enableLabel,y=e.textColor,m=e.onHover,O=e.onLeave,x=e.onClick,g=Object(l.sb)(),v=Object(l.qb)(),j=v.animate,C=v.config,w=Object(b.useSpring)({transform:"translate(".concat(o,", ").concat(i,")"),width:n,height:a,xOffset:-.5*n,yOffset:-.5*a,color:c,opacity:u,textColor:y,borderWidth:d,borderColor:s,config:C,immediate:!j});return Object(f.jsxs)(b.animated.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:m,onMouseMove:m,onMouseLeave:O,onClick:x?function(e){return x(t,e)}:void 0,children:[Object(f.jsx)(b.animated.rect,{x:w.xOffset,y:w.yOffset,width:w.width,height:w.height,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),h&&Object(f.jsx)(b.animated.text,{dominantBaseline:"central",textAnchor:"middle",style:p(p({},g.labels.text),{},{fill:w.textColor}),fillOpacity:w.opacity,children:r})]})},k=Object(o.memo)(T),M=function(e){var t=e.data,r=e.label,o=e.x,i=e.y,n=e.width,a=e.height,c=e.color,u=e.opacity,d=e.borderWidth,s=e.borderColor,h=e.enableLabel,y=e.textColor,m=e.onHover,O=e.onLeave,x=e.onClick,g=Object(l.sb)(),v=Object(l.qb)(),j=v.animate,C=v.config,w=Object(b.useSpring)({transform:"translate(".concat(o,", ").concat(i,")"),radius:Math.min(n,a)/2,color:c,opacity:u,textColor:y,borderWidth:d,borderColor:s,config:C,immediate:!j});return Object(f.jsxs)(b.animated.g,{transform:w.transform,style:{cursor:"pointer"},onMouseEnter:m,onMouseMove:m,onMouseLeave:O,onClick:x?function(e){return x(t,e)}:void 0,children:[Object(f.jsx)(b.animated.circle,{r:w.radius,fill:w.color,fillOpacity:w.opacity,strokeWidth:w.borderWidth,stroke:w.borderColor,strokeOpacity:w.opacity}),h&&Object(f.jsx)(b.animated.text,{dominantBaseline:"central",textAnchor:"middle",style:p(p({},g.labels.text),{},{fill:w.textColor}),fillOpacity:w.opacity,children:r})]})},R=Object(o.memo)(M),q=function(e){var t=e.cell,r=e.format,o=e.tooltip;return Object(f.jsx)(n.a,{id:"".concat(t.yKey," - ").concat(t.xKey),value:t.value,enableChip:!0,color:t.color,format:r,renderContent:"function"==typeof o?o.bind(null,p({},t)):null})},L=Object(o.memo)(q),B=Object(l.ub)((function(e){var t,r=e.data,a=e.keys,c=e.indexBy,u=e.minValue,d=e.maxValue,s=e.width,b=e.height,h=e.margin,y=e.forceSquare,p=e.padding,m=e.sizeVariation,O=e.cellShape,x=e.cellOpacity,g=e.cellBorderWidth,v=e.cellBorderColor,j=e.axisTop,C=e.axisRight,T=e.axisBottom,M=e.axisLeft,q=e.enableGridX,B=e.enableGridY,H=e.enableLabels,W=e.label,V=e.labelTextColor,I=e.colors,K=e.nanColor,A=e.isInteractive,E=e.onClick,P=e.hoverTarget,z=e.cellHoverOpacity,Y=e.cellHoverOthersOpacity,F=e.tooltipFormat,G=e.tooltip,X=e.role,N=Object(l.ob)(s,b,h),D=N.margin,J=N.innerWidth,U=N.innerHeight,Q=N.outerWidth,Z=N.outerHeight,$=w({data:r,keys:a,indexBy:c,minValue:u,maxValue:d,width:J,height:U,padding:p,forceSquare:y,sizeVariation:m,colors:I,nanColor:K,cellOpacity:x,cellBorderColor:v,label:W,labelTextColor:V,hoverTarget:P,cellHoverOpacity:z,cellHoverOthersOpacity:Y}),_=$.cells,ee=$.xScale,te=$.yScale,re=$.offsetX,oe=$.offsetY,le=$.setCurrentCellId,ie=$.getCellBorderColor,ne=$.getLabelTextColor,ae=Object(n.i)(),ce=ae.showTooltipFromEvent,ue=ae.hideTooltip,de=Object(o.useCallback)((function(e,t){le(e.id),ce(Object(f.jsx)(L,{cell:e,format:F,tooltip:G}),t)}),[le,ce,F,G]),se=Object(o.useCallback)((function(){le(null),ue()}),[le,ue]);return t="rect"===O?k:"circle"===O?R:O,Object(f.jsxs)(l.l,{width:Q,height:Z,margin:Object.assign({},D,{top:D.top+oe,left:D.left+re}),role:X,children:[Object(f.jsx)(i.c,{width:J-2*re,height:U-2*oe,xScale:q?ee:null,yScale:B?te:null}),Object(f.jsx)(i.a,{xScale:ee,yScale:te,width:J-2*re,height:U-2*oe,top:j,right:C,bottom:T,left:M}),Object(f.jsx)(S,{cells:_,cellComponent:t,cellBorderWidth:g,getCellBorderColor:ie,enableLabels:H,getLabelTextColor:ne,handleCellHover:A?de:void 0,handleCellLeave:A?se:void 0,onClick:A?E:void 0})]})}));B.defaultProps=O;var H=function(e,t,r){var o=t.enableLabels,l=t.theme,i=r.x,n=r.y,a=r.width,c=r.height,u=r.color,d=r.opacity,s=r.labelTextColor,b=r.label;e.save(),e.globalAlpha=d,e.fillStyle=u,e.fillRect(i-a/2,n-c/2,a,c),!0===o&&(e.fillStyle=s,e.font="".concat(l.labels.text.fontSize,"px ").concat(l.labels.text.fontFamily),e.fillText(b,i,n)),e.restore()},W=function(e,t,r){var o=t.enableLabels,l=t.theme,i=r.x,n=r.y,a=r.width,c=r.height,u=r.color,d=r.opacity,s=r.labelTextColor,b=r.label;e.save(),e.globalAlpha=d;var f=Math.min(a,c)/2;e.fillStyle=u,e.beginPath(),e.arc(i,n,f,0,2*Math.PI),e.fill(),!0===o&&(e.fillStyle=s,e.font="".concat(l.labels.text.fontSize,"px ").concat(l.labels.text.fontFamily),e.fillText(b,i,n)),e.restore()},V=Object(l.ub)((function(e){var t=e.data,r=e.keys,a=e.indexBy,c=e.minValue,u=e.maxValue,d=e.width,s=e.height,b=e.margin,h=e.forceSquare,y=e.padding,p=e.sizeVariation,m=e.cellShape,O=e.cellOpacity,x=e.cellBorderColor,g=e.axisTop,v=e.axisRight,C=e.axisBottom,S=e.axisLeft,T=e.enableLabels,k=e.label,M=e.labelTextColor,R=e.colors,q=e.nanColor,B=e.isInteractive,V=e.onClick,I=e.hoverTarget,K=e.cellHoverOpacity,A=e.cellHoverOthersOpacity,E=e.tooltipFormat,P=e.tooltip,z=e.pixelRatio,Y=Object(o.useRef)(null),F=Object(l.ob)(d,s,b),G=F.margin,X=F.innerWidth,N=F.innerHeight,D=F.outerWidth,J=F.outerHeight,U=w({data:t,keys:r,indexBy:a,minValue:c,maxValue:u,width:X,height:N,padding:y,forceSquare:h,sizeVariation:p,colors:R,nanColor:q,cellOpacity:O,cellBorderColor:x,label:k,labelTextColor:M,hoverTarget:I,cellHoverOpacity:K,cellHoverOthersOpacity:A}),Q=U.cells,Z=U.xScale,$=U.yScale,_=U.offsetX,ee=U.offsetY,te=U.currentCellId,re=U.setCurrentCellId,oe=Object(l.sb)();Object(o.useEffect)((function(){Y.current.width=D*z,Y.current.height=J*z;var e,t=Y.current.getContext("2d");t.scale(z,z),t.fillStyle=oe.background,t.fillRect(0,0,D,J),t.translate(G.left+_,G.top+ee),Object(i.e)(t,{xScale:Z,yScale:$,width:X-2*_,height:N-2*ee,top:g,right:v,bottom:C,left:S,theme:oe}),t.textAlign="center",t.textBaseline="middle",e="rect"===m?H:W,Q.forEach((function(r){e(t,{enableLabels:T,theme:oe},r)}))}),[Y,Q,D,J,X,N,G,_,ee,m,g,v,C,S,Z,$,oe,T,z]);var le=Object(n.i)(),ie=le.showTooltipFromEvent,ne=le.hideTooltip,ae=Object(o.useCallback)((function(e){var t=j(Object(l.L)(Y.current,e),2),r=t[0],o=t[1],i=Q.find((function(e){return Object(l.N)(e.x+G.left+_-e.width/2,e.y+G.top+ee-e.height/2,e.width,e.height,r,o)}));void 0!==i?(re(i.id),ie(Object(f.jsx)(L,{cell:i,tooltip:P,format:E}),e)):(re(null),ne())}),[Y,Q,G,_,ee,re,ie,ne,P,E]),ce=Object(o.useCallback)((function(){re(null),ne()}),[re,ne]),ue=Object(o.useCallback)((function(e){if(null!==te){var t=Q.find((function(e){return e.id===te}));t&&V(t,e)}}),[Q,te,V]);return Object(f.jsx)("canvas",{ref:Y,width:D*z,height:J*z,style:{width:D,height:J},onMouseEnter:B?ae:void 0,onMouseMove:B?ae:void 0,onMouseLeave:B?ce:void 0,onClick:B?ue:void 0})}));V.defaultProps=m;var I=function(e){return Object(f.jsx)(l.k,{children:function(t){var r=t.width,o=t.height;return Object(f.jsx)(B,p({width:r,height:o},e))}})},K=function(e){return Object(f.jsx)(l.k,{children:function(t){var r=t.width,o=t.height;return Object(f.jsx)(V,p({width:r,height:o},e))}})}}}]);
//# sourceMappingURL=288594faa4f4df84db7f04ec3315d48a3b666501-944fdbe46163ed443556.js.map