(()=>{var t={182:()=>{},969:t=>{"use strict";t.exports={}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}(()=>{"use strict";var t,e,o=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});!function(t){t[t.BASE=0]="BASE",t[t.HTTP=1]="HTTP",t[t.SYS=2]="SYS",t[t.OTHER=3]="OTHER"}(e||(e={}));const r=function(t){function n(o,r){void 0===r&&(r=e.BASE);var s=t.call(this,o)||this;return s.name="baseErr",s.code=r,s.stack=(new Error).stack,Object.setPrototypeOf(s,n.prototype),s}return o(n,t),n}(Error);var s,i=function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function i(t){try{u(o.next(t))}catch(t){s(t)}}function a(t){try{u(o.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}u((o=o.apply(t,e||[])).next())}))},a=function(t,e){var n,o,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},u=function(t,e,n){if(n||2===arguments.length)for(var o,r=0,s=e.length;r<s;r++)!o&&r in e||(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))};!function(t){t[t.Surge=0]="Surge",t[t.Loon=1]="Loon",t[t.QuanX=2]="QuanX",t[t.Shadowrocket=3]="Shadowrocket",t[t.Node=4]="Node"}(s||(s={}));const c=function(){function t(t,e){this.isMute=!1,this.response={},this.name=t,this.namespace=e,this.logMsg=[],this.logSeparator="",this.startTime=(new Date).getTime(),this.log("🔔".concat(this.name,", 开始!\n")),this.initEnv(),this.log("当前环境为："+this.env);var n=this.getStore("mute",!0);this.isMute="true"==n}return t.prototype.run=function(){var t=this;this.doAction().catch((function(n){n instanceof r?n.code==e.BASE?t.msg(t.name,n.message,n.stack):n.code==e.HTTP?Math.random()>.5?t.msg(t.name,"网络异常："+n.message,n.stack):t.log(t.name,"网络异常："+n.message,n.stack):t.log(n.message,n.stack):t.log(n),t.ajaxFail(n.message||n)})).finally((function(){t.done()}))},t.prototype.transParams=function(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&")},t.prototype.random=function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length,r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*o));return e},t.prototype.done=function(){var e=((new Date).getTime()-this.startTime)/1e3;if(console.log("response: "+JSON.stringify(this.response)),this.log("🔔".concat(this.name,", 结束! 🕛 ").concat(e," 秒")),this.env==s.Node)process.exit(1);else{var n="\n"+this.getStore(t.APP_LOG_KEY,!0);n=n.split("\n").slice(0,1e4).join("\n"),n=this.logMsg.reverse().join("\n")+(n||""),this.setStore(t.APP_LOG_KEY,n,!0),console.log("注意本次运行日志已缓存到变量 ".concat(this.namespace+"."+t.APP_LOG_KEY)),$done(this.response)}},t.prototype.getStore=function(t,e){return void 0===e&&(e=!1),e&&(t=this.namespace+"."+t),this.env==s.Surge||this.env==s.Shadowrocket||this.env==s.Loon?$persistentStore.read(t):this.env==s.QuanX?$prefs.valueForKey(t):null},t.prototype.handelLogHttp=function(){this.log("运行 》 ".concat(this.name,"系统运行日志http服务器"));var e=this.getStore(t.APP_LOG_KEY,!0);e=(e=e||"").replace(/\n/g,"<br>"),this.httpResponse(e,{"Content-Type":"text/html;charset=utf-8"})},t.prototype.msg=function(t,e,n){this.log("==============📣系统通知📣==============\n"+t+"\n"+e+"\n"+n),this.isMute||(this.env==s.Surge||this.env==s.Shadowrocket||this.env==s.Loon?$notification.post(t,e,n):this.env==s.QuanX&&$notify(t,e,n))},t.prototype.log=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(e=e.map((function(e){return t.date("yyyy-MM-dd HH:mm:ss")+" "+e}))).length>0&&(this.logMsg=u(u([],this.logMsg,!0),e,!0)),console.log(e.join(this.logSeparator))},t.prototype.date=function(t,e){void 0===e&&(e=null);var n=e?new Date(e):new Date,o={"M+":n.getMonth()+1,"d+":n.getDate(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),o){var s=o[r];new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s:("00"+s).substr((""+s).length)))}return t},t.prototype.httpResponse=function(t,e){void 0===e&&(e={});var n=Object.assign({"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},e);this.response={response:{status:200,body:"string"==typeof t?t:JSON.stringify(t),headers:n}}},t.prototype.ajaxSuccess=function(t,e){void 0===e&&(e=null);var n={time:(new Date).getTime(),datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:1,msg:t,data:e};this.httpResponse(n)},t.prototype.ajaxFail=function(t,e){void 0===e&&(e=null);var n={time:(new Date).getTime(),datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:0,msg:t,data:e};this.httpResponse(n)},t.prototype.send=function(t){var n=this;return new Promise((function(o,s){n.doRequest(t,(function(t,n,i){t?s(new r(t,e.HTTP)):o(n)}))}))},t.prototype.post=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return t.method="post",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.get=function(t){return i(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return t.method="get",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.doRequest=function(t,e){void 0===e&&(e=function(t,e,n){});var n=t.method?t.method.toLocaleLowerCase():"post";t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.env==s.Surge||this.env==s.Shadowrocket||this.env==s.Loon?(this.env==s.Surge&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[n](t,(function(t,n,o){!t&&n&&(n.body=o,n.statusCode=n.status?n.status:n.statusCode,n.status=n.statusCode),e(t,n,o)}))):this.env==s.QuanX?(t.method=n,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((function(t){var n=t.statusCode,o=t.statusCode,r=t.headers,s=t.body;e(null,{status:n,statusCode:o,headers:r,body:s},s)}),(function(t){return e(t&&t.error||"UndefinedError",null,null)}))):this.env==s.Node&&console.log(this.env)},t.prototype.setStore=function(t,e,n){return void 0===n&&(n=!1),n&&(t=this.namespace+"."+t),this.env==s.Surge||this.env==s.Shadowrocket||this.env==s.Loon?$persistentStore.write(e,t):this.env==s.QuanX&&$prefs.setValueForKey(e,t)},t.prototype.initEnv=function(){"undefined"!=typeof $task?this.env=s.QuanX:"undefined"!=typeof $httpClient&&"undefined"==typeof $loon?this.env=s.Surge:"undefined"!=typeof $loon?this.env=s.Loon:"undefined"!=typeof $rocket?this.env=s.Shadowrocket:this.env=s.Node},t.APP_LOG_KEY="boxjs-log",t}();var l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function i(t){try{u(o.next(t))}catch(t){s(t)}}function a(t){try{u(o.throw(t))}catch(t){s(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}u((o=o.apply(t,e||[])).next())}))},p=function(t,e){var n,o,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&s[0]?o.return:s[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;switch(o=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,o=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],o=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.signurlKey="sign_url",e.signheaderKey="sign_header",e}return l(e,t),e.prototype.handelSign=function(){return h(this,void 0,void 0,(function(){var t,e,n,o,s;return p(this,(function(i){switch(i.label){case 0:return this.log("运行 》 筋斗云签到"),t=JSON.parse(this.getStore(this.signheaderKey,!0)),e=this.getStore(this.signurlKey,!0),n=/https?:\/\/.*?\//.exec(e)[0],o={url:"".concat(n,"user/checkin"),headers:t},this.log("Http request:"+o.url),[4,this.post(o)];case 1:s=i.sent();try{s=JSON.parse(s.body)}catch(t){throw new r("登录状态可能已经失效"+t)}return this.msg(this.name,s.msg,JSON.stringify(s)),[2]}}))}))},e.prototype.handelSignCookie=function(){this.log("运行 》 获取筋斗云COOKIE"),this.setStore(this.signurlKey,$request.url,!0),this.setStore(this.signheaderKey,JSON.stringify($request.headers),!0),this.msg(this.name,"获取Cookie: 成功 (筋斗云)","")},e.prototype.handelWebHttp=function(){return h(this,void 0,void 0,(function(){var t,e,n,o,s;return p(this,(function(i){switch(i.label){case 0:return this.log("运行 》  筋斗云个人信息查询http服务器"),t=this.getStore(this.signurlKey,!0),e=JSON.parse(this.getStore(this.signheaderKey,!0)),n={url:t,headers:e},o=null,[4,this.get(n)];case 1:s=i.sent();try{o=this.fetchJindouyun(s.body)}catch(t){throw new r("获取筋斗云个人信息失败，登录状态可能已经失效:"+t)}return this.ajaxSuccess("获取筋斗云个人信息成功",o),[2]}}))}))},e.prototype.doAction=function(){return h(this,void 0,void 0,(function(){return p(this,(function(t){switch(t.label){case 0:return"undefined"==typeof $request||"OPTIONS"==$request.method?[3,7]:/^https?:\/\/(www\.|)somersaultcloud\.(xyz|top)\/user$/.test($request.url)?(this.handelSignCookie(),[3,6]):[3,1];case 1:return/^https?:\/\/somersaultcloud\.json/.test($request.url)?[4,this.handelWebHttp()]:[3,3];case 2:return t.sent(),[3,6];case 3:return/^https?:\/\/somersaultcloud\.log/.test($request.url)?(this.handelLogHttp(),[3,6]):[3,4];case 4:return[4,this.handelSign()];case 5:t.sent(),t.label=6;case 6:return[3,9];case 7:return[4,this.handelSign()];case 8:t.sent(),t.label=9;case 9:return[2]}}))}))},e.prototype.fetchJindouyun=function(t){var e=/<h4>剩余流量<\/h4>\n\s+<\/div>\n\s+<div class="card-body">\n\s+<span class="counter">(.*)?<\/span> (MB|GB|KB)/.exec(t),n=e[1],o=e[2],r=/<h4>同时在线设备数<\/h4>\n\s+<\/div>\n\s+<div class="card-body">\n\s+<span class="counter">(\d+)<\/span> \/ <span class="counterup">(\d+)<\/span>/.exec(t),s={remain_flow:n+o,online:r[1],sum:r[2],used_flow:/今日已用: (.*?)<\/li>/.exec(t)[1],last_used_date:/上次使用时间: (.*?)<\/li>/.exec(t)[1],momey:/<h4>钱包余额<\/h4>\n\s+<\/div>\n\s+<div class="card-body">\n\s+¥\s+<span class="counter">(.*)?<\/span>/.exec(t)[1],commission:/累计获得返利金额: ¥(.*?)<\/li>/.exec(t)[1]};return this.log("↓ fetchJindouyun"),this.log(JSON.stringify(s)),s},e}(c);n(969),n(182),new d("筋斗云","gsonhub.somersaultcloud").run()})()})();