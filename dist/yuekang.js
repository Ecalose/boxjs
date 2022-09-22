(()=>{var t={377:t=>{var e,n,r=r||function(t,e){var n={},r=n.lib={},o=function(){},i=r.Base={extend:function(t){o.prototype=this;var e=new o;return t&&e.mixIn(t),e.hasOwnProperty("init")||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=r.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes;if(t=t.sigBytes,this.clamp(),r%4)for(var o=0;o<t;o++)e[r+o>>>2]|=(n[o>>>2]>>>24-o%4*8&255)<<24-(r+o)%4*8;else if(65535<n.length)for(o=0;o<t;o+=4)e[r+o>>>2]=n[o>>>2];else e.push.apply(e,n);return this.sigBytes+=t,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n=[],r=0;r<e;r+=4)n.push(4294967296*t.random()|0);return new s.init(n,e)}}),c=n.enc={},a=c.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var n=[],r=0;r<t;r++){var o=e[r>>>2]>>>24-r%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new s.init(n,e/2)}},u=c.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var n=[],r=0;r<t;r++)n.push(String.fromCharCode(e[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new s.init(n,e)}},h=c.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},f=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,c=o/(4*i);if(e=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*i,o=t.min(4*e,o),e){for(var a=0;a<e;a+=i)this._doProcessBlock(r,a);a=r.splice(0,e),n.sigBytes-=o}return new s.init(a,o)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});r.Hasher=f.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new p.HMAC.init(t,n).finalize(e)}}});var p=n.algo={};return n}(Math);n=(e=r).lib.WordArray,e.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp(),t=[];for(var o=0;o<n;o+=3)for(var i=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;4>s&&o+.75*s<n;s++)t.push(r.charAt(i>>>6*(3-s)&63));if(e=r.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var e=t.length,r=this._map;(o=r.charAt(64))&&-1!=(o=t.indexOf(o))&&(e=o);for(var o=[],i=0,s=0;s<e;s++)if(s%4){var c=r.indexOf(t.charAt(s-1))<<s%4*2,a=r.indexOf(t.charAt(s))>>>6-s%4*2;o[i>>>2]|=(c|a)<<24-i%4*8,i++}return n.create(o,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(t){function e(t,e,n,r,o,i,s){return((t=t+(e&n|~e&r)+o+s)<<i|t>>>32-i)+e}function n(t,e,n,r,o,i,s){return((t=t+(e&r|n&~r)+o+s)<<i|t>>>32-i)+e}function o(t,e,n,r,o,i,s){return((t=t+(e^n^r)+o+s)<<i|t>>>32-i)+e}function i(t,e,n,r,o,i,s){return((t=t+(n^(e|~r))+o+s)<<i|t>>>32-i)+e}for(var s=r,c=(u=s.lib).WordArray,a=u.Hasher,u=s.algo,h=[],f=0;64>f;f++)h[f]=4294967296*t.abs(t.sin(f+1))|0;u=u.MD5=a.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,r){for(var s=0;16>s;s++){var c=t[f=r+s];t[f]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}s=this._hash.words;var a,u,f=t[r+0],p=(c=t[r+1],t[r+2]),l=t[r+3],d=t[r+4],y=t[r+5],g=t[r+6],v=t[r+7],_=t[r+8],m=t[r+9],S=t[r+10],w=t[r+11],k=t[r+12],x=t[r+13],b=t[r+14],B=t[r+15],E=s[0],O=i(O=i(O=i(O=i(O=o(O=o(O=o(O=o(O=n(O=n(O=n(O=n(O=e(O=e(O=e(O=e(O=s[1],u=e(u=s[2],a=e(a=s[3],E=e(E,O,u,a,f,7,h[0]),O,u,c,12,h[1]),E,O,p,17,h[2]),a,E,l,22,h[3]),u=e(u,a=e(a,E=e(E,O,u,a,d,7,h[4]),O,u,y,12,h[5]),E,O,g,17,h[6]),a,E,v,22,h[7]),u=e(u,a=e(a,E=e(E,O,u,a,_,7,h[8]),O,u,m,12,h[9]),E,O,S,17,h[10]),a,E,w,22,h[11]),u=e(u,a=e(a,E=e(E,O,u,a,k,7,h[12]),O,u,x,12,h[13]),E,O,b,17,h[14]),a,E,B,22,h[15]),u=n(u,a=n(a,E=n(E,O,u,a,c,5,h[16]),O,u,g,9,h[17]),E,O,w,14,h[18]),a,E,f,20,h[19]),u=n(u,a=n(a,E=n(E,O,u,a,y,5,h[20]),O,u,S,9,h[21]),E,O,B,14,h[22]),a,E,d,20,h[23]),u=n(u,a=n(a,E=n(E,O,u,a,m,5,h[24]),O,u,b,9,h[25]),E,O,l,14,h[26]),a,E,_,20,h[27]),u=n(u,a=n(a,E=n(E,O,u,a,x,5,h[28]),O,u,p,9,h[29]),E,O,v,14,h[30]),a,E,k,20,h[31]),u=o(u,a=o(a,E=o(E,O,u,a,y,4,h[32]),O,u,_,11,h[33]),E,O,w,16,h[34]),a,E,b,23,h[35]),u=o(u,a=o(a,E=o(E,O,u,a,c,4,h[36]),O,u,d,11,h[37]),E,O,v,16,h[38]),a,E,S,23,h[39]),u=o(u,a=o(a,E=o(E,O,u,a,x,4,h[40]),O,u,f,11,h[41]),E,O,l,16,h[42]),a,E,g,23,h[43]),u=o(u,a=o(a,E=o(E,O,u,a,m,4,h[44]),O,u,k,11,h[45]),E,O,B,16,h[46]),a,E,p,23,h[47]),u=i(u,a=i(a,E=i(E,O,u,a,f,6,h[48]),O,u,v,10,h[49]),E,O,b,15,h[50]),a,E,y,21,h[51]),u=i(u,a=i(a,E=i(E,O,u,a,k,6,h[52]),O,u,l,10,h[53]),E,O,S,15,h[54]),a,E,c,21,h[55]),u=i(u,a=i(a,E=i(E,O,u,a,_,6,h[56]),O,u,B,10,h[57]),E,O,g,15,h[58]),a,E,x,21,h[59]),u=i(u,a=i(a,E=i(E,O,u,a,d,6,h[60]),O,u,w,10,h[61]),E,O,p,15,h[62]),a,E,m,21,h[63]);s[0]=s[0]+E|0,s[1]=s[1]+O|0,s[2]=s[2]+u|0,s[3]=s[3]+a|0},_doFinalize:function(){var e=this._data,n=e.words,r=8*this._nDataBytes,o=8*e.sigBytes;n[o>>>5]|=128<<24-o%32;var i=t.floor(r/4294967296);for(n[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),n[14+(o+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),e.sigBytes=4*(n.length+1),this._process(),n=(e=this._hash).words,r=0;4>r;r++)o=n[r],n[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8);return e},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}}),s.MD5=a._createHelper(u),s.HmacMD5=a._createHmacHelper(u)}(Math),function(){var t,e=r,n=(t=e.lib).Base,o=t.WordArray,i=(t=e.algo).EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var n=(c=this.cfg).hasher.create(),r=o.create(),i=r.words,s=c.keySize,c=c.iterations;i.length<s;){a&&n.update(a);var a=n.update(t).finalize(e);n.reset();for(var u=1;u<c;u++)a=n.finalize(a),n.reset();r.concat(a)}return r.sigBytes=4*s,r}});e.EvpKDF=function(t,e,n){return i.create(n).compute(t,e)}}(),r.lib.Cipher||function(t){var e=(d=r).lib,n=e.Base,o=e.WordArray,i=e.BufferedBlockAlgorithm,s=d.enc.Base64,c=d.algo.EvpKDF,a=e.Cipher=i.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,n){this.cfg=this.cfg.extend(n),this._xformMode=t,this._key=e,this.reset()},reset:function(){i.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(t){return{encrypt:function(e,n,r){return("string"==typeof n?y:l).encrypt(t,e,n,r)},decrypt:function(e,n,r){return("string"==typeof n?y:l).decrypt(t,e,n,r)}}}});e.StreamCipher=a.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var u=d.mode={},h=function(t,e,n){var r=this._iv;r?this._iv=void 0:r=this._prevBlock;for(var o=0;o<n;o++)t[e+o]^=r[o]},f=(e.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}})).extend();f.Encryptor=f.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize;h.call(this,t,e,r),n.encryptBlock(t,e),this._prevBlock=t.slice(e,e+r)}}),f.Decryptor=f.extend({processBlock:function(t,e){var n=this._cipher,r=n.blockSize,o=t.slice(e,e+r);n.decryptBlock(t,e),h.call(this,t,e,r),this._prevBlock=o}}),u=u.CBC=f,f=(d.pad={}).Pkcs7={pad:function(t,e){for(var n,r=(n=(n=4*e)-t.sigBytes%n)<<24|n<<16|n<<8|n,i=[],s=0;s<n;s+=4)i.push(r);n=o.create(i,n),t.concat(n)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}},e.BlockCipher=a.extend({cfg:a.cfg.extend({mode:u,padding:f}),reset:function(){a.reset.call(this);var t=(e=this.cfg).iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var p=e.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),l=(u=(d.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return((t=t.salt)?o.create([1398893684,1701076831]).concat(t).concat(e):e).toString(s)},parse:function(t){var e=(t=s.parse(t)).words;if(1398893684==e[0]&&1701076831==e[1]){var n=o.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return p.create({ciphertext:t,salt:n})}},e.SerializableCipher=n.extend({cfg:n.extend({format:u}),encrypt:function(t,e,n,r){r=this.cfg.extend(r);var o=t.createEncryptor(n,r);return e=o.finalize(e),o=o.cfg,p.create({ciphertext:e,key:n,iv:o.iv,algorithm:t,mode:o.mode,padding:o.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),t.createDecryptor(n,r).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}})),d=(d.kdf={}).OpenSSL={execute:function(t,e,n,r){return r||(r=o.random(8)),t=c.create({keySize:e+n}).compute(t,r),n=o.create(t.words.slice(e),4*n),t.sigBytes=4*e,p.create({key:t,iv:n,salt:r})}},y=e.PasswordBasedCipher=l.extend({cfg:l.cfg.extend({kdf:d}),encrypt:function(t,e,n,r){return n=(r=this.cfg.extend(r)).kdf.execute(n,t.keySize,t.ivSize),r.iv=n.iv,(t=l.encrypt.call(this,t,e,n.key,r)).mixIn(n),t},decrypt:function(t,e,n,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),n=r.kdf.execute(n,t.keySize,t.ivSize,e.salt),r.iv=n.iv,l.decrypt.call(this,t,e,n.key,r)}})}(),function(){for(var t=r,e=t.lib.BlockCipher,n=t.algo,o=[],i=[],s=[],c=[],a=[],u=[],h=[],f=[],p=[],l=[],d=[],y=0;256>y;y++)d[y]=128>y?y<<1:y<<1^283;var g=0,v=0;for(y=0;256>y;y++){var _=(_=v^v<<1^v<<2^v<<3^v<<4)>>>8^255&_^99;o[g]=_,i[_]=g;var m=d[g],S=d[m],w=d[S],k=257*d[_]^16843008*_;s[g]=k<<24|k>>>8,c[g]=k<<16|k>>>16,a[g]=k<<8|k>>>24,u[g]=k,k=16843009*w^65537*S^257*m^16843008*g,h[_]=k<<24|k>>>8,f[_]=k<<16|k>>>16,p[_]=k<<8|k>>>24,l[_]=k,g?(g=m^d[d[d[w^m]]],v^=d[d[v]]):g=v=1}var x=[0,1,2,4,8,16,32,64,128,27,54];n=n.AES=e.extend({_doReset:function(){for(var t=(n=this._key).words,e=n.sigBytes/4,n=4*((this._nRounds=e+6)+1),r=this._keySchedule=[],i=0;i<n;i++)if(i<e)r[i]=t[i];else{var s=r[i-1];i%e?6<e&&4==i%e&&(s=o[s>>>24]<<24|o[s>>>16&255]<<16|o[s>>>8&255]<<8|o[255&s]):(s=o[(s=s<<8|s>>>24)>>>24]<<24|o[s>>>16&255]<<16|o[s>>>8&255]<<8|o[255&s],s^=x[i/e|0]<<24),r[i]=r[i-e]^s}for(t=this._invKeySchedule=[],e=0;e<n;e++)i=n-e,s=e%4?r[i]:r[i-4],t[e]=4>e||4>=i?s:h[o[s>>>24]]^f[o[s>>>16&255]]^p[o[s>>>8&255]]^l[o[255&s]]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,c,a,u,o)},decryptBlock:function(t,e){var n=t[e+1];t[e+1]=t[e+3],t[e+3]=n,this._doCryptBlock(t,e,this._invKeySchedule,h,f,p,l,i),n=t[e+1],t[e+1]=t[e+3],t[e+3]=n},_doCryptBlock:function(t,e,n,r,o,i,s,c){for(var a=this._nRounds,u=t[e]^n[0],h=t[e+1]^n[1],f=t[e+2]^n[2],p=t[e+3]^n[3],l=4,d=1;d<a;d++){var y=r[u>>>24]^o[h>>>16&255]^i[f>>>8&255]^s[255&p]^n[l++],g=r[h>>>24]^o[f>>>16&255]^i[p>>>8&255]^s[255&u]^n[l++],v=r[f>>>24]^o[p>>>16&255]^i[u>>>8&255]^s[255&h]^n[l++];p=r[p>>>24]^o[u>>>16&255]^i[h>>>8&255]^s[255&f]^n[l++],u=y,h=g,f=v}y=(c[u>>>24]<<24|c[h>>>16&255]<<16|c[f>>>8&255]<<8|c[255&p])^n[l++],g=(c[h>>>24]<<24|c[f>>>16&255]<<16|c[p>>>8&255]<<8|c[255&u])^n[l++],v=(c[f>>>24]<<24|c[p>>>16&255]<<16|c[u>>>8&255]<<8|c[255&h])^n[l++],p=(c[p>>>24]<<24|c[u>>>16&255]<<16|c[h>>>8&255]<<8|c[255&f])^n[l++],t[e]=y,t[e+1]=g,t[e+2]=v,t[e+3]=p},keySize:8}),t.AES=e._createHelper(n)}(),r.mode.ECB=function(){var t=r.lib.BlockCipherMode.extend();return t.Encryptor=t.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),t.Decryptor=t.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),t}(),t.exports=r},182:()=>{},969:t=>{"use strict";t.exports={}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";var t,e,r=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)});!function(t){t[t.BASE=0]="BASE",t[t.HTTP=1]="HTTP",t[t.SYS=2]="SYS",t[t.OTHER=3]="OTHER"}(e||(e={}));const o=function(t){function n(r,o){void 0===o&&(o=e.BASE);var i=t.call(this,r)||this;return i.name="baseErr",i.code=o,i.stack=(new Error).stack,Object.setPrototypeOf(i,n.prototype),i}return r(n,t),n}(Error);var i,s=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))};!function(t){t[t.Surge=0]="Surge",t[t.Loon=1]="Loon",t[t.QuanX=2]="QuanX",t[t.Shadowrocket=3]="Shadowrocket",t[t.Node=4]="Node"}(i||(i={}));const u=function(){function t(t,e){this.isMute=!1,this.response={},this.name=t,this.namespace=e,this.logMsg=[],this.logSeparator="",this.startTime=(new Date).getTime(),this.log("🔔".concat(this.name,", 开始!\n")),this.initEnv(),this.log("当前环境为："+this.env);var n=this.getStore("mute",!0);this.isMute="true"==n}return t.prototype.run=function(){var t=this;this.doAction().catch((function(n){n instanceof o?n.code==e.BASE?t.msg(t.name,n.message,n.stack):n.code==e.HTTP?Math.random()>.8?t.msg(t.name,"网络异常："+n.message,n.stack):t.log(t.name,"网络异常Log："+n.message,n.stack):t.log(n.message,n.stack):t.log(n),t.ajaxFail(n.message||n)})).finally((function(){t.done()}))},t.prototype.transParams=function(t){return Object.keys(t).map((function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))})).join("&")},t.prototype.random=function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,o=0;o<t;o++)e+=n.charAt(Math.floor(Math.random()*r));return e},t.prototype.done=function(){var e=((new Date).getTime()-this.startTime)/1e3;if(console.log("response: "+JSON.stringify(this.response)),this.log("🔔".concat(this.name,", 结束! 🕛 ").concat(e," 秒")),this.env==i.Node)process.exit(1);else{var n="\n"+this.getStore(t.APP_LOG_KEY,!0);n=n.split("\n").slice(0,1e4).join("\n"),n=this.logMsg.reverse().join("\n")+(n||""),this.setStore(t.APP_LOG_KEY,n,!0),console.log("注意本次运行日志已缓存到变量 ".concat(this.namespace+"."+t.APP_LOG_KEY)),$done(this.response)}},t.prototype.getStore=function(t,e){return void 0===e&&(e=!1),e&&(t=this.namespace+"."+t),this.env==i.Surge||this.env==i.Shadowrocket||this.env==i.Loon?$persistentStore.read(t):this.env==i.QuanX?$prefs.valueForKey(t):null},t.prototype.handelLogHttp=function(){this.log("运行 》 ".concat(this.name,"系统运行日志http服务器"));var e=this.getStore(t.APP_LOG_KEY,!0);e=(e=e||"").replace(/\n/g,"<br>"),this.httpResponse(e,{"Content-Type":"text/html;charset=utf-8"})},t.prototype.msg=function(t,e,n){this.log("==============📣系统通知📣==============\n"+t+"\n"+e+"\n"+n),this.isMute||(this.env==i.Surge||this.env==i.Shadowrocket||this.env==i.Loon?$notification.post(t,e,n):this.env==i.QuanX&&$notify(t,e,n))},t.prototype.log=function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(e=e.map((function(e){return t.date("yyyy-MM-dd HH:mm:ss")+" "+e}))).length>0&&(this.logMsg=a(a([],this.logMsg,!0),e,!0)),console.log(e.join(this.logSeparator))},t.prototype.date=function(t,e){void 0===e&&(e=null);var n=e?new Date(e):new Date,r={"M+":n.getMonth()+1,"d+":n.getDate(),"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),r){var i=r[o];new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length)))}return t},t.prototype.httpResponse=function(t,e){void 0===e&&(e={});var n=Object.assign({"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,GET","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},e);this.response={response:{status:200,body:"string"==typeof t?t:JSON.stringify(t),headers:n}}},t.prototype.ajaxSuccess=function(t,e){void 0===e&&(e=null);var n={time:(new Date).getTime(),datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:1,msg:t,data:e};this.httpResponse(n)},t.prototype.ajaxFail=function(t,e){void 0===e&&(e=null);var n={time:(new Date).getTime(),datetime:this.date("yyyy-MM-dd HH:mm:ss"),code:0,msg:t,data:e};this.httpResponse(n)},t.prototype.send=function(t){var n=this;return new Promise((function(r,i){n.doRequest(t,(function(t,n,s){t?i(new o(t,e.HTTP)):r(n)}))}))},t.prototype.post=function(t){return s(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return t.method="post",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.get=function(t){return s(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return t.method="get",[4,this.send(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.doRequest=function(t,e){void 0===e&&(e=function(t,e,n){});var n=t.method?t.method.toLocaleLowerCase():"post";t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.env==i.Surge||this.env==i.Shadowrocket||this.env==i.Loon?(this.env==i.Surge&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[n](t,(function(t,n,r){!t&&n&&(n.body=r,n.statusCode=n.status?n.status:n.statusCode,n.status=n.statusCode),e(t,n,r)}))):this.env==i.QuanX?(t.method=n,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((function(t){var n=t.statusCode,r=t.statusCode,o=t.headers,i=t.body;e(null,{status:n,statusCode:r,headers:o,body:i},i)}),(function(t){return e(t&&t.error||"UndefinedError",null,null)}))):this.env==i.Node&&console.log(this.env)},t.prototype.setStore=function(t,e,n){return void 0===n&&(n=!1),n&&(t=this.namespace+"."+t),this.env==i.Surge||this.env==i.Shadowrocket||this.env==i.Loon?$persistentStore.write(e,t):this.env==i.QuanX&&$prefs.setValueForKey(e,t)},t.prototype.initEnv=function(){"undefined"!=typeof $task?this.env=i.QuanX:"undefined"!=typeof $httpClient&&"undefined"==typeof $loon?this.env=i.Surge:"undefined"!=typeof $loon?this.env=i.Loon:"undefined"!=typeof $rocket?this.env=i.Shadowrocket:this.env=i.Node},t.APP_LOG_KEY="boxjs-log",t}();var h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=(n(377),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.doAction=function(){return t=this,e=void 0,r=function(){var t,e;return function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(n){return"undefined"!=typeof $request&&/^https?:\/\/yuekang\.log/.test($request.url)?this.handelLogHttp():"undefined"!=typeof $response&&(this.msg(this.name,"yuekangma","yuekangma"),t=JSON.parse($response.body),this.log(JSON.stringify($response.headers)),e=JSON.stringify(t),this.log(e),this.response={body:e}),[2]}))},new((n=void 0)||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,c)}a((r=r.apply(t,e||[])).next())}));var t,e,n,r},e}(u));n(969),n(182),new f("粤康码","gsonhub.yuekang").run()})()})();