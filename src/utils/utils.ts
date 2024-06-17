export function cssRippleEffect(element: HTMLElement, color = "rgba(255, 255, 255, 0.2)") {
	element.addEventListener("mousedown", (e) => createRipple(e, element, color));
	element.style.position = "relative";
	element.style.overflow = "hidden";

	return {
		destroy() {
			element.removeEventListener("mousedown", (e) => createRipple(e, element, color));
		},
	};
}

function createRipple(e: MouseEvent, element: HTMLElement, color: string) {
	const circle = document.createElement("span");
	const diameter = Math.max(element.clientWidth, element.clientHeight);
	const radius = diameter / 2;
	const rect = element.getBoundingClientRect();

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${e.clientX - (rect.left + radius)}px`;
	circle.style.top = `${e.clientY - (rect.top + radius)}px`;
	circle.style.backgroundColor = color;
	circle.classList.add("ripple");

	element.appendChild(circle);

	setTimeout(() => {
		circle.remove();
	}, 1000);
}