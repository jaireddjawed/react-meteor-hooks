parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ac2p":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("react");function t(t,r=[]){const[u,s]=(0,e.useState)(t());let n=null;const o=()=>{n&&n.stop(),n=null};return(0,e.useEffect)(()=>(o(),Tracker.autorun(e=>{n=e,s(t)}),o),r),u}
},{}],"NOTH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=require("react");function t(t,...r){const[u,s]=(0,e.useState)(!0);let l=null,n=null;const o=()=>{l&&l.stop(),n&&n.stop(),l=null,n=null};return(0,e.useEffect)(()=>(o(),Tracker.autorun(e=>{l=e,n=Meteor.subscribe(t,...r),s(!n.ready())}),o),[t,...r]),u}
},{}],"msLe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./useTracker"));function r(e){return e&&e.__esModule?e:{default:e}}function t(){return(0,e.default)(()=>Meteor.user())}
},{"./useTracker":"Ac2p"}],"z6VI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./useTracker"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r){if(!Session)return console.log("Please add Session to Meteor!");return(0,e.default)(()=>Session.get(r),[r])}
},{"./useTracker":"Ac2p"}],"ZXww":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./useTracker"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r,t=[]){return(0,e.default)(()=>r.fetch(),t)}
},{"./useTracker":"Ac2p"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"useTracker",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"useSubscription",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"useCurrentUser",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"useSession",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"useMongoFetch",{enumerable:!0,get:function(){return o.default}});var e=n(require("./hooks/useTracker")),r=n(require("./hooks/useSubscription")),t=n(require("./hooks/useCurrentUser")),u=n(require("./hooks/useSession")),o=n(require("./hooks/useMongoFetch"));function n(e){return e&&e.__esModule?e:{default:e}}
},{"./hooks/useTracker":"Ac2p","./hooks/useSubscription":"NOTH","./hooks/useCurrentUser":"msLe","./hooks/useSession":"z6VI","./hooks/useMongoFetch":"ZXww"}]},{},["Focm"], null)