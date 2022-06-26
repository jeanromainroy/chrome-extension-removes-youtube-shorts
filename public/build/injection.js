(function () {
    'use strict';

    // basic
    const APP_NAME = 'Youtube Shorts Remover';

    // message keys
    const MSG_KEY_REMOVE_EL = "removeElements";
    const MSG_KEY_CURRENT_URL = "currentUrl";

    // html elements to remove
    const HTML_ELEMENTS_TO_REMOVE = [
        { "escalate": 1, "query": `a[title="Shorts"]`}
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

            // get div element
            const selector = document.querySelectorAll(query);
            
            // validate
            if(selector === null || selector[0] === undefined || selector[0] === null) {
                
                // log
                console.log(`${APP_NAME} - Failed to run ${query}`);
                
                return;
            }

            // escalate to parent
            let parentEl = selector[0];
            for(let i=0 ; i<escalate ; i++){
                parentEl = parentEl.parentElement;
            }
            parentEl.remove();
        });    
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
                    console.log(`${APP_NAME} - removing shorts`);
                    remove_html_elements();

                default:
                    console.error(`${APP_NAME} - Unrecognised message: `, message.type);
            }
        }
    );

})();
//# sourceMappingURL=injection.js.map
