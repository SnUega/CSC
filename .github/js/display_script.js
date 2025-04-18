function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function checkLines() {
  document.querySelectorAll('.skewed-line').forEach(line => {
      if (isInView(line)) {
          line.classList.add('in-view');
      } else {
          line.classList.remove('in-view');
      }
  });
}

window.addEventListener('scroll', checkLines);
checkLines();