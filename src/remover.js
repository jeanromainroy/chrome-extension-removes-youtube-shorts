'use strict';

// import config
import { APP_NAME, HTML_ELEMENTS_TO_REMOVE, SHORTS_CHECK_DELAY_MS } from './config.js';


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
        console.log(`${APP_NAME} - Selecting ${query}`)

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


export default function run(){

    // remove
    remove_html_elements();

    // in loop
    setTimeout(() => {
        run();
    }, SHORTS_CHECK_DELAY_MS);
}
