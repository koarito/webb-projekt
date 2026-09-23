class FootnoteRef extends HTMLElement {
    connectedCallback() {
        this.innerHTML = this.footnoteHtml();
    }

    footnoteHtml = () => `
        <a class="footnote-ref" href="references.html#${this.getAttribute('ref')}">[${this.getAttribute('num')}]</a>
    `;
}
customElements.define('footnote-ref', FootnoteRef);