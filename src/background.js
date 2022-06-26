'use strict';

// import config
import { MSG_KEY_REMOVE_EL } from './config.js';


// on page load
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {

        // run
        chrome.tabs.sendMessage( tabId, { type: MSG_KEY_REMOVE_EL }, null)
    }
})
