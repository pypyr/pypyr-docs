async function copyCode(event) {
  const button = event.currentTarget;
  const highlightContainer = button.parentElement;
  const code = highlightContainer.querySelector('div.highlight pre code');
  const text = code.innerText;
  window.navigator.clipboard.writeText(text).then(() => {
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
    console.error(error);
  });
}

function toggle(event) {
  const menuItem = event.currentTarget;
  menuItem.parentElement.querySelector('.nested').classList.toggle('expand');
  menuItem.querySelector('.nav-chevron').classList.toggle('nav-chevron-down');
  event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.getElementsByClassName('nav-section-chevron-title');

  Array.from(sections).forEach((section) => {
    section.addEventListener('click', toggle);
  });

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
