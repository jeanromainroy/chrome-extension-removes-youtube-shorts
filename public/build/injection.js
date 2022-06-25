(function () {
    'use strict';

    // config
    const APP_NAME = 'Youtube Shorts';
    const SHORTS_ID = "Shorts";
    const parentLevel = 1;


    function removeShorts(){

        // get url
        const url = window.location.href;

        // validate
        if (!url.includes('youtube')) return;

        // log
        console.log(`Processing ${url}`);
        
        // get div element
        const selector = document.querySelectorAll(`a[title="${SHORTS_ID}"]`);
        const el = (selector === null || selector[0] === undefined || selector[0] === null) ? null : selector[0];

        // validate
        if (el === null) return;

        // select parent
        let parentEl = el;
        for(let i=0 ; i<parentLevel ; i++){
            parentEl = parentEl.parentElement;
        }
        parentEl.remove();
    }


    // message interface
    chrome.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
            switch(message.type) {
                case "currentPage":
                    console.log(`${APP_NAME} - url requested`);
                    const url = window.location.href;
                    sendResponse(url);
                    break;

                case "tabChange":
                    console.log(`${APP_NAME} - tab changed, scrolling & scraping stopped`);
                    break;

                case "removeShorts":
                    console.log(`${APP_NAME} - removing shorts`);
                    removeShorts();

                default:
                    console.error("Unrecognised message: ", message);
            }
        }
    );

})();
//# sourceMappingURL=injection.js.map
