!function(e,t){function n(e,t,n){e.attachEvent?(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n])):e.addEventListener(t,n,!1)}function o(){var t=e.getElementById("fuzzzzzzzzzy");n(t,"keyup",function(e){i(e.target.value.toLowerCase())})}function i(n){e.querySelectorAll(".posts > li");t.forEach(function(t){void 0===t.elem&&(t.elem=e.getElementById(t.name)),t.elem.style.display=-1!==t.fuzzy.indexOf(n)?"block":"none"})}n(window,"load",function(){for(var t=e.querySelectorAll(".contributor > a"),n=t.length,o=0;n>o;++o)t[o].innerHTML='<img src="'+t[o].dataset.url+'" width="42" height="42" title="'+t[o].dataset.login+'" class="contributor-avatar">'}),"undefined"!=typeof t&&o()}(document,window.list);