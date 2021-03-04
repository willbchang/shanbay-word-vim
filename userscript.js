// ==UserScript==
// @name         Shanbay JK
// @namespace    https://github.com/willbchang/shanbay-jk
// @version      1.0
// @description  在扇贝单词网页版上让 j 拥有 1 跟 d 的功能，k 拥有 2 的功能
// @author       Will B Chang
// @match        https://web.shanbay.com/wordsweb/*
// @grant        GPL-3.0
// ==/UserScript==

(function () {
    'use strict';

    // 模拟点击事件
    function click(element) {
        const event = document.createEvent('Events');
        event.initEvent('click', true, false);
        element.dispatchEvent(event);
    }

    document.addEventListener('keypress', ({key}) => {
        // 获取认识、不认识、下一个、撤销四个元素
        const know = document.querySelector('div[class*=index_green]')
        const dontKnow = document.querySelector('div[class*=index_red]')
        const next = document.querySelector('div[class*=StudyPage_nextBtn]')
        const undo = document.querySelector('div[class*=Message_message] div span')

        // j: 如果页面上有 know 的元素，则触发其点击事件，没有的话就触发 next 的点击事件
        // k: 同理
        if (key === 'j') click(know || next)
        if (key === 'k') click(dontKnow || undo)
    })
})();