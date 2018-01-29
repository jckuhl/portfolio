"use strict";

(function () {
    
    const body = document.querySelector("body");
    let pointer = null;
    let jDown = false;
    
    const removeDiv = (div)=> {
        body.removeChild(div);
        body.classList.remove("stop-scrolling");
        return null;
    }
    
    const iAmAwesome = ()=> {
        let html = `<div><h1 class="awesome">I am awesome!</h1>
                <p><iframe width="560" height="315" src="https://www.youtube.com/embed/1qN72LEQnaU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
                <p class="not-awesome">Just click anywhere outside of the video to go back, or hit ESC.</div>`;
        const div = document.createElement("div");
        let top = document.documentElement.scrollTop;
        div.style.top = top + "px";
        div.classList.add("lightbox");
        div.innerHTML = html;
        body.classList.add("stop-scrolling");
        body.appendChild(div);
        div.addEventListener("click", ()=> {
            pointer = removeDiv(div);
        });
        return div;
    }
    
    
    window.addEventListener("keydown", (e)=> {
        jDown = (e.keyCode === 74);
        if((e.keyCode === 75) && (jDown)) {
            jDown = false;
            pointer = iAmAwesome();
        }
        if(e.keyCode === 27) {
            if(pointer) {
                pointer = removeDiv(pointer);
            }
        }
    });
    
})();