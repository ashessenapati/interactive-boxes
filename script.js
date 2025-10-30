const bundles = document.querySelectorAll('.bundle');

bundles.forEach(bundle => {
  bundle.addEventListener('click', () => {
    bundles.forEach(b => b.classList.remove('active'));
    bundle.classList.add('active');
  });
});
