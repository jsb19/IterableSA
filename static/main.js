var _iaq = _iaq || [];
var click = 0;

// Identify the user and set some fields on their Iterable profile 
function identifyUser() {
    _iaq.push(['identify', document.getElementById('email').value, {
        "firstName": document.getElementById('firstName').value,
        "isWebUser": true,
        "SA_WebUser_Test_Key": "completed"
    }]);
}

// Track a click event, passing a click count (from the current session)
// that will be stored in the event's dataFields property
function trackEvent() {
    _iaq.push(['track', 'MyButtonClickedEvent', {
        "clickNumber": ++click
    }]);
}

// Replace <API key> with an Iterable API key (of type JavaScriptSDK)
_iaq.push(['account', 'ff288e91e5f9442cb6ce6ea238886298']);

(function () {
    var b = document.createElement('script');
    b.type = 'text/javascript';
    b.async = true;
    b.src = 'https://js.iterable.com/analytics.js';
    var a = document.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(b, a);
})();