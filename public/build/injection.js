(function () {
    'use strict';

    // basic
    const APP_NAME = 'Youtube Shorts Remover';

    // message keys
    const MSG_KEY_REMOVE_EL = "removeElements";
    const MSG_KEY_CURRENT_URL = "currentUrl";

    // html elements to remove
    const HTML_ELEMENTS_TO_REMOVE = [
        { "escalate": 1, "query": `a[title="Shorts"]`},
        { "escalate": 1, "query": `a[title="Explore"]`},
        { "escalate": 2, "query": `a[href*="/shorts/"]`}
    ];

    function is_youtube(){

        // get url
        const url = window.location.href;

        // validate
        return url.includes('youtube');
    }


    function remove_html_elements(){

        // check 
        if(!is_youtube()) return;

        // go through removers
        HTML_ELEMENTS_TO_REMOVE.forEach(HTML_ELEMENT_TO_REMOVE => {

            // destructure
            const { escalate, query } = HTML_ELEMENT_TO_REMOVE;

            // log
            console.log(`${APP_NAME} - Selecting ${query}`);

            // get html elements
            const elements = document.querySelectorAll(query);
            
            // validate
            if(elements === undefined || elements === null) {
                
                // log
                console.log(`${APP_NAME} - Failed to run ${query}`);
                
                return;
            }

            // escalate to parent
            for (const element of elements) {
                
                // validate
                if (element === undefined || element === null) continue;

                // init parent
                let patent_element = element;

                // go through escalation levels
                for(let i=0 ; i<escalate ; i++){
                    patent_element = patent_element.parentElement;
                }

                // remove
                patent_element.remove();
            }
        });    
    }


    function run(){

        // remove
        remove_html_elements();

        // in loop
        setTimeout(() => {
            run();
        }, 5000);
    }

    // message interface
    chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
            switch(message.type) {
                case MSG_KEY_CURRENT_URL:
                    console.log(`${APP_NAME} - url requested`);
                    const url = window.location.href;
                    sendResponse(url);
                    break;

                case MSG_KEY_REMOVE_EL:
                    console.log(`${APP_NAME} - removing html elements`);
                    run();
                    break;

                default:
                    if (message.type.trim() === MSG_KEY_REMOVE_EL) {
                        console.log(`${APP_NAME} - fallback on remover`);
                        run();
                    } else {
                        console.error(`${APP_NAME} - Unrecognised message: ${message.type}`);
                    }
            }
        }
    );

})();
//# sourceMappingURL=injection.js.map
