(function() {

	const techPickerBtns = Array.from(document.querySelectorAll(".tech-picker li"));
	const galleryDivs = Array.from(document.querySelectorAll("div[data-tech]"));

	//checks if the div's dataset has the technology that was clicked on
	//if so, highlights it
	//if not, returns background to normal
	const selectDiv = function() {
		let tech = (this.firstElementChild.dataset.tech);
		galleryDivs.forEach( (gallery)=> {
			let techs = gallery.dataset.tech.split(" ");
			if(techs.indexOf(tech) !== -1) {
				gallery.style.backgroundColor = "#ccc";
			} else {
				gallery.style.backgroundColor = "#eee"
			}
		});
	}

	techPickerBtns.forEach( (btn)=> {
		btn.addEventListener("click", selectDiv);
	});

})();