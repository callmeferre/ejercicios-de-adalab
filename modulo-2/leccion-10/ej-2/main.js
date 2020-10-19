"use strict";

function getDogImage() {
	fetch("https://dog.ceo/api/breeds/image/random")
		.then((response) => response.json())
		.then((data) => {
			const img = document.querySelector("img");
			img.src = data.message;
			img.alt = "Un perro";
		});
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

function getChiImage() {
	fetch("https://dog.ceo/api/breed/chihuahua/images/random")
		.then((response) => response.json())
		.then((data) => {
			const img = document.querySelector("img");
			img.src = data.message;
			img.alt = "Un chihuahua";
		});
}

const btnChi = document.querySelector(".js-chi");
btnChi.addEventListener("click", getChiImage);
