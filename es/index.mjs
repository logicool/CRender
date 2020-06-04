/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var e=function(){return(e=Object.assign||function(e){for(var r,t=1,n=arguments.length;n>t;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e}).apply(this,arguments)};function r(e,r,t,n){return new(t||(t=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var r;e.done?a(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}u((n=n.apply(e,r||[])).next())}))}function t(e,r){var t,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&a[3]>o[1])){i.label=o[1];break}if(6===o[0]&&a[1]>i.label){i.label=a[1],a=o;break}if(a&&a[2]>i.label){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=r.call(e,i)}catch(e){o=[6,e],n=0}finally{t=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function n(){for(var e=0,r=0,t=arguments.length;t>r;r++)e+=arguments[r].length;var n=Array(e),a=0;for(r=0;t>r;r++)for(var o=arguments[r],i=0,s=o.length;s>i;i++,a++)n[a]=o[i];return n}var a,o,i=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}((function(e){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r}));!function(e){e.STATIC="STATIC",e.HOVER="HOVER",e.ACTIVE="ACTIVE",e.DRAG="DRAG"}(a||(a={})),function(e){e.transparent="rgba(0,0,0,0)",e.black="#000000",e.silver="#C0C0C0",e.gray="#808080",e.white="#FFFFFF",e.maroon="#800000",e.red="#FF0000",e.purple="#800080",e.fuchsia="#FF00FF",e.green="#008000",e.lime="#00FF00",e.olive="#808000",e.yellow="#FFFF00",e.navy="#000080",e.blue="#0000FF",e.teal="#008080",e.aqua="#00FFFF",e.aliceblue="#f0f8ff",e.antiquewhite="#faebd7",e.aquamarine="#7fffd4",e.azure="#f0ffff",e.beige="#f5f5dc",e.bisque="#ffe4c4",e.blanchedalmond="#ffebcd",e.blueviolet="#8a2be2",e.brown="#a52a2a",e.burlywood="#deb887",e.cadetblue="#5f9ea0",e.chartreuse="#7fff00",e.chocolate="#d2691e",e.coral="#ff7f50",e.cornflowerblue="#6495ed",e.cornsilk="#fff8dc",e.crimson="#dc143c",e.cyan="#00ffff",e.darkblue="#00008b",e.darkcyan="#008b8b",e.darkgoldenrod="#b8860b",e.darkgray="#a9a9a9",e.darkgreen="#006400",e.darkgrey="#a9a9a9",e.darkkhaki="#bdb76b",e.darkmagenta="#8b008b",e.darkolivegreen="#556b2f",e.darkorange="#ff8c00",e.darkorchid="#9932cc",e.darkred="#8b0000",e.darksalmon="#e9967a",e.darkseagreen="#8fbc8f",e.darkslateblue="#483d8b",e.darkslategray="#2f4f4f",e.darkslategrey="#2f4f4f",e.darkturquoise="#00ced1",e.darkviolet="#9400d3",e.deeppink="#ff1493",e.deepskyblue="#00bfff",e.dimgray="#696969",e.dimgrey="#696969",e.dodgerblue="#1e90ff",e.firebrick="#b22222",e.floralwhite="#fffaf0",e.forestgreen="#228b22",e.gainsboro="#dcdcdc",e.ghostwhite="#f8f8ff",e.gold="#ffd700",e.goldenrod="#daa520",e.greenyellow="#adff2f",e.grey="#808080",e.honeydew="#f0fff0",e.hotpink="#ff69b4",e.indianred="#cd5c5c",e.indigo="#4b0082",e.ivory="#fffff0",e.khaki="#f0e68c",e.lavender="#e6e6fa",e.lavenderblush="#fff0f5",e.lawngreen="#7cfc00",e.lemonchiffon="#fffacd",e.lightblue="#add8e6",e.lightcoral="#f08080",e.lightcyan="#e0ffff",e.lightgoldenrodyellow="#fafad2",e.lightgray="#d3d3d3",e.lightgreen="#90ee90",e.lightgrey="#d3d3d3",e.lightpink="#ffb6c1",e.lightsalmon="#ffa07a",e.lightseagreen="#20b2aa",e.lightskyblue="#87cefa",e.lightslategray="#778899",e.lightslategrey="#778899",e.lightsteelblue="#b0c4de",e.lightyellow="#ffffe0",e.limegreen="#32cd32",e.linen="#faf0e6",e.magenta="#ff00ff",e.mediumaquamarine="#66cdaa",e.mediumblue="#0000cd",e.mediumorchid="#ba55d3",e.mediumpurple="#9370db",e.mediumseagreen="#3cb371",e.mediumslateblue="#7b68ee",e.mediumspringgreen="#00fa9a",e.mediumturquoise="#48d1cc",e.mediumvioletred="#c71585",e.midnightblue="#191970",e.mintcream="#f5fffa",e.mistyrose="#ffe4e1",e.moccasin="#ffe4b5",e.navajowhite="#ffdead",e.oldlace="#fdf5e6",e.olivedrab="#6b8e23",e.orange="#ffa500",e.orangered="#ff4500",e.orchid="#da70d6",e.palegoldenrod="#eee8aa",e.palegreen="#98fb98",e.paleturquoise="#afeeee",e.palevioletred="#db7093",e.papayawhip="#ffefd5",e.peachpuff="#ffdab9",e.peru="#cd853f",e.pink="#ffc0cb",e.plum="#dda0dd",e.powderblue="#b0e0e6",e.rosybrown="#bc8f8f",e.royalblue="#4169e1",e.saddlebrown="#8b4513",e.salmon="#fa8072",e.sandybrown="#f4a460",e.seagreen="#2e8b57",e.seashell="#fff5ee",e.sienna="#a0522d",e.skyblue="#87ceeb",e.slateblue="#6a5acd",e.slategray="#708090",e.snow="#fffafa",e.springgreen="#00ff7f",e.steelblue="#4682b4",e.tan="#d2b48c",e.thistle="#d8bfd8",e.tomato="#ff6347",e.turquoise="#40e0d0",e.violet="#ee82ee",e.wheat="#f5deb3",e.whitesmoke="#f5f5f5",e.yellowgreen="#9acd32"}(o||(o={}));var s=o;function u(e){return"string"==typeof e&&(e=e.toLowerCase(),/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))}function f(e){if(u(e)||function(e){return/^(rgb|rgba|RGB|RGBA)/.test(e)}(e))return e;var r=s[e];if(!r)throw Error("Color: Invalid Input of "+e);return r}function c(e){var r=f(e).toLowerCase();return u(r)?function(e){3===(e=e.replace("#","")).length&&(e=Array.from(e).map((function(e){return e+e})).join(""));var r=e.split("");return[,,,].fill(0).map((function(e,t){return parseInt("0x"+r[2*t]+r[2*t+1])}))}(r):function(e){return e.replace(/rgb\(|rgba\(|\)/g,"").split(",").slice(0,3).map((function(e){return parseInt(e)}))}(r)}function h(e){var r=f(e);return function(e){return"string"==typeof e&&(e=e.toLowerCase(),/^(rgba|RGBA)/.test(e))}(r)?Number(r.toLowerCase().split(",").slice(-1)[0].replace(/[)|\s]/g,"")):1}function l(e){var r=c(e);return r&&
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function(){for(var e=0,r=0,t=arguments.length;t>r;r++)e+=arguments[r].length;var n=Array(e),a=0;for(r=0;t>r;r++)for(var o=arguments[r],i=0,s=o.length;s>i;i++,a++)n[a]=o[i];return n}(r,[h(e)])}function p(e){if(!Array.isArray(e))throw Error("getColorFromRgbValue: "+e+" is not an array");var r=e.length;if(3!==r&&4!==r)throw Error("getColorFromRgbValue: value length should be 3 or 4");return(3===r?"rgb(":"rgba(")+e.join(",")+")"}function d(e){return function(e){var r=n(e);return p(r)}}var v=function(){function r(e){this.fill=[0,0,0,1],this.stroke=[0,0,0,0],this.opacity=1,this.lineCap="butt",this.lineJoin="miter",this.lineDash=[],this.lineDashOffset=0,this.shadowBlur=0,this.shadowColor=[0,0,0,0],this.shadowOffsetX=0,this.shadowOffsetY=0,this.lineWidth=1,this.hoverCursor="pointer",this.fontStyle="normal",this.fontVarient="normal",this.fontWeight="normal",this.fontSize=10,this.fontFamily="Arial",this.textAlign="center",this.textBaseline="middle",this.gradientType="linear",this.gradientWith="stroke",this.gradientStops="auto",e&&this.update(e)}return r.prototype.update=function(e){Object.assign(this,r.colorProcessor(e))},r.colorProcessor=function(r,t){var a=e({},r),o=function(e){return function(r){var t="string"==typeof r,a=Array.isArray(r);if(t&&e)return r;if(a&&!e)return n(r);if(t&&!e)return l(r);if(a&&e)return p(r);throw Error("CRender Style transformColor: Unexpected color!")}}(t);return a.fill=o(a.fill),a.stroke=o(a.stroke),a.shadowColor=o(a.shadowColor),a.gradientColor=(a.gradientColor||[]).map(o),a},r.prototype.setCtx=function(e){r.setCtxTransform(e,this),r.setCtxStyle(e,this),r.setCtxGradientColor(e,this)},r.setCtxTransform=function(e,r){e.save();var t=r.graphCenter,n=r.rotate,a=r.scale,o=r.translate;t instanceof Array&&(e.translate.apply(e,t),n&&e.rotate(n*Math.PI/180),a instanceof Array&&e.scale.apply(e,a),o&&e.translate.apply(e,o),e.translate(-t[0],-t[1]))},r.setCtxStyle=function(e,r){e.lineCap=r.lineCap,e.lineJoin=r.lineJoin,e.lineDashOffset=r.lineDashOffset,e.shadowOffsetX=r.shadowOffsetX,e.shadowOffsetY=r.shadowOffsetY,e.lineWidth=r.lineWidth,e.textAlign=r.textAlign,e.textBaseline=r.textBaseline;var t=r.fill,n=r.stroke,a=r.shadowColor,o=d();e.fillStyle=o(t),e.strokeStyle=o(n),e.shadowColor=o(a);var i=r.lineDash,s=r.shadowBlur;i&&e.setLineDash(i.map((function(e){return 0>e?0:e}))),"number"==typeof s&&(e.shadowBlur=s>0?s:.001),e.font=r.fontStyle+" "+r.fontVarient+" "+r.fontWeight+" "+r.fontSize+"px "+r.fontFamily},r.setCtxGradientColor=function(e,r){if(function(e){var r=e.gradientColor,t=e.gradientParams,n=e.gradientType,a=e.gradientWith,o=e.gradientStops;if(!r||!t)return!1;if(1===r.length)return console.warn("CRender Style: The gradient needs to provide at least two colors"),!1;if("linear"!==n&&"radial"!==n)return console.warn("CRender Style: GradientType only supports linear or radial, current value is "+n),!1;var i=t.length;return"linear"===n&&4!==i||"radial"===n&&6!==i?(console.warn("CRender Style: The expected length of gradientParams is "+("linear"===n?"4":"6")),!1):"fill"!==a&&"stroke"!==a?(console.warn("CRender Style: GradientWith only supports fill or stroke, current value is "+a),!1):"auto"===o||o instanceof Array||(console.warn("CRender Style: gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is "+o),!1)}(r)){var t,n,a,o=r.gradientColor,i=r.gradientParams,s=r.gradientType,u=r.gradientWith,f=r.gradientStops,c=d(),h=o.map(c),l="auto"===f?(n=1/((t=h).length-1),t.map((function(e,r){return n*r}))):f;a="linear"===s?e.createLinearGradient.apply(e,i):e.createRadialGradient.apply(e,i),l.forEach((function(e,r){return a.addColorStop(e,h[r])})),e["fill"===u?"fillStyle":"strokeStyle"]=a}},r.prototype.restoreCtx=function(e){e.restore()},r}();function y(e,r,t,n,a){var o=e[0],i=e[1];return o>=r&&(i>=t&&(r+n>=o&&i<=t+a))}function m(e,r){if(void 0===r&&(r=new Map([])),null===e||"object"!==i(e))return e;if(r.has(e))return r.get(e);var t=Array.isArray(e)?[]:{};return r.set(e,t),Object.keys(e).forEach((function(n){return t[n]=m(e[n],r)})),t}var g=new Map([]);function b(e,r){var t=function(e,r){for(var t,n,a=e.length,o=a-1,i=0;a>i;i++){if(i!==o)if(n=e[i+1],r>=(t=e[i])[0][0]&&n[0][0]>r)break}return[t[0],t[2]||t[0],n[1]||n[0],n[0]]}(e,r);return function(e,r){var t=e[1][1],n=e[2][1],a=e[3][1],o=1-r;return 1-(e[0][1]*Math.pow(o,3)+3*t*r*Math.pow(o,2)+3*n*Math.pow(r,2)*o+a*Math.pow(r,3))}(t,function(e,r){var t=e[0][0];return(r-t)/(e[3][0]-t)}(t,r))}function w(e,r){var t;t="string"==typeof e?g.get(e):e;var n=1/(r-1);return Array(r).fill(0).map((function(e,r){return r*n})).map((function(e){return b(t,e)}))}var C=function(e,r,t,n){return(e/=n)<1/2.75?t*(7.5625*e*e)+r:2/2.75>e?t*(7.5625*(e-=1.5/2.75)*e+.75)+r:2.5/2.75>e?t*(7.5625*(e-=2.25/2.75)*e+.9375)+r:t*(7.5625*(e-=2.625/2.75)*e+.984375)+r},x=function(e,r,t,n){return t-C(n-e,0,t,n)+r},A=new Map([["linear",function(e,r,t,n){return t*e/n+r}],["easeInSine",function(e,r,t,n){return-t*Math.cos(e/n*(Math.PI/2))+t+r}],["easeOutSine",function(e,r,t,n){return t*Math.sin(e/n*(Math.PI/2))+r}],["easeInOutSine",function(e,r,t,n){return-t/2*(Math.cos(Math.PI*e/n)-1)+r}],["easeInQuad",function(e,r,t,n){return t*(e/=n)*e+r}],["easeOutQuad",function(e,r,t,n){return-t*(e/=n)*(e-2)+r}],["easeInOutQuad",function(e,r,t,n){return 1>(e/=n/2)?t/2*e*e+r:-t/2*(--e*(e-2)-1)+r}],["easeInCubic",function(e,r,t,n){return t*(e/=n)*e*e+r}],["easeOutCubic",function(e,r,t,n){return t*((e=e/n-1)*e*e+1)+r}],["easeInOutCubic",function(e,r,t,n){return 1>(e/=n/2)?t/2*e*e*e+r:t/2*((e-=2)*e*e+2)+r}],["easeInQuart",function(e,r,t,n){return t*(e/=n)*e*e*e+r}],["easeOutQuart",function(e,r,t,n){return-t*((e=e/n-1)*e*e*e-1)+r}],["easeInOutQuart",function(e,r,t,n){return 1>(e/=n/2)?t/2*e*e*e*e+r:-t/2*((e-=2)*e*e*e-2)+r}],["easeInQuint",function(e,r,t,n){return t*(e/=n)*e*e*e*e+r}],["easeOutQuint",function(e,r,t,n){return t*((e=e/n-1)*e*e*e*e+1)+r}],["easeInOutQuint",function(e,r,t,n){return 1>(e/=n/2)?t/2*e*e*e*e*e+r:t/2*((e-=2)*e*e*e*e+2)+r}],["easeInBack",function(e,r,t,n){var a=1.70158;return t*(e/=n)*e*((a+1)*e-a)+r}],["easeOutBack",function(e,r,t,n){var a=1.70158;return t*((e=e/n-1)*e*((a+1)*e+a)+1)+r}],["easeInOutBack",function(e,r,t,n){var a=1.70158;return 1>(e/=n/2)?t/2*(e*e*((1+(a*=1.525))*e-a))+r:t/2*((e-=2)*e*((1+(a*=1.525))*e+a)+2)+r}],["easeInElastic",function(e,r,t,n){return 0===e?r:1==(e/=n)?r+t:-t*Math.pow(2,10*(e-=1))*Math.sin(2*Math.PI*(e*n-.3*n/4)/(.3*n))+r}],["easeOutElastic",function(e,r,t,n){return 0===e?r:1==(e/=n)?r+t:t*Math.pow(2,-10*e)*Math.sin(2*Math.PI*(e*n-.3*n/4)/(.3*n))+t+r}],["easeInOutElastic",function(e,r,t,n){if(0===e)return r;if(2==(e/=n/2))return r+t;var a=n*(.3*1.5),o=a/4;return 1>e?t*Math.pow(2,10*(e-=1))*Math.sin(2*Math.PI*(e*n-o)/a)*-.5+r:t*Math.pow(2,-10*(e-=1))*Math.sin(2*Math.PI*(e*n-o)/a)*.5+t+r}],["easeInBounce",x],["easeOutBounce",C],["easeInOutBounce",function(e,r,t,n){return n/2>e?.5*x(2*e,0,t,n)+r:.5*C(2*e-n,0,t,n)+.5*t+r}]]);function k(e,r){void 0===r&&(r=30);var t=r/(r-1),n=A.get(e);return Array(r).fill(0).map((function(e,a){return n(a*t,0,1,r)}))}function P(e){var r=e instanceof Array,t=g.has(e),n=A.has(e);if(r)return"transitionCurve";if(t)return"transitionCurveName";if(n)return"tween";throw Error("Transition: Invalid ease curve of "+e)}function M(e){return Object.prototype.toString.call(e).replace(/\[object |\]/g,"").toLowerCase()}function G(e){return Number.isFinite(e)}function R(e){var r=M(e);return"array"===r||"object"===r}function I(e,r){return Array(r).fill(0).map((function(r){return e}))}function O(e,r,t){return e.forEach((function(e,n){return e[t]=r[n]})),e}function T(e){return e?[]:{}}function E(e,r,t){var n=r-e;return t.map((function(r){return e+n*r}))}function S(e,r,t,n,a){if(void 0===n&&(n=30),void 0===a&&(a=!1),function(e,r,t,n){var a=[e,r,t,n].map(M);if(a.find((function(e){return"undefined"===e})))throw Error("transition: Missing Parameters!");if(a[1]!==a[2])throw Error("transition: The start state type and the end state type are inconsistent!");if("number"!==a[3]||0>=n)throw Error("Transition: frameNum should be a number and greater than 1");P(e)}(e,r,t,n),!function(e){var r=M(e);return["number","array","object"].includes(r)}(r))return console.warn("Transition: Only supports array number and object types"),[r,t];try{return function e(r,t,n,a){var o=M(r),i=n.length;if("number"===o)return E(r,t,n);var s="array"===o,u=Array(i).fill(s).map(T);for(var f in t){var c=r[f],h=t[f];u=O(u,G(c)&&G(h)?E(c,h,n):R(c)&&R(h)&&a?e(c,h,n,a):I(h,i),f)}return u}(r,t,function(e,r){return void 0===r&&(r=30),("tween"===P(e)?k:w)(e,r)}(e,n),a)}catch(e){return console.warn("Transition: parameter may be abnormal!"),[t]}}var F=function(){function o(e,r,t){this.visible=!0,this.drag=!1,this.hover=!1,this.index=1,this.animationDelay=0,this.animationFrame=30,this.animationCurve="linear",this.animationPause=!1,this.status=a.STATIC,this.animationQueue=[];var n=Object.assign({},e.shape,r.shape),o=new v(r.style);Object.assign(this,e,r,{shape:n,style:o},{status:a.STATIC,animationRoot:[],animationKeys:[],animationFrameState:[],cache:{},render:t}),this.setGraphCenter&&this.setGraphCenter(this),this.added&&this.added()}return o.prototype.drawProcessor=function(){var e=this.render,r=e.ctx;this.style.setCtx(r),this.beforeDraw&&this.beforeDraw(e),this.draw(e,this),this.drawed&&this.drawed(e),this.style.restoreCtx(r)},o.prototype.hoverCheckProcessor=function(e){var r=this.hoverRect,t=this.style,a=t.graphCenter,o=t.rotate,i=t.scale,s=t.translate;return!!this.hoverCheck&&(a&&(o&&(e=function(e,r,t){if(void 0===e&&(e=0),void 0===t&&(t=[0,0]),e%360==0)return r;var n=r[0],a=r[1],o=t[0],i=t[1];return[(n-o)*Math.cos(e*=Math.PI/180)-(a-i)*Math.sin(e)+o,(n-o)*Math.sin(e)+(a-i)*Math.cos(e)+i]}(-o,e,a)),i&&(e=function(e,r,t){void 0===e&&(e=[1,1]),void 0===t&&(t=[0,0]);var n=t[0],a=t[1];return[(r[0]-n)*e[0]+n,(r[1]-a)*e[1]+a]}(i.map((function(e){return 1/e})),e,a)),s&&(e=function(e,r){return[r[0]+e[0],r[1]+e[1]]}(s.map((function(e){return-1*e})),e))),r?y.apply(void 0,n([e],r)):this.hoverCheck(e,this))},o.prototype.moveProcessor=function(e){this.move&&(this.beforeMove&&this.beforeMove(e),this.move(e,this),this.moved&&this.moved(e),this.setGraphCenter&&this.setGraphCenter(this))},o.prototype.attr=function(e,r,t){void 0===t&&(t=!0);var n="object"===i(this[e]);n&&(r=m(r));var a=this.render;"style"===e?this.style.update(r):n?Object.assign(this[e],r):this[e]=r,"index"===e&&a.sortGraphsByIndex(),t&&a.drawAllGraph()},o.prototype.animation=function(n,a,o){return void 0===o&&(o=!1),r(this,void 0,void 0,(function(){var s,u,f,c,h,l,p=this;return t(this,(function(d){switch(d.label){case 0:return"shape"!==n&&"style"!==n?(console.error("Graph animation: Only supported shape and style animation!"),[2]):"object"!==i(a)?(console.error("Graph animation: Shape or style must be an object!"),[2]):(a=m(a),"style"===n&&(a=v.colorProcessor(a)),s=this[n],u=Object.keys(a).reduce((function(r,t){var n;return e(e({},r),((n={})[t]=s[t],n))}),Object.create(null)),c=(f=this).animationDelay,h=S(f.animationCurve,u,a,f.animationFrame,!0),this.animationQueue.push({key:n,frameState:h}),o?[2]:c>0?[4,(y=c,new Promise((function(e){setTimeout(e,y)})))]:[3,2]);case 1:d.sent(),d.label=2;case 2:return l=this.render,[2,new Promise((function(e){return r(p,void 0,void 0,(function(){return t(this,(function(r){switch(r.label){case 0:return[4,l.launchAnimation()];case 1:return r.sent(),e(),[2]}}))}))}))]}var y}))}))},o.prototype.turnNextAnimationFrame=function(e){var r=this,t=this.animationDelay,a=this.animationQueue;this.animationPause||Date.now()-e<t||(this.animationQueue=a.reduce((function(e,t){var a=t.key,o=t.frameState;return Object.assign(r[a],o.shift()),o.length?n(e,[{key:a,frameState:o}]):e}),[]))},o.prototype.animationEnd=function(){var e=this,r=this.render;return this.animationQueue.forEach((function(r){return Object.assign(e[r.key],r.frameState.pop())})),this.animationQueue=[],r.drawAllGraph()},o.prototype.pauseAnimation=function(){this.attr("animationPause",!0)},o.prototype.playAnimation=function(){var e=this,n=this.render;return this.attr("animationPause",!1),new Promise((function(a){return r(e,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,n.launchAnimation()];case 1:return e.sent(),a(),[2]}}))}))}))},o.prototype.delProcessor=function(){var e=this,r=this.render.graphs,t=r.findIndex((function(r){return r===e}));-1!==t&&(this.beforeDelete&&this.beforeDelete(),r.splice(t,1),this.deleted&&this.deleted())},o}();function j(e,r){var t=e[1],n=r[1],a=Math.abs(e[0]-r[0]),o=Math.abs(t-n);return Math.sqrt(a*a+o*o)}function D(e,r){return-e[1]*r[0]+e[0]*r[1]>0}function W(e,r,t,n){return[e+Math.cos(n)*t,r+Math.sin(n)*t]}function B(e,r){var t,n,a,o=r.rx,i=r.ry,s=r.r,u=r.startAngle,f=r.endAngle,c=r.clockWise;if(!e)return!1;if(j(e,[o,i])>s)return!1;c||(u=(t=[f,u])[0],f=t[1]);var h=u>f;h&&(u=(n=[f,u])[0],f=n[1]);var l=f-u;if(l>=2*Math.PI)return!0;var p=e[0],d=e[1],v=W(o,i,s,u),y=v[0],m=v[1],g=W(o,i,s,f),b=[p-o,d-i],w=[y-o,m-i],C=[g[0]-o,g[1]-i],x=l>Math.PI;x&&(w=(a=[C,w])[0],C=a[1]);var A=D(w,b)&&!D(C,b);return x&&(A=!A),h&&(A=!A),A}function q(e,r){for(var t=0,n=e[0],a=e[1],o=r.length,i=1,s=r[0];o>=i;i++){var u=r[i%o];if(n>Math.min(s[0],u[0])&&Math.max(s[0],u[0])>=n)if(Math.max(s[1],u[1])>=a)if(s[0]!==u[0])s[1]!==u[1]&&a>(n-s[0])*(u[1]-s[1])/(u[0]-s[0])+s[1]||t++;s=u}return t%2==1}function z(e,r,t){var a=t/2;return q(e,n(r.map((function(e){return[e[0],e[1]-a]})),r.map((function(e){return[e[0],e[1]+a]})).reverse()))}function V(e,r,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1),2>r.length||(t&&e.beginPath(),r.forEach((function(r,t){return r&&(0===t?e.moveTo.apply(e,r):e.lineTo.apply(e,r))})),n&&e.closePath())}function Q(e,r,t,n,a){void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===a&&(a=!1),e&&r&&(n&&e.beginPath(),t&&e.moveTo.apply(e,t),r.forEach((function(r){return e.bezierCurveTo(r[0][0],r[0][1],r[1][0],r[1][1],r[2][0],r[2][1])})),a&&e.closePath())}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function N(){for(var e=0,r=0,t=arguments.length;t>r;r++)e+=arguments[r].length;var n=Array(e),a=0;for(r=0;t>r;r++)for(var o=arguments[r],i=0,s=o.length;s>i;i++,a++)n[a]=o[i];return n}function X(e){return e.reduce((function(e,r){return e+r}),0)}function Y(e){return e.reduce((function(e,r){return N(e,r)}),[])}function L(e,r,t,n){var a=new Map([]);return function(o){if(a.has(o))return a.get(o);var i=1-o,s=Math.pow(i,3),u=Math.pow(i,2),f=Math.pow(o,3),c=Math.pow(o,2),h=[e[0]*s+3*r[0]*o*u+3*t[0]*c*i+n[0]*f,e[1]*s+3*r[1]*o*u+3*t[1]*c*i+n[1]*f];return a.set(o,h),h}}function H(e){var r=function(e){return e.slice(1)}(e),t=function(e){return e[0]}(e);return r.map((function(e,n){return L.apply(void 0,N([0===n?t:r[n-1][2]],e))}))}function J(e,r){return e.map((function(e,t){var n=1/(r[t]-1);return Array(r[t]).fill(0).map((function(r,t){return e(t*n)}))}))}function U(e){return Array(e.length-1).fill(0).map((function(r,t){return o=(n=e[t])[1],i=(a=e[t+1])[1],Math.sqrt(Math.pow(n[0]-a[0],2)+Math.pow(o-i,2));var n,a,o,i}))}function K(e){var r=function(e){return e.map(U)}(e),t=X(r.map((function(e){return e.length}))),n=r.map(X),a=X(n),o=a/t;return{totalLength:a,segmentLength:n,avgDistance:o,deviation:function(e,r){return X(e.map((function(e){return e.map((function(e){return Math.abs(e-r)}))})).map(X))}(r,o)}}function $(e){return Y(e).length}function Z(e,r,t,n){console.warn("-------------start-------------");var a=K(e);return a.deviation>t?(e=function(e,r,t,n){var a=t.avgDistance,o=t.totalLength,i=t.segmentLength,s=$(e);return s=Math.ceil(a/n*s*1.1),J(r,i.map((function(e){return Math.ceil(e/o*s)})).map((function(e){return e>1?e:2})))}(e,r,a,t),Y(n>0?e=function(e,r,t,n){var a=t.avgDistance,o=1/$(e)/10;return r.forEach((function(r,t){for(var i=e[t].length,s=1/(i-1),u=Array(i).fill(0).map((function(e,r){return r*s})),f=0;n>f;f++)for(var c=U(e[t]).map((function(e){return e-a})),h=0,l=0;i>l;l++)0!==l&&(u[l]-=o*(h+=c[l-1]),u[l]>1&&(u[l]=1),0>u[l]&&(u[l]=0),e[t][l]=r(u[l]))})),e}(e,r,a=K(e),n):e)):Y(e)}function _(e,r,t){void 0===r&&(r=5),void 0===t&&(t=0);var n=H(e),a=Z(function(e){return J(e,Array(e.length).fill(50))}(n),n,r,t),o=function(e){return e.slice(-1)[0][2]}(e);return a.push(o),a}function ee(e,r,t){if(void 0===r&&(r=5),void 0===t&&(t=0),!(e instanceof Array))throw Error("bezierCurveToPolyline: Invalid input of "+e);if(1>=e.length)throw Error("bezierCurveToPolyline: The length of the bezierCurve should be greater than 1");if("number"!=typeof r)throw Error("bezierCurveToPolyline: Type of precision must be number");return _(e,r,t)}function re(e,r){var t=r[0],n=r[1];return[t+(t-e[0]),n+(n-e[1])]}function te(e,r,t,n){if(void 0===r&&(r=!1),void 0===t&&(t=.25),void 0===n&&(n=.25),!(e instanceof Array))throw Error("polylineToBezierCurve: Invalid input of "+e);if(2>=e.length)throw Error("polylineToBezierCurve: The length of the polyline should be greater than 2");var a=e[0],o=Array(e.length-1).fill(0).map((function(a,o){return N(function(e,r,t,n,a){void 0===t&&(t=!1),void 0===n&&(n=.25),void 0===a&&(a=.25);var o=e.length;if(3>o||r>=o)return null;var i=r-1;0>i&&(i=t?o+i:0);var s=r+1;o>s||(s=t?s-o:o-1);var u=r+2;o>u||(u=t?u-o:o-1);var f=e[i],c=e[r],h=e[s],l=e[u];return[[c[0]+n*(h[0]-f[0]),c[1]+n*(h[1]-f[1])],[h[0]-a*(l[0]-c[0]),h[1]-a*(l[1]-c[1])]]}(e,o,r,t,n),[e[o+1]])}));return r&&function(e,r){var t=e[0],n=e.slice(-1)[0];e.push([re(n[1],n[2]),re(t[0],r),r])}(o,a),o.unshift(e[0]),o}var ne=new Map([["arc",{shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(e){var r=e.shape;return!["rx","ry","r","startAngle","endAngle"].find((function(e){return"number"!=typeof r[e]}))||(console.error("CRender Graph Arc: Arc shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.rx,o=n.ry,i=n.r,s=n.startAngle,u=n.endAngle,f=n.clockWise;t.beginPath(),t.arc(a,o,i>0?i:0,s,u,!f),t.stroke()},hoverCheck:function(e,r){var t=r.shape,n=t.rx,a=t.ry,o=t.r,i=t.startAngle,s=t.endAngle,u=t.clockWise,f=r.style.lineWidth/2,c=o+f,h=B(e,{rx:n,ry:a,r:o-f,startAngle:i,endAngle:s,clockWise:u}),l=B(e,{rx:n,ry:a,r:c,startAngle:i,endAngle:s,clockWise:u});return!h&&l},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=r.shape;r.attr("shape",{rx:t.rx+e.movementX,ry:t.ry+e.movementY})}}],["bezierCurve",{shape:{points:[],close:!1},validator:function(e){return e.shape.points instanceof Array||(console.error("CRender Graph BezierCurve: BezierCurve points should be an array!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=r.cache,o=n.points,i=n.close;if(!a.points||""+a.points!=""+o){var s=ee(o,20);Object.assign(a,{points:m(o),hoverPoints:s})}t.beginPath(),Q(t,o.slice(1),o[0]),i?(t.closePath(),t.fill(),t.stroke()):t.stroke()},hoverCheck:function(e,r){var t=r.cache.hoverPoints,n=r.style.lineWidth;return r.shape.close?q(e,t):z(e,t,n)},setGraphCenter:function(e){e.style.graphCenter=e.shape.points[0]},move:function(e,r){var t=e.movementX,a=e.movementY,o=r.cache,i=r.shape.points,s=i[0],u=s[0],f=s[1],c=i.slice(1),h=n([[u+t,f+a]],c.map((function(e){return e.map((function(e){return[e[0]+t,e[1]+a]}))})));o.points=h,o.hoverPoints=o.hoverPoints.map((function(e){return[e[0]+t,e[1]+a]})),r.attr("shape",{points:h})}}],["circle",{shape:{rx:0,ry:0,r:0},validator:function(e){var r=e.shape;return"number"==typeof r.rx&&"number"==typeof r.ry&&"number"==typeof r.r||(console.error("CRender Graph Circle: Circle shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.rx,o=n.ry,i=n.r;t.beginPath(),t.arc(a,o,i>0?i:0,0,2*Math.PI),t.fill(),t.stroke()},hoverCheck:function(e,r){return function(e,r){var t=r.r;return j(e,[r.rx,r.ry])<=t}(e,r.shape)},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=r.shape;r.attr("shape",{rx:t.rx+e.movementX,ry:t.ry+e.movementY})}}],["ellipse",{shape:{rx:0,ry:0,hr:0,vr:0},validator:function(e){var r=e.shape;return"number"==typeof r.rx&&"number"==typeof r.ry&&"number"==typeof r.hr&&"number"==typeof r.vr||(console.error("CRender Graph Ellipse: Ellipse shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.rx,o=n.ry,i=n.hr,s=n.vr;t.beginPath(),t.ellipse(a,o,i>0?i:0,s>0?s:0,0,0,2*Math.PI),t.fill(),t.stroke()},hoverCheck:function(e,r){var t=r.shape,n=t.rx,a=t.ry,o=t.hr,i=t.vr,s=Math.max(o,i),u=Math.min(o,i),f=Math.sqrt(s*s-u*u),c=[n+f,a];return 2*s>=j(e,[n-f,a])+j(e,c)},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=r.shape;r.attr("shape",{rx:t.rx+e.movementX,ry:t.ry+e.movementY})}}],["polyline",{shape:{points:[],close:!1},validator:function(e){return e.shape.points instanceof Array||(console.error("CRender Graph Polyline: Polyline points should be an array!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=r.style.lineWidth,o=n.points,i=n.close;t.beginPath(),V(t,1===a?function(e){return e.map((function(e){return[.5+(0|e[0]),.5+(0|e[1])]}))}(o):o),i?(t.closePath(),t.fill(),t.stroke()):t.stroke()},hoverCheck:function(e,r){var t=r.shape,n=t.points,a=r.style.lineWidth;return t.close?q(e,n):z(e,n,a)},setGraphCenter:function(e){e.style.graphCenter=e.shape.points[0]},move:function(e,r){var t=e.movementX,n=e.movementY,a=r.shape.points.map((function(e){return[e[0]+t,e[1]+n]}));r.attr("shape",{points:a})}}],["rect",{shape:{x:0,y:0,w:0,h:0},validator:function(e){var r=e.shape;return"number"==typeof r.x&&"number"==typeof r.y&&"number"==typeof r.w&&"number"==typeof r.h||(console.error("CRender Graph Rect: Rect shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.x,o=n.y,i=n.w,s=n.h;t.beginPath(),t.rect(a,o,i,s),t.fill(),t.stroke()},hoverCheck:function(e,r){return function(e,r){var t=e[0],n=e[1],a=r.x,o=r.y;return t>=a&&(n>=o&&(a+r.w>=t&&n<=o+r.h))}(e,r.shape)},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.x+r.w/2,r.y+r.h/2]},move:function(e,r){var t=r.shape;r.attr("shape",{x:t.x+e.movementX,y:t.y+e.movementY})}}],["regPolygon",{shape:{rx:0,ry:0,r:0,side:0},validator:function(e){var r=e.shape,t=r.side;return["rx","ry","r","side"].find((function(e){return"number"!=typeof r[e]}))?(console.error("CRender Graph RegPolygon: RegPolygon shape configuration is invalid!"),!1):t>=3||(console.error("CRender Graph RegPolygon: RegPolygon at least trigon!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=r.cache,o=n.rx,i=n.ry,s=n.r,u=n.side;if(a.points||a.rx!==o||a.ry!==i||a.r!==s||a.side!==u){var f=function(e,r){var t=e.rx,n=e.ry,a=e.r,o=e.side;void 0===r&&(r=-.5*Math.PI);var i=2*Math.PI/o;return Array(o).fill("").map((function(e,t){return t*i+r})).map((function(e){return W(t,n,a,e)}))}(n);Object.assign(a,{points:f,rx:o,ry:i,r:s,side:u})}var c=a.points;t.beginPath(),V(t,c),t.stroke(),t.fill()},hoverCheck:function(e,r){return q(e,r.cache.points)},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=e.movementX,n=e.movementY,a=r.shape,o=r.cache,i=a.rx,s=a.ry;o.rx+=t,o.ry+=n,r.attr("shape",{rx:i+t,ry:s+n}),o.points=o.points.map((function(e){return[e[0]+t,e[1]+n]}))}}],["ring",{shape:{rx:0,ry:0,r:0},validator:function(e){var r=e.shape;return"number"==typeof r.rx&&"number"==typeof r.ry&&"number"==typeof r.r||(console.error("CRender Graph Ring: Ring shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.rx,o=n.ry,i=n.r;t.beginPath(),t.arc(a,o,i>0?i:0,0,2*Math.PI),t.stroke()},hoverCheck:function(e,r){var t=r.shape,n=t.r,a=r.style.lineWidth/2,o=n-a,i=n+a,s=j(e,[t.rx,t.ry]);return s>=o&&i>=s},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=r.shape;r.attr("shape",{rx:t.rx+e.movementX,ry:t.ry+e.movementY})}}],["sector",{shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(e){var r=e.shape;return!["rx","ry","r","startAngle","endAngle"].find((function(e){return"number"!=typeof r[e]}))||(console.error("CRender Graph Sector: Sector shape configuration is invalid!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.rx,o=n.ry,i=n.r,s=n.startAngle,u=n.endAngle,f=n.clockWise;t.beginPath(),t.arc(a,o,i>0?i:0,s,u,!f),t.lineTo(a,o),t.stroke(),t.fill()},hoverCheck:function(e,r){return B(e,r.shape)},setGraphCenter:function(e){var r=e.shape;e.style.graphCenter=[r.rx,r.ry]},move:function(e,r){var t=r.shape;r.attr("shape",{rx:t.rx+e.movementX,ry:t.ry+e.movementY})}}],["smoothline",{shape:{points:[],close:!1},validator:function(e){return e.shape.points instanceof Array||(console.error("CRender Graph Smoothline: Smoothline points should be an array!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=r.cache,o=n.points,i=n.close;if(!a.points||""+a.points!=""+o){var s=te(o,i),u=ee(s);Object.assign(a,{points:m(o),bezierCurve:s,hoverPoints:u})}var f=a.bezierCurve;t.beginPath(),Q(t,f.slice(1),f[0]),i?(t.closePath(),t.fill(),t.stroke()):t.stroke()},hoverCheck:function(e,r){var t=r.cache.hoverPoints,n=r.style.lineWidth;return r.shape.close?q(e,t):z(e,t,n)},setGraphCenter:function(e){e.style.graphCenter=e.shape.points[0]},move:function(e,r){var t=e.movementX,a=e.movementY,o=r.cache,i=r.shape.points.map((function(e){return[e[0]+t,e[1]+a]}));o.points=i;var s=o.bezierCurve[0],u=s[0],f=s[1],c=o.bezierCurve.slice(1);o.bezierCurve=n([[u+t,f+a]],c.map((function(e){return e.map((function(e){return[e[0]+t,e[1]+a]}))}))),o.hoverPoints=o.hoverPoints.map((function(e){return[e[0]+t,e[1]+a]})),r.attr("shape",{points:i})}}],["text",{shape:{content:"",position:[0,0],maxWidth:void 0,rowGap:0},validator:function(e){var r=e.shape,t=r.position,n=r.rowGap;return"string"!=typeof r.content?(console.error("CRender Graph Text: Text content should be a string!"),!1):Array.isArray(t)?"number"==typeof n||(console.error("CRender Graph Text: Text rowGap should be a number!"),!1):(console.error("CRender Graph Text: Text position should be an array!"),!1)},draw:function(e,r){var t=e.ctx,n=r.shape,a=n.position,o=n.maxWidth,i=n.rowGap,s=t.textBaseline,u=t.font,f=n.content.split("\n"),c=f.length,h=parseInt(u.replace(/\D/g,"")),l=h+i,p=c*l-i,d=0,v=a[0],y=a[1];"middle"===s&&(d=p/2,y+=h/2),"bottom"===s&&(d=p,y+=h);var m=Array(c).fill(0).map((function(e,r){return[v,y+r*l-d]}));t.beginPath(),f.forEach((function(e,r){t.fillText(e,m[r][0],m[r][1],o),t.strokeText(e,m[r][0],m[r][1],o)})),t.closePath()},hoverCheck:function(){return!1},setGraphCenter:function(e){e.style.graphCenter=n(e.shape.position)},move:function(e,r){var t=r.shape.position;r.attr("shape",{position:[t[0]+e.movementX,t[1]+e.movementY]})}}]]);function ae(e,r){e&&r?r.shape?r.validator?r.draw?ne.set(e,r):console.error("CRender extendNewGraph: Required function of draw to extendNewGraph!"):console.error("CRender extendNewGraph: Required function of validator to extendNewGraph!"):console.error("CRender extendNewGraph: Required attribute of shape to extendNewGraph!"):console.error("CRender extendNewGraph: Missing Parameters!")}var oe=function(){function r(e){if(this.area=[0,0],this.animationStatus=!1,this.graphs=[],e){var r=e.getContext("2d"),t=e.clientWidth,n=e.clientHeight,a=[t,n];e.setAttribute("width",t+""),e.setAttribute("height",n+""),Object.assign(this,{canvas:e,ctx:r,area:a}),e.addEventListener("mousedown",this.mouseDown.bind(this)),e.addEventListener("mousemove",this.mouseMove.bind(this)),e.addEventListener("mouseup",this.mouseUp.bind(this))}else console.error("CRender: Missing parameters!")}return r.prototype.clearArea=function(){this.canvas.width=this.area[0]},r.prototype.sortGraphsByIndex=function(){this.graphs.sort((function(e,r){return e.index-r.index}))},r.prototype.drawAllGraph=function(){this.clearArea(),this.graphs.filter((function(e){return e.visible})).forEach((function(e){return e.drawProcessor()}))},r.prototype.add=function(e){var r=e.name;if(!r)return console.error("CRender add: Missing parameters!"),null;var t=ne.get(r);if(!t)return console.warn("CRender add: No corresponding graph configuration found!"),null;if(!t.validator(e))return null;var n=new F(t,e,this);return this.graphs.push(n),this.sortGraphsByIndex(),this.drawAllGraph(),n},r.prototype.delGraph=function(e){e.delProcessor(),this.drawAllGraph()},r.prototype.delAllGraph=function(){this.graphs.forEach((function(e){return e.delProcessor()})),this.clearArea()},r.prototype.clone=function(r){var t=m(e({},r));return this.add(t)},r.prototype.launchAnimation=function(){var e=this;if(!this.animationStatus)return this.animationStatus=!0,new Promise((function(r){e.animate((function(){e.animationStatus=!1,r()}),Date.now())}))},r.prototype.animate=function(e,r){var t=this.graphs;this.animateAble()?(t.forEach((function(e){return e.turnNextAnimationFrame(r)})),this.drawAllGraph(),requestAnimationFrame(this.animate.bind(this,e,r))):e()},r.prototype.animateAble=function(){return!!this.graphs.find((function(e){return!e.animationPause&&e.animationQueue.length}))},r.prototype.mouseDown=function(){var e=this.graphs.find((function(e){return e.status===a.HOVER}));e&&(e.status=a.ACTIVE)},r.prototype.mouseMove=function(e){var r=[e.offsetX,e.offsetY],t=this.graphs,n=t.find((function(e){return e.status===a.ACTIVE||e.status===a.DRAG}));if(n&&n.drag&&n.move)return n.moveProcessor(e),void(n.status=a.DRAG);var o=t.find((function(e){return e.status===a.HOVER})),i=t.filter((function(e){return e.hover&&(e.hoverCheck||e.hoverRect)})).find((function(e){return e.hoverCheckProcessor(r)}));if(document.body.style.cursor=i?i.style.hoverCursor:"default",(i||o)&&i!==o){if(!i&&o)return o.onMouseOuter&&o.onMouseOuter(e),void(o.status=a.STATIC);if(i&&!o)return i.onMouseEnter&&i.onMouseEnter(e),void(i.status=a.HOVER);o.onMouseOuter&&o.onMouseOuter(e),o.status=a.STATIC,i.onMouseEnter&&i.onMouseEnter(e),i.status=a.HOVER}},r.prototype.mouseUp=function(e){var r=this.graphs,t=r.find((function(e){return e.status===a.ACTIVE})),n=r.find((function(e){return e.status===a.DRAG}));t&&t.onClick&&t.onClick(e),r.forEach((function(e){return e.status=a.STATIC})),t&&(t.status=a.HOVER),n&&(n.status=a.HOVER)},r}();export default oe;export{oe as CRender,ae as extendNewGraph};
