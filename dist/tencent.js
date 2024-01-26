(()=>{var t={7:()=>{},200:()=>{},33:()=>{},843:t=>{"use strict";t.exports={}}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}(()=>{"use strict";var t,e,n;!function(t){t.Surge="Surge",t.Loon="Loon",t.QuanX="QuanX",t.Shadowrocket="Shadowrocket",t.Node="Node"}(t||(t={})),function(t){t.Response="http-response",t.Request="http-request",t.Script="run-script"}(e||(e={})),function(t){t[t.BASE=0]="BASE",t[t.HTTP=1]="HTTP",t[t.SYS=2]="SYS",t[t.OTHER=3]="OTHER"}(n||(n={}));class o extends Error{constructor(t,e=n.BASE){super(t),this.name="baseErr",this.code=e,this.stack=(new Error).stack,Object.setPrototypeOf(this,o.prototype)}}class i{constructor(t,e){this.isMute=!1,this.logList=[],this.logSeparator="\n\n",this.appName=t,this.namespace=e,this.startTime=(new Date).getTime(),this.log(`🔔${this.appName}, 开始!`),this.initAction(),this.initEnv();let n=this.getStore("mute");this.isMute="true"==n,s(843)}initAction(){"undefined"!=typeof $response?this.action=e.Response:"undefined"!=typeof $request?this.action=e.Request:this.action=e.Script,this.log("脚本类型为："+this.action)}async doAction(){switch(this.action){case e.Request:this.result=await this.doRequestAction($request);break;case e.Response:this.result=await this.doResponseAction($request,$response);break;case e.Script:this.result=await this.doScriptAction();break;default:this.log(this.appName,"Unknow Action","未知的脚本类型"),this.result=!1}!1===this.result&&this.msg(this.appName,"不合法的脚本","请检查脚本配置信息")}run(){this.doAction().catch((t=>{t instanceof o?(this.log(""+t.code),t.code==n.BASE?this.msg(this.appName,t.message,""):t.code==n.HTTP?Math.random()>.8?this.msg(this.appName,"网络异常："+t.message,""):this.log(this.appName,"网络异常Log:"+t.message,""):this.log(t.message,"")):this.log(t),this.result=this.ajaxFailResult(t.message||t)})).finally((()=>{this.done()}))}transParams(t){return Object.keys(t).map((e=>`${e}=${encodeURIComponent(t[e])}`)).join("&")}httpResponseResult(e,s={}){const n={status:this.env===t.QuanX?"HTTP/1.1 200":200,body:"string"==typeof e?e:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",...s}};return this.env===t.QuanX?n:{response:n}}randomString(t){for(var e="",s=0;s<t;s++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e}handelLogHttp(){this.log(`运行 》 ${this.appName}系统运行日志http服务器`);let t=this.getStore(i.APP_LOG_KEY)||"";const e=new RegExp(this.logSeparator,"g");return t=t.replace(e,"<br>"),this.httpResponseResult(t,{"Content-Type":"text/html;charset=utf-8"})}send(t){return new Promise(((e,s)=>{this.doRequest(t,((t,i,r)=>{t?s(new o(t,n.HTTP)):e(i)}))}))}async post(t){return t.method="post",await this.send(t)}async get(t){return t.method="get",await this.send(t)}doRequest(e,s=((t,e,s)=>{})){const n=e.method?e.method.toLocaleLowerCase():"post";e.body&&e.headers&&!e.headers["Content-Type"]&&(e.headers["Content-Type"]="application/x-www-form-urlencoded"),e.headers&&delete e.headers["Content-Length"],this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?(this.env==t.Surge&&this.isNeedRewrite&&(e.headers=e.headers||{},Object.assign(e.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[n](e,((t,e,n)=>{!t&&e&&(e.body=n,e.statusCode=e.status?e.status:e.statusCode,e.status=e.statusCode),s(t,e,n)}))):this.env==t.QuanX?(e.method=n,this.isNeedRewrite&&(e.opts=e.opts||{},Object.assign(e.opts,{hints:!1})),$task.fetch(e).then((t=>{const{statusCode:e,statusCode:n,headers:o,body:i}=t;s(null,{status:e,statusCode:n,headers:o,body:i},i)}),(t=>s(t&&t.error||"UndefinedError",null,null)))):this.env==t.Node&&this.print("nodejs http request",e,this.env)}sleep(t){return new Promise((e=>setTimeout(e,t)))}ajaxSuccessResult(t,e=null){let s={time:+new Date,datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:1,msg:t,data:e};return this.httpResponseResult(s)}ajaxFailResult(t,e=null){let s={time:+new Date,datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:0,msg:t,data:e};return this.httpResponseResult(s)}done(){const s=((new Date).getTime()-this.startTime)/1e3;if(this.action===e.Script&&this.print("运行 response: "+JSON.stringify(this.result)),this.log(`🔔${this.appName}, 结束! 🕛 ${s} 秒 ${this.logSeparator}`),this.env==t.Node)process.exit(1);else{let t=this.getStore(i.APP_LOG_KEY)||"";t=t.split(this.logSeparator).slice(0,1e4).join(this.logSeparator),t=this.logList.join("")+t,this.setStore(i.APP_LOG_KEY,t),this.print("注意本次运行日志已缓存到变量 "+this.namespace+"."+i.APP_LOG_KEY),this.result?$done(this.result):$done({})}}msg(e,s,n){this.isMute||(this.log("==============📣系统通知📣=============="+this.logSeparator+e+this.logSeparator+s+this.logSeparator+n),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$notification.post(e,s,n):this.env==t.QuanX&&$notify(e,s,n))}print(...t){t=t.map((t=>this.date("yyyy-MM-dd HH:mm:ss")+" "+t+this.logSeparator)),console.log(t.join(this.logSeparator))}log(...t){(t=t.map((t=>this.date("yyyy-MM-dd HH:mm:ss")+" "+("string"==typeof t?t:JSON.stringify(t))+this.logSeparator))).length>0&&(this.logList=[...this.logList,...t]),console.log(t.join(this.logSeparator))}getStore(e,s=!0){return s&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.read(e):this.env==t.QuanX?$prefs.valueForKey(e):null}setStore(e,s,n=!0){return n&&(e=this.namespace+"."+e),this.env==t.Surge||this.env==t.Shadowrocket||this.env==t.Loon?$persistentStore.write(s,e):this.env==t.QuanX&&$prefs.setValueForKey(s,e)}initEnv(){"undefined"!=typeof $task?this.env=t.QuanX:"undefined"!=typeof $loon?this.env=t.Loon:"undefined"!=typeof $rocket?this.env=t.Shadowrocket:"undefined"!=typeof $httpClient&&"undefined"==typeof $loon?this.env=t.Surge:this.env=t.Node,this.log("当前APP为: "+this.env)}date(t,e=""){const s=e?new Date(e):new Date;let n={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in n){let s=n[e];new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?s:("00"+s).substr((""+s).length)))}return t}getSignCount(){let t=this.getStore("sign_count"),e=this.date("yyyyMMdd");if(t){let[s,n]=t.split("_");return s==e&&n?Number(n):(this.setStore("sign_count",`${e}_0`),0)}return this.setStore("sign_count",`${e}_0`),0}incSignCount(){let t=this.getSignCount();t++;let e=this.date("yyyyMMdd");this.setStore("sign_count",`${e}_${t}`)}}i.APP_LOG_KEY="boxjs-log";const r=i;s(200),s(33),s(7);class a extends r{async doRequestAction(t){if(t.url.includes("tencent.log"))return this.handelLogHttp();if(t.url.includes("tencent.json")){let t="";try{t=await this.fetchGuidTokenToConnect()?"连接成功！":"连接失败！"}catch(e){let s="";e instanceof o&&(s=e.message),t="连接失败！出现异常，"+s}this.log(t);let e=this.renderHtml(t);return this.httpResponseResult(e,{"Content-Type":"text/html;charset=utf-8"})}return!1}renderHtml(t){const e=(+new Date-+new Date("2022-01-01"))/60/1e3;return`\n        <html>\n        <title>大王卡动态免流</title>\n        <link rel="icon" href="https://txwk.10010.com/favicon.ico" type="image/x-icon">\n        <link rel="shortcut icon" href="https://txwk.10010.com/favicon.ico" type="image/x-icon">\n        <link rel="apple-touch-icon" sizes="180x180" href="https://txwk.10010.com/favicon.ico">\n        <meta name=viewport content="width=device-width,user-scalable=no,initial-scale=1,minimum-scale=1,maximum-scale=1">\n        <style>\n            p{ padding:0px;margin: 0px;  color: #999; font-size: 15px;}\n            a{ color: #999;font-size: 15px;}\n        </style>\n        <body style="color:rgba(131, 109, 70, 0.8);">\n            <h1 align="center">腾讯大王卡动态免流</h1>\n            <h2 align="center" style='margin-top:30px'>${t}</h2>\n            <div style="position: fixed;bottom:5px;right:0px; width: 220px;height:90px;">\n                <p>@author gsonhub</p>\n                <p>@version ${parseInt(e+"").toString(36)}</p>\n                <p>power by shadowrocket script</p>\n                <p><a href="http://tencent.log">查看程序运行日志</a></p>\n                <div>\n        </body>\n        </html>\n        `}async doResponseAction(t,e){return!1}async doScriptAction(){let t=!0;if("network-changed"==$argument)this.log("network-changed:当网络改变时等待2s 保证VPN已经自动连接"),await this.sleep(2e3),t=!0;else if("network-check"==$argument){this.log("network-check:检查网络状态");const e=await this.checkConnectStatus();e&&(t=!1),this.log(e?"已连接":"连接异常，尝试重新连接")}else"network-token"==$argument&&(this.log("network-token:更新TOKEN"),t=!0);return t?await this.fetchGuidTokenToConnect():this.log("本次不更新token"),{}}async checkConnectStatus(t=!1){let e=!1,s="";try{const t=await this.get({url:"http://www.gstatic.com/generate_204"});204==t.status?e=!0:s=JSON.stringify(t)}catch(t){s=t}if(e)return!0;if(t)throw new o("测试连接状态，连接失败，"+s,n.HTTP);return!1}async fetchGuidTokenToConnect(){this.log("开始更新token");const t=await this.get({url:a.TOKEN_URL}),[e,s]=t.body.split(",");if(!/\w+/.test(e)||!/\w+/.test(s))throw new o("读取token失败!",n.HTTP);return this.log("连接代理服务器。。。",{guid:e,token:s}),this.get({url:`http://${e}.${s}.iikira.com.token`}).then().catch(),this.sleep(100),this.log("连接代理完成 待测试。。。",{guid:e,token:s}),await this.checkConnectStatus(!0)}}a.TOKEN_URL="http://kc.iikira.com/kingcard",new a("腾讯大王卡动态","gsonhub.tencent").run()})()})();