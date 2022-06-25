'use strict';

// config
const APP_NAME = 'Youtube Shorts'


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {

        // run
        chrome.tabs.sendMessage( tabId, { type: "removeShorts" }, null)
    }
})
