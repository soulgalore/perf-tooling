!window.addEventListener&&function(e,t,n,o,i,r,u){e[o]=t[o]=n[o]=function(e,t){var n=this;u.unshift([n,e,t,function(e){e.currentTarget=n,e.preventDefault=function(){e.returnValue=!1},e.stopPropagation=function(){e.cancelBubble=!0},e.target=e.srcElement||n,t.call(n,e)}]),this.attachEvent("on"+e,u[0][3])},e[i]=t[i]=n[i]=function(e,t){for(var n,o=0;n=u[o];++o)if(n[0]==this&&n[1]==e&&n[2]==t)return this.detachEvent("on"+e,u.splice(o,1)[0][3])},e[r]=t[r]=n[r]=function(e){return this.fireEvent("on"+e.type,e)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[]),function(e){e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}()}(window),function(e){function t(t,n,o){var i=-1!==navigator.userAgent.indexOf("Firefox")||-1!==navigator.userAgent.indexOf("MSIE")?document.documentElement:document.body,r=i.scrollTop,u=t-r,a=0,l=20;n="undefined"==typeof n?500:n;var s=function(){a+=l;var t=Math.easeInOutQuad(a,r,u,n);i.scrollTop=t,n>a?e.requestAnimationFrame(s):"function"==typeof o&&o()};s()}Math.easeInOutQuad=function(e,t,n,o){return e/=o/2,1>e?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},Math.easeInCubic=function(e,t,n,o){var i=(e/=o)*e*e;return t+n*i},Math.inOutQuintic=function(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)},e.animScrollTo=t}(window),function(e){function t(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")?e.history&&"pushState"in e.history:!1}e.perfTooling=e.perfTooling||{},e.perfTooling.features=e.perfTooling.features||{},e.perfTooling.features.history=t()}(window),function(e){function t(t){t=t||{},t.data&&(t.elements.input&&(i.input=document.querySelector(t.elements.input),i.input.addEventListener("keyup",function(e){clearTimeout(o),40!==e.which&&38!==e.which&&n(t.data,e.target.value.toLowerCase())}),i.input.addEventListener("search",function(e){n(t.data,e.target.value.toLowerCase())})),t.elements.list&&(i.list=document.querySelector(t.elements.list),i.list.addEventListener("click",function(t){var n=t.target.dataset.fuzzy;n&&i.input&&(t.preventDefault(),i.input.getBoundingClientRect().top<0?e.animScrollTo(i.input.offsetTop,600,function(){i.input.value=n,i.input.dispatchEvent(new KeyboardEvent("keyup"))}):(i.input.value=n,i.input.dispatchEvent(new KeyboardEvent("keyup"))))})))}function n(t,n){o=e.setTimeout(function(){history.replaceState(null,null,"?q="+n)},2e3);var r=0,u=n.split(" "),a=u.length;t.forEach(function(e){var t=0,n=!0;for(void 0===e.elem&&(e.elem=document.getElementById(e.name));a>t;++t)-1===e.fuzzy.indexOf(u[t])&&(n=!1);n&&++r,e.elem.classList.toggle("is-hidden",!n)}),i.noResultsMsg.classList.toggle("is-hidden",0!==r)}var o,i={noResultsMsg:document.getElementById("noResultMsg")};e.perfTooling=e.perfTooling||{},e.perfTooling.components=e.perfTooling.components||{},e.perfTooling.components.fuzzy={init:function(e){t(e)}}}(window),function(e,t){function n(){var t=e.querySelector(".nav-main");e.querySelector(".btn-nav").addEventListener("click",function(){t.classList.toggle("nav-open")})}window.addEventListener("load",function(){for(var t=e.querySelectorAll(".contributor > a"),n=t.length,o=0;n>o;++o)t[o].innerHTML='<img src="'+t[o].dataset.url+'" width="40" height="40" title="'+t[o].dataset.login+'" class="contributor-avatar">'});var o=e.querySelectorAll(".js-scroll");o.length&&Array.prototype.forEach.call(o,function(t){t.addEventListener("click",function(){window.animScrollTo(e.getElementById(t.href.split("#")[1]).offsetTop,600)})}),"undefined"!=typeof t&&window.perfTooling.features.history&&window.perfTooling.components.fuzzy.init({elements:{input:"#fuzzzzzzzzzy",list:".posts"},data:t}),n()}(document,window.list);