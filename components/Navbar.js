class Navbar extends HTMLElement {
  // connect component
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <a class="logo" href="/">
        <img src="/images/logo.svg" alt="Lipoic_logo" />
        <h1>Lipoic</h1>
      </a>
      <a href="/about.html"> 關於 </a>
    </nav>
    `;
  }
}

customElements.define("nav-bar", Navbar);
