// ==UserScript==
// @name         Shanbay JK
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replace shortcut 1 and d with j, shortcut 2 with k.
// @author       You
// @match        https://web.shanbay.com/wordsweb/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function click(element){
        const event = document.createEvent('Events');
        event.initEvent('click', true, false);
        element.dispatchEvent(event);
    }

    document.addEventListener('keypress', ({key}) => {
        const know = document.querySelector('div[class*=index_green]')
        const dontKnow = document.querySelector('div[class*=index_red]')
        const next = document.querySelector('div[class*=StudyPage_nextBtn]')
        const undo = document.querySelector('div[class*=Message_message] div span')

        if (key === 'j') click(know || next)
        if (key === 'k') click(dontKnow || undo)
    })
})();