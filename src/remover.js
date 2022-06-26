'use strict';

// import config
import { APP_NAME, HTML_ELEMENTS_TO_REMOVE } from './config.js';


function is_youtube(){

    // get url
    const url = window.location.href;

    // validate
    return url.includes('youtube');
}


export default function remove_html_elements(){

    // check 
    if(!is_youtube()) return;

    // go through removers
    HTML_ELEMENTS_TO_REMOVE.forEach(HTML_ELEMENT_TO_REMOVE => {

        // destructure
        const { escalate, query } = HTML_ELEMENT_TO_REMOVE;

        // log
        console.log(`${APP_NAME} - Selecting ${query}`)

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
