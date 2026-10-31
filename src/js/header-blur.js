let blurHeader = () => {
  let header = document.getElementById('header');

  window.scrollY >= 50 ? header.classList.add('__blur-header')
    : header.classList.remove('__blur-header');
}

window.addEventListener('scroll', blurHeader);