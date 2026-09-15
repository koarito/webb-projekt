class Navigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = this.navbarHtml()
        document.querySelector('.burger').addEventListener('click', function () {
            this.classList.toggle('active');
            document.querySelector('.nav-links').classList.toggle('open');
        });
    }

    navbarHtml = () => `
       <nav class="navbar">
      <a class="logo" href="../index.html">Grupp 21</a>
      <button class="burger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="../subject-area.html">Ämnesområde</a></li>
        <li><a href="../challenge.html">Utmaning</a></li>
        <li><a href="../idea.html">Idé</a></li>
        <li><a href="../hypothesis.html">Hypotes</a></li>
      </ul>
    </nav>
    `;
}

customElements.define('site-nav', Navigation);
