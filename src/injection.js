'use strict';

// import config
import { APP_NAME, MSG_KEY_REMOVE_EL, MSG_KEY_CURRENT_URL } from './config.js';

// import remover
import remover from './remover.js';


// message interface
chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
        switch(message.type) {
            case MSG_KEY_CURRENT_URL:
                console.log(`${APP_NAME} - url requested`)
                const url = window.location.href;
                sendResponse(url);
                break;

            case MSG_KEY_REMOVE_EL:
                console.log(`${APP_NAME} - removing shorts`)
                remover();

            default:
                console.error(`${APP_NAME} - Unrecognised message: `, message.type);
        }
    }
);
