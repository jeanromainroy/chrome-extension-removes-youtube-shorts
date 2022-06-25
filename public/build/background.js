(function () {
    'use strict';

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete' && tab.active) {

            // run
            chrome.tabs.sendMessage( tabId, { type: "removeShorts" }, null);
        }
    });

})();
//# sourceMappingURL=background.js.map
