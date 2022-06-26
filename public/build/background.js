(function () {
    'use strict';

    // message keys
    const MSG_KEY_REMOVE_EL = "removeElements";

    // on page load
    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete' && tab.active) {

            // run
            chrome.tabs.sendMessage( tabId, { type: MSG_KEY_REMOVE_EL }, null);
        }
    });

})();
//# sourceMappingURL=background.js.map
