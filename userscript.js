// ==UserScript==
// @name         Shanbay JK
// @namespace    https://github.com/willbchang/shanbay-jk
// @version      1.0
// @description  Make j work like 1 and d, make k work like 2.
// @author       Will B Chang
// @match        https://web.shanbay.com/wordsweb/*
// @grant        GPL-3.0
// ==/UserScript==

(function () {
    'use strict';

    function click(element) {
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