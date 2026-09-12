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
      <div class="logo">Grupp 21</div>
      <button class="burger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    `;

}

customElements.define('site-nav', Navigation);
