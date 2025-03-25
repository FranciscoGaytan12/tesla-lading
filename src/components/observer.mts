import { observeroptions } from "./LandingHeader.astro.0.mjs";

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const ; (isIntersecting) = entry;
if (isIntersecting) {
const color = entry.target.getAttribute('data-header-color');
}


});
}, observeroptions);
