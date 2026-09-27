// Custom element för en enskild fotnotsreferens i löptexten
class FootnoteRef extends HTMLElement {
  // Körs när elementet läggs till i DOM:en
  connectedCallback() {
    this.innerHTML = this.footnoteHtml();
  }

  // Renderar en länk till references.html, till rätt ankare via "ref"-attributet,
  // med "num"-attributet som synligt fotnotsnummer, t.ex. [1]
  footnoteHtml = () => `
        <a class="footnote-ref" href="references.html#${this.getAttribute("ref")}">[${this.getAttribute("num")}]</a>
    `;
}

// Registrerar komponenten så att <footnote-ref> kan användas i HTML
customElements.define("footnote-ref", FootnoteRef);