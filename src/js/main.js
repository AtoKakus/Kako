const nav = document.querySelector(".hero__menu");
const btn1 = document.querySelector(".hero__nav--btn2");
const btn2 = document.querySelector(".hero__menu--btn2");
const link = document.querySelectorAll(".hero__menu-list");

const active = () => {
	nav.classList.toggle("hero__menu--active");
	nav.classList.remove("hero__menu--back");


	link.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("hero__menu--active");
		});
	});
	
};



function animation() {
	nav.classList.add("hero__menu--back");
}




btn1.addEventListener("click", active);
// btn1.addEventListener("click", animation);
btn2.addEventListener("click", active);
btn2.addEventListener("click", animation);
