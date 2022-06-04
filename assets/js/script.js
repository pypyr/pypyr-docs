async function copyCode(event) {
  const button = event.currentTarget;
  const highlightContainer = button.parentElement;
  const code = highlightContainer.querySelector('div.highlight pre code');
  const text = code.innerText;
  await window.navigator.clipboard.writeText(text).then(() => {
    button.classList.toggle('cp-success-state');
    const copyIcon = button.querySelector('svg.copy-icon');
    copyIcon.classList.toggle('hide-icon');
    const successIcon = button.querySelector('svg.checkmark-icon');
    successIcon.classList.toggle('show-icon');
    setTimeout(() => {
      button.classList.toggle('cp-success-state');
      copyIcon.classList.toggle('hide-icon');
      successIcon.classList.toggle('show-icon');
    }, 2000);
  }, (error) => {
    button.innerHTML = 'err!';
    console.log(error);
  });
}

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

  // only do copy if browser supports clipboard api
  if (window.navigator && window.navigator.clipboard) {
    const clipboardButtons = document.getElementsByClassName('clipboard-button');
    Array.from(clipboardButtons).forEach((button) => {
      button.addEventListener('click', copyCode);
    });
  }
});
