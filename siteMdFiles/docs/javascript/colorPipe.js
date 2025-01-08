//Mark certain symbols with a span class that allows me to individually modify them

//Modify "|" symbol to be an orange-yellow accent color
const accents = document.querySelectorAll("p");

for(const accent of accents){
	accent.innerHTML = accent.innerHTML.replace(/\|/g, '<span class="accent-line">|</span>')
}

//║
//〢
//⑊