'use strict';

// basic
export const APP_NAME = 'Youtube Shorts Remover';

// message keys
export const MSG_KEY_REMOVE_EL = "removeElements";
export const MSG_KEY_CURRENT_URL = "currentUrl";

// html elements to remove
export const HTML_ELEMENTS_TO_REMOVE = [
    { "escalate": 1, "query": `a[title="Shorts"]`},
    { "escalate": 1, "query": `a[title="Explore"]`},
    { "escalate": 2, "query": `a[href*="/shorts/"]`}
];

// delay between shorts check
export const SHORTS_CHECK_DELAY_MS = 3000;
