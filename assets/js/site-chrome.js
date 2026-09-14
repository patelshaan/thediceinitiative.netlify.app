const siteHeader = `
  <header class="site-header">
    <div class="site-header-inner">
      <a class="site-brand" href="index.html">DICE Initiative</a>
      <button class="site-menu-button" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation menu">
        <span class="site-menu-icon" aria-hidden="true"></span>
      </button>
      <nav id="site-navigation" class="site-navigation" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <div class="site-dropdown">
          <button class="site-dropdown-toggle" type="button" aria-expanded="false">Get Involved</button>
          <div class="site-dropdown-menu">
            <a href="get-involved.html#membership">Membership</a>
            <a href="partners.html">Partners</a>
            <a href="sponsorships.html">Sponsors</a>
          </div>
        </div>
        <a href="contact-us.html">Contact</a>
      </nav>
    </div>
  </header>`;

const siteFooter = `<footer class="site-footer"><p>The DICE Initiative</p></footer>`;

document.querySelectorAll('[data-site-header], body > header').forEach((element) => {
  element.outerHTML = siteHeader;
});

document.querySelectorAll('[data-site-footer], body > footer').forEach((element) => {
  element.outerHTML = siteFooter;
});

const menuButton = document.querySelector('.site-menu-button');
const navigation = document.querySelector('.site-navigation');
const dropdown = document.querySelector('.site-dropdown');
const dropdownButton = document.querySelector('.site-dropdown-toggle');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.site-navigation a').forEach((link) => {
  const linkPage = link.getAttribute('href').split('#')[0];
  if (linkPage === currentPage) {
    link.setAttribute('aria-current', 'page');
    if (dropdown.contains(link)) {
      dropdown.classList.add('has-current-page');
    }
  }
});

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

dropdownButton?.addEventListener('click', () => {
  const isOpen = dropdown.classList.toggle('open');
  dropdownButton.setAttribute('aria-expanded', String(isOpen));
});
