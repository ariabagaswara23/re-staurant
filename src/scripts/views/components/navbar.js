class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header-container">
        <div class="header-logo">
          <p><i>Re:staurant</i></p>
        </div>
        <button id="hamburger" class="hamburger" aria-label="Navigation Menu">☰</button>
        <nav id="drawer">
          <ul class="nav-list">
            <li class="nav-item"><a href="/">Home</a></li>
            <li class="nav-item"><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/ariabagaswara23">About Us</a></li>
          </ul>
        </nav>
    </div>
    `;
  }
}
customElements.define('navigation-bar', Navbar);
