const bundleOptions = document.querySelectorAll('.bundle-option');

bundleOptions.forEach(option => {
  option.addEventListener('click', () => {
    bundleOptions.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    option.querySelector('input[type="radio"]').checked = true;
  });
});
