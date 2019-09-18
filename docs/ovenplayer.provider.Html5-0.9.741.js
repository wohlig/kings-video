/*! For license information please see ovenplayer.provider.Html5-0.9.741.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(313)),o=l(n(314)),a=l(n(66)),u=l(n(308)),i=n(303),s=n(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n){OvenPlayerConsole.log("[Provider] loaded. ");var l={};(0,a.default)(l);var c=e.element,d=null,E=null,f=!1;e.adTagUrl&&(OvenPlayerConsole.log("[Provider] Ad Client - ",t.getAdClient()),(d=t.getAdClient()===s.AD_CLIENT_VAST?(0,o.default)(c,l,t,e.adTagUrl):(0,r.default)(c,l,t,e.adTagUrl))||console.log("Can not load due to google ima for Ads.")),E=(0,u.default)(c,l,d?d.videoEndedCallback:null),c.playbackRate=c.defaultPlaybackRate=t.getPlaybackRate();var g=function(r){var o=e.sources[e.currentSource];if(e.framerate=o.framerate,l.setVolume(t.getVolume()),e.framerate||t.setTimecodeMode(!0),n)n(o,r);else{OvenPlayerConsole.log("source loaded : ",o,"lastPlayPosition : "+r);var a=c.src,u=document.createElement("source");u.src=o.file,u.src!==a?(c.src=o.file,a&&c.load()):0===r&&c.currentTime>0&&l.seek(r),r>0&&(l.seek(r),t.isAutoStart()||l.play()),t.isAutoStart()&&l.play()}};return l.getName=function(){return e.name},l.canSeek=function(){return e.canSeek},l.setCanSeek=function(t){e.canSeek=t},l.isSeeking=function(){return e.seeking},l.setSeeking=function(t){e.seeking=t},l.setMetaLoaded=function(){e.isLoaded=!0},l.metaLoaded=function(){return e.isLoaded},l.setState=function(t){if(e.state!==t){var n=e.state;if(OvenPlayerConsole.log("Provider : setState()",t),n===s.STATE_AD_PLAYING&&(t===s.STATE_ERROR||t===s.STATE_IDLE))return!1;switch(OvenPlayerConsole.log("Provider : triggerSatatus",t),t){case s.STATE_COMPLETE:l.trigger(s.PLAYER_COMPLETE);break;case s.STATE_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_PAUSED});break;case s.STATE_AD_PAUSED:l.trigger(s.PLAYER_PAUSE,{prevState:e.state,newstate:s.STATE_AD_PAUSED});break;case s.STATE_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_PLAYING});case s.STATE_AD_PLAYING:l.trigger(s.PLAYER_PLAY,{prevState:e.state,newstate:s.STATE_AD_PLAYING})}e.state=t,l.trigger(s.PLAYER_STATE,{prevstate:n,newstate:e.state})}},l.getState=function(){return e.state},l.setBuffer=function(t){e.buffer=t},l.getBuffer=function(){return e.buffer},l.isLive=function(){return!!e.isLive||c.duration===1/0},l.getDuration=function(){return l.isLive()?1/0:c.duration},l.getPosition=function(){return c?c.currentTime:0},l.setVolume=function(e){if(!c)return!1;c.volume=e/100},l.getVolume=function(){return c?100*c.volume:0},l.setMute=function(e){return!!c&&(void 0===e?(c.muted=!c.muted,l.trigger(s.CONTENT_MUTE,{mute:c.muted})):(c.muted=e,l.trigger(s.CONTENT_MUTE,{mute:c.muted})),c.muted)},l.getMute=function(){return!!c&&c.muted},l.preload=function(n,r){return e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),g(r||0),new Promise(function(e,n){t.isMute()&&l.setMute(!0),t.getVolume()&&l.setVolume(t.getVolume()),e()})},l.load=function(n){e.sources=n,e.currentSource=(0,i.pickCurrentSource)(n,e.currentSource,t),g(e.sources.starttime||0)},l.play=function(){if(OvenPlayerConsole.log("Provider : play()"),!c)return!1;if(f)return!1;if(f=!0,l.getState()!==s.STATE_PLAYING)if(d&&d.isActive()||d&&!d.started())d.play().then(function(e){f=!1,OvenPlayerConsole.log("Provider : ads play success")}).catch(function(e){f=!1,OvenPlayerConsole.log("Provider : ads play fail",e)});else{var e=c.play();void 0!==e?e.then(function(){f=!1,OvenPlayerConsole.log("Provider : video play success")}).catch(function(e){OvenPlayerConsole.log("Provider : video play error",e.message),f=!1}):(OvenPlayerConsole.log("Provider : video play success (ie)"),f=!1)}},l.pause=function(){if(OvenPlayerConsole.log("Provider : pause()"),!c)return!1;l.getState()===s.STATE_PLAYING?c.pause():l.getState()===s.STATE_AD_PLAYING&&d.pause()},l.seek=function(e){if(!c)return!1;c.currentTime=e},l.setPlaybackRate=function(e){return!!c&&(l.trigger(s.PLAYBACK_RATE_CHANGED,{playbackRate:e}),c.playbackRate=c.defaultPlaybackRate=e)},l.getPlaybackRate=function(){return c?c.playbackRate:0},l.getSources=function(){return c?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},l.getCurrentSource=function(){return e.currentSource},l.setCurrentSource=function(n,r){return e.currentSource!==n&&(n>-1&&e.sources&&e.sources.length>n?(OvenPlayerConsole.log("source changed : "+n),e.currentSource=n,l.trigger(s.CONTENT_SOURCE_CHANGED,{currentSource:n}),t.setSourceIndex(n),l.setState(s.STATE_IDLE),r&&g(c.currentTime||0),e.currentSource):void 0)},l.getQualityLevels=function(){return c?e.qualityLevels:[]},l.getCurrentQuality=function(){return c?e.currentQuality:null},l.setCurrentQuality=function(e){},l.isAutoQuality=function(){},l.setAutoQuality=function(e){},l.getFramerate=function(){return e.framerate},l.setFramerate=function(t){return e.framerate=t},l.seekFrame=function(t){var n=e.framerate,r=(c.currentTime*n+t)/n;r+=1e-5,l.pause(),l.seek(r)},l.stop=function(){if(!c)return!1;for(OvenPlayerConsole.log("CORE : stop() "),c.removeAttribute("preload"),c.removeAttribute("src");c.firstChild;)c.removeChild(c.firstChild);l.pause(),l.setState(s.STATE_IDLE)},l.destroy=function(){if(!c)return!1;l.stop(),E.destroy(),d&&(d.destroy(),d=null),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(e){var t=l[e];return function(){return t.apply(l,arguments)}},l}},308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(303);t.default=function(e,t,n){var a={};OvenPlayerConsole.log("EventListener loaded.",e,t);var u={},i=-1,s=e;return a.canplay=function(){t.setCanSeek(!0),t.trigger(r.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},a.durationchange=function(){a.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},a.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},a.loadeddata=function(){},a.loadedmetadata=function(){var e=t.getSources(),n=t.getCurrentSource(),o=n>-1?e[n].type:"",a={duration:t.isLive()?1/0:s.duration,type:o};t.setMetaLoaded(),OvenPlayerConsole.log("EventListener : on loadedmetadata",a),t.trigger(r.CONTENT_META,a)},a.pause=function(){return t.getState()!==r.STATE_COMPLETE&&t.getState()!==r.STATE_ERROR&&!s.ended&&!s.error&&s.currentTime!==s.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void t.setState(r.STATE_PAUSED))},a.play=function(){i=-1,s.paused||t.getState()===r.STATE_PLAYING||t.setState(r.STATE_LOADING)},a.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),i<0&&t.setState(r.STATE_PLAYING)},a.progress=function(){var e=s.buffered;if(!e)return!1;var n=s.duration,o=s.currentTime,a=function(e,t,n){return Math.max(Math.min(e,n),t)}((e.length>0?e.end(e.length-1):0)/n,0,1);t.setBuffer(100*a),t.trigger(r.CONTENT_BUFFER,{bufferPercent:100*a,position:o,duration:n}),OvenPlayerConsole.log("EventListener : on progress",100*a)},a.timeupdate=function(){var e=s.currentTime,n=s.duration;isNaN(n)||(n>9e15&&(n=1/0),t.isSeeking()||s.paused||t.getState()!==r.STATE_STALLED&&t.getState()!==r.STATE_LOADING&&t.getState()!==r.STATE_AD_PLAYING||function(e,t){return e.toFixed(2)===t.toFixed(2)}(i,e)||(i=-1,t.setState(r.STATE_PLAYING)),(t.getState()===r.STATE_PLAYING||t.isSeeking())&&t.trigger(r.CONTENT_TIME,{position:e,duration:n}))},a.seeking=function(){t.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",s.currentTime),t.trigger(r.CONTENT_SEEK,{position:s.currentTime})},a.seeked=function(){t.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),t.setSeeking(!1),t.trigger(r.CONTENT_SEEKED))},a.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},a.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",t.getState()),t.isSeeking()?t.setState(r.STATE_LOADING):t.getState()===r.STATE_PLAYING&&(i=s.currentTime,t.setState(r.STATE_STALLED))},a.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*s.volume)),t.trigger(r.CONTENT_VOLUME,{volume:Math.round(100*s.volume),mute:s.muted})},a.error=function(){var e=s.error&&s.error.code||0,n={0:r.PLAYER_UNKNWON_ERROR,1:r.PLAYER_UNKNWON_OPERATION_ERROR,2:r.PLAYER_UNKNWON_NEWWORK_ERROR,3:r.PLAYER_UNKNWON_DECODE_ERROR,4:r.PLAYER_FILE_ERROR}[e]||0;OvenPlayerConsole.log("EventListener : on error",n),(0,o.errorTrigger)(r.ERRORS.codes[n],t)},Object.keys(a).forEach(function(e){s.removeEventListener(e,a[e]),s.addEventListener(e,a[e])}),u.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(a).forEach(function(e){s.removeEventListener(e,a[e])})},u}},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(307)),o=(n(303),n(1));t.default=function(e,t,n){var a={name:o.PROVIDER_HTML5,element:e,mse:null,listener:null,isLoaded:!1,canSeek:!1,isLive:!1,seeking:!1,state:o.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n},u=(0,r.default)(a,t,null),i=u.super("destroy");return OvenPlayerConsole.log("HTML5 PROVIDER LOADED."),u.destroy=function(){OvenPlayerConsole.log("HTML5 : PROVIDER DESTROYED."),i()},u}}}]);