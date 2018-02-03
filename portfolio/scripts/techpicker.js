!function () {

    "use strict";

	const techPickerBtns = Array.from(document.querySelectorAll("img[data-tech]"));
	const galleryDivs = Array.from(document.querySelectorAll("div[data-tech]"));

	//checks if the div's dataset has the technology that was clicked on
	//if so, highlights it
	//if not, returns background to normal
	const selectDiv = function() {
		const tech = this.dataset.tech;
		galleryDivs.forEach( (gallery)=> {
			const technologies = gallery.dataset.tech.split(" ");
			if(technologies.indexOf(tech) !== -1) {
				gallery.style.backgroundColor = "#ccc";
                this.style.border = "4px solid #990000";
                techPickerBtns.forEach( (btn)=> {
                   if(btn.dataset.tech !== tech) btn.style.border = "4px solid black" 
                });
			} else {
				gallery.style.backgroundColor = "#eee";
			}
		});
	}

	techPickerBtns.forEach( (btn)=> {
		btn.addEventListener("click", selectDiv);
	});
	
}();