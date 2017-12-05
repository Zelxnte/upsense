(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(a,b){'use strict';function c(a,b){for(var c,d=[],e=[],f=arguments.length;2<f--;)d.push(arguments[f]);for(;d.length;)if(Array.isArray(c=d.pop()))for(f=c.length;f--;)d.push(c[f]);else if(null==c||!0===c||!1===c);else e.push('number'==typeof c?c+='':c);return'string'==typeof a?{type:a,props:b||{},children:e}:a(b||{},e)}Object.defineProperty(b,'__esModule',{value:!0}),b.app=function(a,b){function d(a,b){return a&&c(a.tagName.toLowerCase(),{},b.call(a.childNodes,function(a){return 3===a.nodeType?a.nodeValue:d(a,b)}))}function e(a,b){for(var c in b)a[c]=b[c];return a}function f(a,b){return e(e({},a),b)}function g(a,b,c){var d={};return 0===a.length?b:(d[a[0]]=1<a.length?g(a.slice(1),b,c[a[0]]):b,f(c,d))}function h(a,b){for(var c=0;c<a.length;c++)b=b[a[c]];return b}function i(a){return'function'==typeof a}function j(a,b,c,d){for(var e in c)i(c[e])?function(c,e){b[c]=function(c){return a=h(d,w),i(c=e(c))&&i(c=c(a))&&(c=c(b)),c&&c!==a&&!c.then&&r(w=g(d,f(a,c),w)),c}}(e,c[e]):j(a[e]||(a[e]={}),b[e]={},c[e],d.concat(e))}function k(a){if(a&&a.props)return a.props.key}function l(a,b,c,d){if('key'===b);else if('style'===b)for(var e in f(d,c=c||{}))a.style[e]=null==c[e]?'':c[e];else{try{a[b]=null==c?'':c}catch(a){}i(c)||(null==c||!1===c?a.removeAttribute(b):a.setAttribute(b,c))}}function m(a,b){if('string'==typeof a)var c=document.createTextNode(a);else{var c=(b=b||'svg'===a.type)?document.createElementNS('http://www.w3.org/2000/svg',a.type):document.createElement(a.type);a.props.oncreate&&v.push(function(){a.props.oncreate(c)});for(var d=0;d<a.children.length;d++)c.appendChild(m(a.children[d],b));for(var d in a.props)l(c,d,a.props[d])}return c}function n(a,b,c){for(var d in f(b,c)){var e=c[d],g='value'==d||'checked'==d?a[d]:b[d];e!==g&&l(a,d,e,g)}c.onupdate&&v.push(function(){c.onupdate(a,b)})}function o(a,b,c){function d(){a.removeChild(b)}c&&c.onremove?c.onremove(b,d):d()}function p(a,b,c,d,e,f){if(c===d);else if(null==c)b=a.insertBefore(m(d,e),b);else if(null!=d.type&&d.type===c.type){n(b,c.props,d.props),e=e||'svg'===d.type;for(var g=d.children.length,h=c.children.length,l={},q=[],r={},s=0;s<h;s++){var i=q[s]=b.childNodes[s],t=c.children[s],u=k(t);null!=u&&(l[u]=[i,t])}for(var s=0,v=0;v<g;){var i=q[s],t=c.children[s],j=d.children[v],u=k(t);if(r[u]){s++;continue}var w=k(j),x=l[w]||[];null==w?(null==u&&(p(b,i,t,j,e),v++),s++):(u===w?(p(b,x[0],x[1],j,e),s++):x[0]?(b.insertBefore(x[0],i),p(b,x[0],x[1],j,e)):p(b,i,null,j,e),v++,r[w]=j)}for(;s<h;){var t=c.children[s],u=k(t);null==u&&o(b,q[s],t.props),s++}for(var s in l){var x=l[s],y=x[1];r[y.props.key]||o(b,x[0],y.props)}}else b&&d!==b.nodeValue&&('string'==typeof d&&'string'==typeof c?b.nodeValue=d:(b=a.insertBefore(m(d,e),f=b),o(a,f,c.props)));return b}function q(c){for(s=!s,i(c=a.view(w))&&(c=c(x)),s||(t=p(b,t,u,u=c));c=v.pop();)c()}function r(){a.view&&!s&&setTimeout(q,s=!s)}var s,t=(b=b||document.body).children[0],u=d(t,[].map),v=[],w=a.state||{},x={};return r(j(w,x,a.actions,[])),x},b.h=c},function(a){a.exports={CREATE:'CREATE',UPDATE:'UPDATE',VOTE:'VOTE',OPEN:'OPEN',CLOSED:'CLOSED',COMPLETED:'COMPLETED'}},function(a,b,c){c(3),a.exports=c(7)},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function e(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}Object.defineProperty(b,'__esModule',{value:!0});var f=c(0),g=c.n(f);const h=(a,b,c)=>{const d=a.map((a)=>a(b)),e=d.reverse();return e.reduce((a,b)=>b(a),c)},i=()=>{let a=[];return{subscribe:(b)=>(a.push(b),()=>{a=a.filter((a)=>a!==b)}),publish:(...b)=>{a.forEach((a)=>a(...b))}}},j=(a,b=void 0,c=[])=>{let d,e=a(b,{});const f=i(),g=(b)=>{e=a(e,b),f.publish(b)},j={dispatch:(a)=>{d(a)},getState:()=>e,subscribe:f.subscribe};return((a)=>{d=h(a,j,g)})(c),j},k=(a,b)=>{Object.keys(a).forEach((c)=>b(a[c],c))},l=(a,b,c)=>(k(a,(a,d)=>c=b(c,a,d)),c),m=(a)=>(b={},c)=>l(a,(a,b,d)=>Object.assign({},a,{[d]:b(a[d],c)}),b),n=(a,b='')=>b?(Array.isArray(b)||(b=b.split('.')),b.reduce((a,b)=>a?a[b]:void 0,a)):a,o=(a,b)=>(c={},d)=>{const e=n(d,b);if(!e)return c;const f=a(c[e],d),g=Object.assign({},c);return void 0===f?delete g[e]:g[e]=f,g},p='patcher/SET',q='jiber/JOIN_ROOM',r='jiber/LEAVE_ROOM',s='jiber/CONFIRMED_STATE',t='jiber/LOGIN_RESULT',u='jiber/WEBRTC_OFFER',v='jiber/WEBRTC_ANSWER',w='jiber/WEBRTC_CANDIDATE',x='SERVER',y='SELF',z=o((a,b)=>{switch(b.type){case q:return Object.assign({},b.$user);case r:return;default:if(!a)return a;if(!b.$confirmed)return a;const c=b.$actionId||0,d=a.actionId||0;return c<=d?a:Object.assign({},a,{actionId:c});}},'$userId'),A=(a={},b)=>b.type===s&&b.$source===x?b.members:z(a,b),B=(a=0,b)=>b.$timeMs||a,C=(a)=>(b=void 0,c)=>{switch(c.type){case s:return c.confirmed;default:return c.$confirmed?a(b,c):b;}},D=(a)=>{const b=m({members:A,lastUpdatedAt:B,confirmed:C(a)});return(a,c)=>{switch(c.type){case'jiber/CLOSE_ROOM':return;default:return b(a,c);}}},E=(a,b,c)=>{if(!b)return c;if(Array.isArray(b)||(b=b.split('.')),0===b.length)return c;const[d,...e]=b,f=a[d]||{},g=E(f,e,c);if(Array.isArray(a)){const b=[...a];return b[+d]=g,b}return Object.assign({},a,{[d]:g})},F=(a,b)=>{const c={};return k(a,(a,d)=>c[d]=b(a,d)),c},G=(a)=>()=>(b)=>(c)=>{c.$confirmed||c.$userId||a(c),b(c)};let H=1;const I=()=>(a)=>(b)=>(b.$actionId||(b.$actionId=H++),a(b));let J=1;const K=(a)=>(b)=>(c)=>{const d=c.$roomId,e=a.getState();if(!d||!e.rooms[d])return b(c);if(c.$actionId||(c.$actionId=J++),c.$timeMs||(c.$timeMs=new Date().getTime()),c.$source||(c.$source=y),c.$userId){const a=e.rooms[d];c.$user=a.members[c.$userId]||c.$user}else e.me&&(c.$userId=e.me.userId,c.$user=e.me);return b(c)},L=(a)=>{const{url:b,credential:c,backoffMs:d}=a;return b?new Promise((a)=>{const e=(b)=>{delete b.onclose,delete b.onopen,a(b)},f=(a=0)=>{setTimeout(()=>{const d=new WebSocket(b,c);d.onclose=()=>f(a+1),d.onopen=()=>e(d)},a*d)};f()}):Promise.reject('NO_URL')},M=(a)=>{let b;const c={send:(a)=>{b&&b.readyState===b.OPEN&&b.send(a)}},e=(()=>{var f=d(function*(){b=yield L(a),c.onmessage&&(b.onmessage=c.onmessage),b.onclose=function(){return setTimeout(e,3e3)}});return function(){return f.apply(this,arguments)}})();return e(),c},N=(a,b)=>F(b,(b)=>(...c)=>a(b(...c))),O=(a,b={})=>(c)=>{const d=()=>{const b=a.getState();return b.rooms[c]},e=(b)=>{a.dispatch(Object.assign({},b,{$roomId:c}))},f=N(e,b);e({type:q});const g=i();return a.subscribe((a)=>{a.$roomId===c&&g.publish(d().optimistic,a)}),Object.assign({},f,{dispatch:e,getState:()=>n(d(),'optimistic'),getConfirmedState:()=>n(d(),'confirmed'),subscribe:g.subscribe})},P={reducer:(a={},b)=>{switch(b.type){case p:return'object'==typeof b.set?Object.assign({},a,b.set):a;default:return a;}},middleware:[],url:void 0,stunServers:[],credential:void 0,initialState:void 0,backoffMs:5e3,actionCreators:{set:(a)=>({type:p,set:a})},maxPeers:10},Q=(a,b)=>a.filter((a)=>!!a.$userId&&(a.$userId!==b.$userId||(a.$actionId||0)>(b.$actionId||0))),R=(a,b)=>b.type===q||b.type===r?a:b.$user?(b.$actionId||0)>(b.$user.actionId||0)?[...a,b]:a:[...a,b],S=(a=[],b)=>{switch(b.type){case s:return[];case r:return a.filter((a)=>a.$userId!==b.$userId);default:return b.$confirmed?Q(a,b):R(a,b);}},T=(a)=>(b,c)=>{const d=b.optimistic;if(c.type===s){const{pendingActions:c}=b;return c.reduce(a,b.confirmed)}const e=n(c,'$user.actionId')||0,f=c.$actionId||0;if(c.$confirmed){const{pendingActions:c,confirmed:d}=b;return c.reduce(a,d)}return f>e?a(d,c):d},U={lastUpdatedAt:0,members:{},confirmed:void 0,optimistic:void 0,pendingActions:[]},V=(a)=>{const b=D(a),c=T(a);return(a=U,d)=>{const e=b(a,d);return e.pendingActions=S(e.pendingActions,d),e.optimistic=c(e,d),e}},W=(a={userId:'$timeMsemp'},b)=>{switch(b.type){case t:return b.user;default:return a;}},X=(a)=>{const b=V(a),c=o(b,'$roomId'),d=m({rooms:c,me:W});return d},Y=(a,b)=>{let c;const d={send:(a)=>{if(c&&'open'===c.readyState){const b=Object.assign({},a,{$user:void 0,$userId:void 0,$timeMs:void 0});c.send(JSON.stringify(b))}}},e=(a)=>{a.onmessage=(a)=>{d.onmessage&&d.onmessage(a)}};if(b){c=a.createDataChannel('data',{ordered:!1,maxRetransmits:0}),e(c)}else a.ondatachannel=(a)=>{c=a.channel,e(c)};return d},Z=(a,b,c)=>{if(!c.$roomId)return!1;if(c.$source!==y)return!1;const d=a.rooms[c.$roomId];return!!d.members[b]},$=(a)=>console.log(a),_=(a,b,c,d)=>{const f=(()=>{var d=e(function*(){const d=yield b.createOffer();yield b.setLocalDescription(d),a({type:u,offer:d,peerUserId:c})});return function(){return d.apply(this,arguments)}})(),g=(()=>{var b=e(function*(b){const d=yield b.createAnswer();yield b.setLocalDescription(d),a({type:v,answer:d,peerUserId:c})});return function(){return b.apply(this,arguments)}})(),h=(b)=>{a({type:w,candidate:b,peerUserId:c})},i=(()=>{var a=e(function*(a){return yield b.setRemoteDescription(a),g(b)});return function(){return a.apply(this,arguments)}})(),j=(()=>{var a=e(function*(a){if(a.$confirmed&&a.$userId===c)switch(a.type){case v:return b.setRemoteDescription(a.answer);case w:return b.addIceCandidate(a.candidate);}});return function(){return a.apply(this,arguments)}})();return b.onicecandidate=(a)=>{a.candidate&&h(a.candidate)},d?i(d).catch($):f().catch($),{onAction:j}},aa=(a,b,c)=>{const d=JSON.parse(c.data),e=d.$roomId;if(e){const c=a.getState().rooms[e],f=c.members,g=f[b];g&&(d.$timeMs=new Date().getTime(),d.$userId=b,d.$source='PEER',d.$user=g,a.dispatch(d))}},ba=(a)=>{const b={iceServers:a.map((a)=>({urls:a}))};return new RTCPeerConnection(b)},ca=(a,b,c,d)=>{const e=ba(c.stunServers),f=Y(e,!d),g=_(b.dispatch,e,a,d);f.onmessage=(c)=>{aa(b,a,c)};const h=b.subscribe((c)=>{g.onAction(c).catch($);const d=b.getState();Z(d,a,c)&&f.send(c)});return{peerUserId:a,close:()=>{h(),e.close()}}},da=()=>{const a=window;['RTCPeerConnection','RTCIceCandidate','RTCSessionDescription'].forEach((b)=>{a[b]=a[b]||a[`moz${b}`]||a[`webkit${b}`]})},ea=(a,b)=>{da();const c={},d=(a)=>l(a.rooms,(a,b)=>Object.assign(a,b.members),{}),e=(a)=>{const b=c[a];b&&(b.close(),delete c[a])},f=()=>{const b=d(a.getState());k(c,(a)=>{b[a.peerUserId]||e(a.peerUserId)})},g=(d,e)=>{c[d]||Object.keys(c).length>=b.maxPeers||(c[d]=ca(d,a,b,e))};a.subscribe((b)=>{if(b.$confirmed)switch(b.type){case r:return f();case q:return b.$userId?b.$userId===a.getState().me.userId?void 0:g(b.$userId):void 0;case u:return b.$userId?g(b.$userId,b.offer):void 0;}})},fa=(a,b,c)=>{switch(c.type){case t:{const c=b();return void k(c.rooms,(b,c)=>{a({type:q,$roomId:c})})}case s:{if(!c.$roomId)return;const d=b(),e=d.rooms[c.$roomId];return void(e&&e.pendingActions.forEach(a))}}};var ga=c(4),ha=c.n(ga);const ia=((a={})=>{const b=Object.assign({},P,a),c=X(b.reducer),d=M(b),e=(a)=>d.send(JSON.stringify(a)),f=G(e),g=[...b.middleware,I,f,K],h=j(c,b.initialState,g),i=O(h,b.actionCreators),k=Object.assign({},h,{createRoom:i});return d.onmessage=(a)=>{const b=JSON.parse(a.data);b.$confirmed=!0,b.$source=x,fa(e,h.getState,b),h.dispatch(b)},ea(h,b),k})({url:'ws:\\localhost',reducer:ha.a}).createRoom('test');var ja=c(1),ka=c.n(ja),la=(a)=>Object(f.h)('div',{class:'post'},Object(f.h)('h3',null,'title: ',a.title),Object(f.h)('p',null,'description: ',a.description),Object(f.h)('p',null,'owner: ',a.owner),Object(f.h)('p',null,'createdAt: ',a.createdAt),Object(f.h)('p',null,'updatedAt: ',a.updatedAt),Object(f.h)('p',null,'total: ',a.total),Object(f.h)('section',null,Object(f.h)('button',{class:'add',onclick:a.vote},'+'))),ma=(a)=>Object(f.h)('ul',{class:'post-list'},a?a.map((a)=>Object(f.h)('li',null,Object(f.h)(la,a))):'');const na=Object(f.app)({state:{num:0},actions:{create:()=>()=>(ia.dispatch({type:ja.CREATE,title:'Test Title',description:'Test Description'}),ia.getState()),updateState:()=>(a)=>a},view:(a)=>(b)=>Object(f.h)('div',null,Object(f.h)('h1',null,'UpSense'),Object(f.h)(ma,{posts:a.posts}),Object(f.h)('button',{class:'add',onclick:b.create},'+'))});ia.subscribe(na.updateState)},function(a,b,c){const d=c(5);a.exports=(a={posts:[]},b)=>{const c=b.postId;return c?Object.assign({},a,{[c]:d(a[c],b)}):a}},function(a,b,c){const d=c(6),{CREATE:e,UPDATE:f,VOTE:g}=c(1);a.exports=(a={votes:{}},b)=>{switch(b.type){case e:return{title:b.title,description:b.description,owner:b.$userId,createdAt:b.$timeMs,updatedAt:b.$timeMs,status:b.status,total:0};case f:return b.$userId===a.owner||b.$user.admin?Object.assign({},a,{title:b.title,description:b.description,updatedAt:b.$timeMs,status:b.status}):a;case g:{const c=d(a.votes,b),e=Object.values(c);return Object.assign({},a,{votes:c,total:e.reduce((a,b)=>a+b,0)})}default:return a;}}},function(a,b,c){const{VOTE:d}=c(1);a.exports=(a={},b)=>{switch(b.type){case d:return a[b.$userId]?Object.assign({},a,{[b.$userId]:0}):Object.assign({},a,{[b.$userId]:1});default:return a;}}},function(){}]);