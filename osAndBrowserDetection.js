define(['underscore', 'jquery', 'jquery.browser'], function (_, $) {
    "use strict";

    var $html = $('html');
    // adds browser (mozilla, msie, opera, webkit) to html class
    var browser = _.chain($.browser).keys().without('version').value()[0];
    if (browser) {
        $html.addClass(browser);
    }

    // adds OS to html class, x11 for UNIX
    var os = navigator.appVersion.toLowerCase().match(/win|mac|x11|linux/);
    if (os) {
        $html.addClass(os[0]);
    }
});
