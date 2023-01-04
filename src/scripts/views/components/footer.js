class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        Copyright © 2022 - Re:staurant
      </footer>
    `;
  }
}
customElements.define('footer-bar', Footer);
