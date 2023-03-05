const scroll = document.querySelector(".scroll-img");
const before = document.querySelector(".buttons");
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");
const body = document.querySelector("body");
// const rightArrow = document.querySelector(".arrow-right");
// const leftArrow = document.querySelector(".arrow-left");
let count = 0;

let row = document.createElement("div");
row.classList.add("row-img");

let img1 = document.createElement("div");
img1.classList.add("img1");
let img2 = document.createElement("div");
img2.classList.add("img2");
let img3 = document.createElement("div");
img3.classList.add("img3");

let img4 = document.createElement("div");
img4.classList.add("img4");

let img5 = document.createElement("div");
img5.classList.add("img5");

if (window.innerWidth < 1120) {
	img4.classList.add("invisible");
	img5.classList.add("invisible");
}

scroll.insertBefore(row, before);
row.append(img1);
row.append(img2);
row.append(img3);
row.append(img4);
row.append(img5);

rightButton.addEventListener("click", shiftright);
leftButton.addEventListener("click", shiftleft);

// rightArrow.addEventListener("click", say);
// leftArrow.addEventListener("click", say);

// console.log(rightArrow);
// rightArrow.addEventListener("click", shiftright);
// leftArrow.addEventListener("click", shiftleft);

function shiftright() {
	if (count == 0) {
		img1.classList.toggle("invisible");
		img4.classList.toggle("invisible");
		count++;
		console.log(count);
	} else if (count == 1) {
		img2.classList.toggle("invisible");
		img5.classList.toggle("invisible");
		count++;
		console.log(count);
	} else {
		console.log("wha ");
		console.log(count);
	}
}

function shiftleft() {
	if (count == 2) {
		img2.classList.toggle("invisible");
		img5.classList.toggle("invisible");
		count--;
	} else if (count == 1) {
		img1.classList.toggle("invisible");
		img4.classList.toggle("invisible");
		count--;
	}
}

console.log(window.width);
