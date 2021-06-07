const wrapper = document.querySelector('.team-wrapper');

wrapper.addEventListener('click', function (ev) {
	// Event delegation
	const btn = ev.target.closest('.story-btn');
	if (!btn) return;
	btn.classList.toggle('change');
	btn.nextElementSibling.classList.toggle('change');
});
