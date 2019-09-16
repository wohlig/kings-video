/*! For license information please see ovenplayer.provider.RtmpProvider-0.9.741.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(313)),u=l(n(314)),o=l(n(66)),a=l(n(387)),i=n(303),s=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){OvenPlayerConsole.log("CORE loaded. ");var n={};(0,o.default)(n);var l=e.element,c=null,f=null;Object.defineProperty(l,"currentTime",{value:0,writable:!0}),e.adTagUrl&&(OvenPlayerConsole.log("[Provider] Ad Client - ",t.getAdClient()),(c=t.getAdClient()===s.AD_CLIENT_VAST?(0,u.default)(l,n,t,e.adTagUrl):(0,r.default)(l,n,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),f=(0,a.default)(l,n,c?c.videoEndedCallback:null);var d=function(t){var r=e.sources[e.currentSource];OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var u=l.getCurrentSource();r.file!==u?l.load(r.file):0===t&&n.getPosition()>0&&n.seek(t)},g=function(r){e.isLoaded=!0,r>0&&(t.isAutoStart()||n.play(),n.seek(r)),t.isAutoStart()&&n.play()};return n.triggerEventFromExternal=function(e,t){return f[e]?f[e](t):null},n.getName=function(){return e.name},n.canSeek=function(){return e.canSeek},n.setCanSeek=function(t){e.canSeek=t},n.isSeeking=function(){return e.seeking},n.setSeeking=function(t){e.seeking=t},n.setMetaLoaded=function(){e.isLoaded=!0},n.metaLoaded=function(){return e.isLoaded},n.setState=function(t){if(e.state!==t){var r=e.state;if(r===s.STATE_AD_PLAYING&&(t===s.STATE_ERROR||t===s.STATE_IDLE))return!1;switch(t){case s.STATE_COMPLETE:n.trigger(s.PLAYER_COMPLETE);break;case s.STATE_PAUSED:n.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_PAUSED});break;case s.STATE_AD_PAUSED:n.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_AD_PAUSED});break;case s.STATE_PLAYING:n.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_PLAYING});case s.STATE_AD_PLAYING:n.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_AD_PLAYING})}e.state=t,n.trigger(s.PLAYER_STATE,{prevstate:r,newstate:e.state})}},n.getState=function(){return e.state},n.setBuffer=function(e){},n.getBuffer=function(){if(l)return l.getBuffer?l.getBuffer():null},n.getDuration=function(){if(l)return l.getDuration?l.getDuration():0},n.getPosition=function(){if(l)return l.getPosition?l.getPosition():0},n.setVolume=function(e){if(l)return l.setVolume?l.setVolume(e):0},n.getVolume=function(){if(l)return l.setVolume?l.getVolume():0},n.setMute=function(){l&&l.setMute()},n.getMute=function(){if(l)return!!l.getMute&&l.getMute()},n.preload=function(r,u){OvenPlayerConsole.log("CORE : preload() ",r,u);var o=0;return e.sources=r,e.currentSource=(0,i.pickCurrentSource)(r,e.currentSource,t),new Promise(function(e,r){!function a(){return o++,l.isFlashReady&&l.isFlashReady()?(Object.defineProperty(l,"duration",{value:l.getDuration()}),d(u||0),o=0,function a(){return o++,l.isFileLoaded&&l.isFileLoaded()?(g(u),t.isMute()&&n.setMute(!0),t.getVolume()&&t.getVolume()<100&&n.setVolume(t.getVolume()),e()):o<300?void setTimeout(a,100):r(s.ERRORS.codes[s.INIT_RTMP_SETUP_ERROR])}()):o<100?void setTimeout(a,100):r(s.ERRORS.codes[s.INIT_RTMP_SETUP_ERROR])}()})},n.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),d(0),g(0)},n.play=function(){if(!l)return!1;n.getState()!==s.STATE_PLAYING&&(c&&c.isActive()||c&&!c.started()?c.play():l.play())},n.pause=function(){if(!l)return!1;n.getState()===s.STATE_PLAYING?l.pause():n.getState()===s.STATE_AD_PLAYING&&c.pause()},n.seek=function(e){l.seek(e)},n.setPlaybackRate=function(e){return 0},n.getPlaybackRate=function(){return 0},n.getSources=function(){return l?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},n.getCurrentSource=function(){return e.currentSource},n.setCurrentSource=function(r,u){if(e.currentQuality===r)return!1;if(r>-1&&e.sources&&e.sources.length>r){if(n.pause(),n.setState(s.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,n.trigger(s.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceIndex(r),u){var o=l.getCurrentTime()||0,a=0;d(o),function e(){a++,l.isFileLoaded&&l.isFileLoaded()?g(o):a<300?setTimeout(e,100):console.log("FileLoad failed")}()}return e.currentSource}},n.getQualityLevels=function(){return l?e.qualityLevels:[]},n.getCurrentQuality=function(){return l?e.currentQuality:null},n.setCurrentQuality=function(e){},n.isAutoQuality=function(){},n.setAutoQuality=function(e){},n.getFramerate=function(){return e.framerate},n.setFramerate=function(t){return e.framerate=t},n.seekFrame=function(t){var r=e.framerate,u=(l.getCurrentTime()*r+t)/r;u+=1e-5,n.pause(),n.seek(u)},n.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},n.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),n.stop(),c&&c.destroy(),n.off()},n.super=function(e){var t=n[e];return function(){return t.apply(n,arguments)}},n}},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.default=function(e,t,n){var u={isJSReady:function(){return!0},timeupdate:function(n){e.currentTime=n.position,t.trigger(r.CONTENT_TIME,n)},volumeChanged:function(e){t.trigger(r.CONTENT_VOLUME,e)},stateChanged:function(e){t.setState(e.newstate)},metaChanged:function(e){t.trigger(r.CONTENT_META,e)},error:function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}};return u}},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=function(e){return e&&e.__esModule?e:{default:e}}(n(386));t.default=function(e,t,n){var o={},a=null,i={name:r.PROVIDER_RTMP,element:e,mse:null,listener:null,isLoaded:!1,canSeek:!1,isLive:!1,seeking:!1,state:r.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};return o=(0,u.default)(i,t,null),a=o.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),o.destroy=function(){OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),a()},o}}}]);