class Banner extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || document.title;
        this.innerHTML = this.bannerHtml(title);
    }

    bannerHtml = (title) => `
        <header class="banner" role="banner">
            <h1 class="banner-title">${title}</h1>
        </header>
    `;
}
customElements.define('site-banner', Banner);