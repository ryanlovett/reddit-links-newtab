// ==UserScript==
// @name          Reddit Links
// @version       0.1
// @description   Reddit links in a new tab
// @namespace     https://github.com/ryanlovett/
// @match         https://*.reddit.com/*
// @author        Ryan Lovett
// @updateURL     https://raw.githubusercontent.com/ryanlovett/reddit-links-newtab/master/index.user.js
// @downloadURL   https://raw.githubusercontent.com/ryanlovett/reddit-links-newtab/master/index.user.js
// ==/UserScript==

var a = function(){
    var elems = document.querySelectorAll("a.external-link");
    for (var i=0; i<elems.length; i++){
        var elem = elems[i];
        elem.target = '_blank';
    }
    setTimeout(a, 1000);
};

(function() {
    'use strict';
    a();
})();
