/*global setTimeout:true, clearTimeout:true */
/**
Shifty - A teeny tiny tweening engine in JavaScript. 
By Jeremy Kahn - jeremyckahn@gmail.com
  v0.4.6

For instructions on how to use Shifty, please consult the README: https://github.com/jeremyckahn/shifty/blob/master/README.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/
(function a(a){function b(){return+(new Date)}function c(a,b){var c;for(c in a)a.hasOwnProperty(c)&&b(a,c)}function d(a,b){return c(b,function(b,c){a[c]=b[c]}),a}function e(a,b){return c(b,function(b,c){typeof a[c]=="undefined"&&(a[c]=b[c])}),a}function f(a,b,c){var d,e;e=(a-b.timestamp)/b.duration;for(d in c.current)c.current.hasOwnProperty(d)&&b.to.hasOwnProperty(d)&&(c.current[d]=b.originalState[d]+(b.to[d]-b.originalState[d])*b.easingFunc(e));return c.current}function g(a,b){return setTimeout(a,1e3/b)}function h(a,b,c,d){var e;for(e=0;e<b[a].length;e++)b[a][e].apply(c,d)}function i(b,d,e){c(a.Tweenable.prototype.filter,function(a,c){a[c][b]&&a[c][b].apply(d,e)})}function j(a,c){var d;d=b(),d<a.timestamp+a.duration&&c.isAnimating?(c.loopId=g(function(){j(a,c)},a.owner.fps),i("beforeTween",a.owner,[c.current,a.originalState,a.to]),f(d,a,c),i("afterTween",a.owner,[c.current,a.originalState,a.to]),a.hook.step&&h("step",a.hook,a.owner,[c.current]),a.step.call(c.current)):a.owner.stop(!0)}function k(a){return a=a||{},this._hook={},this._tweenParams={owner:this,hook:this._hook,data:{}},this._state={},this._state.current=a.initialState||{},this.fps=a.fps||30,this.easing=a.easing||"linear",this.duration=a.duration||500,this}k.prototype.tween=function l(a,c,f,g,h){var j,k,l;if(this._state.isAnimating)return;return j=this,k=this._tweenParams,l=this._state,this._state.loopId=0,this._state.pausedAtTime=null,c?(k.step=function(){},k.to=c||{},k.duration=f||this.duration,k.callback=g||function(){},k.easing=h||this.easing,l.current=a||{}):(k.step=a.step||function(){},k.callback=a.callback||function(){},k.to=a.to||a.target||{},k.duration=a.duration||this.duration,k.easing=a.easing||this.easing,l.current=a.from||{}),k.timestamp=b(),k.easingFunc=this.formula[k.easing]||this.formula.linear,e(l.current,k.to),e(k.to,l.current),i("tweenCreated",k.owner,[l.current,k.originalState,k.to]),k.originalState=d({},l.current),l.isAnimating=!0,this.resume(),a.start&&a.start(),this},k.prototype.to=function(a,b,c,d){return typeof b=="undefined"?(a.from=this.get(),this.tween(a)):this.tween(this.get(),a,b,c,d),this},k.prototype.get=function(){return this._state.current},k.prototype.set=function(a){return this._state.current=a||{},this},k.prototype.stop=function(a){return clearTimeout(this._state.loopId),this._state.isAnimating=!1,a&&(d(this._state.current,this._tweenParams.to),i("afterTweenEnd",this,[this._state.current,this._tweenParams.originalState,this._tweenParams.to]),this._tweenParams.callback.call(this._state.current)),this},k.prototype.pause=function(){return clearTimeout(this._state.loopId),this._state.pausedAtTime=b(),this._state.isPaused=!0,this},k.prototype.resume=function(){var a;return a=this,this._state.isPaused&&(this._tweenParams.timestamp+=b()-this._state.pausedAtTime),j(a._tweenParams,a._state),this},k.prototype.hookAdd=function(a,b){this._hook.hasOwnProperty(a)||(this._hook[a]=[]),this._hook[a].push(b)},k.prototype.hookRemove=function(a,b){var c;if(!this._hook.hasOwnProperty(a))return;if(!b){this._hook[a]=[];return}for(c=this._hook[a].length;c>=0;c++)this._hook[a][c]===b&&this._hook[a].splice(c,1)},k.prototype.filter={},k.util={now:b,each:c,tweenProps:f,applyFilter:i,simpleCopy:d,weakCopy:e},k.prototype.formula={linear:function(a){return a}},typeof a.Tweenable=="undefined"&&(a.Tweenable=k)})(this),function(a){a.Tweenable.util.simpleCopy(a.Tweenable.prototype.formula,{easeInQuad:function(a){return Math.pow(a,2)},easeOutQuad:function(a){return-(Math.pow(a-1,2)-1)},easeInOutQuad:function(a){return(a/=.5)<1?.5*Math.pow(a,2):-0.5*((a-=2)*a-2)},easeInCubic:function(a){return Math.pow(a,3)},easeOutCubic:function(a){return Math.pow(a-1,3)+1},easeInOutCubic:function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},easeInQuart:function(a){return Math.pow(a,4)},easeOutQuart:function(a){return-(Math.pow(a-1,4)-1)},easeInOutQuart:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-0.5*((a-=2)*Math.pow(a,3)-2)},easeInQuint:function(a){return Math.pow(a,5)},easeOutQuint:function(a){return Math.pow(a-1,5)+1},easeInOutQuint:function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},easeInSine:function(a){return-Math.cos(a*(Math.PI/2))+1},easeOutSine:function(a){return Math.sin(a*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a)-1)},easeInExpo:function(a){return a==0?0:Math.pow(2,10*(a-1))},easeOutExpo:function(a){return a==1?1:-Math.pow(2,-10*a)+1},easeInOutExpo:function(a){return a==0?0:a==1?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return-(Math.sqrt(1-a*a)-1)},easeOutCirc:function(a){return Math.sqrt(1-Math.pow(a-1,2))},easeInOutCirc:function(a){return(a/=.5)<1?-0.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},easeInOutBack:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},elastic:function(a){return-1*Math.pow(4,-8*a)*Math.sin((a*6-1)*2*Math.PI/2)+1},swingFromTo:function(a){var b=1.70158;return(a/=.5)<1?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},swingFrom:function(a){var b=1.70158;return a*a*((b+1)*a-b)},swingTo:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},bounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},bouncePast:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?2-(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},easeFromTo:function(a){return(a/=.5)<1?.5*Math.pow(a,4):-0.5*((a-=2)*Math.pow(a,3)-2)},easeFrom:function(a){return Math.pow(a,4)},easeTo:function(a){return Math.pow(a,.25)}})}(this),function b(a){function b(a){a.shift(),a.length?a[0]():a.running=!1}function c(a,c){return function(){a(),b(c)}}function d(a,b,c,d,e,f){return function(){c?a.tween(b,c,d,e,f):(b.callback=e,b.from?a.tween(b):a.to(b))}}a.Tweenable.prototype.queue=function(a,b,e,f,g){var h;return this._tweenQueue||(this._tweenQueue=[]),f=f||a.callback||function(){},h=c(f,this._tweenQueue),this._tweenQueue.push(d(this,a,b,e,h,g)),this},a.Tweenable.prototype.queueStart=function(){return!this._tweenQueue.running&&this._tweenQueue.length>0&&(this._tweenQueue[0](),this._tweenQueue.running=!0),this},a.Tweenable.prototype.queueShift=function(){return this._tweenQueue.shift(),this},a.Tweenable.prototype.queuePop=function(){return this._tweenQueue.pop(),this},a.Tweenable.prototype.queueEmpty=function(){return this._tweenQueue.length=0,this},a.Tweenable.prototype.queueLength=function(){return this._tweenQueue.length}}(this),function c(a){function f(a){return parseInt(a,16)}function g(a){return a=a.replace(/#/g,""),a.length===3&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[f(a.substr(0,2)),f(a.substr(2,2)),f(a.substr(4,2))]}function h(a){var b,c;return b=g(a),c="rgb("+b[0]+","+b[1]+","+b[2]+")",c}function i(a){return typeof a=="string"&&(b.test(a)||c.test(a)||d.test(a))}function j(a){return typeof a=="string"&&(b.test(a)||c.test(a))}function k(b){a.Tweenable.util.each(b,function(a,b){j(a[b])&&(a[b]=h(a[b]))})}function l(b){var c;return c=[],a.Tweenable.util.each(b,function(a,b){i(a[b])&&c.push(b)}),c}function m(a){return a.match(/(\d+)/g)}function n(a,b){var c,d,e;d=b.length;for(c=0;c<d;c++)e=m(a[b[c]]),a["__r__"+b[c]]=+e[0],a["__g__"+b[c]]=+e[1],a["__b__"+b[c]]=+e[2],delete a[b[c]]}function o(a,b){var c,d;d=b.length;for(c=0;c<d;c++)a[b[c]]="rgb("+parseInt(a["__r__"+b[c]],10)+","+parseInt(a["__g__"+b[c]],10)+","+parseInt(a["__b__"+b[c]],10)+")",delete a["__r__"+b[c]],delete a["__g__"+b[c]],delete a["__b__"+b[c]]}var b=/^#([0-9]|[a-f]){3}$/i,c=/^#([0-9]|[a-f]){6}$/i,d=/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)\s*$/i,e;if(!a.Tweenable)return;a.Tweenable.prototype.filter.color={tweenCreated:function(a,b,c){k(a),k(b),k(c)},beforeTween:function(a,b,c){e=l(b),n(a,e),n(b,e),n(c,e)},afterTween:function(a,b,c){o(a,e),o(b,e),o(c,e)}}}(this),function d(a){function e(a){return typeof a=="string"&&b.test(a)}function f(c){var d;return d={},a.Tweenable.util.each(c,function(a,c){e(a[c])&&(d[c]={suffix:a[c].match(b)[0]})}),d}function g(b,d){a.Tweenable.util.each(d,function(a,d){b[d]=+b[d].replace(c,"")})}function h(b,c){a.Tweenable.util.each(c,function(a,c){b[c]=b[c]+a[c].suffix})}var b=/(px|em|%|pc|pt|mm|cm|in|ex)/i,c=/([a-z]|%)/gi,d;a.Tweenable.prototype.filter.token={beforeTween:function(a,b,c){d=f(b),g(a,d),g(b,d),g(c,d)},afterTween:function(a,b,c){h(a,d),h(b,d),h(c,d)}}}(this),function(a){function b(b,c,d,e,f){var g;return typeof f=="function"?g=f:g=a.Tweenable.prototype.formula[f]||a.Tweenable.prototype.formula.linear,a.Tweenable.util.tweenProps(e,{originalState:b,to:d,timestamp:0,duration:1,easingFunc:g},{current:c})}if(!a.Tweenable)return;a.Tweenable.util.interpolate=function(c,d,e,f){var g,h;return c&&c.from&&(d=c.to,e=c.position,f=c.easing,c=c.from),g=a.Tweenable.util.simpleCopy({},c),a.Tweenable.util.applyFilter("tweenCreated",g,[g,c,d]),a.Tweenable.util.applyFilter("beforeTween",g,[g,c,d]),h=b(c,g,d,e,f),a.Tweenable.util.applyFilter("afterTween",h,[h,c,d]),h},a.Tweenable.prototype.interpolate=function(b,c,d){var e;return e=a.Tweenable.util.interpolate(this.get(),b,c,d),this.set(e),e}}(this),function(){var a,b;a={},b={rotate:function(a,b){var c,d,e;return d=b*3.141592654/180,c=Math.cos(d),e=Math.sin(d),[c*a[0]-e*a[1],e*a[0]+c*a[1]]},scale:function(a,b){return[b*a[0],b*a[1]]},add:function(a,b){return[a[0]+b[0],a[1]+b[1]]},minus:function(a,b){return[a[0]-b[0],a[1]-b[1]]}},a.bezier=function(a){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;return a.start=$.extend({angle:0,length:.3333},a.start),a.end=$.extend({angle:0,length:.3333},a.end),(s=(o=a.start).x)==null&&(o.x=a.start.left),(t=(p=a.start).y)==null&&(p.y=a.start.top),(u=(q=a.end).x)==null&&(q.x=a.end.left),(v=(r=a.end).y)==null&&(r.y=a.end.top),g=[a.start.x,a.start.y],j=[a.end.x,a.end.y],l=b.minus(j,g),k=b.scale(l,a.start.length),k=b.rotate(k,a.start.angle),h=b.add(g,k),m=b.scale(l,-1),n=b.scale(m,a.end.length),n=b.rotate(n,a.end.angle),i=b.add(j,n),c=function(a){return a*a*a},d=function(a){return 3*a*a*(1-a)},e=function(a){return 3*a*(1-a)*(1-a)},f=function(a){return(1-a)*(1-a)*(1-a)},function(a){var b,k,l,m,n,o;return b=c(a),k=d(a),l=e(a),m=f(a),n=g[0]*b+h[0]*k+i[0]*l+j[0]*m,o=g[1]*b+h[1]*k+i[1]*l+j[1]*m,{top:o,left:n}}},a.arc=function(a){var b,c,d,e,f,g;b=a.center,e=a.radius,f=a.start,d=a.end,c=(g=a.dir)!=null?g:1;while(f>d&&c>0)f-=360;while(f<d&&c<0)f+=360;return function(a){var c,g,h;return c=f*a+d*(1-a),c=c*3.1415927/180,g=Math.sin(c)*e+b[0],h=Math.cos(c)*e+b[1],{top:h,left:g}}},this.Arc=a}.call(this),function(){var a,b=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},c=Object.prototype.hasOwnProperty;a=function(){function l(){}var a,d,e,f,g,h,i,j,k;return j={},k={},i=[],f=function(){var a,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u;e=[],k={},l={};for(o=0,r=i.length;o<r;o++){m=i[o],a=m.obj,m.element=document.getElementById(a),k[a]==null&&(e.push(a),k[a]=[],l[a]={}),g=[],h=function(a){var d,e,f,h;if(typeof m[a]=="string"){if(e=m[a],b.call(g,e)<0)return g.push(m[a])}else if(typeof m[a]=="object"){f=m[a],h=[];for(d in f){if(!c.call(f,d))continue;h.push(b.call(g,d)<0?g.push(d):void 0)}return h}},h("from"),h("to");for(p=0,s=g.length;p<s;p++)f=g[p],(u=(n=l[a])[f])==null&&(n[f]=[]),l[a][f].push(m);k[a].push(m)}for(q=0,t=e.length;q<t;q++){d=e[q],k[d]=k[d].sort(function(a,b){return a.start-b.start}),j=l[d];for(f in j){if(!c.call(j,f))continue;j[f]=j[f].sort(function(a,b){return a.start-b.start})}}return[k,l]},h=function(a,b,c){var d,e,f,g;f=k[a][c];for(d=g=f.length-1;d>=0;d+=-1){e=f[d];if(e.start<=b)return e}},a=function(a,b,c){var d,e,f;return f=k[a][c],d=function(){var a,c,d;d=[];for(a=0,c=f.length;a<c;a++)e=f[a],e.start<=b&&b<e.end&&d.push(e);return d}()},d=function(a,b){var d,f,g;f=[],g=k[a];for(d in g){if(!c.call(g,d))continue;f=f.concat(e(a,b,d))}return f},e=function(b,c,d){var e,f;return e=a(b,c,d),e.length?e:(f=h(b,c,d),f?[f]:[])},g=function(a,b){var c,d,e,f,g,h,i,j,k;return f=a.prop,a.end==null?(typeof a.from=="object"?j=a.from:j[f]=a.from,j):(d={},typeof a.from=="object"?d=a.from:d[f]=a.from,k={},typeof a.to=="object"?k=a.to:k[f]=a.to,g=b-a.start,h=a.end-a.start,e=g/h,g<=0&&(e=0),b>=a.end&&(e=1),a.arcFunc!=null?(i=a.arcFunc(1-e),i.top+=a.units,i.left+=a.units,i):(c=a.easing!=null?a.easing:this.prototype.defaultEasing,Tweenable.util.interpolate({from:d,to:k,position:e,easing:c})))},l.defaultEasing="linear",l.setCSSProperty=function(a,b,c){return a.style[b]=c},l.ready=function(){var a;return a=f(),j=a[0],k=a[1],this.render(0)},l.render=function(a){var b,e,f,h,i,k,l,m;for(b in j){if(!c.call(j,b))continue;k=d(b,a);for(l=0,m=k.length;l<m;l++){i=k[l],e=g(i,a);for(f in e){if(!c.call(e,f))continue;h=e[f],f==="opacity"&&h>0&&this.setCSSProperty(i.element,"display","block"),this.setCSSProperty(i.element,f,h),f==="opacity"&&h<=0&&this.setCSSProperty(i.element,"display","none")}}}return a},l.pushTransition=function(a){var b,c;return b=a.from,c=a.to,a.arc!=null?(a.arcFunc=Arc.arc(a.arc),a.from={top:0,left:0},a.to={top:0,left:0}):a.bezier!=null&&(a.arcFunc=Arc.bezier(a.bezier),a.from={top:0,left:0},a.to={top:0,left:0}),i.push(a)},l}(),this.Timeline=a}.call(this),function(){var a,b;b=function(b){return new a(b)},a=function(){function a(a){this.selector=a,this.moveTo(0)}return a}(),b.dataStore=Timeline,b.fn=a.prototype={_push:function(a){return b.dataStore.pushTransition(a),this},change:function(a){return this._push({obj:this.selector,from:a,start:this.currentPosition})},start:function(a){return this._push({obj:this.selector,from:a,start:0})},moveTo:function(a){return this.currentPosition=a,this},bezier:function(a){var b,c,d;return b=(c=a.end)!=null?c:this.currentPosition+a.duration,this._push({obj:this.selector,bezier:{start:a.from,end:a.to},units:(d=a.units)!=null?d:"px",start:this.currentPosition,end:b})},arc:function(a){var b,c,d;return b=(c=a.end)!=null?c:this.currentPosition+a.duration,this._push({obj:this.selector,arc:{center:a.center,radius:a.radius,start:a.from,end:a.to,dir:a.dir},units:(d=a.units)!=null?d:"px",start:this.currentPosition,end:b})},tween:function(a){var b,c,d,e;return b=(d=a.easing)!=null?d:"linear",c=(e=a.end)!=null?e:this.currentPosition+a.duration,this._push({obj:this.selector,from:a.from,to:a.to,start:this.currentPosition,end:c,easing:b})},show:function(){return this.change({opacity:1})},hide:function(){return this.change({opacity:0})},fadeIn:function(a,b,c){return this.tween({from:{opacity:0},to:{opacity:c!=null?c:1},duration:a,easing:b})},fadeOut:function(a,b,c){return this.tween({from:{opacity:0},to:{opacity:c!=null?c:0},duration:a,easing:b})}},this.T=b}.call(this),function(){}.call(this)