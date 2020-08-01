document.addEventListener('DOMContentLoaded', () => {
  const sections = document.getElementsByClassName('nav-section-chevron-title');

  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', function toggle(e) {
      this.parentElement.querySelector('.nested').classList.toggle('expand');
      this.querySelector('.nav-chevron').classList.toggle('nav-chevron-down');
      e.preventDefault();
    });
  }

  const showNavButton = document.getElementById('show-leftnav');
  const hideNavButton = document.getElementById('hide-leftnav');
  const leftNavMenu = document.getElementById('leftnavmenu');
  const disabledStateOverlay = document.getElementById('disabled-state-overlay');

  const hideNav = () => {
    leftNavMenu.classList.toggle('expanded');
    disabledStateOverlay.classList.toggle('hide-overlay');
    disabledStateOverlay.removeEventListener('click', hideNav);
  };

  const showNav = () => {
    leftNavMenu.classList.toggle('expanded');
    disabledStateOverlay.classList.toggle('hide-overlay');
    disabledStateOverlay.addEventListener('click', hideNav);
  };

  if (showNavButton) {
    showNavButton.addEventListener('click', showNav);
  }

  if (hideNavButton) {
    hideNavButton.addEventListener('click', hideNav);
  }
});
