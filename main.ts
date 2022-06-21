const navIcons = document.querySelectorAll(".nav-icon");
const navIconList = Array.from(navIcons);

const hamburger = document.querySelector("#hamburger") as HTMLElement;

hamburger.addEventListener("click", (event) => {
	navIconList.forEach((element) => {
		element.classList.toggle("visible");
	});
});
