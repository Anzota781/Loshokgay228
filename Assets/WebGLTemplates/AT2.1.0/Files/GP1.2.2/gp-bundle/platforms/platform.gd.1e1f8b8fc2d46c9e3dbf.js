(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[860],{280:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(2616),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,".gp-gamedistribution-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:90px;max-width:728px;overflow:hidden}.gp-gamedistribution-sticky__creative{position:relative;height:90px;width:728px;max-width:100vw}.gp-gamedistribution-sticky_top{top:0}.gp-gamedistribution-sticky_bottom{bottom:0}",""]);const o=r},4340:(t,e,i)=>{"use strict";i.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},501:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(4340),r=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class o{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return r(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return r(this,void 0,void 0,(function*(){}))}}},5572:(t,e,i)=>{"use strict";i.d(e,{VK:()=>n,yl:()=>r});const n={success:!0,payload:{}},r={success:!1,payload:{}}},5351:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var n=i(9482),r=i(3379),o=i.n(r),s=i(280);o()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const a="gp-gamedistribution-sticky";function d(){const t=document.createElement("div");t.id="gamepush-gamedistribution",document.body.appendChild(t);const e={sticky:null};return window.addEventListener("resize",(()=>(0,n.sO)(e))),{banners:e,createSticky(i){e.sticky||(e.sticky=function(e){const i=document.createElement("div");i.className=`${a} ${a}_${e.position||"bottom"}`;const n=document.createElement("div");n.id="responsive-banner-container",n.className=`${a}__creative`;const r={$wrapper:i,$el:n,options:e};return i.appendChild(n),t.appendChild(i),r}(i))},closeSticky(){e.sticky&&(e.sticky.$wrapper.remove(),e.sticky.$wrapper.innerHTML="",e.sticky=null)}}}},9482:(t,e,i)=>{"use strict";function n(t){return`${t}px`}i.d(e,{bH:()=>o,Bi:()=>c,Go:()=>d,px:()=>n,sO:()=>s,pm:()=>a});const r={PX:"px",PERCENT:"%"};function o(t){return r[t]}function s(t){a(t.sticky)}function a(t){t&&(t.$el.style.width=`${function(t){let e=window.innerWidth;if("PX"===t.options.maxWidthDimension&&t.options.maxWidth>0&&window.innerWidth>t.options.maxWidth)e=t.options.maxWidth;else if("PERCENT"===t.options.maxWidthDimension&&t.options.maxWidth>0){const i=t.options.maxWidth/100*window.innerWidth;window.innerWidth>t.options.maxWidth&&(e=i)}const i=t.options.fitCanvas&&u()||e;return Math.round(i)}(t)}px`)}function d(t,e){const i=e?{value:t.options.maxWidth,dimension:t.options.maxWidthDimension}:t.options.desktopMaxWidth&&t.options.desktopMaxWidthDimension?{value:t.options.desktopMaxWidth,dimension:t.options.desktopMaxWidthDimension}:{value:t.options.maxWidth,dimension:t.options.maxWidthDimension},n="PERCENT"===i.dimension?.01*i.value*window.innerWidth:i.value;return Math.min(Math.round(t.options.fitCanvas&&u()||n),window.innerWidth)||window.innerWidth}function c(t,e,i){const n=e?{value:t.options.maxHeight,dimension:t.options.maxHeightDimension}:t.options.desktopMaxHeight&&t.options.desktopMaxHeightDimension?{value:t.options.desktopMaxHeight,dimension:t.options.desktopMaxHeightDimension}:{value:t.options.maxHeight,dimension:t.options.maxHeightDimension},r="PERCENT"===n.dimension?.01*n.value*window.innerHeight:n.value;return Math.min(Math.round(r),window.innerHeight)||i}function u(){var t;return window.innerWidth>=640&&(null===(t=document.querySelector("canvas"))||void 0===t?void 0:t.offsetWidth)||0}},2712:(t,e,i)=>{"use strict";i.d(e,{aD:()=>l,FU:()=>p,hc:()=>v});const n=(t,e)=>({type:t,getLink:e}),r=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),o=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),s=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),d=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),c=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),u=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),h=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[o,s,a,c,u,h],p=[r,d,s,o,u],v=[r,d,s,o,u,a,c,h]},6390:(t,e,i)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}i.d(e,{T:()=>n})},4917:(t,e,i)=>{"use strict";function n({src:t,check:e}){return new Promise(((i,n)=>{let r=0;if(null==e?void 0:e(window))return void i();function o(){e?e(window)&&(clearInterval(r),i()):i()}if(document.querySelector(`script[src="${t}"]`)&&e)return void(r=setInterval(o,100));var s=document.getElementsByTagName("script")[0];const a=document.createElement("script");a.src=t,a.onload=o,a.onerror=n,s.parentNode.insertBefore(a,s),e&&(r=setInterval(o,100))}))}i.d(e,{Z:()=>n})},8708:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>P});var n=i(6390),r=i(4917),o=i(6558),s=i(8293),a=i(5351),d=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class c{constructor(t){this.config=t,this.app=(0,a.Z)(),this.readyRewardedAd=(0,s._)()}get appUrl(){return(0,n.T)()}init(){return d(this,void 0,void 0,(function*(){const t=(0,s._)();return this.ready=t.ready,window.GD_OPTIONS={gameId:this.config.appId,onEvent:e=>{switch(e.name){case"SDK_READY":case"SDK_ERROR":t.done(this);break;case"SDK_REWARDED_WATCH_COMPLETE":this.readyRewardedAd.done(!0);break;case"SDK_GAME_START":this.readyRewardedAd.done(!1)}}},(0,r.Z)({src:"https://html5.api.gamedistribution.com/main.min.js",check:t=>"gdsdk"in t}).then((()=>this.gdsdk=window.gdsdk)).catch((e=>{o.kg.error(e),t.done(this)})),setTimeout((()=>t.done(this)),1e4),t.ready}))}getPlayer(){return d(this,void 0,void 0,(function*(){const t=(0,s._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showAd(t){const e=(0,s._)();try{this.gdsdk.showAd(t).then((()=>e.done(!0))).catch((t=>{o.kg.error("[GameDistribution] failed to show interstitial ads:",t),e.done(!1)}))}catch(t){e.abort(t)}return e.ready}showFullscreen(){return this.showAd("interstitial")}showPreloader(){return this.showAd("interstitial")}showRewardedVideo(){this.readyRewardedAd=(0,s._)();try{this.gdsdk.showAd("rewarded").catch((t=>{o.kg.error("[GameDistribution] failed to show rewarded video:",t),this.readyRewardedAd.done(!1)}))}catch(t){this.readyRewardedAd.abort(t)}return this.readyRewardedAd.ready}showSticky(){const t=(0,s._)();try{this.gdsdk.showAd("display",{containerId:"responsive-banner-container"}).then((()=>t.done(!0))).catch((e=>{o.kg.error("[GameDistribution] failed to show sticky-banner:",e),t.done(!1)}))}catch(e){t.abort(e)}return t.ready}}var u=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class h{constructor(t){this.sdk=t,this.isFullscreenAvailable=!0,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0,this.canShowFullscreenBeforeGamePlay=!0}get isStickyAvailable(){return window.innerWidth>=728}showPreloader(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return u(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(t){return u(this,void 0,void 0,(function*(){return!!this.sdk.app.banners.sticky||(this.sdk.app.createSticky(t),this.sdk.showSticky())}))}refreshSticky(t){return u(this,void 0,void 0,(function*(){return this.sdk.app.closeSticky(),this.showSticky(t)}))}closeSticky(){return u(this,void 0,void 0,(function*(){yield this.sdk.ready,this.sdk.app.closeSticky()}))}}var l=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class p{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAccountLinked=!0,this.isAuthorizedAtPlatform=!0}getPlayerAuthInfo(){return l(this,void 0,void 0,(function*(){const t=(0,s._)();return t.done({}),t.ready}))}getPlayerContext(){return l(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return l(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}linkAccount(){return l(this,void 0,void 0,(function*(){return Promise.resolve(!0)}))}getPlayer(){return l(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}}var v=i(2712),m=i(5942),f=i(5572);class w{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!1,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=m.z.GAME_DISTRIBUTION,this.socialNetworks=v.FU,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.gdsdk}requestPermissions(){return t=this,e=void 0,n=function*(){return f.VK},new((i=void 0)||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}));var t,e,i,n}uploadImage(){return null}}class y{constructor(t){this.sdk=t,this.isSupportsShare=!1,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!1,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}getCommunityLink(t){return t}joinCommunity(){return Promise.resolve(!1)}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var k=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class g{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isSupportsPayments=!1,this.isServerValidation=!1}mapProducts(t,e){return k(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e,i){return k(this,void 0,void 0,(function*(){}))}fetchPurchases(){return k(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return k(this,void 0,void 0,(function*(){return{}}))}consume(t){return k(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return k(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return k(this,void 0,void 0,(function*(){return{}}))}}var x=i(501);function P(t){return e=this,i=void 0,r=function*(){const[,e]=yield Promise.all([t.setupStorage([]),t.fetchConfig()]),i=new c({appId:e.platformConfig.appId});yield i.init();const n=new p(i);return{adsAdapter:new h(i),appAdapter:new x.Z,playerAdapter:n,platformAdapter:new w(i),socialsAdapter:new y(i),paymentsAdapter:new g(i),projectConfig:e}},new((n=void 0)||(n=Promise))((function(t,o){function s(t){try{d(r.next(t))}catch(t){o(t)}}function a(t){try{d(r.throw(t))}catch(t){o(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,a)}d((r=r.apply(e,i||[])).next())}));var e,i,n,r}}}]);