// Navbar
function isActive(href) {
	const currentPage = window.location.pathname;

	if (currentPage.split("/").pop("") == href) return `class="active"`;
}

function addLink(href, name) {
	return `
        <a href="${href}" ${isActive(href)}>${name}</a>
    `;
}

function buildNavbar() {
	const navbar = document.getElementById("navbar");

	navbar.innerHTML = `
        <a href="index.html" class="nav-logo">Project-<span>HUB</span></a>

        <div class="nav-links">
            ${addLink("index.html", "Home")}
            ${addLink("games.html", "Games")}
            ${addLink("settings.html", "Settings")}
            ${addLink("about.html", "About")}
        </div>

        <button class="theme-toggle" id="theme-toggle">
            ${SUN_SVG}
            ${MOON_SVG}
        </button>
    `;
}

// Footer
function buildFooter() {
	const footer = document.getElementById("footer");
	const year = new Date().getFullYear();

	footer.innerHTML = `
        <p><a href="https://github.com/IamChristianS/Project-HUB_V3" target="_blank">Check out the GitHub Repo</a> ● <a href="https://forms.gle/FuhUKVByGVhnG1ME9" target="_blank">Request a Game</a></p>
        <p>${year} &copy; Christian Santangelo</p>
    `;
}

(function init() {
	buildNavbar();
	buildFooter();
})();
